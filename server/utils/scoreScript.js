export function scoreScript(script) {

  let score = 0;

  const text = script.toLowerCase();

  // Hook Detection
  if (
    text.includes("hook") ||
    text.includes("imagine") ||
    text.includes("what if") ||
    text.includes("nobody talks about")
  ) {
    score += 20;
  }

  // CTA Detection
  if (
    text.includes("cta") ||
    text.includes("follow") ||
    text.includes("subscribe") ||
    text.includes("comment") ||
    text.includes("save this")
  ) {
    score += 15;
  }

  // Curiosity Loops
  const curiosityWords = [
    "secret",
    "mistake",
    "truth",
    "nobody",
    "why",
    "how",
    "what if",
    "hidden"
  ];

  curiosityWords.forEach(word => {
    if (text.includes(word)) {
      score += 3;
    }
  });

  // Questions Increase Retention
  const questionCount =
    (script.match(/\?/g) || []).length;

  score += Math.min(questionCount * 2, 10);

  // Script Length
  if (script.length > 500) score += 5;
  if (script.length > 800) score += 10;
  if (script.length > 1200) score += 10;

  // Emojis
  const emojiCount =
    (script.match(
      /[\u{1F300}-\u{1FAFF}]/gu
    ) || []).length;

  score += Math.min(
    emojiCount * 2,
    10
  );

  // Storytelling
  if (
    text.includes("story") ||
    text.includes("narrator") ||
    text.includes("once") ||
    text.includes("one day")
  ) {
    score += 10;
  }

  // Scene Structure
  if (
    script.includes("(0s-") ||
    script.includes("(3s-") ||
    script.includes("(5s-")
  ) {
    score += 10;
  }

  // Pattern Interrupts
  if (
    text.includes("stop scrolling") ||
    text.includes("wait") ||
    text.includes("hold on") ||
    text.includes("before you")
  ) {
    score += 10;
  }

  return Math.min(score, 100);
}