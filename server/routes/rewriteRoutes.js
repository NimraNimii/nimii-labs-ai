import express from "express";
import rateLimit from "express-rate-limit";

import { rewriteController } from "../controllers/rewriteController.js";
import { authenticate } from "../utils/authMiddleware.js";

const router = express.Router();

const rewriteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

/*
==========================================
Rewrite Endpoint
==========================================
*/

router.post("/", rewriteLimiter, authenticate, rewriteController);

export default router;