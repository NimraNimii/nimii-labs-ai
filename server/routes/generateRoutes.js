import express from "express";
import rateLimit from "express-rate-limit";

import { generateScript } from "../controllers/generateController.js";
import { authenticate } from "../utils/authMiddleware.js";

const router = express.Router();

const generateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

/*
|--------------------------------------------------------------------------
| AI Script Generation
|--------------------------------------------------------------------------
*/

router.post("/generate", generateLimiter, authenticate, generateScript);

export default router;