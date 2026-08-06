require("dotenv").config();

const sendOTP = require("./services/emailService");

sendOTP("foremailotp13@gmail.com", "123456");