/*
=========================================================

NIMII LABS

Writer Stage

Purpose:
Converts the Creative Blueprint into a Writer
Prompt and passes it to the Generation Stage.

The Writer Stage DOES NOT call AI directly.

=========================================================
*/

import { buildWriterPrompt } from "../writer/writerPrompt.js";

export async function runWriterStage({

    creativePlan,

    blueprint,

    generateScripts

}) {

    try {

        /*
        ==========================================
        STEP 1

        Build Writer Prompt
        ==========================================
        */

   const prompt = buildWriterPrompt({
    creativePlan,
    blueprint,
    writer: provider.writer,
});

        /*
        ==========================================
        STEP 2

        Generate Scripts

        Uses existing Generation Stage

        ==========================================
        */

        const scripts = await generateScripts(

            prompt

        );

        /*
        ==========================================
        Return

        ==========================================
        */

return {

    scripts,

    ...(process.env.NODE_ENV !== "production" && {

        prompt

    })

};

    }

    catch (error) {

        console.error(

            "Writer Stage Error:",

            error

        );

        throw error;

    }

}