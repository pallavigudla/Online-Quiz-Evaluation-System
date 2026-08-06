const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    timeLimit: {
        type: Number,
        required: true
    },

    totalMarks: {
        type: Number,
        default: 0
    },

    isActive: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Quiz", quizSchema);