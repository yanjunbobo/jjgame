import { games } from "./games.js";

const guideKinds = [
  {
    slug: "beginner-guide",
    type: "Beginner Guide",
    suffix: "Beginner Guide",
    goal: "learn the safest early priorities without turning the whole game into homework",
    skill: "New player",
    time: "20-30 minutes"
  },
  {
    slug: "best-builds",
    type: "Best Builds",
    suffix: "Best Builds",
    goal: "choose a reliable starter setup and understand why it works",
    skill: "Beginner to intermediate",
    time: "15-25 minutes"
  },
  {
    slug: "farming-guide",
    type: "Farming Guide",
    suffix: "Farming Guide",
    goal: "plan repeatable routes that respect your time and current power level",
    skill: "All skill levels",
    time: "10-20 minutes"
  }
];

function paragraphs(game, kind) {
  const combatWord = game.genre === "Shooter" || game.genre === "MOBA" ? "matches" : game.genre === "Sandbox" ? "sessions" : "runs";
  return [
    {
      heading: "Quick Answer",
      body: `${game.name} is easiest to approach when you separate learning, power growth, and optimization into different sessions. For this ${kind.type.toLowerCase()}, start with one clear objective, use a forgiving setup, and stop upgrading or changing gear until you can explain what problem the change solves. This guide is an editorial starter guide, not official balance data.`
    },
    {
      heading: "Recommended Setup",
      body: `Use a stable setup before chasing perfect results. Pick tools, weapons, characters, classes, or deck pieces that let you recover from mistakes. Favor consistent resource access, readable rotations, and simple win conditions. In ${game.name}, the best early plan is usually the one that keeps you playing instead of checking menus every five minutes.`
    },
    {
      heading: "Step-by-Step Strategy",
      body: `First, complete the tutorial or early onboarding until the core loop feels familiar. Second, choose one main activity for your next three ${combatWord}: story progress, ranked practice, farming, boss learning, or build testing. Third, review only one metric after each attempt, such as survival, clear speed, aim consistency, route completion, or resource gain. Fourth, make one adjustment and repeat.`
    },
    {
      heading: "Common Mistakes",
      body: `The most common mistake is copying an advanced setup before you understand its tradeoffs. Another mistake is treating tier lists as instructions instead of context. A strong pick can still fail if it needs timing, team support, rare items, or map knowledge you do not have yet. Keep the plan readable and upgrade complexity only when the simple version stops answering your problem.`
    },
    {
      heading: "Advanced Tips",
      body: `Once the basics feel stable, compare two versions of the same plan instead of testing everything at once. Keep notes on what improved and what became harder. If a build clears faster but makes mistakes more punishing, it may be worse for long sessions. If a farming route is slower but safer, it may still be better when you are undergeared or learning a new area.`
    },
    {
      heading: "Checklist",
      body: `Confirm your main goal, lock a forgiving setup, identify the next unlock, run a short test session, review one outcome, and save a short note before changing the plan. This rhythm works because it turns guide reading into decisions you can actually use in-game.`
    }
  ];
}

export const guides = games.flatMap((game) => guideKinds.map((kind, index) => ({
  id: `${game.slug}-${kind.slug}`,
  gameSlug: game.slug,
  gameName: game.name,
  slug: kind.slug,
  type: kind.type,
  title: `${game.name} ${kind.suffix}`,
  description: `A practical ${game.name} ${kind.type.toLowerCase()} with quick answers, setup advice, mistakes to avoid, checklist steps, and related tools.`,
  updatedAt: "2026-05-14",
  readingTime: "7 min read",
  bestFor: game.bestFor,
  skillLevel: kind.skill,
  timeRequired: kind.time,
  mainGoal: kind.goal,
  tags: [kind.type, game.genre, ...game.tags.slice(0, 2)],
  summary: [
    `Best for: ${game.bestFor}`,
    `Skill level: ${kind.skill}`,
    `Time required: ${kind.time}`,
    `Main goal: ${kind.goal}`
  ],
  sections: paragraphs(game, kind),
  takeaways: [
    "Start with one objective instead of trying to optimize every system.",
    "Use tier lists as planning context, not as official truth.",
    "Change one thing at a time so you can tell what actually helped."
  ],
  checklist: [
    "Pick your current goal",
    "Choose a forgiving setup",
    "Run a short test session",
    "Write down one useful lesson",
    "Open the related tool for the next decision"
  ],
  order: index + 1
})));

export function guidesForGame(slug) {
  return guides.filter((guide) => guide.gameSlug === slug);
}
