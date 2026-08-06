import { useState } from "react";
import api from "../services/api";
function VerifyOTP() {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const handleVerifyOTP = async () => {

    try {

        const response = await api.post("/auth/verify-otp", {
            email,
            otp
        });

        console.log("Verify OTP Success:", response.data);

    } catch (error) {

    console.log("Status:", error.response.status);
    console.log("Data:", JSON.stringify(error.response.data, null, 2));

}

};
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Verify OTP
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
                                    OTP
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            <button
    className="btn btn-warning w-100"
    onClick={handleVerifyOTP}
>
    Verify OTP
</button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default VerifyOTP;