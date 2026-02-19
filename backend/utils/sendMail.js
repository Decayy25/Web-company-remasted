import nodemailer from "nodemailer";

export async function sendContactMail( {name, email, message }) {
    const transporter = nodemailer.createTransport({
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