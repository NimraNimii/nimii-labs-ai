/*
=========================================================
NIMII LABS

Creative Brain v1

Creative Validator

Purpose:
Ensures every Creative Plan is internally
consistent before reaching the Planner AI.

No AI.
No prompts.

=========================================================
*/

export function validateCreativePlan(plan) {

    const errors = [];
    const warnings = [];

    /*
    =====================================================
    Required Objects
    =====================================================
    */

    if (!plan.goal) {

        errors.push("Creator Goal is missing.");

    }

    if (!plan.audience) {

        errors.push("Audience State is missing.");

    }

    if (!plan.topic) {

        errors.push("Topic Classification is missing.");

    }

    if (!plan.strategy?.framework) {

        errors.push("Framework is missing.");

    }

    if (!plan.strategy?.psychology) {

        errors.push("Psychology is missing.");

    }

    if (!plan.strategy?.hook) {

        errors.push("Hook is missing.");

    }

    if (!plan.strategy?.retention) {

        errors.push("Retention Strategy is missing.");

    }

    if (!plan.strategy?.cta) {

        errors.push("CTA Strategy is missing.");

    }

    /*
    =====================================================
    Framework Validation
    =====================================================
    */

    if (

        plan.strategy.framework &&

        !plan.strategy.framework.preferredGoals?.includes(

            plan.goal.id

        )

    ) {

        warnings.push(

            "Framework is not an ideal match for the selected Creator Goal."

        );

    }

    /*
    =====================================================
    Psychology Validation
    =====================================================
    */

    if (

        plan.strategy.psychology &&

        !plan.strategy.psychology.preferredFrameworks?.includes(

            plan.strategy.framework.id

        )

    ) {

        warnings.push(

            "Psychology does not naturally support the chosen Framework."

        );

    }

    /*
    =====================================================
    Hook Validation
    =====================================================
    */

    if (

        plan.strategy.hook &&

        !plan.strategy.hook.preferredPsychology?.includes(

            plan.strategy.psychology.id

        )

    ) {

        warnings.push(

            "Hook does not reinforce the selected Psychology."

        );

    }

    /*
    =====================================================
    CTA Validation
    =====================================================
    */

    if (

        plan.strategy.cta &&

        !plan.strategy.cta.preferredGoals?.includes(

            plan.goal.id

        )

    ) {

        warnings.push(

            "CTA does not align with the Creator Goal."

        );

    }

    /*
    =====================================================
    Platform Validation
    =====================================================
    */

    if (

        plan.strategy.cta &&

        !plan.strategy.cta.preferredPlatforms?.includes(

            plan.input.platform

        )

    ) {

        warnings.push(

            "CTA is not optimized for the selected platform."

        );

    }

    /*
    =====================================================
    Pattern Validation
    =====================================================
    */

    if (

        !plan.strategy.retention.breaks ||

        plan.strategy.retention.breaks.length === 0

    ) {

        warnings.push(

            "Retention plan has no pattern interruptions."

        );

    }

    /*
    =====================================================
    Final Result
    =====================================================
    */

    return {

        valid:

            errors.length === 0,

        score:

            Math.max(

                0,

                100 -

                (errors.length * 25) -

                (warnings.length * 5)

            ),

        errors,

        warnings

    };

}