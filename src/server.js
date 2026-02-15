import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas (portfolio db)"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Configure nodemailer transporter if SMTP settings are provided.
// To enable, set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and EMAIL_TO in your .env
let transporter;
if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter (optional) — log but don't crash startup if verify fails
    transporter.verify().then(() => {
      console.log("✅ SMTP transporter ready");
    }).catch((err) => {
      console.warn("⚠️ SMTP transporter verification failed:", err.message || err);
    });
  } catch (err) {
    console.warn("⚠️ Failed to configure SMTP transporter:", err.message || err);
    transporter = null;
  }
} else {
  console.log("ℹ️ SMTP not configured — emails will be skipped. Set SMTP_* env vars to enable.");
}

// Schema & Model
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", FormSchema, "forms");

// API Route
app.post("/api/form", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newEntry = new Form({ name, email, message });
    await newEntry.save();
    // Attempt to send an email notification if transporter and recipient are configured
    if (transporter && process.env.EMAIL_TO) {
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: `New contact form submission from ${name || "Unknown"}`,
        text: `You have a new message from ${name || "Anonymous"} <${email || "no-reply"}>:\n\n${message || "(no message)"}`,
        html: `<p><strong>From:</strong> ${name || "Anonymous"} &lt;${email || "no-reply"}&gt;</p><p><strong>Message:</strong></p><p>${(message || "(no message)").replace(/\n/g, "<br>")}</p>`,
      };

      transporter.sendMail(mailOptions).then(() => {
        console.log("✅ Contact form email sent");
      }).catch((err) => {
        console.warn("⚠️ Failed to send contact form email:", err.message || err);
      });
    }

    res.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
