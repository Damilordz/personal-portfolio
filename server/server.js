import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://www.damilordz.com";
const app = express();

// Middleware
app.use(express.json()); // Middleware for parsing application/json data
app.use(
  cors({
    origin: FRONTEND_URL, // Allow requests from this origin
    methods: ["GET", "POST"], // Allowed HTTP methods
  })
); // Middleware for enabling Cross-Origin Resource Sharing (CORS)

// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

// Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ status: "error", message: "All fields are required" });
  }

  try {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    // Set up email data
    let mailOptions = {
      from: `"${name}" <${email}>`, // Sender's email address
      to: process.env.EMAIL_USER, // Recipient email (configured in .env)
      subject: `Contact Form: ${subject}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      status: "error",
      message: "Error sending email, please try again later.",
    });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
