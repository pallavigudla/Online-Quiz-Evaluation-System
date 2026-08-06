import { Link } from "react-router-dom";

function AdminDashboard() {

    return (
        <div className="container mt-5">

            <h2 className="text-primary mb-4">
                Admin Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card shadow mb-4">

                        <div className="card-body">

                            <h4>Create Quiz</h4>

                            <p>Create a new quiz.</p>

                            <Link
                                to="/admin/create-quiz"
                                className="btn btn-success"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow mb-4">

                        <div className="card-body">

                            <h4>Manage Quizzes</h4>

                            <p>View all quizzes.</p>

                            <Link
                                to="/admin/quizzes"
                                className="btn btn-primary"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow mb-4">

                        <div className="card-body">

                            <h4>Results</h4>

                            <p>View student results.</p>

                            <Link
                                to="/admin/results"
                                className="btn btn-warning"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;