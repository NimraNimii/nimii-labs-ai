/*
=========================================================

NIMII LABS

Pattern Selector

Purpose:
Chooses the best retention pattern using
the Pattern Library.

=========================================================
*/

import {
    rankRetentionPatterns,
    getPatternBreaks
} from "../brain/patternLibrary.js";

export function selectPattern({

    goal,

    framework,

    platform,

    duration

}) {

    const rankedPatterns =
        rankRetentionPatterns({

            goal,

            framework,

            platform

        });

    return {

        selected: rankedPatterns[0],

        alternatives: rankedPatterns.slice(1, 3),

        breaks: getPatternBreaks(duration)

    };

}