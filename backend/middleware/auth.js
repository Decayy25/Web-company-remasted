import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/db.js";
import { password } from "bun";

export async function register(body) {
  try {

    if (!body.email || !body.password) {
      return new Response("Email dan password wajib diisi", { status: 400 });
    }

    const existing = await db.collection("users").findOne({ email: body.email });
    if (existing) {
      return new Response("Email sudah ada", { status: 400 });
    }

    const hashed = await bcrypt.hash(body.password, 10);
    await db.collection("users").insertOne({
      username: body.username,
      email: body.email,
      password: hashed,
      createdAt: new Date(),
    });

    return new Response("Register berhasil");

  } catch (err) {
    // Jika JSON kosong atau format salah, error akan lari ke sini
    return new Response("Format JSON salah atau Body kosong", { status: 400 });
  }
}

export async function login(req) {
  const body = await req.json();

  const user = await db.collection("users")
    .findOne({ email: body.email });

  if (!user) {
    return new Response("User tidak ditemukan", { status: 404 });
  }

  const match = await bcrypt.compare(
    body.password,
    user.password
  );

  if (!match) {
    return new Response("Password salah", { status: 401 });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return Response.json({ 
    token,
    email: user.email,
    username: user.username
  });
}

export async function getAccounts() {
  const users = await db.collection("users")
    .find({}, { projection: { 
      _id: 0,
      username: 1,
      email: 1,
      createdAt: 1 
    }
  })
    .toArray();

  return Response.json(users);
}