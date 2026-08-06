import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import StudentDashboard from "./pages/StudentDashboard";
import Quiz from "./pages/Quiz";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
    </Routes>
  );
}

export default App;