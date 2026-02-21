import nodemailer from "nodemailer";

export async function sendContactMail({ name, email, message }) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`, 
        replyTo: email,
        to: "smartcicalengka02@gmail.com",
        subject: "Pesan Baru dari SMArT CLK",
        html: `
            <h3>Pesan Baru</h3>
            <p><b>Nama:</b> ${name}</p>
            <p><b>Email Pengunjung:</b> ${email}</p>
            <p><b>Pesan:</b></p>
            <p>${message}</p>
        `
    });
}