import express from "express";
import { generateScript } from "../controllers/generateController.js";
import { authenticate } from "../utils/authMiddleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| AI Script Generation
|--------------------------------------------------------------------------
*/

router.post("/generate", authenticate, generateScript);

export default router;