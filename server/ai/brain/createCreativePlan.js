/*
=========================================================
NIMII LABS

Creative Brain v1

Creative Plan Builder

Purpose:
Runs the complete Creative Brain and returns
one unified Creative Plan.

=========================================================
*/

import { getCreatorGoal } from "./creatorGoals.js";
import { getAudienceState } from "./audienceStates.js";
import { classifyTopic } from "./topicClassifier.js";

import { getBestFramework } from "./frameworkLibrary.js";
import { getBestPsychology } from "./psychologyLibrary.js";
import { getBestHook } from "./hookLibrary.js";
import {
    getBestRetentionPattern,
    getPatternBreaks
} from "./patternLibrary.js";
import { getBestCTA } from "./ctaLibrary.js";

export function createCreativePlan({

    niche,

    creatorGoal = "followers",

    audienceState = "curious",

    platform = "TikTok",

    duration = "45-60 seconds",

    dnaMode = "STORY_TRAP"

}) {

    /*
    =========================================
    Stage 1
    Core Context
    =========================================
    */

    const goal =
        getCreatorGoal(creatorGoal);

    const audience =
        getAudienceState(audienceState);

    const topic =
        classifyTopic(niche);

    /*
    =========================================
    Stage 2
    Creative Decisions
    =========================================
    */

    const framework =
        getBestFramework({

            goal,

            audience,

            topic

        });

    const psychology =
        getBestPsychology({

            goal,

            audience,

            framework

        });


const hook =
    getBestHook({

        goal,

        framework,

        psychology,

        topic

    });


    const pattern =
        getBestRetentionPattern({

            goal,

            framework,

            platform

        });

    const patternBreaks =
        getPatternBreaks(duration);

const cta =
    getBestCTA({

        goal,

        framework,

        psychology,

        platform,

        topic

    });

    /*
    =========================================
    Stage 3
    Final Creative Plan
    =========================================
    */

    return {

        metadata: {

            version: "1.0",

            createdAt:
                new Date().toISOString()

        },

        input: {

            niche,

            platform,

            duration,

            dnaMode

        },

        goal,

        audience,

        topic,

        strategy: {

            framework,

            psychology,

            hook,

            retention: {

                pattern,

                breaks: patternBreaks

            },

            cta

        },

        runtime: {

            plannerExecuted: false,

            writerExecuted: false,

            editorExecuted: false,

            judgeExecuted: false

        }

    };

}