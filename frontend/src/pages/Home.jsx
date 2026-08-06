import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <Navbar />

            <div className="container text-center mt-5">

                <h1 className="display-4 fw-bold text-primary">
                    Online Quiz Evaluation System
                </h1>

                <p className="lead mt-3">
                    Welcome to the Online Quiz Evaluation System
                </p>

                <Link to="/login" className="btn btn-primary mt-4">
                Get Started
                </Link>
            </div>
        </>
    );
}

export default Home;