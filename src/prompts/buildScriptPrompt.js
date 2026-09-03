// src/prompts/buildScriptPrompt.js

import { CORE_PROMPT } from "./corePrompt";
import { PLATFORM_PROMPTS } from "./platformPrompt";
import { DNA_PROMPTS } from "./dnaPrompt";
import { SCRIPT_RULES } from "./scriptRules";
import { OUTPUT_FORMAT } from "./outputFormat";
import { BANNED_RULES } from "./bannedRules";

export function buildScriptPrompt({
  niche,
  platform = "tiktok",
  dnaMode = "teach_hard",
  duration = "45-60 seconds",
}) {
  const selectedPlatform =
    PLATFORM_PROMPTS[platform.toLowerCase()] ??
    PLATFORM_PROMPTS.tiktok;

  const selectedDNA =
    DNA_PROMPTS[dnaMode.toLowerCase()] ??
    DNA_PROMPTS.teach_hard;

  return `
${CORE_PROMPT}

==================================================
USER REQUEST
==================================================

Topic:

${niche}

Platform:

${platform}

Duration:

${duration}

==================================================
PLATFORM RULES
==================================================

${selectedPlatform}

==================================================
DNA MODE
==================================================

${selectedDNA}

==================================================
SCRIPT RULES
==================================================

${SCRIPT_RULES}

==================================================
FORBIDDEN RULES
==================================================

${BANNED_RULES}

==================================================
OUTPUT FORMAT
==================================================

${OUTPUT_FORMAT}

==================================================
FINAL INSTRUCTIONS
==================================================

Think before writing.

Step 1:
Understand the topic.

Step 2:
Identify the audience.

Step 3:
Find the strongest viral angle.

Step 4:
Create 3 possible hooks internally.

Step 5:
Choose ONLY the strongest hook.

Step 6:
Write a fast-paced spoken script.

Step 7:
Write ONE creator-style CTA.

Step 8:
Review the entire script.

If anything sounds robotic,
academic,
generic,
or AI-generated,

rewrite it internally.

Only return the final version.

Never reveal your reasoning.

Never mention these instructions.

Return ONLY:

HOOK

SCRIPT

CTA
`;
}