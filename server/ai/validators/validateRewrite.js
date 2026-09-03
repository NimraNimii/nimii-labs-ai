const bannedPatterns = [
  /\b\d+x\b/gi,
  /\b\d+\s*%\b/gi,

  /\bI tested it\b/gi,
  /\btested \d+ times\b/gi,
  /\bfrom my experience\b/gi,

  /\bscientists\b/gi,
  /\bresearch shows\b/gi,
  /\bstudies show\b/gi,
  /\baccording to research\b/gi,
  /\bclinical studies\b/gi,
  /\bscientifically proven\b/gi,
  /\bexperts say\b/gi,

  /\bbrain hack\b/gi,
  /\bdopamine\b/gi,
  /\bserotonin\b/gi,
  /\bchemical reaction\b/gi,
  /\brewire your brain\b/gi,
  /\bbrain switch\b/gi,
  /\bfocus switch\b/gi,

  /\bunknown formula\b/gi,
  /\bsecret formula\b/gi,
  /\bsecret algorithm\b/gi,
  /\bviral formula\b/gi,

  /\bguaranteed\b/gi,
  /\bnever fail\b/gi,
  /\binstant results\b/gi,
  /\bovernight\b/gi,

  /\bI'll DM you\b/gi,
  /\bI will DM you\b/gi,
  /\bmessage me\b/gi,
  /\bDM me\b/gi,
];


function containsHallucination(text = "") {
  if (typeof text !== "string") return false;

  return bannedPatterns.some((pattern) => {
    pattern.lastIndex = 0;
    return pattern.test(text);
  });
}

function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && !value.trim())
  );
}

export default function validateRewrite(
  rewrite = {},
  rewriteType = "improve_script"
) {
  const invalidFields = [];

  // ==========================================
  // TARGET FIELDS
  // ==========================================

  const fieldsToValidate = {
    improve_hook: ["hook"],
    improve_script: ["script"],
    improve_cta: ["cta"],
    improve_title: ["title"],
    improve_hashtags: ["hashtags"],

    improve_retention: ["script"],
    improve_curiosity: ["script"],
    improve_emotion: ["script"],
    improve_platform: ["script"],
  };

  

const target = targets[rewriteType];

if (!target) {
    throw new Error(`Unsupported rewrite type: ${rewriteType}`);
}

  // ==========================================
  // TARGET FIELD MUST EXIST
  // ==========================================

  for (const field of fields) {
    if (isEmpty(rewrite[field])) {
      throw new Error(
        `Invalid rewrite: target field "${field}" is empty.`
      );
    }
  }

  // ==========================================
  // HALLUCINATION CHECK
  // ==========================================

  for (const field of fields) {
    const value = rewrite[field];

    if (Array.isArray(value)) {
      if (
        value.some(
          (item) =>
            typeof item === "string" &&
            containsHallucination(item)
        )
      ) {
        invalidFields.push(field);
      }
    } else if (containsHallucination(value)) {
      invalidFields.push(field);
    }
  }

  if (invalidFields.length) {
    throw new Error(
      `Hallucinated content detected in: ${invalidFields.join(", ")}`
    );
  }

  // ==========================================
  // SUCCESS
  // ==========================================

  return rewrite;
}