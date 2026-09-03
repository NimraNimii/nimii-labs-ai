/*
=========================================================

NIMII LABS

CTA Selector

Purpose:
Chooses the strongest CTA using
the CTA Library.

=========================================================
*/

import {
    rankCTAs
} from "../brain/ctaLibrary.js";

export function selectCTA({

    goal,

    framework,

    psychology,

    platform

}) {

    const rankedCTAs =
        rankCTAs({

            goal,

            framework,

            psychology,

            platform

        });

    return {

        selected: rankedCTAs[0],

        alternatives: rankedCTAs.slice(1, 3)

    };

}