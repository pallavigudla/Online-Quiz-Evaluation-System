import { useLocation, useNavigate } from "react-router-dom";

function Result() {

    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="container mt-5">

                <h3>No Result Found</h3>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/student")}
                >
                    Back to Dashboard
                </button>

            </div>
        );
    }

    const { result } = state;

    return (
        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="text-success mb-4">
                        Quiz Result
                    </h2>

                    <h4>
                        Score : {result.score} / {result.totalMarks}
                    </h4>

                    <h4 className="mb-4">
                        Percentage : {result.percentage}%
                    </h4>

                    <hr />

                    <h4>Answer Review</h4>

                    {result.answers.map((answer, index) => (

                        <div
                            key={answer._id}
                            className="card mt-3"
                        >

                            <div className="card-body">

                                <h5>Question {index + 1}</h5>

                                <p>
                                    <strong>Your Answer:</strong>{" "}
                                    {answer.selectedOption}
                                </p>

                                <p>
                                    <strong>Correct Answer:</strong>{" "}
                                    {answer.correctAnswer}
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    {answer.isCorrect ? (
                                        <span className="text-success">
                                            Correct ✅
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            Wrong ❌
                                        </span>
                                    )}
                                </p>

                                <p>
                                    <strong>Marks Awarded:</strong>{" "}
                                    {answer.marksAwarded}
                                </p>

                            </div>

                        </div>

                    ))}

                    <button
                        className="btn btn-primary mt-4"
                        onClick={() => navigate("/student")}
                    >
                        Back to Dashboard
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Result;