const Question = require("../models/Question");

// ==========================
// Add Question
// ==========================
const addQuestion = async (req, res) => {
    try {

        const {
            quiz,
            question,
            options,
            correctAnswer,
            marks
        } = req.body;

        // Check if exactly 4 options are provided
        if (!options || options.length !== 4) {
            return res.status(400).json({
                success: false,
                message: "Exactly 4 options are required."
            });
        }

        const newQuestion = new Question({
            quiz,
            question,
            options,
            correctAnswer,
            marks
        });

        await newQuestion.save();

        res.status(201).json({
            success: true,
            message: "Question added successfully.",
            question: newQuestion
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
// Get Questions by Quiz
// ==========================
const getQuestionsByQuiz = async (req, res) => {

    try {

        const questions = await Question.find({
            quiz: req.params.quizId
        });

        res.json({
            success: true,
            questions
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
    addQuestion,
    getQuestionsByQuiz
};