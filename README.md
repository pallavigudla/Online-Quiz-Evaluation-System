# 📝 Online Quiz Evaluation System

A full-stack MERN-based Online Quiz Evaluation System developed as part of the Full Stack Development (FSD-2) course at Sri Vasavi Engineering College.

The system provides an online platform where students can register, verify their email, attend quizzes, and view their results. Administrators can create quizzes, manage questions, and monitor student performance.

## 🚀 Features

### 🔐 Authentication and Security
- User registration
- Email OTP verification
- Login using JWT authentication
- Role-based access for students and administrators
- Password hashing
- Password-reset functionality

### 🎓 Student Module
- Student dashboard
- View available quizzes
- Attempt quiz questions
- Submit quiz answers
- Automatic score calculation
- View quiz results and result history
- Manage student profile

### 🛠️ Admin Module
- Admin dashboard
- Create and manage quizzes
- Add and manage questions
- View quiz results
- View analytics and student performance

## 🧰 Applications and Tools Used

| Application / Technology | Purpose |
|---|---|
| React.js | Builds the frontend user interface |
| HTML5, CSS3, JavaScript | Structures, styles, and adds interactivity to pages |
| React Router DOM | Navigates between pages |
| Axios | Sends HTTP requests to the backend |
| Node.js | Runs server-side JavaScript |
| Express.js | Creates backend APIs and routes |
| MongoDB Atlas | Cloud database service |
| Mongoose | Defines models and interacts with MongoDB |
| JSON Web Token (JWT) | Authenticates users |
| bcryptjs | Hashes passwords |
| Nodemailer | Sends email verification messages |
| dotenv | Loads environment variables |
| CORS | Configures cross-origin requests |
| npm | Manages project dependencies |
| Git and GitHub | Version control and source-code hosting |
| concurrently | Runs frontend and backend processes together |

## 🏗️ System Architecture

The application follows a client-server architecture.

1. **Frontend:** React.js displays the user interface and sends API requests using Axios.
2. **Backend:** Node.js and Express.js handle requests, authentication, quiz operations, and result processing.
3. **Database:** MongoDB stores user accounts, quizzes, questions, and results.
4. **Authentication:** JWT and password hashing support authenticated access and account security.
5. **Email verification:** Nodemailer sends verification emails.

The frontend communicates with the backend through HTTP APIs, and the backend interacts with MongoDB using Mongoose.

## 📂 Project Structure

```text
Online-Quiz-Evaluation-System/
├── Backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── analyticsController.js
│   │   ├── attemptController.js
│   │   ├── authController.js
│   │   ├── questionController.js
│   │   ├── quizController.js
│   │   ├── resultController.js
│   │   └── studentController.js
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── Screenshots/
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/pallavigudla/Online-Quiz-Evaluation-System.git
cd Online-Quiz-Evaluation-System
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### 3. Install frontend dependencies

Open a terminal at the project root, then run:

```bash
cd Frontend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `Backend` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

Replace the example values with your actual configuration.

**Security:** Never commit `.env` files, database credentials, email passwords, or JWT secrets to GitHub.

### 5. Run the frontend and backend in one terminal

Open a terminal in the project root directory:

```bash
npx --yes concurrently -n BACKEND,FRONTEND -c blue,green "cd Backend && node server.js" "cd Frontend && npm start"
```

This command launches both applications concurrently in the same terminal.

### 6. Access the application

| Component | Local URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |

Keep the terminal running while using the application. Press `Ctrl + C` to stop the processes.

## 🔄 Application Workflow

1. Students register and verify their email.
2. Students log in using their credentials.
3. The frontend sends requests to the backend APIs.
4. The backend authenticates users and retrieves quiz data.
5. Students attempt quizzes and submit their answers.
6. The backend calculates the score and stores the result.
7. Students view their results, and administrators review quiz performance.

## 📸 Screenshots

### 🏠 Home Page

![Home Page](Screenshots/Home.png)

### 🔑 Login Page

![Login Page](Screenshots/Login.png)

### 📝 Registration Page

![Registration Page](Screenshots/Register.png)

### 🎓 Student Dashboard


### 🛠️ Admin Dashboard

![Admin Dashboard](Screenshots/AdminDashboard.png)

## 🎯 Project Objectives

- Simplify online quiz administration.
- Reduce manual evaluation effort.
- Provide quick access to quiz results.
- Maintain separate student and administrator permissions.
- Store quiz data and evaluation results persistently.

## 🔮 Future Enhancements

- Quiz timer and time-limit enforcement
- Leaderboards and rankings
- Certificate generation
- Enhanced analytics and reports
- Improved accessibility and responsive design
- Dark mode

## 👥 Team Members

| Name | Role |
|---|---|
| Jhansi Rani | Developer |
| Surendra | Developer |
| Pallavi Siri | Developer |
| Sanjay | Developer |
| Siva Shankar | Developer |

## 🎓 Academic Information

**Course:** Full Stack Development (FSD-2)  
**Institution:** Sri Vasavi Engineering College  
**Project:** Online Quiz Evaluation System  
**Technology Stack:** MERN

## 📄 License

This project was developed for educational purposes as part of academic coursework.
