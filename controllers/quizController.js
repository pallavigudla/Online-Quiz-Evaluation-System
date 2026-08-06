const Quiz = require("../models/Quiz");
const Result = require("../models/Result");

// ==========================
// Create Quiz
// ==========================
const createQuiz = async (req, res) => {
    try {

        const {
            title,
            description,
            timeLimit
        } = req.body;

        const quiz = new Quiz({
            title,
            description,
            timeLimit,
            createdBy: req.user.id
        });

        await quiz.save();

        res.status(201).json({
            success: true,
            message: "Quiz created successfully",
            quiz
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
// Get All Quizzes
// ==========================
const getAllQuizzes = async (req, res) => {

    try {

        const quizzes = await Quiz.find()
            .populate("createdBy", "name email");

        res.status(200).json({
            success: true,
            quizzes
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
// Get All Results (Admin)
// ==========================
const getAllResults = async (req, res) => {

    try {

        const results = await Result.find()
            .populate("student", "name email")
            .populate("quiz", "title")
            .sort({ submittedAt: -1 });

        res.status(200).json({
            success: true,
            results
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
    createQuiz,
    getAllQuizzes,
    getAllResults
};