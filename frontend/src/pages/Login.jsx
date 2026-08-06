import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
const handleLogin = async () => {

    try {

        const response = await api.post("/auth/login", {
            email,
            password
        });

localStorage.setItem("token", response.data.token);
localStorage.setItem("role", response.data.role);

if (response.data.role === "admin") {
    navigate("/admin");
} else {
    navigate("/student");
}

    } catch (error) {

    console.log("Error Response:", error.response.data);

}

};
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
    type="email"
    className="form-control"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Password
                                </label>

                                <input
    type="password"
    className="form-control"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>
                            </div>

                            <button
    className="btn btn-primary w-100"
    onClick={handleLogin}
>
    Login
</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;