/*
=========================================================
NIMII LABS

Planner Stage

Purpose:
Runs the complete Planning Engine.

Flow

Create Creative Plan
        ↓
Validate Plan
        ↓
Build Planner Prompt
        ↓
Planner AI
        ↓
Parse JSON
        ↓
Validate Output
        ↓
Return Blueprint

=========================================================
*/

import { plannerEngine } from "./plannerEngine.js";
import { buildPlannerPrompt } from "./plannerPrompt.js";
import { parsePlannerResponse } from "./plannerParser.js";
import { validatePlannerOutput } from "./plannerValidator.js";

/*
=========================================================
Planner Stage
=========================================================
*/

export async function runPlannerStage({

    creativePlan

})

{

    try {


        /*
        ==========================================
        STEP 3

        Build Planner Prompt
        ==========================================
        */

        const prompt =
            buildPlannerPrompt(
                creativePlan
            );

            console.log("\n========== CREATIVE PLAN ==========");
console.log(JSON.stringify(creativePlan,));
console.log("===================================\n");


        /*
        ==========================================
        STEP 4

        Call Planner AI

        (Injected later)

        ==========================================
        */

   const rawResponse =
    await plannerEngine(prompt);

        /*
        ==========================================
        STEP 5

        Parse Planner JSON
        ==========================================
        */

        const blueprint =
            parsePlannerResponse(
                rawResponse
            );

            console.log("\n========== BLUEPRINT ==========");
console.log(JSON.stringify(blueprint, null, 2));
console.log("================================\n");


        /*
        ==========================================
        STEP 6

        Validate Planner Output
        ==========================================
        */

   const plannerValidation =
    validatePlannerOutput(
        blueprint
    );

        /*
        ==========================================
        STEP 7

        Update Runtime
        ==========================================
        */

        creativePlan.runtime.plannerExecuted = true;

        /*
        ==========================================
        Return
        ==========================================
        */

        return {

    creativePlan,

    blueprint,

    plannerValidation

};

    }

    catch (error) {

        console.error(
            "Planner Stage Error:",
            error
        );

        throw error;

    }

}