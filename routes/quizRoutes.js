const express = require("express");

const router = express.Router();

const {
    createQuiz,
    getAllQuizzes,
    getAllResults
} = require("../controllers/quizController");
const verifyToken = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// ==========================
// Create Quiz (Admin Only)
// ==========================
router.post(
    "/",
    verifyToken,
    adminMiddleware,
    createQuiz
);

// ==========================
// View All Quizzes
// ==========================
router.get(
    "/",
    verifyToken,
    getAllQuizzes
);

// ==========================
// View All Results (Admin)
// ==========================
router.get(
    "/results",
    verifyToken,
    adminMiddleware,
    getAllResults
);

module.exports = router;