/*
=========================================================
NIMII LABS

Planner Schema

Purpose:
Defines the exact Creative Blueprint contract
returned by the Planner.

The Planner plans execution only.
It does NOT write dialogue.
=========================================================
*/

export const plannerSchema = {
  audienceInsight: "",

  coreMessage: "",

  creativeDirection: {
    objective: "",
    primaryAngle: "",
    keyConflict: "",
    desiredTakeaway: "",
  },

  narrative: {
    type: "",
    storySource: "",
    pointOfView: "",
    speakerRole: "",
    allowInventedDetails: false,
  },

  openingPlan: {
    purpose: "",
    style: "",
    emotion: "",
  },

  hookPlan: {
    type: "",
    goal: "",
    topic: "",
    emotion: "",
    curiosityGap: "",
    primaryTrigger: "",
    openingPattern: "",
    maxWords: 12,
    mustCreateImmediateCuriosity: true,
    mustAvoidGenericOpenings: true,
    avoid: [],
  },

  storyPlan: {
    structure: [
      "Hook",
      "Problem",
      "Insight",
      "Example",
      "Lesson",
      "CTA",
    ],
    pace: "fast",
    transitionStyle: "natural",
  },

  patternInterrupts: [
    {
      position: "",
      purpose: "",
    },
  ],

  emotionJourney: [""],

  ctaPlan: {
    goal: "",
    style: "",
    tone: "",
    conversionAction: "",
    urgencyLevel: "",
    reward: "",
    allowIntentChange: true,
  },

  writerConstraints: {
    tone: "",
    readingLevel: "",
    sentenceLength: "",
    avoid: [],
    mustInclude: [],
    mustNotInclude: [],
  },
};

export const requiredPlannerFields = [
  "audienceInsight",
  "coreMessage",
  "creativeDirection",
  "narrative",
  "openingPlan",
  "hookPlan",
  "storyPlan",
  "patternInterrupts",
  "emotionJourney",
  "ctaPlan",
  "writerConstraints",
];