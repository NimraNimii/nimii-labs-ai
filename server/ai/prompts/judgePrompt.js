// server/ai/prompts/judgePrompt.js

export function buildJudgePrompt(candidates) {

    return `
You are Nimii Labs' final AI script judge.

Choose the strongest candidate.

RETURN ONLY THIS JSON FORMAT:

{
  "winner": 1,
  "score": 95,
  "reason": "Strong hook and high retention potential."
}

STRICT RULES:

1. winner MUST be a candidate ID.
2. score MUST be an integer from 0 to 100.
3. reason MUST be 15 words or fewer.
4. Do NOT return title.
5. Do NOT return hook.
6. Do NOT return script.
7. Do NOT return CTA.
8. Do NOT return hashtags.
9. Do NOT explain your decision outside the JSON.
10. Do NOT use markdown.
11. Do NOT use code fences.
12. Return exactly ONE JSON object.

Evaluate:

- Hook strength
- Curiosity
- Retention
- Emotional impact
- Originality
- Clarity
- Platform fit
- CTA quality
- Viral potential

Candidates:

${JSON.stringify(candidates)}
`.trim();
}