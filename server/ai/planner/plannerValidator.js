/*
=========================================================

NIMII LABS

Planner Validator

Purpose:
Validates the Creative Blueprint returned
by the Planner AI before it reaches the Writer.

The validator must match the current Planner contract.

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
    Required Top-Level Fields
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
    Audience Insight
    =====================================================
    */

    if (
        typeof blueprint.audienceInsight !== "string" ||
        blueprint.audienceInsight.trim() === ""
    ) {

        warnings.push(
            "Audience insight is empty."
        );

    }


    /*
    =====================================================
    Core Message
    =====================================================
    */

    if (
        typeof blueprint.coreMessage !== "string" ||
        blueprint.coreMessage.trim() === ""
    ) {

        warnings.push(
            "Core message is empty."
        );

    }


    /*
    =====================================================
    Creative Direction
    =====================================================
    */

    if (
        !blueprint.creativeDirection ||
        typeof blueprint.creativeDirection !== "object" ||
        Array.isArray(blueprint.creativeDirection)
    ) {

        errors.push(
            "Creative Direction must be an object."
        );

    }

    else {

        const {
            objective,
            primaryAngle,
            keyConflict,
            desiredTakeaway
        } = blueprint.creativeDirection;


        if (
            typeof objective !== "string" ||
            objective.trim() === ""
        ) {

            warnings.push(
                "Creative Direction objective is empty."
            );

        }


        if (
            typeof primaryAngle !== "string" ||
            primaryAngle.trim() === ""
        ) {

            warnings.push(
                "Creative Direction primary angle is empty."
            );

        }


        if (
            typeof keyConflict !== "string" ||
            keyConflict.trim() === ""
        ) {

            warnings.push(
                "Creative Direction key conflict is empty."
            );

        }


        if (
            typeof desiredTakeaway !== "string" ||
            desiredTakeaway.trim() === ""
        ) {

            warnings.push(
                "Creative Direction desired takeaway is empty."
            );

        }

    }


    /*
    =====================================================
    Narrative
    =====================================================
    */

    if (
        !blueprint.narrative ||
        typeof blueprint.narrative !== "object" ||
        Array.isArray(blueprint.narrative)
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

            errors.push(
                "allowInventedDetails must be boolean."
            );

        }


        /*
        =================================================
        Narrative Safety Rule
        =================================================
        */

        if (
            storySource === "fictional_example" &&
            allowInventedDetails !== true
        ) {

            warnings.push(
                "Fictional examples normally require allowInventedDetails to be true."
            );

        }


        if (
            storySource !== "fictional_example" &&
            allowInventedDetails === true
        ) {

            errors.push(
                "allowInventedDetails can only be true for fictional_example."
            );

        }

    }


    /*
    =====================================================
    Opening Plan
    =====================================================
    */

    if (
        !blueprint.openingPlan ||
        typeof blueprint.openingPlan !== "object" ||
        Array.isArray(blueprint.openingPlan)
    ) {

        errors.push(
            "Opening Plan must be an object."
        );

    }

    else {

        const {
            purpose,
            style,
            emotion
        } = blueprint.openingPlan;


        if (
            typeof purpose !== "string" ||
            purpose.trim() === ""
        ) {

            warnings.push(
                "Opening Plan purpose is empty."
            );

        }


        if (
            typeof style !== "string" ||
            style.trim() === ""
        ) {

            warnings.push(
                "Opening Plan style is empty."
            );

        }


        if (
            typeof emotion !== "string" ||
            emotion.trim() === ""
        ) {

            warnings.push(
                "Opening Plan emotion is empty."
            );

        }

    }


    /*
    =====================================================
    Hook Plan
    =====================================================
    */

    if (
        !blueprint.hookPlan ||
        typeof blueprint.hookPlan !== "object" ||
        Array.isArray(blueprint.hookPlan)
    ) {

        errors.push(
            "Hook Plan must be an object."
        );

    }

    else {

        const {
            type,
            goal,
            topic,
            emotion,
            curiosityGap,
            primaryTrigger,
            openingPattern,
            maxWords,
            mustCreateImmediateCuriosity,
            mustAvoidGenericOpenings,
            avoid
        } = blueprint.hookPlan;


        if (
            typeof type !== "string" ||
            type.trim() === ""
        ) {

            warnings.push(
                "Hook Plan type is empty."
            );

        }


        if (
            typeof goal !== "string" ||
            goal.trim() === ""
        ) {

            warnings.push(
                "Hook Plan goal is empty."
            );

        }


        if (
            typeof topic !== "string" ||
            topic.trim() === ""
        ) {

            warnings.push(
                "Hook Plan topic is empty."
            );

        }


        if (
            typeof emotion !== "string" ||
            emotion.trim() === ""
        ) {

            warnings.push(
                "Hook Plan emotion is empty."
            );

        }


        if (
            typeof curiosityGap !== "string" ||
            curiosityGap.trim() === ""
        ) {

            warnings.push(
                "Hook Plan curiosity gap is empty."
            );

        }


        if (
            typeof primaryTrigger !== "string" ||
            primaryTrigger.trim() === ""
        ) {

            warnings.push(
                "Hook Plan primary trigger is empty."
            );

        }


        if (
            typeof openingPattern !== "string" ||
            openingPattern.trim() === ""
        ) {

            warnings.push(
                "Hook Plan opening pattern is empty."
            );

        }


        if (
            typeof maxWords !== "number" ||
            !Number.isFinite(maxWords) ||
            maxWords <= 0
        ) {

            errors.push(
                "Hook Plan maxWords must be a positive number."
            );

        }


        if (
            typeof mustCreateImmediateCuriosity !== "boolean"
        ) {

            errors.push(
                "mustCreateImmediateCuriosity must be boolean."
            );

        }


        if (
            typeof mustAvoidGenericOpenings !== "boolean"
        ) {

            errors.push(
                "mustAvoidGenericOpenings must be boolean."
            );

        }


        if (!Array.isArray(avoid)) {

            errors.push(
                "Hook Plan avoid must be an array."
            );

        }

    }


    /*
    =====================================================
    Story Plan
    =====================================================
    */

    if (
        !blueprint.storyPlan ||
        typeof blueprint.storyPlan !== "object" ||
        Array.isArray(blueprint.storyPlan)
    ) {

        errors.push(
            "Story Plan must be an object."
        );

    }

    else {

        const {
            structure,
            pace,
            transitionStyle
        } = blueprint.storyPlan;


        if (
            !Array.isArray(structure) ||
            structure.length === 0
        ) {

            errors.push(
                "Story Plan structure must contain at least one step."
            );

        }


        if (
            typeof pace !== "string" ||
            pace.trim() === ""
        ) {

            warnings.push(
                "Story Plan pace is empty."
            );

        }


        if (
            typeof transitionStyle !== "string" ||
            transitionStyle.trim() === ""
        ) {

            warnings.push(
                "Story Plan transition style is empty."
            );

        }

    }


    /*
    =====================================================
    Pattern Interrupts
    =====================================================
    */

    if (
        !Array.isArray(blueprint.patternInterrupts)
    ) {

        errors.push(
            "Pattern Interrupts must be an array."
        );

    }

    else {

        blueprint.patternInterrupts.forEach(
            (interrupt, index) => {

                if (
                    !interrupt ||
                    typeof interrupt !== "object"
                ) {

                    errors.push(
                        `Pattern Interrupt ${index + 1} must be an object.`
                    );

                    return;

                }


                if (
                    typeof interrupt.position !== "string" ||
                    interrupt.position.trim() === ""
                ) {

                    warnings.push(
                        `Pattern Interrupt ${index + 1} position is empty.`
                    );

                }


                if (
                    typeof interrupt.purpose !== "string" ||
                    interrupt.purpose.trim() === ""
                ) {

                    warnings.push(
                        `Pattern Interrupt ${index + 1} purpose is empty.`
                    );

                }

            }
        );

    }


    /*
    =====================================================
    Emotion Journey
    =====================================================
    */

    if (
        !Array.isArray(blueprint.emotionJourney)
    ) {

        errors.push(
            "Emotion Journey must be an array."
        );

    }

    else if (
        blueprint.emotionJourney.length === 0
    ) {

        warnings.push(
            "Emotion Journey is empty."
        );

    }


    /*
    =====================================================
    CTA Plan
    =====================================================
    */

    if (
        !blueprint.ctaPlan ||
        typeof blueprint.ctaPlan !== "object" ||
        Array.isArray(blueprint.ctaPlan)
    ) {

        errors.push(
            "CTA Plan must be an object."
        );

    }

    else {

        const {
            goal,
            style,
            tone,
            conversionAction,
            urgencyLevel,
            reward,
            allowIntentChange
        } = blueprint.ctaPlan;


        if (
            typeof goal !== "string" ||
            goal.trim() === ""
        ) {

            warnings.push(
                "CTA Plan goal is empty."
            );

        }


        if (
            typeof style !== "string" ||
            style.trim() === ""
        ) {

            warnings.push(
                "CTA Plan style is empty."
            );

        }


        if (
            typeof tone !== "string" ||
            tone.trim() === ""
        ) {

            warnings.push(
                "CTA Plan tone is empty."
            );

        }


        if (
            typeof conversionAction !== "string" ||
            conversionAction.trim() === ""
        ) {

            warnings.push(
                "CTA Plan conversion action is empty."
            );

        }


        if (
            typeof urgencyLevel !== "string" ||
            urgencyLevel.trim() === ""
        ) {

            warnings.push(
                "CTA Plan urgency level is empty."
            );

        }


        if (
            typeof reward !== "string" ||
            reward.trim() === ""
        ) {

            warnings.push(
                "CTA Plan reward is empty."
            );

        }


        if (
            typeof allowIntentChange !== "boolean"
        ) {

            errors.push(
                "allowIntentChange must be boolean."
            );

        }

    }


    /*
    =====================================================
    Writer Constraints
    =====================================================
    */

    if (
        !blueprint.writerConstraints ||
        typeof blueprint.writerConstraints !== "object" ||
        Array.isArray(blueprint.writerConstraints)
    ) {

        errors.push(
            "Writer Constraints must be an object."
        );

    }

    else {

        const {
            tone,
            readingLevel,
            sentenceLength,
            avoid,
            mustInclude,
            mustNotInclude
        } = blueprint.writerConstraints;


        if (
            typeof tone !== "string" ||
            tone.trim() === ""
        ) {

            warnings.push(
                "Writer Constraints tone is empty."
            );

        }


        if (
            typeof readingLevel !== "string" ||
            readingLevel.trim() === ""
        ) {

            warnings.push(
                "Writer Constraints reading level is empty."
            );

        }


        if (
            typeof sentenceLength !== "string" ||
            sentenceLength.trim() === ""
        ) {

            warnings.push(
                "Writer Constraints sentence length is empty."
            );

        }


        if (!Array.isArray(avoid)) {

            errors.push(
                "Writer Constraints avoid must be an array."
            );

        }


        if (!Array.isArray(mustInclude)) {

            errors.push(
                "Writer Constraints mustInclude must be an array."
            );

        }


        if (!Array.isArray(mustNotInclude)) {

            errors.push(
                "Writer Constraints mustNotInclude must be an array."
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