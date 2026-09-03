import generateAnalysis from "../analysis/generateAnalysis.js";

export async function runCritiqueStage({
  script,
  scores,
}) {
  if (!script) {
    throw new Error("Critique Stage: Missing script.");
  }

  if (!scores) {
    throw new Error("Critique Stage: Missing scores.");
  }

  const analysis = generateAnalysis(scores);

  return {
    ...analysis,
    script,
  };
}