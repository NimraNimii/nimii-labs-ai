// server/ai/scoring/finalScore.js

import { scoreScript } from "./scriptScore.js";
import { qualityScore } from "./qualityScore.js";

export function finalScore(script) {

    const content =
        scoreScript(script);

    const quality =
        qualityScore(script);

    return {

        content,

        quality,

        final: Math.round(

            (content * 0.6) +

            (quality * 0.4)

        )

    };

}