/*
=========================================================

NIMII LABS

AI Pipeline

Purpose:
Main AI orchestration layer.

=========================================================
*/

import { runPlannerStage } from "./planner/plannerStage.js";
import { buildBlueprint } from "./planner/blueprintBuilder.js";
import { runWriterStage } from "./writer/writerStage.js";

import { runGenerationStage } from "./stages/generationStage.js";
import { runJudgeStage } from "./stages/judgeStage.js";
import { runReviewStage } from "./stages/reviewStage.js";

import { overallScore } from "./scoring/overallScore.js";
import generateAnalysis from "./analysis/generateAnalysis.js";

export async function runAIPipeline({

    niche,

    creatorGoal,

    audienceState,

    platform,

    duration,

    dnaMode

}) {

    /*
    ==========================================
    Planner
    ==========================================
    */

    const {

        creativePlan,

        blueprint

    } = await runPlannerStage({

        niche,

        creatorGoal,

        audienceState,

        platform,

        duration,

        dnaMode

    });

    /*
    ==========================================
    Blueprint
    ==========================================
    */
const writerBlueprint = buildBlueprint({

    creativePlan,

    blueprint

});

    /*
    ==========================================
    Writer
    ==========================================
    */

    const writer =
        await runWriterStage({

            creativePlan,

            blueprint: writerBlueprint,

            generateScripts:
                runGenerationStage

        });

    /*
    ==========================================
    Judge
    ==========================================
    */

    const winner =
        await runJudgeStage(

            writer.scripts

        );

    /*
    ==========================================
    Review
    ==========================================
    */

    const finalScript =
        await runReviewStage({

            script: winner,

            thinking: {

                creativePlan,

                blueprint

            },

            platform,

            dnaMode

        });

    /*
    ==========================================
    Analysis
    ==========================================
    */

    const scores =
        overallScore(

            finalScript,

            platform

        );

    const analysis =
        generateAnalysis(

            scores

        );

    return {

        ...finalScript,

        creativePlan,

        blueprint,

        scores,

        analysis

    };

}