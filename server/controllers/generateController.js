

import { generatePipeline } from "../ai/generatePipeline.js";
export const generateScript = async (req, res) => {
  try {
    const {
      niche,
      platform = "TikTok",
      duration = "45-60 seconds",
      dnaType = "STORY_TRAP",
      trends = "",
    } = req.body;

    // Validation
    if (!niche?.trim()) {
      return res.status(400).json({
        success: false,
        error: "Topic is required.",
      });
    }

    // Run AI Pipeline
    const result = await generatePipeline({
      niche: niche.trim(),
      platform,
      duration,
      dnaMode: dnaType,
      trends,
    });

    return res.status(200).json({
      success: true,
      data: result,
    });

  } 



  catch (error) {
  console.error("========== GENERATE ERROR ==========");
  console.error(error);
  console.error(error.stack);

  return res.status(500).json({
    success: false,
    error: error.message,
  });
}
  
};