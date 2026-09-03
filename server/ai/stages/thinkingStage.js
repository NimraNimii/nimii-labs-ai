/*
=========================================================

NIMII LABS

Thinking Stage

Purpose:
Creates and validates the Creative Plan,
then sends it to the Planner.

=========================================================
*/

import { createCreativePlan } from "../brain/createCreativePlan.js";
import { validateCreativePlan } from "../brain/creativeValidator.js";
import { runPlannerStage } from "../planner/plannerStage.js";

export async function runThinkingStage({

    niche,

    creatorGoal = "followers",

    audienceState = "curious",

    platform,

    dnaMode,

    duration,

}) {

    try {

        /*
        =====================================
        STEP 1

        Create Creative Plan
        =====================================
        */

        const creativePlan =
            createCreativePlan({

                niche,

                creatorGoal,

                audienceState,

                platform,

                duration,

                dnaMode

            });

        /*
        =====================================
        STEP 2

        Validate Creative Plan
        =====================================
        */

        const validation =
            validateCreativePlan(
                creativePlan
            );

        if (validation.errors.length) {

            throw new Error(

                validation.errors.join("\n")

            );

        }

        /*
        =====================================
        STEP 3

        Run Planner
        =====================================
        */

        const {

            blueprint,

            plannerValidation

        } = await runPlannerStage({

            creativePlan

        });

        /*
        =====================================
        Return
        =====================================
        */

        return {

            creativePlan,

            blueprint,

            validation,

            plannerValidation

        };

    }

    catch (error) {

        console.error(

            "Thinking Stage Error:",

            error

        );

        throw error;

    }

}