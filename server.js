const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Student = require("./models/Student");

const app = express();

app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/school_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Create Student
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
