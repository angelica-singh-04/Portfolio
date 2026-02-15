// api/contact.js
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// --- 1. CONFIGURATION ---
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO;
const MONGODB_URI = process.env.MONGODB_URI;

// --- 2. SETUP NODEMAILER ---
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// --- 3. SETUP MONGODB (Cached Connection) ---
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in environment variables");
  }

  console.log("Creating new database connection...");
  await mongoose.connect(MONGODB_URI);
  isConnected = true;
  console.log("Database connected successfully");
};

// Define Schema
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// Prevent model recompilation error
const Form = mongoose.models.ContactForm || mongoose.model("ContactForm", FormSchema);

// --- 4. THE HANDLER FUNCTION ---
export default async function handler(req, res) {
  // A. Set CORS Headers (Crucial for avoiding connection errors)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (simpler for debugging)
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // B. Handle Preflight Request (Browser checking if it's safe to send)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // C. Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // D. Connect to DB
    await connectToDatabase();

    const { name, email, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // E. Save to MongoDB
    const newEntry = new Form({ name, email, message });
    await newEntry.save();
    console.log("Saved to database");

    // F. Send Email
    await transporter.sendMail({
      from: SMTP_USER,
      to: EMAIL_TO,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
               <h2>New Contact Form Submission</h2>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p style="background: #f9f9f9; padding: 10px;">${message.replace(/\n/g, "<br>")}</p>
             </div>`,
    });
    console.log("Email sent successfully");

    // G. Success Response
    res.status(200).json({ message: "Success! Message received." });

  } catch (error) {
    console.error("Handler Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
