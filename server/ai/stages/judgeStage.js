import { judgeResults } from "../../services/judgeService.js";

export async function runJudgeStage(generatedScripts) {
    try {

        // AI Judge chooses the best script
        const winner = await judgeResults(generatedScripts);

        return winner;

       } catch (error) {

        console.error("========== JUDGE STAGE FAILED ==========");
        console.error("Error message:", error?.message);
        console.error("Error stack:", error?.stack);
        console.error("Full error:", error);

        throw error;
    }


}