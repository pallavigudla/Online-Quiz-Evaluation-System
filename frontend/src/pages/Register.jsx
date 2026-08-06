import { useState } from "react";
import api from "../services/api";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleRegister = async () => {
        try {
            const response = await api.post("/auth/register", {
                name,
                email,
                password,
                role
            });

            console.log(response.data);

        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Register
                            </h2>

                            {/* Name */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Email */}
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

                            {/* Password */}
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

                            {/* Role */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Role
                                </label>

                                <select
                                    className="form-select"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <button
                                className="btn btn-success w-100"
                                onClick={handleRegister}
                            >
                                Register
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Register;