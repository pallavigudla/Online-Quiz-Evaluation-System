import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function StudentDashboard() {

    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const fetchQuizzes = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await api.get("/student/quizzes", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setQuizzes(response.data.quizzes);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };

        fetchQuizzes();

    }, []);

    return (
        <div className="container mt-5">

            <h2 className="mb-4 text-primary">
                Student Dashboard
            </h2>

            <h4 className="mb-4">
                Available Quizzes
            </h4>

            {quizzes.length === 0 ? (

                <p>No quizzes available.</p>

            ) : (

                quizzes.map((quiz) => (

                    <div
                        className="card mb-3 shadow-sm"
                        key={quiz._id}
                    >

                        <div className="card-body">

                            <h5>{quiz.title}</h5>

                            <p>{quiz.description}</p>

                            <p>
                                <strong>Time Limit:</strong> {quiz.timeLimit} Minutes
                            </p>

                            <p>
                                <strong>Total Marks:</strong> {quiz.totalMarks}
                            </p>
<button
    className="btn btn-primary"
    onClick={() => navigate(`/quiz/${quiz._id}`)}
>
    Start Quiz
</button>

                        </div>

                    </div>

                ))

            )}

        </div>
    );
}

export default StudentDashboard;