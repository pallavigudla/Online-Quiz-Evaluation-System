const dotenv = require("dotenv");

// Load Environment Variables FIRST
dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attemptRoutes = require("./routes/attemptRoutes");
// Debug (Temporary)
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Online Quiz Evaluation System");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/attempt", attemptRoutes);
// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});