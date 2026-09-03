import express from "express";
import { generateScript } from "../controllers/generateController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| AI Script Generation
|--------------------------------------------------------------------------
*/

router.post("/generate", generateScript);

export default router;