/*
=========================================================

NIMII LABS

Blueprint Builder

Purpose:
Enhance the Planner Blueprint with system metadata.

The Planner Blueprint remains the single source of truth.

This becomes the Writer AI contract.

=========================================================
*/


export function buildBlueprint({

    creativePlan,

    blueprint

}) {

    return {

        ...blueprint,

        metadata: {

            version: "1.0",

            createdAt: new Date().toISOString()

        },

        input: creativePlan.input,

        goal: creativePlan.goal,

        audience: creativePlan.audience,

        topic: creativePlan.topic,

        strategy: creativePlan.strategy

    };

}