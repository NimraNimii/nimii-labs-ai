// src/prompts/hookGenerator.js

export function buildHookGeneratorPrompt({
  analysis,
  angle,
  platform,
  dnaMode,
}) {
  return `
==========================================
NIMII AI — HOOK GENERATOR
==========================================

You are NOT writing the script.

Your ONLY job is to create the most
scroll-stopping hook possible.

You are competing against millions of videos.

If the hook fails,

the script doesn't matter.

==========================================
CONTENT ANALYSIS
==========================================

${JSON.stringify(analysis, null, 2)}

==========================================
SELECTED VIRAL ANGLE
==========================================

${JSON.stringify(angle, null, 2)}

==========================================
PLATFORM
==========================================

${platform}

==========================================
DNA MODE
==========================================

${dnaMode}

==========================================
YOUR TASK
==========================================

Generate TEN completely different hooks.

Every hook should attack
the topic from a different angle.

Never repeat wording.

Never use the same structure.

==========================================
HOOK TYPES
==========================================

Include variations such as:

1.
Curiosity

Example:

Nobody is talking about this...

------------------------

2.
Contrarian

Everyone thinks this.

They're wrong.

------------------------

3.
Fear

You're making this mistake.

------------------------

4.
Secret

Here's what nobody tells you...

------------------------

5.
Prediction

Within two years...

------------------------

6.
Challenge

Can you do this?

------------------------

7.
Story

Yesterday I realized...

------------------------

8.
Comparison

ChatGPT vs AI Agents.

------------------------

9.
Shocking Fact

99% of people...

------------------------

10.
Question

Would you trust AI with this?

==========================================
RULES
==========================================

Maximum 10 words.

Maximum 2 lines.

No introductions.

No greetings.

No "Did you know"

No "Today"

No "Welcome"

No filler.

Immediately create curiosity.

==========================================
SCORING
==========================================

Score every hook internally.

Criteria:

Scroll Stopping

Curiosity

Retention

Originality

Platform Fit

DNA Fit

Choose ONLY the highest scoring hook.

==========================================
RETURN FORMAT
==========================================

Return ONLY valid JSON.

Example:

{
  "hook":"You're using AI completely wrong.",
  "hookType":"Contrarian",
  "confidence":96,
  "reason":"Strong curiosity with immediate conflict."
}

Do not return the rejected hooks.
`;
}