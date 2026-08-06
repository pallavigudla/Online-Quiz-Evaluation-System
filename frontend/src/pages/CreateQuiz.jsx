import { useState } from "react";
import api from "../services/api";

function CreateQuiz() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeLimit, setTimeLimit] = useState("");
    const [totalMarks, setTotalMarks] = useState("");

    const handleCreateQuiz = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.post(
                "/quiz/create",
                {
                    title,
                    description,
                    timeLimit,
                    totalMarks
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message);

            setTitle("");
            setDescription("");
            setTimeLimit("");
            setTotalMarks("");

        } catch (error) {

    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);

    alert(error.response?.data?.message || "Something went wrong");

}

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="mb-4">
                        Create Quiz
                    </h2>

                    <input
                        className="form-control mb-3"
                        placeholder="Quiz Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="form-control mb-3"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Time Limit (Minutes)"
                        value={timeLimit}
                        onChange={(e) => setTimeLimit(e.target.value)}
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Total Marks"
                        value={totalMarks}
                        onChange={(e) => setTotalMarks(e.target.value)}
                    />

                    <button
                        className="btn btn-success"
                        onClick={handleCreateQuiz}
                    >
                        Create Quiz
                    </button>

                </div>

            </div>

        </div>

    );
}

export default CreateQuiz;