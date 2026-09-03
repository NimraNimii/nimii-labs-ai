/*
=========================================================

NIMII LABS

Planner Validator

Purpose:
Validates the Creative Blueprint returned
by the Planner AI before it reaches the Writer.

=========================================================
*/

import {
    requiredPlannerFields
} from "./plannerSchema.js";

export function validatePlannerOutput(blueprint) {

    const errors = [];
    const warnings = [];

    /*
    =====================================================
    Empty Response
    =====================================================
    */

    if (!blueprint || typeof blueprint !== "object") {

        return {

            valid: false,

            score: 0,

            errors: [
                "Planner did not return a valid object."
            ],

            warnings: []

        };

    }


/*
=====================================================
Narrative
=====================================================
*/

if (

    !blueprint.narrative ||

    typeof blueprint.narrative !== "object"

) {

    errors.push(
        "Narrative object is missing."
    );

}

else {

    const {

        type,

        storySource,

        pointOfView,

        speakerRole,

        allowInventedDetails

    } = blueprint.narrative;

    if (
        typeof type !== "string" ||
        type.trim() === ""
    ) {

        warnings.push(
            "Narrative type is empty."
        );

    }

    if (
        typeof storySource !== "string" ||
        storySource.trim() === ""
    ) {

        warnings.push(
            "Story source is empty."
        );

    }

    if (
        typeof pointOfView !== "string" ||
        pointOfView.trim() === ""
    ) {

        warnings.push(
            "Point of view is empty."
        );

    }

    if (
        typeof speakerRole !== "string" ||
        speakerRole.trim() === ""
    ) {

        warnings.push(
            "Speaker role is empty."
        );

    }

    if (
        typeof allowInventedDetails !== "boolean"
    ) {

        warnings.push(
            "allowInventedDetails should be boolean."
        );

    }

}


    /*
    =====================================================
    Required Fields
    =====================================================
    */

    for (const field of requiredPlannerFields) {

        if (!(field in blueprint)) {

            errors.push(
                `Missing field: ${field}`
            );

        }

    }

    /*
    =====================================================
    Story Flow
    =====================================================
    */

    if (

        !Array.isArray(
            blueprint.storyFlow
        ) ||

        blueprint.storyFlow.length === 0

    ) {

        errors.push(
            "Story Flow must contain at least one step."
        );

    }

    /*
    =====================================================
    Pattern Interrupts
    =====================================================
    */

    if (

        !Array.isArray(
            blueprint.patternInterrupts
        )

    ) {

        errors.push(
            "Pattern Interrupts must be an array."
        );

    }

    /*
    =====================================================
    Emotion Journey
    =====================================================
    */

    if (

        !Array.isArray(
            blueprint.emotionJourney
        )

    ) {

        errors.push(
            "Emotion Journey must be an array."
        );

    }

    /*
    =====================================================
    Writer Instructions
    =====================================================
    */

    if (

        !Array.isArray(
            blueprint.writerInstructions
        ) ||

        blueprint.writerInstructions.length === 0

    ) {

        warnings.push(
            "Writer Instructions are empty."
        );

    }

    /*
    =====================================================
    Empty Text Fields
    =====================================================
    */

    const textFields = [

        "audienceInsight",

        "coreMessage",

        "beliefToChange",

        "creativeDirection",

        "openingStrategy",

        "hookExecution",

        "ctaExecution"

    ];

    for (const field of textFields) {

        if (

            typeof blueprint[field] !== "string" ||

            blueprint[field].trim() === ""

        ) {

            warnings.push(
                `${field} is empty.`
            );

        }

    }

    /*
    =====================================================
    Final Validation
    =====================================================
    */

    return {

        valid: errors.length === 0,

        score: Math.max(

            0,

            100 -

            (errors.length * 20) -

            (warnings.length * 3)

        ),

        errors,

        warnings

    };

}