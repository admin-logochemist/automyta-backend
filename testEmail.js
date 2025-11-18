import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: "New Contact Form Message Automyta",
  text: "This is a test email from Node.js Automyta",
}, (err, info) => {
  if (err) {
    console.error("Test Email Error:", err);
  } else {
    console.log("Test Email Success:", info.response);
  }
});
