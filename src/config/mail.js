const nodemailer = require("nodemailer");
require("dotenv").config();

function sendMail(token, email) {
    // Config
    const configMail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_SENDER, // generated ethereal user
            pass: process.env.EMAIL_SENDER_PASSWORD, // generated ethereal password
        },
    });

    // Content
    configMail.sendMail({
        from: process.env.EMAIL_SENDER, // sender address
        to: email, // list of receivers
        subject: "Perjaka Activation Link", // Subject line
        html: `<b>https://si-perjaka.vercel.app/verification?token=${token}</b>`, // html body
    });
    return;
}

module.exports = {
    sendMail,
};
