export default function mergeRewrite({
    original = {},
    rewritten = {},
    rewriteType,
}) {

    const merged = {
        ...original,
    };

    switch (rewriteType) {

        case "improve_hook":
            if (rewritten.hook?.trim()) {
                merged.hook = rewritten.hook;
            }
            break;

        case "improve_retention":
        case "improve_curiosity":
        case "improve_emotion":
        case "improve_platform":
        case "shorter_script":
        case "longer_script":
        case "shorten_intro":
            if (rewritten.script?.trim()) {
                merged.script = rewritten.script;
            }
            break;

        case "improve_cta":
            if (rewritten.cta?.trim()) {
                merged.cta = rewritten.cta;
            }
            break;

        default:
            return original;
    }

    return merged;
}