import { generateAI } from "../providers/providerManager.js";
import { WRITER_PROVIDERS } from "../config/providers.js";

import { buildWriterPrompt } from "../writer/writerPrompt.js";
import { parseJson } from "../helpers/parseJson.js";
import { normalizeScript } from "../helpers/normalizeScript.js";

export async function runGenerationStage({
    creativePlan,
    blueprint,
}) {




/*
=====================================
AI Providers
=====================================
*/

const providers = WRITER_PROVIDERS.filter(
    provider => provider.enabled
);

const generatedScripts = [];


    /*
    =====================================
    Generate Scripts
    =====================================
    */

  for (const provider of providers) {

    const prompt = buildWriterPrompt({
        creativePlan,
        blueprint,
        writer: provider.writer,
    });

    console.log(`===== ${provider.writer.toUpperCase()} =====`);

    try {

        const rawResponse = await generateAI({
            provider: provider.provider,
            prompt,
        });

        const parsed = parseJson(rawResponse);
        const normalized = normalizeScript(parsed);

        generatedScripts.push({
            writer: provider.writer,
            provider: provider.provider,
            generatedAt: new Date().toISOString(),
            script: normalized,
        });

        console.log(`✅ ${provider.writer} Success`);

    } catch (error) {

        console.error(`❌ ${provider.writer} Failed`);
        console.error(error.message);

    }

}
    /*
    =====================================
    Validation
    =====================================
    */

    if (generatedScripts.length === 0) {

        throw new Error(
            "All AI providers failed."
        );

    }

    console.log(
        `✅ ${generatedScripts.length} provider(s) generated scripts.`
    );

    return generatedScripts;

}