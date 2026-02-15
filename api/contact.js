// api/contact.js
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// 1. Setup Email Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 2. Setup Database Connection (Cached for Serverless)
// We cache the connection so it doesn't reconnect on every single request
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) return;
  
  // Replace this with your actual MongoDB URI from your .env file
  // Make sure MONGODB_URI is added to Vercel Environment Variables
  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
};

// Define Schema inside the function or import it if you have a models folder
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// Prevent model recompilation error in serverless
const Form = mongoose.models.ContactForm || mongoose.model("ContactForm", FormSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    const { name, email, message } = req.body;

    // A. Save to MongoDB
    const newEntry = new Form({ name, email, message });
    await newEntry.save();

    // B. Send Email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br>")}</p>`,
    });

    res.status(200).json({ message: "Success" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
