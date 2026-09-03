import express from "express";

import { rewriteController } from "../controllers/rewriteController.js";

const router = express.Router();

/*
==========================================
Rewrite Endpoint
==========================================
*/

router.post("/", rewriteController);

export default router;