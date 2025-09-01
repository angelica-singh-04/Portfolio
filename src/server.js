import express from "express";
import mongoose from "mongoose";
import cors from "cors"; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema & Model
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", FormSchema);

// API Route
app.post("/api/form", async (req, res) => {
  const { name, email, message } = req.body;
  const newEntry = new Form({ name, email, message });
  await newEntry.save();
  res.json({ message: "Form submitted successfully!" });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
