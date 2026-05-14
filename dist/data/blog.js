const posts = [
  ["how-to-use-game-guides-without-spoilers", "How to Use Game Guides Without Spoiling the Fun", "Learn how to get useful help from guides while keeping discovery, surprises, and personal decisions intact."],
  ["beginner-vs-advanced-builds", "Beginner vs Advanced Builds: How to Choose the Right Setup", "A practical way to decide when a simple build is better than a complicated high-ceiling setup."],
  ["why-tier-lists-change-so-often", "Why Tier Lists Change So Often in Live-Service Games", "Tier lists move because patches, maps, player skill, and team habits change the real value of a pick."],
  ["how-to-read-patch-notes", "How to Read Patch Notes Like a Competitive Player", "Turn patch notes into useful decisions by looking for role changes, economy shifts, cooldown changes, and hidden tradeoffs."],
  ["organize-gaming-progress", "Best Ways to Organize Your Gaming Progress", "Simple checklist systems for story progress, farming goals, builds, side content, and endgame unlocks."],
  ["choose-next-game-by-playstyle", "How to Choose Your Next Game Based on Playstyle", "Use your preferred pace, session length, challenge tolerance, and social style to pick a better next game."]
];

export const blogPosts = posts.map(([slug, title, description], index) => ({
  id: index + 1,
  slug,
  title,
  description,
  updatedAt: "2026-05-14",
  readingTime: "5 min read",
  sections: [
    {
      heading: "Start With the Decision",
      body: "Good game content should help you make one cleaner decision. Before reading any guide, decide whether you need direction, confirmation, comparison, or a checklist. That keeps the article useful without turning play into research."
    },
    {
      heading: "Use Guides as Tools",
      body: "The best guide is not always the longest one. A quick answer, a small table, and a practical next step often beat a giant page when you are already in the middle of a session."
    },
    {
      heading: "Keep Your Own Notes",
      body: "Your account, skill level, friend group, and available time matter. Save a short note after testing a recommendation so the next guide is filtered through your actual experience."
    }
  ]
}));
