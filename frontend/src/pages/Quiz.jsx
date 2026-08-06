import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Quiz() {

    const { quizId } = useParams();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {

        const fetchQuestions = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await api.get(
                    `/questions/${quizId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setQuestions(response.data.questions);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };

        fetchQuestions();

    }, [quizId]);

    const handleOptionChange = (questionId, selectedOption) => {

        const updatedAnswers = answers.filter(
            (answer) => answer.questionId !== questionId
        );

        updatedAnswers.push({
            questionId,
            selectedOption
        });

        setAnswers(updatedAnswers);

    };

    const handleSubmitQuiz = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.post(
                "/attempt/submit",
                {
                    quizId,
                    answers
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(
    "Quiz Submitted:",
    JSON.stringify(response.data, null, 2)
);
        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };

    return (
        <div className="container mt-5">

            <h2 className="text-primary mb-4">
                Quiz
            </h2>

            {questions.length === 0 ? (

                <p>Loading Questions...</p>

            ) : (

                <>
                    {questions.map((question, index) => (

                        <div
                            className="card mb-3"
                            key={question._id}
                        >

                            <div className="card-body">

                                <h5 className="mb-3">
                                    Q{index + 1}. {question.question}
                                </h5>

                                {question.options.map((option, optionIndex) => (

                                    <div
                                        className="form-check"
                                        key={optionIndex}
                                    >

                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={question._id}
                                            id={`${question._id}-${optionIndex}`}
                                            value={option}
                                            onChange={() =>
                                                handleOptionChange(
                                                    question._id,
                                                    option
                                                )
                                            }
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor={`${question._id}-${optionIndex}`}
                                        >
                                            {option}
                                        </label>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                    <button
                        className="btn btn-success mt-3"
                        onClick={handleSubmitQuiz}
                    >
                        Submit Quiz
                    </button>
                </>

            )}

        </div>
    );
}

export default Quiz;