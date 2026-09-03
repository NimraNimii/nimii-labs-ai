const sanitizeText = (text = "") => {
  if (typeof text !== "string") return text;

  return text
    .replace(/\s{2,}/g, " ")
    .trim();
};

export default function sanitizeRewrite(rewritten = {}) {

    return {
        ...rewritten,

        title: sanitizeText(rewritten.title),

        hook: sanitizeText(rewritten.hook),

        script: sanitizeText(rewritten.script),

        cta: sanitizeText(rewritten.cta),

        hashtags: Array.isArray(rewritten.hashtags)
            ? rewritten.hashtags.map(sanitizeText)
            : [],

        reason: rewritten.reason
            ? {
                  ...rewritten.reason,

                  summary: sanitizeText(rewritten.reason.summary),

                  improvements: Array.isArray(rewritten.reason.improvements)
                      ? rewritten.reason.improvements.map(sanitizeText)
                      : []
              }
            : undefined
    };
}