# 📝 Online Quiz Evaluation System

A full-stack MERN-based Online Quiz Evaluation System developed as part of the Full Stack Development (FSD-2) course.

## 🚀 Features

### Authentication
- User Registration
- Email OTP Verification
- Login using JWT Authentication
- Role-Based Access (Admin & Student)

### Student Module
- View Available Quizzes
- Start Quiz
- Attempt Questions
- Submit Quiz
- Automatic Score Calculation
- View Result

### Admin Module
- Admin Login
- Create Quiz
- Add Questions
- View Quiz Results
- Manage Quizzes

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- Vite

### Backend
- Node.js
- Express.js
- JWT Authentication
- Nodemailer

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
Online-Quiz-Evaluation-System
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd Online-Quiz-Evaluation-System
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
PORT=5000
```

---

## 📸 Screenshots

- Home Page
- Register
- Login
- Student Dashboard
- Quiz Page
- Result Page
- Admin Dashboard

*(Screenshots will be added later.)*

---

## 👨‍💻 Team Members

| Name | Role |
|------|------|
| Pallavi Siri Gudla | Developer |
| J.A.G.Sravani | Developer |
| Member 3 | Developer |
| Member 4 | Developer |
| Member 5 | Developer |

---

## 📚 Academic Project

**Course:** Full Stack Development (FSD-2)

**Technology:** MERN Stack

**Institution:** Sri Vasavi Engineering College

---

## ⭐ Future Enhancements

- Timer for Quiz
- Leaderboard
- Certificate Generation
- Quiz Analytics
- Responsive UI
- Dark Mode

---

## 📄 License

This project is developed for educational purposes.
