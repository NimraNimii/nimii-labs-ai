export async function getTrends(niche) {

  const database = {

    "side hustle": [
      "AI Side Hustle",
      "Faceless Content",
      "Digital Products"
    ],

    "fitness": [
      "75 Hard",
      "Morning Routine",
      "Fat Loss"
    ],

    "ai": [
      "AI Agents",
      "Automation",
      "ChatGPT"
    ],

    "productivity": [
      "Second Brain",
      "AI Assistant",
      "Time Blocking",
      "Deep Work",
      "Focus Hacks"
    ],

    "money": [
      "Passive Income",
      "AI Side Hustle",
      "Digital Products",
      "Freelancing"
    ],

    "youtube": [
      "Faceless Channel",
      "AI Videos",
      "YouTube Automation"
    ]

  };

  return database[
    niche.toLowerCase()
  ] || [];

}