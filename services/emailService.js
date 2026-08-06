const transporter = require("../config/mailConfig");

const sendOTP = async (email, otp) => {
    try {

        console.log("Sending OTP to:", email);
        console.log("OTP:", otp);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Online Quiz Evaluation System - Email Verification",
            html: `
                <h2>Email Verification</h2>

                <p>Your OTP is:</p>

                <h1>${otp}</h1>

                <p>This OTP is valid for 5 minutes.</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("✅ Email Sent Successfully");
        console.log("Message ID:", info.messageId);

    } catch (error) {

        console.log("❌ Email Sending Failed");

        console.log(error);

    }
};

module.exports = sendOTP;