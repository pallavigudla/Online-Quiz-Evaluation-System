const nodemailer = require("nodemailer");

console.log("Creating Mail Transport...");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("❌ Mail Configuration Error");
        console.log(error);
    } else {
        console.log("✅ Mail Server Ready");
    }
});

module.exports = transporter;