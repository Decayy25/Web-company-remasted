import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/db.js";

export async function register(body) {
  console.log(body);
  try {
    if (!body.email || !body.password) {
      return Response.json(
        { message: "Email dan password wajib diisi" },
        { status: 400 }
      );
    }

    const existing = await db.collection("users")
      .findOne({ email: body.email });

    if (existing) {
      return Response.json(
        { message: "Email sudah ada" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(body.password, 10);

    await db.collection("users").insertOne({
      username: body.username,
      email: body.email,
      password: hashed,
      createdAt: new Date(),
    });

    console.log("Register:", body.email);

    return Response.json({ message: "Register berhasil" });

  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function login(body) {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET belum diset!");
    }

    const user = await db.collection("users")
      .findOne({ email: body.email });

    if (!user) {
      return Response.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    const match = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!match) {
      return Response.json(
        { message: "Password salah" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("Login:", body.email);

    return Response.json({
      token,
      email: user.email,
      username: user.username
    });

  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function getAccounts() {
  const users = await db.collection("users")
    .find({}, {
      projection: {
        _id: 0,
        username: 1,
        email: 1,
        createdAt: 1
      }
    })
    .toArray();

  return Response.json(users);
}