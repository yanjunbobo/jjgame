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

const extraGuideKinds = {
  "grand-theft-auto-online": [
    { slug: "money-guide", type: "Money Guide", suffix: "Money Guide", goal: "compare safe solo income, co-op jobs, and vehicle investment priorities", skill: "All skill levels", time: "15-25 minutes" },
    { slug: "vehicle-guide", type: "Vehicle Guide", suffix: "Vehicle Guide", goal: "choose practical vehicles for missions, travel, racing, and defensive play", skill: "Beginner to intermediate", time: "10-20 minutes" }
  ],
  rust: [
    { slug: "base-design-guide", type: "Base Design Guide", suffix: "Base Design Guide", goal: "plan a compact starter base that protects resources without wasting farm", skill: "Beginner to intermediate", time: "20-35 minutes" },
    { slug: "pvp-loadout-guide", type: "PvP Guide", suffix: "PvP Loadout Guide", goal: "pick simple weapons, armor, and utility for early fights and monument pressure", skill: "Intermediate", time: "15-25 minutes" }
  ],
  dayz: [
    { slug: "first-hour-survival", type: "Survival Guide", suffix: "First Hour Survival Guide", goal: "stabilize food, water, warmth, and direction before chasing combat", skill: "New player", time: "20-30 minutes" },
    { slug: "loot-route-guide", type: "Loot Route Guide", suffix: "Loot Route Guide", goal: "move through towns and medical areas without turning every stop into a risk spike", skill: "Beginner to intermediate", time: "15-25 minutes" }
  ],
  "rainbow-six-siege": [
    { slug: "operator-guide", type: "Operator Guide", suffix: "Operator Guide", goal: "choose operators by role, site plan, and team utility instead of raw popularity", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "ranked-setup-guide", type: "Settings Guide", suffix: "Ranked Setup Guide", goal: "prepare sensitivity, audio, roles, and map notes before ranked sessions", skill: "Intermediate", time: "15-25 minutes" }
  ],
  "call-of-duty-warzone": [
    { slug: "loadout-guide", type: "Loadout Guide", suffix: "Loadout Guide", goal: "build a practical primary, secondary, perk, and equipment package for your squad role", skill: "Beginner to intermediate", time: "10-20 minutes" },
    { slug: "drop-route-guide", type: "Drop Route Guide", suffix: "Drop Route Guide", goal: "pick opening drops by risk, contracts, rotations, and squad confidence", skill: "All skill levels", time: "10-20 minutes" }
  ],
  "escape-from-tarkov": [
    { slug: "extraction-guide", type: "Extraction Guide", suffix: "Extraction Guide", goal: "plan raids around extraction confidence, loot weight, and noise discipline", skill: "New player", time: "20-35 minutes" },
    { slug: "budget-kit-guide", type: "Loadout Guide", suffix: "Budget Kit Guide", goal: "choose a kit that protects learning without risking your whole stash", skill: "Beginner", time: "15-25 minutes" }
  ],
  "helldivers-2": [
    { slug: "stratagem-guide", type: "Loadout Guide", suffix: "Stratagem Guide", goal: "combine anti-armor, crowd control, utility, and extraction tools for co-op missions", skill: "Beginner to intermediate", time: "10-20 minutes" },
    { slug: "mission-farming-guide", type: "Farming Guide", suffix: "Mission Farming Guide", goal: "route samples, medals, and objectives without leaving the squad under-equipped", skill: "All skill levels", time: "15-25 minutes" }
  ],
  palworld: [
    { slug: "base-building-guide", type: "Base Guide", suffix: "Base Building Guide", goal: "organize production, workers, storage, and defense before expanding too fast", skill: "Beginner to intermediate", time: "20-30 minutes" },
    { slug: "pal-breeding-guide", type: "Character Guide", suffix: "Pal Breeding Guide", goal: "plan simple breeding goals without turning every session into spreadsheet work", skill: "Intermediate", time: "15-25 minutes" }
  ],
  "forza-horizon-6": [
    { slug: "car-tuning-guide", type: "Settings Guide", suffix: "Car Tuning Guide", goal: "adjust tires, gearing, aero, and assists for stable driving before chasing peak lap times", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "money-and-progression-guide", type: "Progression Guide", suffix: "Money and Progression Guide", goal: "prioritize races, upgrades, and collection goals without burning out on repeat events", skill: "All skill levels", time: "10-20 minutes" }
  ],
  "subnautica-2": [
    { slug: "base-building-guide", type: "Base Guide", suffix: "Base Building Guide", goal: "place a safe starter base with storage, scanning, power, and expansion routes", skill: "Beginner", time: "20-30 minutes" },
    { slug: "exploration-route-guide", type: "Walkthrough", suffix: "Exploration Route Guide", goal: "explore new biomes in a sensible order while limiting oxygen and inventory mistakes", skill: "Beginner to intermediate", time: "20-35 minutes" }
  ]
};

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

export const guides = games.flatMap((game) => [...guideKinds, ...(extraGuideKinds[game.slug] || [])].map((kind, index) => ({
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
