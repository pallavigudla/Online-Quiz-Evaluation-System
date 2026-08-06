const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateOTP = require("../utils/generateOTP");
const sendOTP = require("../services/emailService");

// ==========================
// Register User
// ==========================
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = generateOTP();
console.log("Generated OTP:", otp);

        // OTP expires in 5 minutes
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        // Save user
        const user = new User({
        name,
        email,
        password: hashedPassword,
        role: "student",
        otp,
        otpExpiry,
        isVerified: false
        });

        await user.save();
        console.log("Saved OTP:", user.otp);

        // Send OTP
        await sendOTP(email, otp);

        res.status(201).json({
            success: true,
            message: "Registration successful. OTP sent to your email."
        });

    } catch (error) {
    console.error("Register Error:", error);

    res.status(500).json({
        success: false,
        message: error.message
    });
}
};

// ==========================
// Verify OTP
// ==========================
const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "User already verified"
            });
        }

        if (user.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        if (user.otpExpiry < new Date()) {
            return res.status(400).json({
                success: false,
                message: "OTP Expired"
            });
        }

        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;

        await user.save();

        res.json({
            success: true,
            message: "Email Verified Successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// ==========================
// Login
// ==========================
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "Please verify your email first."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            success: true,
            message: "Login Successful",
            token,
            role: user.role
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

module.exports = {
    register,
    verifyOTP,
    login
};