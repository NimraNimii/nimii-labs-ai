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

Your ONLY job is to create a strong,
clear and compelling hook.

The hook should make the topic immediately
interesting without making claims about
future platform performance.

The hook should work naturally with the
selected content angle and audience.

==========================================
CONTENT ANALYSIS
==========================================

${JSON.stringify(analysis, null, 2)}

==========================================
SELECTED CONTENT ANGLE
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
Emerging Trend

An important change is already happening...

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

EVALUATION

Evaluate every hook internally.

Criteria:

Clarity

Curiosity

Originality

Platform Fit

DNA Fit

Audience Relevance

Choose ONLY the strongest hook.

==========================================
RETURN FORMAT
==========================================

Return ONLY valid JSON.

Example:

{
  "hook":"You're using AI completely wrong.",
  "hookType":"Contrarian",
  "reason":"Creates immediate curiosity through a clear contrast."
}

Do not return the rejected hooks.
`;
}