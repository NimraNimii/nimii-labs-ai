// server/ai/contracts/pipelineContract.js

export function createPipelineResult() {
  return {
    thinking: {
      analysis: "",
      audience: "",
      angle: "",
      hookIdeas: [],
      keywords: [],
      platform: "",
      dnaMode: "",
    },

    generatedScripts: [],

    reviewedScripts: [],

    winner: {
      title: "",
      hook: "",
      script: "",
      cta: "",
      hashtags: [],
    },

    metrics: {
      viralScore: 0,
      confidence: 0,
      winnerModel: "",
    },
  };
}