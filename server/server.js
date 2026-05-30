import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001;
const JWT_SECRET = "supersecret";

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running with Groq API");
});

// Generate Viral Script Route
app.post("/api/generate", async (req, res) => {
  try {
    const { niche } = req.body;

    if (!niche || niche.trim() === "") {
      return res.status(400).json({
        result: "Please enter a niche",
      });
    }

    const prompt = `
You are a viral short-form content expert.

Generate a high-retention TikTok, Reels, or YouTube Shorts script for the niche: "${niche}"

The script MUST include:

1. A powerful hook
2. Curiosity gap
3. Fast pacing
4. Practical value
5. A strong CTA

Format EXACTLY like this:

🔥 Hook:
(Viral opening line)

📝 Script:
(Full engaging short-form script)

🚀 CTA:
(Short call-to-action)
`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert viral content creator for TikTok, Instagram Reels, and YouTube Shorts.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.9,
      max_tokens: 500,
    });

    const generatedText =
      completion.choices?.[0]?.message?.content ||
      "Failed to generate content";

    res.json({
      result: generatedText,
    });
  } catch (error) {
    console.error("❌ Groq Error:", error);

    res.status(500).json({
      result: "❌ Failed to generate content",
      error: error.message,
    });
  }
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