// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/connection");

// Load env variable (make sure you have .env setup)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// -------- SIGNUP ROUTE ------------
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if user already exists
    const userExistsQuery = "SELECT * FROM users WHERE email = ?";
    db.query(userExistsQuery, [email], async (err, results) => {
      if (err) return res.status(500).json({ error: "Database error." });

      if (results.length > 0) {
        return res.status(409).json({ error: "User already exists." });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO users (`name`, `email`, `password`, `role`) VALUES (?, ?, ?, ?)";
      db.query(
        insertQuery,
        [name, email, hashedPassword, role],
        (err, data) => {
          if (err)
            return res.status(500).json({ error: "Failed to register user." });
          res.status(201).json({ message: "User registered successfully!" });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

// -------- LOGIN ROUTE ------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userQuery = "SELECT * FROM users WHERE email = ?";
  db.query(userQuery, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    
    res.status(200).json({
      id:user.id,
      name: user.name,
      email: user.email,
      token,
      role: user.role,

    });
  });
});

module.exports = router;
