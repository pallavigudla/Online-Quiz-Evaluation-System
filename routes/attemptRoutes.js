const express = require("express");

const router = express.Router();

const {
    startQuiz,
    submitQuiz
} = require("../controllers/attemptController");

const verifyToken = require("../middleware/authMiddleware");

// ==========================
// Student Starts Quiz
// ==========================
router.get(
    "/start/:quizId",
    verifyToken,
    startQuiz
);

// ==========================
// Student Submits Quiz
// ==========================
router.post(
    "/submit",
    verifyToken,
    submitQuiz
);

module.exports = router;