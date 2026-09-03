/*
=========================================================

NIMII LABS

Hook Selector

Purpose:
Uses the Hook Library to choose the best hook
for the current Creative Plan.

=========================================================
*/

import {
    rankHooks
} from "../brain/hookLibrary.js";

export function selectHook({

    goal,

    framework,

    psychology

}) {

    const rankedHooks = rankHooks({

        goal,

        framework,

        psychology

    });

    return {

        selected: rankedHooks[0],

        alternatives: rankedHooks.slice(1, 3)

    };

}