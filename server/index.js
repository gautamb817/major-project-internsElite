// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Contact = require("./models/Contact"); // if you already have Contact.js
// const User = require("./models/User");

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // ✅ MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ========== CONTACT ROUTE ==========
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Duplicate prevention
//     const existing = await Contact.findOne({ email, message });
//     if (existing) {
//       return res.status(400).json({ error: "Duplicate message detected" });
//     }

//     const newMessage = new Contact({ name, email, message });
//     await newMessage.save();

//     res.json({ success: true, message: "Message saved!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ========== AUTH ROUTES ==========
// const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// // Register
// app.post("/api/auth/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ error: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.json({ success: true, message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Login
// app.post("/api/auth/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

//     res.json({ success: true, token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Protected route (profile)
// app.get("/api/auth/profile", async (req, res) => {
//   try {
//     const token = req.headers["authorization"]?.split(" ")[1];
//     if (!token) return res.status(401).json({ error: "No token provided" });

//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");

//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Invalid or expired token" });
//   }
// });

// // ✅ Get all contact messages
// app.get("/api/messages", async (req, res) => {
//   try {
//     const messages = await Contact.find().sort({ createdAt: -1 }); // newest first
//     res.json(messages);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // DELETE message by ID
// app.delete("/api/messages/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Contact.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ error: "Message not found" });
//     }

//     res.json({ success: true, message: "Message deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });


// // ========== START SERVER ==========
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`✅ Server running on http://localhost:${PORT}`)
// );

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Contact = require("./models/Contact"); // if you already have Contact.js
const User = require("./models/User");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ========== ROOT ROUTE ==========
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API Server is running successfully!",
    status: "active",
    endpoints: {
      contact: "POST /api/contact",
      register: "POST /api/auth/register",
      login: "POST /api/auth/login",
      profile: "GET /api/auth/profile",
      messages: "GET /api/messages",
      deleteMessage: "DELETE /api/messages/:id"
    },
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

// ========== CONTACT ROUTE ==========
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Duplicate prevention
    const existing = await Contact.findOne({ email, message });
    if (existing) {
      return res.status(400).json({ error: "Duplicate message detected" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ========== AUTH ROUTES ==========
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Protected route (profile)
app.get("/api/auth/profile", async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// ✅ Get all contact messages
app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE message by ID
app.delete("/api/messages/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ success: true, message: "Message deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ========== START SERVER ==========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);