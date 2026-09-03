/*
=========================================================

NIMII LABS

Planner Schema

Purpose:
Defines the required structure of every
Creative Blueprint produced by the Planner.

This file contains NO AI.

=========================================================
*/

export const plannerSchema = {

    audienceInsight: "",

    coreMessage: "",

    beliefToChange: "",

    creativeDirection: "",

    openingStrategy: "",

    hookExecution: "",

    storyFlow: [

        {

            step: 1,

            title: "",

            purpose: "",

            emotion: ""

        }

    ],

    patternInterrupts: [

        {

            position: "",

            trigger: "",

            purpose: ""

        }

    ],

    emotionJourney: [

        ""

    ],

    ctaExecution: "",

    writerInstructions: [

        ""

    ]

};

/*
=========================================================
Required Keys

Used by plannerValidator.js
=========================================================
*/

export const requiredPlannerFields = [

    "audienceInsight",

    "coreMessage",

    "beliefToChange",

    "creativeDirection",

    "openingStrategy",

    "hookExecution",

    "storyFlow",

    "patternInterrupts",

    "emotionJourney",

    "ctaExecution",

    "writerInstructions"

];