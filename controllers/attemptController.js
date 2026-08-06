const Question = require("../models/Question");
const Result = require("../models/Result");
const Quiz = require("../models/Quiz");

// ==========================
// Start Quiz
// ==========================
const startQuiz = async (req, res) => {

    try {

        const { quizId } = req.params;

        const questions = await Question.find(
            { quiz: quizId },
            {
                correctAnswer: 0,
                marks: 0,
                __v: 0
            }
        );

        res.status(200).json({
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

// ==========================
// Submit Quiz
// ==========================
const submitQuiz = async (req, res) => {

    try {

        const { quizId, answers } = req.body;

        const questions = await Question.find({ quiz: quizId });

        let score = 0;
        let totalMarks = 0;

        let answerDetails = [];

        questions.forEach((question) => {

            totalMarks += question.marks;

            const studentAnswer = answers.find(
                ans => ans.questionId === question._id.toString()
            );

            if (studentAnswer) {

                const isCorrect =
                    studentAnswer.selectedOption === question.correctAnswer;

                const marksAwarded =
                    isCorrect ? question.marks : 0;

                if (isCorrect) {
                    score += question.marks;
                }

                answerDetails.push({
                    question: question._id,
                    selectedOption: studentAnswer.selectedOption,
                    correctAnswer: question.correctAnswer,
                    isCorrect,
                    marksAwarded
                });

            }

        });

        const percentage =
            totalMarks === 0
                ? 0
                : (score / totalMarks) * 100;

        const result = new Result({
            student: req.user.id,
            quiz: quizId,
            answers: answerDetails,
            score,
            totalMarks,
            percentage
        });

        await result.save();

        res.status(200).json({
            success: true,
            message: "Quiz Submitted Successfully",
            result
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
    startQuiz,
    submitQuiz
};