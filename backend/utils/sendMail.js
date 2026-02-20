import nodemailer from "nodemailer";

export async function sendContactMail( {name, email, message }) {

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ EMAIL_USER atau EMAIL_PASS tidak ditemukan di .env!");
        throw new Error("konfigurasi email server tidak lengkap")
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth : {
            user : process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `Contact form <${email}>`,
        to: "smartcicalengka02@gmail.com",
        subject : "Pesan dari SMArT CLK",
        html : `
            <h3>Pesan Baru</h3>
            <p><b>Nama:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
        `
    });
}