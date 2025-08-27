const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema + Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
