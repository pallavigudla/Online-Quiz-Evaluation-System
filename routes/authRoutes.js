const express = require("express");

const router = express.Router();

const {
    register,
    verifyOTP,
    login
} = require("../controllers/authController");

// Register User
router.post("/register", register);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Login User
router.post("/login", login);

module.exports = router;