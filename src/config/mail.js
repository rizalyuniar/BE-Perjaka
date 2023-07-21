const nodemailer = require("nodemailer");
require("dotenv").config();

function sendMail(token, email) {
    // Config
    const configMail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "rizalyuniar012@gmail.com", // generated ethereal user
            pass: "meicbiyqaqcgkhrp", // generated ethereal password
        },
    });

    // Content
    configMail.sendMail({
        from: "rizalyuniar012@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Perjaka Activation Link", // Subject line
        html: `<b>https://si-perjaka.vercel.app/verification?token=${token}</b>`, // html body
    });
    return;
}

module.exports = {
    sendMail,
};
