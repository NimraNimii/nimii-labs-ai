import express from "express";

import { rewriteController } from "../controllers/rewriteController.js";
import { authenticate } from "../utils/authMiddleware.js";

const router = express.Router();

/*
==========================================
Rewrite Endpoint
==========================================
*/

router.post("/", authenticate, rewriteController);

export default router;