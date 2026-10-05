import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import generateRoutes from "./routes/generateRoutes.js";
import rewriteRoutes from "./routes/rewriteRoutes.js";
import paddleWebhookRoutes from "./routes/paddleWebhookRoutes.js";


const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://nimii-labs-ai.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
  })
);

// Paddle webhook MUST receive the raw request body
app.use("/api/paddle/webhook", paddleWebhookRoutes);

app.use(express.json());

app.use("/api", generateRoutes);
app.use("/api/rewrite", rewriteRoutes);




// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    error:
      status >= 500
        ? "An unexpected server error occurred."
        : err.message,
  });
});


const PORT = process.env.PORT || 5001;

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Nimii Labs API is running");
});

// Start Server
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

export default app;