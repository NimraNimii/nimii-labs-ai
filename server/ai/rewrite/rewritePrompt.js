// server/ai/prompts/rewritePrompt.js

/**
 * NIMII LABS
 * TARGETED SCRIPT REWRITE PROMPT
 *
 * Purpose:
 * Rewrite ONLY the section selected by the user.
 *
 * Supported targets:
 * - hook
 * - retention
 * - curiosity
 * - emotion
 * - cta
 * - platform
 *
 * Critical rule:
 * The model must preserve the original concept, topic,
 * factual claims, story, strategy, and authenticity.
 */

export function buildRewritePrompt({
    title = "",
    hook = "",
    script = "",
    cta = "",
    hashtags = [],
    target = "hook",

    creativePlan = null,
    blueprint = null,

    platform = "TikTok",
    dnaMode = "Teach Hard",

    analysis = null,
}) {

    // -----------------------------------------
    // NORMALIZE TARGET
    // -----------------------------------------

   const normalizedTarget =
    String(target || "hook")
        .trim()
        .toLowerCase()
        .replace(/^improve_/, "");


    // -----------------------------------------
    // EXTRACT STRATEGY
    // -----------------------------------------

    const strategy = {
        framework:
            creativePlan?.strategy?.framework?.name || "",

        psychology:
            creativePlan?.strategy?.psychology?.name || "",

        hook:
            creativePlan?.strategy?.hook?.name || "",

        retention:
            creativePlan?.strategy?.retention?.pattern?.name || "",

        cta:
            creativePlan?.strategy?.cta?.name || "",
    };


    // -----------------------------------------
    // EXTRACT BLUEPRINT
    // -----------------------------------------

    const hookPlan =
        blueprint?.hookPlan || {};

    const storyPlan =
        blueprint?.storyPlan || {};

    const ctaPlan =
        blueprint?.ctaPlan || {};

    const writerConstraints =
        blueprint?.writerConstraints || {};


    // -----------------------------------------
    // ANALYSIS TARGET INFORMATION
    // -----------------------------------------

    const targetScore =
        analysis?.scores?.[normalizedTarget] ?? "";

    const targetWeakness =
        analysis?.weaknesses?.find(
            item =>
                item?.type?.toLowerCase() ===
                normalizedTarget
        );


    const targetImprovement =
        analysis?.improvements?.find(
            item =>
                item?.type?.toLowerCase() ===
                normalizedTarget
        );


    // -----------------------------------------
    // HASHTAGS
    // -----------------------------------------

    const hashtagString = Array.isArray(hashtags)
        ? hashtags.join(", ")
        : String(hashtags || "");


    // -----------------------------------------
    // TARGET INSTRUCTIONS
    // -----------------------------------------

    const targetInstructions = {

        hook: `
TARGET: HOOK

Rewrite ONLY the hook.

Keep:
- the same topic
- the same concept
- the same hook strategy
- the same emotional direction
- the same story

Strengthen:
- immediate attention
- curiosity
- tension
- specificity
- natural creator voice

The hook must create curiosity without revealing the payoff.

Respect the existing hook plan.

Maximum hook length:
${hookPlan.maxWords || 15} words.

Do NOT turn the hook into:
- clickbait
- fake statistics
- unsupported claims
- exaggerated promises
- generic motivational language
`,

        retention: `
TARGET: RETENTION

Improve ONLY the script's retention flow.

Keep:
- the same topic
- the same story
- the same claims
- the same examples
- the same conclusion

Improve:
- pacing
- sentence progression
- transitions
- curiosity loops
- pattern interrupts
- unnecessary repetition

Do NOT introduce a new story.

Do NOT add facts.

Do NOT add statistics.

Do NOT change the central message.
`,

       curiosity: `
TARGET: CURIOSITY

Rewrite the SCRIPT to create stronger curiosity and open loops.

PRESERVE:
- the exact topic
- the original concept
- the same factual claims
- the same examples
- the same conclusion
- the same overall meaning

IMPROVE:
- curiosity gaps
- open loops
- unanswered questions
- information sequencing
- anticipation
- transitions that make the viewer want to hear the next sentence

IMPORTANT:
Make a NOTICEABLE improvement.

Do not simply replace words with synonyms.

The viewer should have a stronger reason to continue watching.

You MAY:
- delay an answer that is already contained in the original script
- move an existing explanation later when appropriate
- introduce rhetorical questions based only on existing information
- create tension between two existing ideas
- reveal information progressively

You MUST NOT:
- invent facts
- invent statistics
- invent secrets
- invent mysteries
- invent outcomes
- create fake suspense
- change the topic
- introduce a new story
- introduce a new product
- introduce unsupported claims

Never create curiosity by pretending there is information that does not exist in the original script.
`,

emotion: `
TARGET: EMOTION

Rewrite the SCRIPT to make its emotional impact noticeably stronger.

The rewritten script MUST remain about the exact same topic and preserve the same factual information, examples, and central message.

PRESERVE:
- the same topic
- the same concept
- the same factual claims
- the same examples
- the same conclusion
- any genuine personal experience already present

IMPROVE:
- emotional tension
- relatability
- human stakes
- consequences that are already implied by the original content
- conversational language
- emotional transitions
- moments that make the viewer care about the problem

IMPORTANT:
Make a NOTICEABLE improvement.

Do not merely replace a few words with synonyms.

Strengthen the emotional delivery throughout the existing script while keeping the same information.

You MAY:
- rephrase sentences
- reorder existing sentences when it improves emotional flow
- make existing consequences clearer
- turn flat statements into more relatable phrasing
- add rhetorical questions when they do not introduce new facts
- emphasize emotions already supported by the original content

You MUST NOT:
- invent a personal experience
- invent feelings
- invent reactions
- invent consequences
- invent statistics
- invent facts
- invent a success story
- add a new character
- add a new event
- add a new topic
- add unsupported claims

If the original script contains no personal experience, DO NOT write in first person.

Never write:
"I tried..."
"I discovered..."
"I learned..."
"When I..."
unless that exact experience already exists in the original script.

The final script should sound like the same creator saying the same thing, but with significantly stronger emotional impact.
`,



        cta: `
TARGET: CTA

Rewrite ONLY the CTA.

Preserve the original conversion action.

Original CTA:

${cta}

The action must remain the same unless
the Creative Plan explicitly requires another action.

For example:

FOLLOW → FOLLOW

SAVE → SAVE

SHARE → SHARE

COMMENT → COMMENT

Improve:
- clarity
- motivation
- specificity
- natural creator voice
- reason to act

The CTA should feel earned by the content.

Do NOT introduce:
- products
- purchases
- fake urgency
- fake scarcity
- unrelated actions

The CTA must remain consistent with
the Creative Plan.
`,

        platform: `
TARGET: PLATFORM FIT

Improve ONLY the wording and pacing
necessary for the selected platform.

Platform:

${platform}

Preserve:
- topic
- story
- facts
- concept
- strategy
- CTA intent

Optimize:
- pacing
- sentence length
- conversational delivery
- platform-native language
- spoken rhythm

Do NOT change the meaning.
Do NOT create a new concept.
`,
    };


const selectedInstructions =
    targetInstructions[normalizedTarget];

if (!selectedInstructions) {
    throw new Error(
        `Unsupported rewrite target: ${normalizedTarget}`
    );
}


       // -----------------------------------------
    // BUILD COMPACT TARGETED PROMPT
    // -----------------------------------------

    const originalTarget =
        normalizedTarget === "hook"
            ? hook
            : normalizedTarget === "cta"
                ? cta
                : script;

    const weakness =
        targetWeakness?.description || "";

    const improvement =
        targetImprovement?.description || "";

   const strategyHintMap = {
    hook: strategy.hook,
    retention: strategy.retention,
    curiosity: strategy.psychology,
    emotion: strategy.psychology,
    cta: strategy.cta,
    platform: strategy.framework,
};

const strategyHint =
    strategyHintMap[normalizedTarget] || "";

    
    return `
You are Nimii Labs AI Rewrite Editor.

Rewrite ONLY the selected section.

TARGET: ${normalizedTarget}

PLATFORM: ${platform}

DNA MODE: ${dnaMode}

ORIGINAL CONTENT:
${originalTarget}

CURRENT SCORE:
${targetScore}

CURRENT WEAKNESS:
${weakness}

RECOMMENDED IMPROVEMENT:
${improvement}

STRATEGY:
${strategyHint}

RULES:

1. Rewrite ONLY the TARGET.
2. Preserve the original topic.
3. Preserve the original meaning.
4. Preserve existing factual claims.
5. Do NOT invent facts.
6. Do NOT invent statistics.
7. Do NOT invent personal experiences.
8. Do NOT introduce a new story.
9. Do NOT introduce a new product.
10. Do NOT introduce a new subject.
11. Keep the creator's natural voice.
12. Make the result clear, engaging and conversational.
13. Do not use robotic AI language.
14. Do not use unnecessary filler.
15. Do not use fake clickbait.

${selectedInstructions}

OUTPUT FORMAT — CRITICAL:

Return ONLY one JSON object.

DO NOT return:
- explanations
- safety messages
- markdown
- code fences
- analysis
- notes
- text before or after the JSON

Your entire response MUST be valid JSON.

Required exact structure:

{
  "target": "${normalizedTarget}",
  "rewritten": "YOUR REWRITTEN CONTENT",
  "reason": "SHORT EXPLANATION"
}

The "target" value MUST be exactly:
"${normalizedTarget}"

The "rewritten" value MUST contain the improved ${normalizedTarget} content.

The "reason" value MUST briefly explain what was improved.

If the original content is already good, still rewrite it to make a meaningful improvement.

DO NOT output anything except the JSON object.


`;
}