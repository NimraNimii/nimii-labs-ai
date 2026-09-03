// server/controllers/rewriteController.js

import { rewriteScript } from "../ai/rewrite/rewriteService.js";
import REWRITE_TYPES from "../ai/rewrite/rewriteTypes.js";

export const rewriteController = async (req, res) => {

    try {

        // ==========================================
        // REQUEST DATA
        // ==========================================

        const {
            script,
            analysis,
            rewriteType,

            // Optional context
            creativePlan,
            blueprint,
            platform,
            dnaMode,
        } = req.body;


        // ==========================================
        // BASIC VALIDATION
        // ==========================================

        if (
            !script ||
            typeof script !== "object"
        ) {
            return res.status(400).json({
                success: false,
                error: "A valid script object is required.",
            });
        }


        if (
            !analysis ||
            typeof analysis !== "object"
        ) {
            return res.status(400).json({
                success: false,
                error: "A valid analysis object is required.",
            });
        }


        if (!rewriteType) {
            return res.status(400).json({
                success: false,
                error: "Rewrite type is required.",
            });
        }


        // ==========================================
        // VALIDATE REWRITE TYPE
        // ==========================================

        const validTypes =
            Object.values(REWRITE_TYPES);

        if (!validTypes.includes(rewriteType)) {

            return res.status(400).json({

                success: false,

                error: "Invalid rewrite type.",

                validTypes,

            });

        }


        // ==========================================
        // NORMALIZE TARGET
        // ==========================================

        const target =
            String(rewriteType)
                .trim()
                .toLowerCase();


        // ==========================================
        // DEBUG LOGGING
        // ==========================================

        console.log("");
        console.log("==========================================");
        console.log("        REWRITE REQUEST");
        console.log("==========================================");

        console.log("Rewrite Type:", rewriteType);
        console.log("Target:", target);

        console.log("");
        console.log("===== SCRIPT =====");

        console.dir(
            script,
            { depth: null }
        );

        console.log("");
        console.log("===== ANALYSIS =====");

        console.dir(
            analysis,
            { depth: null }
        );

        console.log("");
        console.log("===== CONTEXT =====");

        console.log(
            "Platform:",
            platform || "TikTok"
        );

        console.log(
            "DNA Mode:",
            dnaMode || "Teach Hard"
        );

        console.log(
            "Creative Plan:",
            Boolean(creativePlan)
        );

        console.log(
            "Blueprint:",
            Boolean(blueprint)
        );


        // ==========================================
        // REWRITE
        // ==========================================

        const rewrittenScript =
            await rewriteScript({

                script,

                analysis,

                rewriteType,

                target,

                creativePlan,

                blueprint,

                platform:
                    platform || "TikTok",

                dnaMode:
                    dnaMode || "Teach Hard",

            });


        // ==========================================
        // VALIDATE SERVICE RESPONSE
        // ==========================================

        if (
            !rewrittenScript ||
            typeof rewrittenScript !== "object"
        ) {

            throw new Error(
                "Rewrite service returned an invalid response."
            );

        }


        // ==========================================
        // SUCCESS
        // ==========================================

        console.log("");
        console.log("===== REWRITE SUCCESS =====");

        console.dir(
            rewrittenScript,
            { depth: null }
        );


        return res.status(200).json({

            success: true,

            rewriteType,

            target,

            data: rewrittenScript,

        });


    } catch (error) {

        // ==========================================
        // ERROR HANDLING
        // ==========================================

        console.error("");
        console.error("==========================================");
        console.error("         REWRITE CONTROLLER ERROR");
        console.error("==========================================");

        console.error(
            "Message:",
            error?.message
        );

        console.error(
            "Stack:",
            error?.stack
        );

        console.error(
            "Status:",
            error?.status
        );

        console.error(
            "Code:",
            error?.code
        );

        console.error(
            "=========================================="
        );


        return res.status(
            error?.status >= 400 &&
            error?.status < 600
                ? error.status
                : 500
        ).json({

            success: false,

            error:
                error?.message ||
                "Rewrite failed.",

        });

    }

};