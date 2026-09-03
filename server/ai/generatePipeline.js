import { runPlannerStage } from "./planner/plannerStage.js";
import { runGenerationStage } from "./stages/generationStage.js";
import { runJudgeStage } from "./stages/judgeStage.js";
import { runReviewStage } from "./stages/reviewStage.js";

import { createCreativePlan } from "./brain/createCreativePlan.js";
import { validateCreativePlan } from "./brain/creativeValidator.js";

import { overallScore } from "./scoring/overallScore.js";
import generateAnalysis from "./analysis/generateAnalysis.js";

export async function generatePipeline({
    niche,
    platform,
    dnaMode,
    duration,
}) {

    console.log("\n====================================");
    console.log("🚀 PIPELINE START");
    console.log("====================================");

    try {

        /*
        ====================================
        Stage 1 — Creative Plan
        ====================================
        */

        console.log("🧠 Stage 1: Creating Creative Plan");

        const creativePlan = createCreativePlan({
            niche,
            platform,
            duration,
            dnaMode,
        });


        console.log("✓ Creative Plan");

        const validation = validateCreativePlan(creativePlan);

        if (validation.errors.length) {
            throw new Error(validation.errors.join("\n"));
        }

        console.log("✅ Creative Plan Ready");

        /*
        ====================================
        Stage 2 — Planner
        ====================================
        */

        console.log("📋 Stage 2: Planner");

        const { blueprint } = await runPlannerStage({
            creativePlan,
        });

        console.log("✓ Planner");

        console.log("✅ Planner Finished");

        /*
        ====================================
        Stage 3 — Writer
        ====================================
        */

        console.log("✍️ Stage 3: Writer");

        const generatedScripts = await runGenerationStage({
            creativePlan,
            blueprint,
        });

console.log("✓ Generation");

        console.log(
            `✅ Writer Finished (${generatedScripts.length} scripts)`
        );

        /*
        ====================================
        Stage 4 — Judge
        ====================================
        */

        console.log("⚖️ Stage 4: Judge");

        const winner = await runJudgeStage(
            generatedScripts
        );

        console.log("✓ Judge");

        console.log("✅ Judge Finished");

        /*
        ====================================
        Stage 5 — Review
        ====================================
        */

        console.log("✨ Stage 5: Review");

        const finalScript = await runReviewStage({
            script: winner,
            creativePlan,
            blueprint,
            platform,
            dnaMode,
        });


        console.log("✓ Review");

        console.log("✅ Review Finished");

        /*
        ====================================
        Stage 6 — Analysis
        ====================================
        */
 console.log("\n===== FINAL SCRIPT BEFORE SCORING =====");
console.dir(finalScript, { depth: null });

        console.log("📊 Stage 6: Analysis");

        const scores = overallScore(
            finalScript,
            platform
        );

       const analysis = {
    ...generateAnalysis(scores),
    scores,
       }

        console.log("✅ Analysis Finished");

console.log("======================");
console.log("🎉 PIPELINE COMPLETE");
console.log("======================\n");

console.log("\n========== FINAL PIPELINE OUTPUT ==========");
console.dir(
{
    creativePlan,
    blueprint,
    finalScript,
    scores,
    analysis
},
{ depth: null }
);

return {
    ...finalScript,
    creativePlan,
    blueprint,
    scores,
    analysis
};






    } catch (error) {

        console.error("\n====================================");
        console.error("❌ PIPELINE FAILED");
        console.error("====================================");
        console.error(error);
        console.error("====================================\n");

        throw error;
    }
}