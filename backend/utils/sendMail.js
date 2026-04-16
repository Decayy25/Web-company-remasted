// import nodemailer from "nodemailer";

// export async function sendContactMail({ name, email, message }) {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     await transporter.sendMail({
//         from: `"${name}" <${process.env.EMAIL_USER}>`, 
//         replyTo: email,
//         to: "smartcicalengka02@gmail.com",
//         subject: "Pesan Baru dari SMArT CLK",
//         html: `
//             <h3>Pesan Baru</h3>
//             <p><b>Nama:</b> ${name}</p>
//             <p><b>Email Pengunjung:</b> ${email}</p>
//             <p><b>Pesan:</b></p>
//             <p>${message}</p>
//         `
//     });
// }

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function escapeHtml(text = "") {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Validasi email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactMail({ name, email, message }) {
    if (!name || !email || !message) {
        throw new Error("Semua field wajib diisi");
    }

    if (!isValidEmail(email)) {
        throw new Error("Format email tidak valid");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    try {
        const info = await transporter.sendMail({
            from: `"${safeName}" <${process.env.EMAIL_USER}>`,
            replyTo: safeEmail,
            to: process.env.EMAIL_USER,
            subject: "Pesan Baru dari SMArT CLK",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h3>Pesan Baru dari SMArT CLK</h3>
                    <p><b>Nama:</b> ${safeName}</p>
                    <p><b>Email Pengunjung:</b> ${safeEmail}</p>
                    <p><b>Pesan:</b></p>
                    <p>${safeMessage}</p>
                    <hr>
                    <small>Email ini dikirim otomatis dari website.</small>
                </div>
            `
        });

        console.log("Email berhasil dikirim:", info.messageId);
        return { success: true };
    } catch (error) {
        console.error("Gagal mengirim email:", error);
        throw new Error("Gagal mengirim email");
    }
}