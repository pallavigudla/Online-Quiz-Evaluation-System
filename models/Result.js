const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },

    selectedOption: {
        type: String
    },

    correctAnswer: {
        type: String
    },

    isCorrect: {
        type: Boolean
    },

    marksAwarded: {
        type: Number,
        default: 0
    }
});

const resultSchema = new mongoose.Schema(
{
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },

    answers: [answerSchema],

    score: {
        type: Number,
        default: 0
    },

    totalMarks: {
        type: Number,
        default: 0
    },

    percentage: {
        type: Number,
        default: 0
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Result", resultSchema);