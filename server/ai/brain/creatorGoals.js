/*
=========================================================
NIMII LABS
Creative Brain v1
Creator Goals Library
=========================================================

Purpose:
Defines WHY the creator is making the content.

This file contains NO prompts and NO AI logic.
It only stores structured creative knowledge that
other engines can use.

=========================================================
*/

export const CREATOR_GOALS = {

    COMMENTS: {

        id: "comments",

        name: "Increase Comments",

        description:
            "Encourage discussion, opinions, and debate.",

        successMetric:
            "Meaningful conversations",

        preferredEmotions: [
            "Curiosity",
            "Controversy",
            "Surprise"
        ],

        preferredFrameworks: [
            "Myth_to_Truth",
            "Mistake_to_Fix",
            "X_vs_Y"
        ],

        preferredHookTypes: [
            "Contrarian",
            "Question",
            "Hot_Take"
        ],

        preferredCTA: [
            "Opinion_Question",
            "Debate",
            "Agree_Disagree"
        ],

        avoidCTA: [
            "Follow",
            "Buy"
        ]

    },

    FOLLOWERS: {

        id: "followers",

        name: "Gain Followers",

        description:
            "Build long-term audience trust and encourage follows.",

        successMetric:
            "New Followers",

        preferredEmotions: [
            "Curiosity",
            "Trust",
            "Inspiration"
        ],

        preferredFrameworks: [
            "Story",
            "Before_After",
            "Transformation"
        ],

        preferredHookTypes: [
            "Curiosity",
            "Story",
            "Hidden_Truth"
        ],

        preferredCTA: [
            "Follow_For_Part2",
            "Follow_For_More"
        ],

        avoidCTA: [
            "Buy",
            "Comment"
        ]

    },

    AUTHORITY: {

        id: "authority",

        name: "Build Authority",

        description:
            "Position the creator as an expert.",

        successMetric:
            "Audience Trust",

        preferredEmotions: [
            "Confidence",
            "Respect"
        ],

        preferredFrameworks: [
            "Step_by_Step",
            "Explanation",
            "Case_Study"
        ],

        preferredHookTypes: [
            "Fact",
            "Expert_Insight",
            "Common_Mistake"
        ],

        preferredCTA: [
            "Save",
            "Share"
        ],

        avoidCTA: [
            "Controversy"
        ]

    },

    SHARES: {

        id: "shares",

        name: "Increase Shares",

        description:
            "Create content people naturally send to others.",

        successMetric:
            "Shares",

        preferredEmotions: [
            "Surprise",
            "Relatability",
            "Value"
        ],

        preferredFrameworks: [
            "Checklist",
            "Top_List",
            "Mistake_to_Fix"
        ],

        preferredHookTypes: [
            "You_Need_To_Know",
            "Everyone_Does_This_Wrong",
            "Hidden_Tip"
        ],

        preferredCTA: [
            "Share_With_A_Friend",
            "Send_This"
        ],

        avoidCTA: [
            "Buy"
        ]

    },

    SALES: {

        id: "sales",

        name: "Increase Sales",

        description:
            "Convert viewers into customers.",

        successMetric:
            "Conversions",

        preferredEmotions: [
            "Desire",
            "Trust",
            "Urgency"
        ],

        preferredFrameworks: [
            "Problem_Solution",
            "Before_After",
            "Case_Study"
        ],

        preferredHookTypes: [
            "Pain_Point",
            "Transformation",
            "Result"
        ],

        preferredCTA: [
            "Learn_More",
            "Get_Started",
            "Try_Now"
        ],

        avoidCTA: [
            "Debate"
        ]

    },

    ENTERTAINMENT: {

        id: "entertainment",

        name: "Entertainment",

        description:
            "Maximize enjoyment and retention.",

        successMetric:
            "Viewer Enjoyment",

        preferredEmotions: [
            "Humor",
            "Excitement",
            "Surprise"
        ],

        preferredFrameworks: [
            "Story",
            "Challenge",
            "Unexpected_Ending"
        ],

        preferredHookTypes: [
            "Shock",
            "Funny",
            "Unexpected"
        ],

        preferredCTA: [
            "Share",
            "Follow"
        ],

        avoidCTA: [
            "Sales"
        ]

    }

};

/*
=========================================================
Helpers
=========================================================
*/

export function getCreatorGoal(goal) {

    if (!goal) {

        return CREATOR_GOALS.FOLLOWERS;

    }

    return (
        Object.values(CREATOR_GOALS).find(
            item =>
                item.id.toLowerCase() ===
                goal.toLowerCase()
        ) || CREATOR_GOALS.FOLLOWERS
    );

}

export function getAllCreatorGoals() {

    return Object.values(CREATOR_GOALS);

}

export function creatorGoalExists(goal) {

    return Object.values(CREATOR_GOALS).some(
        item =>
            item.id.toLowerCase() ===
            goal.toLowerCase()
    );

}