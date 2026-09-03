import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import generateRoutes from "./routes/generateRoutes.js";
import rewriteRoutes from "./routes/rewriteRoutes.js";

import path from "path";
import { fileURLToPath } from "url";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ✅ STARTUP DEBUG (ADD HERE)
console.log("ENV PATH:", path.resolve(__dirname, ".env"));
console.log("API KEY EXISTS:", !!process.env.GROQ_API_KEY);
console.log("PORT:", process.env.PORT);


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", generateRoutes);
app.use("/api/rewrite", rewriteRoutes);




// Global Error Handler
app.use((err, req, res, next) => {
  console.error("========== SERVER ERROR ==========");
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    error: err.message,
    status: err.status || 500,
    stack:
      process.env.NODE_ENV === "development"
        ? err.stack
        : undefined,
  });
});


const PORT = process.env.PORT || 5001;

const JWT_SECRET = process.env.JWT_SECRET;


// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running with Groq API");
});




// Dummy Register Route
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    res.json({
      message: "User registered successfully",
      email,
      hashedPassword,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
    });
  }
});

// Dummy Login Route
app.post("/api/login", async (req, res) => {
  try {
    const { email } = req.body;

    const token = jwt.sign(
      {
        email,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});