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
  "genshin-impact": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Tier List Guide", goal: "compare role value, account needs, and team flexibility without treating rankings as official data", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Daily Routine Guide", goal: "make exploration, resin spending, and daily play easier to repeat", skill: "All skill levels", time: "10-20 minutes" }
  ],
  minecraft: [
    { slug: "farms-guide", type: "Farming Guide", suffix: "Farms Guide", goal: "choose early farms that save time without overbuilding before you need the output", skill: "Beginner to intermediate", time: "20-35 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Survival Setup Guide", goal: "tune visibility, controls, and starter rules before a long survival world", skill: "Beginner", time: "10-20 minutes" }
  ],
  "marvel-rivals": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Tier List Guide", goal: "evaluate heroes by role pressure, team utility, and ease of value instead of hype", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Hero Practice Guide", goal: "set up aim, awareness, and role practice before ranked or coordinated play", skill: "All skill levels", time: "10-20 minutes" }
  ],
  valorant: [
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Aim Routine Guide", goal: "prepare sensitivity, crosshair, audio, and warmup habits for more consistent ranked games", skill: "All skill levels", time: "10-20 minutes" },
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Agent Tier List Guide", goal: "choose agents by map value, role coverage, and team utility instead of popularity alone", skill: "Beginner to intermediate", time: "15-25 minutes" }
  ],
  fortnite: [
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Aim Setup Guide", goal: "tune visibility, building comfort, input feel, and practice rhythm before ranked sessions", skill: "All skill levels", time: "10-20 minutes" },
    { slug: "loadout-guide", type: "Loadout Guide", suffix: "Loadout Guide", goal: "build a practical inventory plan for early fights, rotations, and endgame pressure", skill: "Beginner to intermediate", time: "10-20 minutes" }
  ],
  "honkai-star-rail": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Character Tier List Guide", goal: "compare characters by role compression, account value, and team flexibility", skill: "Beginner to intermediate", time: "15-25 minutes" }
  ],
  "diablo-4": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Build Tier List Guide", goal: "compare builds by leveling speed, farming comfort, boss pressure, and endgame reliability", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Endgame Prep Guide", goal: "prepare visibility, loot review, dungeon flow, and repeatable farming habits", skill: "All skill levels", time: "10-20 minutes" }
  ],
  "path-of-exile-2": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Build Tier List Guide", goal: "compare starter builds by budget, mapping comfort, bossing, and mechanical pressure", skill: "Beginner to intermediate", time: "15-25 minutes" }
  ],
  "elden-ring": [
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Boss Practice Guide", goal: "set up controls, camera habits, and practice rules for difficult encounters", skill: "All skill levels", time: "10-20 minutes" }
  ],
  "monster-hunter-wilds": [
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Weapon Tier List Guide", goal: "compare weapons by learning curve, hunt safety, party value, and damage uptime", skill: "Beginner to intermediate", time: "15-25 minutes" }
  ],
  "grand-theft-auto-online": [
    { slug: "money-guide", type: "Money Guide", suffix: "Money Guide", goal: "compare safe solo income, co-op jobs, and vehicle investment priorities", skill: "All skill levels", time: "15-25 minutes" },
    { slug: "vehicle-guide", type: "Vehicle Guide", suffix: "Vehicle Guide", goal: "choose practical vehicles for missions, travel, racing, and defensive play", skill: "Beginner to intermediate", time: "10-20 minutes" }
  ],
  rust: [
    { slug: "base-design-guide", type: "Base Design Guide", suffix: "Base Design Guide", goal: "plan a compact starter base that protects resources without wasting farm", skill: "Beginner to intermediate", time: "20-35 minutes" },
    { slug: "pvp-loadout-guide", type: "PvP Guide", suffix: "PvP Loadout Guide", goal: "pick simple weapons, armor, and utility for early fights and monument pressure", skill: "Intermediate", time: "15-25 minutes" },
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Weapon Tier List Guide", goal: "compare early, midgame, and high-risk weapons by practical fight value", skill: "Intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Wipe Prep Guide", goal: "prepare controls, bags, map notes, and wipe goals before committing to a server", skill: "All skill levels", time: "10-20 minutes" }
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
    { slug: "drop-route-guide", type: "Drop Route Guide", suffix: "Drop Route Guide", goal: "pick opening drops by risk, contracts, rotations, and squad confidence", skill: "All skill levels", time: "10-20 minutes" },
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Weapon Tier List Guide", goal: "sort weapons by role coverage, recoil comfort, and squad utility", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Aim Setup Guide", goal: "set visibility, audio, sensitivity, and controller or mouse habits before queueing", skill: "All skill levels", time: "10-20 minutes" }
  ],
  "escape-from-tarkov": [
    { slug: "extraction-guide", type: "Extraction Guide", suffix: "Extraction Guide", goal: "plan raids around extraction confidence, loot weight, and noise discipline", skill: "New player", time: "20-35 minutes" },
    { slug: "budget-kit-guide", type: "Loadout Guide", suffix: "Budget Kit Guide", goal: "choose a kit that protects learning without risking your whole stash", skill: "Beginner", time: "15-25 minutes" },
    { slug: "tier-list-guide", type: "Tier List", suffix: "Editorial Map Difficulty Guide", goal: "rank maps by learning pressure, extraction clarity, and loot risk", skill: "Beginner to intermediate", time: "15-25 minutes" },
    { slug: "settings-guide", type: "Settings Guide", suffix: "Settings and Raid Prep Guide", goal: "prepare audio, keybinds, stash checks, and raid objectives before loading in", skill: "All skill levels", time: "10-20 minutes" }
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

const deepGuideOverrides = {
  "rust/base-design-guide": {
    readingTime: "11 min read",
    summary: [
      "Best for: solo and duo players starting a fresh wipe",
      "Skill level: beginner to intermediate",
      "Time required: 25-40 minutes for the first build",
      "Main goal: protect core loot, add expansion options, and avoid overbuilding too early"
    ],
    sections: [
      { heading: "Quick Answer", body: "A strong Rust starter base is compact, cheap to seal, and annoying to raid for its size. Start with a 2x1 or small bunker-style footprint, place bags before you farm deep, and upgrade the tool cupboard, airlock, and loot room before adding honeycomb. The best design is not the one with the most tricks; it is the one you can actually finish before nearby players notice your location." },
      { heading: "Recommended Layout", body: "Use a two-door airlock, a protected tool cupboard, at least two small boxes, a sleeping bag, a furnace space, and a roof or side expansion plan. Keep the first version simple: stone walls, sheet metal doors when possible, and no exposed soft-side mistakes. If you are solo, avoid giant footprints that advertise value. If you are duo, add a second bag and a triangle loot pocket before building outward." },
      { heading: "Build Order", body: "First, claim a spot with nearby wood, stone, and one safe recycle route. Second, place the foundation, walls, doorway, and tool cupboard before sorting loot. Third, add the airlock and bag. Fourth, upgrade the core to stone and replace wooden doors as soon as possible. Fifth, add honeycomb only after the base can already survive a casual door camp or opportunistic raid." },
      { heading: "Common Mistakes", body: "The biggest mistake is farming for the dream base while your starter is still wood. Another mistake is placing the tool cupboard where splash damage or a direct door path can reach it too easily. Many new players also build too close to obvious monuments, roads, or clan compounds. A shorter commute is nice, but repeated attention is more expensive than extra walking." },
      { heading: "Advanced Tips", body: "Once the core is stable, add deception instead of size. Spread boxes, avoid predictable loot stacking, and use external bags so one death does not end the session. If the server is active, build at off-angles from major paths rather than directly on them. Treat every expansion as a risk question: does this make the base safer, or does it only make it look richer?" },
      { heading: "When to Move", body: "Move if your base is repeatedly scouted, if neighbors control every resource route, or if the upkeep cost starts dictating your entire wipe. A starter base should help you snowball, not become a prison. If you have enough resources for a better location, transfer in small trips and keep the original base as a backup spawn." }
    ],
    table: {
      columns: ["Base Element", "Priority", "Why It Matters"],
      rows: [
        ["Airlock", "Very high", "Stops simple door pushes and protects the core during mistakes."],
        ["Tool cupboard protection", "Very high", "Keeps upkeep safe and makes griefing harder."],
        ["Honeycomb", "Medium", "Good after the core is secure, wasteful before doors are upgraded."],
        ["External bags", "Medium", "Lets you recover from door camps and failed fights."]
      ]
    },
    takeaways: ["Finish a small secure base before farming for a large one.", "Protect the tool cupboard and airlock before cosmetic expansion.", "A base should match your group size, server pressure, and available upkeep."],
    checklist: ["Pick a low-attention location", "Seal the starter before sorting loot", "Place bag and tool cupboard", "Upgrade core to stone", "Replace weak doors", "Add honeycomb or move when the core is stable"],
    faq: [
      { question: "Is a 2x1 still worth building in Rust?", answer: "Yes. A clean 2x1 is still a practical starter because it is fast to seal, cheap to upgrade, and easy to abandon if the area becomes unsafe." },
      { question: "Should I build near monuments?", answer: "Only if you can handle the traffic. New players usually do better slightly off the main route with one predictable recycle path." }
    ]
  },
  "call-of-duty-warzone/loadout-guide": {
    readingTime: "10 min read",
    summary: ["Best for: returning players and squads building reliable classes", "Skill level: beginner to intermediate", "Time required: 10-20 minutes", "Main goal: make one dependable loadout for your role before chasing trend picks"],
    sections: [
      { heading: "Quick Answer", body: "The safest Warzone loadout starts with role clarity. Pick one primary that covers your most common fight distance, one secondary or utility slot that protects your weakness, and perks that keep you alive during rotations. Do not build around perfect recoil charts alone. A loadout you can control under pressure is better than a theoretical top weapon you cannot track with." },
      { heading: "Recommended Setup", body: "For most squads, build around a stable mid-range rifle or LMG, a close-range secondary, smoke or mobility utility, and a recovery-focused perk package. Solo players should value information, escape tools, and simple recoil. Aggressive entry players can trade some comfort for faster handling, but only if the squad is ready to follow the push." },
      { heading: "Step-by-Step Strategy", body: "Start by choosing the range where you lose the most fights. If you die while rotating, improve mid-range control and smoke usage. If you lose buildings, improve sprint-to-fire speed and close-range consistency. Test the loadout for three matches without changing attachments. After that, change one part: optic, barrel, magazine, or secondary. Keep the version that reduces mistakes, not just the one that looks stronger on paper." },
      { heading: "Common Mistakes", body: "Many players copy a creator build without checking input method, squad size, or map flow. Another common mistake is running two weapons that solve the same range while leaving one obvious weakness. If both guns are mid-range comfort picks, you may feel good in open fights but collapse indoors. If both are aggressive, rotations become stressful." },
      { heading: "Advanced Tips", body: "Build one safe class and one pressure class. The safe class handles ranked, late circles, and uncertain teammates. The pressure class is for confident drops, bounty chains, or games where your squad is already ahead. Label your classes by job rather than weapon name so you can switch faster: rotate, entry, support, regain, sniper cover." },
      { heading: "Checklist", body: "Before queueing, confirm your role, your main fight range, your weak range, and your utility plan. If you cannot explain when to use the loadout, it is not ready yet. Keep one slot flexible for map changes, squad strategy, or patch-driven comfort adjustments." }
    ],
    table: { columns: ["Role", "Primary Need", "Utility Priority"], rows: [["Solo", "Recoil comfort", "Escape and information"], ["Entry", "Fast handling", "Flash, smoke, or mobility"], ["Support", "Mid-range stability", "Ammo and revive cover"], ["Ranked squad", "Consistency", "Rotation safety"]] },
    takeaways: ["Build by role before copying a trend.", "Test one loadout for several matches before changing attachments.", "A reliable class needs a plan for its weak range."],
    checklist: ["Choose role", "Choose main range", "Cover weak range", "Pick utility", "Test three matches", "Adjust one attachment only"],
    faq: [{ question: "Should I always use the current meta weapon?", answer: "No. Use meta discussion as a starting point, then test whether the weapon fits your aim, squad role, and fight range." }]
  },
  "escape-from-tarkov/extraction-guide": {
    readingTime: "12 min read",
    summary: ["Best for: new players trying to survive raids", "Skill level: new player", "Time required: 20-35 minutes", "Main goal: plan raids around exits, noise, and loot discipline"],
    sections: [
      { heading: "Quick Answer", body: "A beginner Tarkov raid should be planned backward from extraction. Choose one map, learn two safe exits, enter with a cheap kit, and leave before your bag turns into a reason to panic. The objective is not to loot every room. The objective is to survive enough raids that your map knowledge becomes useful." },
      { heading: "Recommended Setup", body: "Bring a budget weapon you can afford to lose, basic meds, a headset if possible, and a simple backpack. Avoid overloading your kit with gear you are afraid to use. Fear makes new players freeze in bad positions. A modest kit encourages movement, listening, and extraction practice." },
      { heading: "Step-by-Step Strategy", body: "Before loading in, identify your likely extracts and a fallback path. Once in raid, get your bearings first, then move toward a low-contest loot route. Stop sprinting near buildings, listen before entering rooms, and leave after one meaningful win: a quest item, a full bag, a weapon upgrade, or simply better map confidence." },
      { heading: "Common Mistakes", body: "New players often stay too long because they think extraction without a huge haul is wasted time. It is not. Surviving with moderate loot teaches more than dying with a full bag. Another mistake is following gunfire just because it sounds close. If your goal is learning extracts, every optional fight is a tax." },
      { heading: "Advanced Tips", body: "Use mental checkpoints. If you have meds, ammo, and stamina, keep moving. If you lose one of those, simplify the raid and leave. When you hear fighting near your extract, wait, rotate, or use the fallback. Tarkov rewards patience more than panic, especially when your map knowledge is still forming." },
      { heading: "Checklist", body: "Pick one map, learn two extracts, bring a kit you can lose, define one raid goal, leave after completing it, and write down what confused you. Repeat until extracts feel boring. Boring extracts are good; they mean you are finally making the map smaller." }
    ],
    table: { columns: ["Raid Phase", "Priority", "Beginner Rule"], rows: [["Spawn", "Orient", "Do not sprint blindly."], ["Loot", "Limit greed", "Leave after one clear win."], ["Contact", "Survive", "Avoid optional fights."], ["Extract", "Commit", "Use fallback if sound is bad."]] },
    takeaways: ["Plan backward from extraction.", "Cheap kits help you learn faster.", "A survived small raid is better than a lost perfect raid."],
    checklist: ["Choose one map", "Check two extracts", "Set one objective", "Move quietly near buildings", "Leave after a meaningful win"],
    faq: [{ question: "Which map should a beginner learn first?", answer: "Pick one map and stay with it long enough to learn spawns, exits, and safe movement. The best first map is the one you will repeat calmly." }]
  },
  "genshin-impact/best-builds": {
    readingTime: "11 min read",
    summary: ["Best for: players building teams with limited resources", "Skill level: beginner to intermediate", "Time required: 20-30 minutes", "Main goal: choose practical builds by role, energy needs, and artifact efficiency"],
    sections: [
      { heading: "Quick Answer", body: "The best Genshin Impact build is the one that makes the character's job consistent with the least wasted resin. Start with role: on-field damage, off-field damage, support, healer, shielder, or reaction enabler. Then solve energy and rotation comfort before chasing perfect substats. A build that bursts on time and supports the team usually beats a prettier stat page that breaks the rotation." },
      { heading: "Recommended Setup", body: "For new accounts, prioritize weapon usability, main stats, and set bonuses that work across multiple characters. Do not farm a narrow domain for weeks if a flexible set can support several teams. For damage dealers, choose the correct main stats first. For supports, energy recharge and uptime often matter more than personal damage. For healers and shielders, build enough survivability before adding damage." },
      { heading: "Step-by-Step Strategy", body: "First, write the character's job in one sentence. Second, choose a weapon that helps that job. Third, equip the right main stats even if substats are imperfect. Fourth, test whether the burst or skill is ready when the rotation needs it. Fifth, improve substats only after the team functions. This avoids the common trap of optimizing a character who still cannot perform their basic role." },
      { heading: "Common Mistakes", body: "The most common mistake is treating every character like a main damage dealer. Another is farming perfect artifacts too early. Resin is limited, so account-wide efficiency matters. If a support needs energy but you give them only damage stats, the whole team slows down. If an on-field carry cannot trigger the intended reactions, the build is missing the point." },
      { heading: "Advanced Tips", body: "Once the team works, optimize around rotation timing. A slightly lower damage build can be better if it shortens downtime or makes reactions easier to trigger. Keep alternate pieces for different team roles. Many characters can shift between support and damage depending on team needs, but only if you save practical artifacts instead of deleting everything that is not perfect." },
      { heading: "Checklist", body: "Confirm role, weapon purpose, main stats, energy comfort, reaction plan, and rotation timing. Upgrade only after the team works in real fights. If a build looks strong but feels awkward, test a more comfortable energy or support setup before spending more resin." }
    ],
    table: { columns: ["Role", "First Priority", "Common Trap"], rows: [["On-field DPS", "Main stats and team buffs", "Ignoring reaction setup"], ["Off-field DPS", "Uptime and energy", "Building damage with no burst consistency"], ["Support", "Team utility", "Chasing personal damage too early"], ["Healer/Shielder", "Reliability", "Underbuilding survival stats"]] },
    takeaways: ["Build around role before stat screenshots.", "Energy comfort is a real build stat.", "Farm flexible upgrades before narrow perfection."],
    checklist: ["Define role", "Pick weapon by job", "Fix main stats", "Check energy uptime", "Test rotation", "Upgrade substats last"],
    faq: [{ question: "Should I farm perfect artifacts first?", answer: "No. Get correct main stats and a functioning team first, then improve substats over time." }]
  },
  "marvel-rivals/tier-list-guide": {
    readingTime: "10 min read",
    summary: ["Best for: players choosing heroes by role value", "Skill level: beginner to intermediate", "Time required: 15-25 minutes", "Main goal: read tier lists as role context, not as a command to abandon comfort picks"],
    sections: [
      { heading: "Quick Answer", body: "A useful Marvel Rivals tier list should rank practical value, not just highlight popularity. Strong heroes usually bring reliable damage, survivability, initiation, protection, or team utility without needing perfect coordination. Treat this as an editorial framework: your rank, aim, map, and team composition can move a hero up or down." },
      { heading: "Recommended Setup", body: "Start by choosing your role need. If your team lacks pressure, pick a hero who can start fights or secure damage safely. If your team collapses, pick protection, healing, or control. If the match is chaotic, comfort and survival often outperform a high-ceiling hero that needs clean setups." },
      { heading: "Step-by-Step Strategy", body: "First, identify why your team is losing fights: no engage, no sustain, no burst, no peel, or no objective control. Second, choose a hero that solves that problem. Third, give the pick two fights before swapping. Fourth, if the hero works only when teammates play perfectly, save it for coordinated groups." },
      { heading: "Common Mistakes", body: "The biggest mistake is picking only from the top tier while ignoring team needs. Another mistake is swapping after every death. A hero can be correct even if one fight goes badly. Watch whether your pick creates value over several engagements: space, pressure, cooldowns forced, saves, or objective time." },
      { heading: "Advanced Tips", body: "Build a small hero pool: one comfort pick, one counter-pressure pick, and one team utility pick. This is more useful than trying to master every top-ranked hero. When balance shifts, test changes with the Meta Shift Planner before rebuilding your entire pool." },
      { heading: "Checklist", body: "Identify role gap, choose hero by job, test two fights, review value created, swap only when the problem remains. Keep tier lists as a map of options, not a replacement for match reading." }
    ],
    table: { columns: ["Tier", "Meaning", "How to Use It"], rows: [["S", "High general value", "Safe first test if role fits."], ["A", "Strong but context-aware", "Use when map or team supports it."], ["B", "Playable comfort pick", "Keep if you consistently create value."], ["C", "Narrow or risky", "Use only with a clear reason."]] },
    takeaways: ["Tier lists are context, not orders.", "Team role gaps matter more than hype.", "A small flexible hero pool is better than chasing every top pick."],
    checklist: ["Find team problem", "Pick by role", "Test two fights", "Review value", "Swap with purpose"],
    faq: [{ question: "Are these Marvel Rivals rankings official?", answer: "No. They are editorial planning guidance and should be tested against your rank, patch, and team." }]
  },
  "minecraft/farms-guide": {
    readingTime: "11 min read",
    summary: ["Best for: survival players choosing useful early farms", "Skill level: beginner to intermediate", "Time required: 20-35 minutes", "Main goal: build farms that save time without overcomplicating the world"],
    sections: [
      { heading: "Quick Answer", body: "The best Minecraft farms are the ones that remove repeated chores at the right moment. Start with food, wood, basic crop, mob drops, and iron or villager support only when you can protect the area. Do not build a huge farm before you know what problem it solves. A small reliable farm near your base often helps more than a giant project you never finish." },
      { heading: "Recommended Setup", body: "For an early survival world, prioritize wheat or carrots, a tree area, animal pens, a simple mob drop source, and storage. After that, add sugar cane, kelp, bamboo, or iron depending on your goals. Keep farms close enough to use but organized enough that expansion does not ruin your base layout." },
      { heading: "Step-by-Step Strategy", body: "First, solve food. Second, solve wood and basic crafting resources. Third, add experience or mob drops if you are enchanting. Fourth, add automation only for resources you actually consume. Fifth, label storage before output becomes messy. This order keeps farms tied to progression instead of turning the world into disconnected machines." },
      { heading: "Common Mistakes", body: "A common mistake is copying late-game farm designs with materials and mechanics you do not yet understand. Another is placing noisy or ugly farms in the middle of a base you want to enjoy. Farms should support the world. If the farm makes the world unpleasant to play in, move it, shrink it, or redesign the route." },
      { heading: "Advanced Tips", body: "Group farms by maintenance rhythm. Crops and animals belong near daily routes. Noisy or high-output farms can sit farther away. If you play with friends, assign farms by job: food, blocks, enchanting, trading, and travel. This makes the world feel organized and gives every project a clear purpose." },
      { heading: "Checklist", body: "Build food first, then wood, then utility resources, then automation. Keep each farm small until you know the output is useful. Add signs, paths, and storage early so the base stays readable as the world grows." }
    ],
    table: { columns: ["Farm", "When to Build", "Why It Helps"], rows: [["Crop farm", "Day one", "Stable food and villager trades."], ["Tree area", "Early base", "Prevents constant wood trips."], ["Sugar cane", "Before enchanting", "Books, maps, and trading support."], ["Iron support", "Midgame", "Tools, rails, hoppers, and building utility."]] },
    takeaways: ["Build farms when they solve a repeated chore.", "Small reliable farms beat abandoned giant projects.", "Storage and paths are part of farm design."],
    checklist: ["Food farm", "Wood source", "Animal pen", "Sugar cane", "Storage labels", "Midgame utility farm"],
    faq: [{ question: "What farm should I build first in Minecraft?", answer: "Food first. A simple crop or animal setup removes early pressure and lets you explore without constantly resetting." }]
  },
  "rust/pvp-loadout-guide": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "A good Rust PvP loadout is not just the strongest gun you own. It is the kit you can replace, move with, and use confidently around the monuments or roads you actually fight near. For early wipe, favor affordable weapons, enough meds for a second chance, and armor that fits your risk level. If losing the kit would end your session, it is too expensive for practice." },
      { heading: "Recommended Setup", body: "Start with a budget weapon, basic projectile protection, bandages or syringes, and one utility option such as cover, light, or extra ammunition. Midgame kits can add better armor and stronger weapons, but the same rule applies: you need a reason to carry every item. Keep farming tools separate from fight kits when possible." },
      { heading: "Step-by-Step Strategy", body: "Choose one fight objective before leaving base: defend farm, contest a monument, recover a body, or scout a neighbor. Move with cover, listen before crossing open space, and avoid taking every shot you see. Rust rewards the player who controls the first mistake. If you miss the opening advantage, reposition instead of forcing a straight duel." },
      { heading: "Common Mistakes", body: "Many players bring their best kit to a fight they do not understand. Another common error is carrying loot, tools, and PvP gear in one messy inventory. That slows decision-making. If you are going to fight, fight. If you are going to farm, avoid optional shots unless the reward is worth losing the run." },
      { heading: "Checklist", body: "Set the fight goal, choose a replaceable weapon, bring meds, confirm armor, leave excess loot at base, and decide your exit route before the first shot." }
    ],
    table: { columns: ["Kit Type", "Best Use", "Risk"], rows: [["Budget", "Practice and scouting", "Low"], ["Balanced", "Monument fights", "Medium"], ["Heavy", "Known objectives", "High"]] },
    takeaways: ["A replaceable kit creates more learning.", "Separate farming and fighting decisions.", "Repositioning is often better than forcing a bad duel."],
    checklist: ["Pick objective", "Pack meds", "Check ammo", "Drop farm loot", "Plan exit"],
    faq: [{ question: "Should I use my best gun for practice?", answer: "Only if you can replace it comfortably. Otherwise use a kit that lets you take more fights without freezing." }]
  },
  "call-of-duty-warzone/drop-route-guide": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "A strong Warzone drop route balances loot speed, contract access, rotation options, and squad confidence. Do not choose a hot drop just because it is popular. Choose it because your squad knows the exits, can survive the first fight, and has a clear next move if the opening goes badly." },
      { heading: "Recommended Setup", body: "Mark one primary landing spot, one backup building, and one regain path before the plane crosses the map. Squads should split close enough to trade but not so close that one grenade or push ruins everyone. Solo players should value roof control, cash routes, and early information over flashy openings." },
      { heading: "Step-by-Step Strategy", body: "First, scan the flight path and circle. Second, choose whether you want safety, contract tempo, or early fights. Third, land with a route, not just a marker. Fourth, regroup after the first loot sweep. Fifth, rotate before the zone forces you through predictable gates." },
      { heading: "Common Mistakes", body: "The most common mistake is staying in the drop area too long after winning the first fight. Another is landing on a contract without checking how many teams are above it. A good drop route has a plan for both success and failure." },
      { heading: "Checklist", body: "Pick main drop, call backup, identify contract, assign landing lanes, regroup after loot, rotate before pressure stacks." }
    ],
    table: { columns: ["Drop Style", "Best For", "Main Risk"], rows: [["Safe edge", "Consistent starts", "Slow money"], ["Contract opener", "Squad tempo", "Third parties"], ["Hot drop", "Confident fights", "Early reset"]] },
    takeaways: ["A drop route needs a backup.", "Contracts are useful only if the landing is playable.", "Leave after the area stops paying you."],
    checklist: ["Main spot", "Backup spot", "Contract check", "Regroup point", "Rotation call"],
    faq: [{ question: "Should I hot drop every match?", answer: "No. Hot drops are useful practice, but ranked or serious sessions need a route your squad can repeat." }]
  },
  "escape-from-tarkov/budget-kit-guide": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "A Tarkov budget kit should protect learning, not pretend to be endgame gear. Bring a weapon you can use, ammo you understand, basic armor if affordable, meds, and a backpack that matches the raid goal. The kit is successful if it helps you move, fight one reasonable threat, and extract without risking your whole stash." },
      { heading: "Recommended Setup", body: "Use a simple weapon platform, a headset when possible, basic healing, pain management, and enough space for the specific loot route. Avoid carrying expensive attachments if they do not change your confidence. If the raid objective is a quest item, build for survival. If it is money, build for movement and extraction timing." },
      { heading: "Step-by-Step Strategy", body: "Pick the map, choose the raid job, then build the kit. Do not reverse that order. After extracting or dying, review whether the kit failed because of gear, route, sound, aim, or greed. If the mistake was route or greed, buying a more expensive kit will not solve it." },
      { heading: "Common Mistakes", body: "New players often underpack meds and overpay for weapons. Another mistake is keeping good ammo in the stash forever. Use enough quality to make the raid honest, but do not bring gear that makes you afraid to move." },
      { heading: "Checklist", body: "Map selected, extracts known, weapon loaded, meds packed, pain option ready, backpack sized for the goal, insurance considered." }
    ],
    table: { columns: ["Kit Goal", "Spend On", "Save On"], rows: [["Quest", "Meds and survival", "Flashy attachments"], ["Loot", "Backpack and headset", "Heavy armor"], ["Practice", "Replaceable weapon", "Rare gear"]] },
    takeaways: ["Build the kit after choosing the raid goal.", "More expensive gear does not fix route mistakes.", "A budget kit should be easy to replace."],
    checklist: ["Choose map", "Choose objective", "Pack meds", "Load ammo", "Know extracts"],
    faq: [{ question: "Is budget gear worth using?", answer: "Yes. Budget kits create repetition, and repetition is what turns map knowledge into survival." }]
  },
  "genshin-impact/farming-guide": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "Efficient Genshin farming starts with one character or team goal, then works backward through resin, boss drops, talent materials, weapon materials, and artifacts. Do not farm everything at once. The fastest account progress usually comes from finishing one useful upgrade path before starting the next." },
      { heading: "Recommended Setup", body: "Write down the character, the role, and the next upgrade that changes performance. If the upgrade is talent level, farm talent books. If it is ascension, farm boss drops and local materials. If the team already functions, spend resin on artifacts or flexible domains. Keep weekly bosses and event rewards in mind before spending fragile resources." },
      { heading: "Step-by-Step Strategy", body: "First, pick one build target. Second, check whether level, weapon, talents, or artifacts are the bottleneck. Third, spend daily resin on the bottleneck. Fourth, use non-resin time for local materials and exploration. Fifth, stop when the character can perform the role, then move to the next team need." },
      { heading: "Common Mistakes", body: "The biggest mistake is artifact farming too early. Artifacts matter, but talent, weapon, and ascension upgrades can be more predictable. Another mistake is splitting resin across too many characters and ending the week with no finished upgrade." },
      { heading: "Checklist", body: "Choose target, identify bottleneck, spend resin there, gather local materials off-resin, test the team, then decide whether artifacts are worth the next push." }
    ],
    table: { columns: ["Goal", "Farm First", "Delay Until"], rows: [["New carry", "Level, weapon, talents", "Perfect artifacts"], ["Support", "Energy and key talent", "Damage substats"], ["Team repair", "Missing role upgrades", "Luxury farming"]] },
    takeaways: ["Farm one character goal at a time.", "Use resin on the bottleneck.", "Artifact perfection comes after the team works."],
    checklist: ["Pick character", "Find bottleneck", "Spend resin", "Gather local materials", "Test team"],
    faq: [{ question: "Should I spend resin on artifacts every day?", answer: "Only when artifacts are the actual bottleneck. Many accounts gain more from talents, weapons, or ascension first." }]
  },
  "marvel-rivals/best-builds": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "A good Marvel Rivals build is really a role plan: what hero you pick, what job you perform, how you survive pressure, and when you swap. Focus on one job per match. Damage players create pressure, supports keep fights playable, tanks and front-line heroes create space, and flexible picks cover gaps when the team composition is messy." },
      { heading: "Recommended Setup", body: "Start with a comfort hero in your preferred role, then add one backup that solves the opposite problem. If your comfort pick is aggressive, keep a safer utility option ready. If your comfort pick is defensive, keep a pressure option ready. This two-pick structure helps more than chasing every hero in a tier list." },
      { heading: "Step-by-Step Strategy", body: "Before the match starts, decide whether your team needs engage, sustain, burst, control, or peel. Pick the hero that answers the biggest gap. After two fights, review whether your pick created measurable value. Did it force cooldowns, save teammates, open space, or secure eliminations? If not, swap with a reason." },
      { heading: "Common Mistakes", body: "The most common mistake is changing heroes because of frustration instead of diagnosis. Another is playing a strong hero with no role discipline. If you are supposed to protect supports but chase deep eliminations every fight, the build is failing even if the hero is powerful." },
      { heading: "Checklist", body: "Choose role, choose comfort hero, choose backup, identify team gap, test two fights, swap only when the same problem remains." }
    ],
    table: { columns: ["Role Need", "Build Priority", "Swap If"], rows: [["Engage", "Survive entry", "Team cannot follow"], ["Sustain", "Keep team alive", "No one creates pressure"], ["Burst", "Secure targets", "You cannot reach fights"], ["Peel", "Stop dives", "Enemy ignores backline"]] },
    takeaways: ["Builds are role plans, not just hero picks.", "Keep one comfort pick and one problem-solving backup.", "Swap based on repeated problems."],
    checklist: ["Pick role", "Pick comfort", "Pick backup", "Review two fights", "Swap with purpose"],
    faq: [{ question: "Should I one-trick a hero?", answer: "Comfort matters, but one backup pick makes ranked and team play much easier." }]
  },
  "minecraft/beginner-guide": {
    readingTime: "9 min read",
    sections: [
      { heading: "Quick Answer", body: "A good Minecraft beginner route is simple: survive the first night, secure food, mark home, gather iron, create storage, and pick one medium-term goal. The game is open-ended, so new players often get lost because everything feels possible. A small plan keeps the world inviting instead of overwhelming." },
      { heading: "Recommended Setup", body: "Start near wood, animals or crops, and visible landmarks. Build a starter shelter before sunset, then add chests, torches, a bed, and a small farm. Do not rush deep caves without food, blocks, and a way back. Your first base does not need to be beautiful; it needs to be readable." },
      { heading: "Step-by-Step Strategy", body: "Day one is shelter and food. Day two is tools, torches, and basic mining. After that, choose one direction: farming, exploration, building, mining, or village work. Keep paths and signs early. Navigation mistakes waste more time than imperfect gear." },
      { heading: "Common Mistakes", body: "Many beginners carry everything, forget coordinates or landmarks, and dig without a return plan. Another mistake is ignoring lighting. A well-lit base and path network quietly solves many survival problems before they become fights." },
      { heading: "Checklist", body: "Punch wood, craft tools, build shelter, make bed, place torches, start food, mark home, mine safely, create storage, choose one project." }
    ],
    table: { columns: ["Phase", "Goal", "Do Not Forget"], rows: [["First night", "Shelter", "Light and bed"], ["Early mining", "Iron", "Food and blocks"], ["Starter base", "Storage", "Paths and signs"], ["First project", "Direction", "One goal at a time"]] },
    takeaways: ["A readable base beats a perfect base early.", "Food and navigation solve most beginner problems.", "Pick one project so the world stays focused."],
    checklist: ["Shelter", "Food", "Bed", "Torches", "Storage", "Home marker"],
    faq: [{ question: "What should I do first in Minecraft?", answer: "Secure wood, food, shelter, light, and a bed. After that, choose one project instead of chasing every possible goal." }]
  },
  "valorant/settings-guide": {
    readingTime: "10 min read",
    summary: ["Best for: ranked players tuning consistency", "Skill level: all skill levels", "Time required: 10-20 minutes", "Main goal: make aim, audio, crosshair, and warmup repeatable before ranked"],
    sections: [
      { heading: "Quick Answer", body: "The best Valorant settings are the ones you can repeat under pressure. Start with clear visibility, a crosshair that does not hide heads, stable sensitivity, useful audio levels, and a warmup routine that matches your role. Do not change sensitivity every bad match. A consistent setup gives you cleaner feedback, which is what ranked improvement needs." },
      { heading: "Recommended Setup", body: "Use a resolution and graphics profile that keeps frame pacing stable. Keep visual clutter low, enemy highlights easy to read, and audio high enough to catch footsteps without drowning comms. Your crosshair should be visible on bright and dark surfaces, but small enough that it does not cover common head angles. If you are new, choose comfort over novelty." },
      { heading: "Step-by-Step Strategy", body: "First, lock sensitivity for at least a week. Second, set one crosshair and test it on multiple maps. Third, build a warmup: movement, counter-strafing, calm taps, and a short deathmatch or range routine. Fourth, review whether missed fights are crosshair placement, panic spray, movement, or bad positioning. Only settings problems should lead to settings changes." },
      { heading: "Common Mistakes", body: "Players often copy pro settings without matching desk space, input habits, or monitor distance. Another mistake is changing crosshair, sensitivity, and graphics at the same time. If performance improves or gets worse, you will not know why. Change one variable and test it across several games." },
      { heading: "Checklist", body: "Lock sensitivity, choose readable crosshair, reduce visual clutter, check audio balance, warm up movement, test two maps, and avoid changing settings after one emotional loss." }
    ],
    table: { columns: ["Setting Area", "Priority", "Why It Matters"], rows: [["Sensitivity", "Very high", "Controls repeatability and panic recovery."], ["Crosshair", "High", "Keeps head placement readable."], ["Audio", "High", "Improves timing and rotations."], ["Graphics clarity", "Medium", "Reduces distraction and visual noise."]] },
    takeaways: ["Consistency beats constant tweaking.", "Change one setting at a time.", "Warmup should match your ranked role."],
    checklist: ["Lock sens", "Pick crosshair", "Balance audio", "Reduce clutter", "Warm up movement", "Review missed fights"],
    faq: [{ question: "Should I copy a pro Valorant sensitivity?", answer: "Use it only as a starting point. Your mouse space, posture, and comfort decide whether it works." }]
  },
  "valorant/tier-list-guide": {
    readingTime: "10 min read",
    summary: ["Best for: ranked players choosing agents by map and role", "Skill level: beginner to intermediate", "Time required: 15-25 minutes", "Main goal: evaluate agents by utility, map fit, and team coverage instead of popularity"],
    sections: [
      { heading: "Quick Answer", body: "A practical Valorant tier list should rank agents by how reliably they create value in real ranked games. Strong agents usually bring flexible utility, clear site impact, or dependable information. But map, role comfort, and team composition matter enough that a lower-ranked comfort pick can outperform a top-tier agent played without purpose." },
      { heading: "Recommended Setup", body: "Choose agents by role first: controller, initiator, sentinel, duelist, or flex. A team with no smokes or no information usually loses structure even if everyone picked strong individual agents. For solo queue, prioritize agents that can create value without perfect coordination while still helping the team execute or defend." },
      { heading: "Step-by-Step Strategy", body: "First, check the map. Second, check which roles your team already has. Third, pick the agent that solves the biggest missing job. Fourth, use two or three repeatable utility plans instead of improvising every round. Fifth, after the match, judge whether your pick created space, information, denial, or entry pressure." },
      { heading: "Common Mistakes", body: "Players often lock duelists because they want control, then leave the team without smokes or information. Another mistake is copying professional compositions without the coordination that makes them work. Ranked value comes from repeatable utility and clear decisions, not just theoretical ceiling." },
      { heading: "Checklist", body: "Check map, check team roles, fill the missing job, prepare two utility plans, track value created, and expand your pool one role at a time." }
    ],
    table: { columns: ["Agent Role", "Ranked Value", "Common Mistake"], rows: [["Controller", "Controls entries and retakes", "Using smokes too late"], ["Initiator", "Creates information", "Flashing without teammate timing"], ["Sentinel", "Locks space", "Never adjusting setup"], ["Duelist", "Starts pressure", "Entrying without utility"]] },
    takeaways: ["Tier lists need map and role context.", "Solo queue rewards repeatable utility.", "A balanced team is often stronger than five popular picks."],
    checklist: ["Check map", "Check missing role", "Pick agent", "Prepare utility", "Review value"],
    faq: [{ question: "Should I always pick the highest-tier Valorant agent?", answer: "No. Pick the highest-value agent you can play well for the map, role, and team composition." }]
  },
  "fortnite/loadout-guide": {
    readingTime: "10 min read",
    summary: ["Best for: players building a reliable inventory plan", "Skill level: beginner to intermediate", "Time required: 10-20 minutes", "Main goal: balance close fights, mid-range pressure, mobility, healing, and endgame space"],
    sections: [
      { heading: "Quick Answer", body: "A strong Fortnite loadout is balanced around decisions, not just weapon rarity. You need a close-range answer, a mid-range pressure option, healing, movement or escape, and one flexible slot for the mode or season. If your inventory cannot handle both a sudden box fight and a forced rotation, it is not ready." },
      { heading: "Recommended Setup", body: "For most players, use a shotgun or close-range burst option, a stable rifle or precision weapon, shields or healing, mobility, and one flexible utility item. Aggressive players can trade safety for pressure. Newer players should keep more recovery and movement so one mistake does not end the match." },
      { heading: "Step-by-Step Strategy", body: "After landing, fill the basic roles before chasing upgrades. A lower-rarity weapon in the right slot is better than a rare item that duplicates a job. As the match progresses, replace weak slots by role: better close-range, better range, better mobility, or stronger healing. Before endgame, ask whether you can rotate, survive pressure, and finish a close fight." },
      { heading: "Common Mistakes", body: "The common trap is carrying too many damage items and no recovery plan. Another is keeping a flashy item that only works when you are already winning. Loadouts should help you recover from bad positions, not just snowball good ones." },
      { heading: "Checklist", body: "Carry close-range damage, mid-range pressure, healing, mobility, and one flexible slot. Upgrade by role, keep enough ammo, and review whether your inventory solved the fight you actually lost." }
    ],
    table: { columns: ["Slot", "Purpose", "Beginner Rule"], rows: [["Close range", "Finish fights", "Keep it simple and fast."], ["Mid range", "Pressure rotations", "Favor control over flash."], ["Healing", "Recover mistakes", "Do not cut it too early."], ["Mobility", "Escape or reposition", "Keep a plan for storm pressure."]] },
    takeaways: ["Every slot needs a job.", "Balanced inventories survive more scenarios.", "Upgrade by role, not just rarity color."],
    checklist: ["Close weapon", "Mid-range weapon", "Healing", "Mobility", "Flexible utility", "Ammo check"],
    faq: [{ question: "Should I carry more weapons or more healing?", answer: "If you are still learning, keep healing or mobility. Extra weapons often duplicate jobs and reduce recovery." }]
  },
  "honkai-star-rail/tier-list-guide": {
    readingTime: "10 min read",
    summary: ["Best for: players deciding where to invest resources", "Skill level: beginner to intermediate", "Time required: 15-25 minutes", "Main goal: read character rankings by account value, role compression, and team flexibility"],
    sections: [
      { heading: "Quick Answer", body: "A useful Honkai: Star Rail tier list should help you decide investment priority, not tell you to ignore your roster. High-value characters usually bring strong team utility, flexible roles, or reliable damage with manageable setup. A lower-ranked character can still be correct if they solve your account's missing role." },
      { heading: "Recommended Setup", body: "Sort characters by job first: sustain, support, damage, break pressure, follow-up, debuff, or specialist utility. Then compare how many teams they improve. For newer accounts, flexible supports and sustain options often create more progress than another damage dealer competing for the same resources." },
      { heading: "Step-by-Step Strategy", body: "First, list your two best teams or intended teams. Second, find the missing role. Third, compare characters by how directly they solve that missing role. Fourth, invest only after checking light cone, relic pressure, and team energy needs. Fifth, re-evaluate after a new mode or patch changes what content asks from your roster." },
      { heading: "Common Mistakes", body: "Many players chase the highest-ranked damage option while ignoring sustain or support bottlenecks. Another mistake is ranking characters without considering relic quality. A character with easy gearing can outperform a stronger option that needs perfect setup on your account." },
      { heading: "Checklist", body: "Identify missing role, check team fit, compare resource cost, test current content, then invest. Keep rankings as context, not a replacement for account planning." }
    ],
    table: { columns: ["Tier Signal", "What It Means", "Investment Note"], rows: [["S", "Broad account value", "Usually safe if role is missing."], ["A", "Strong with team support", "Invest when synergy is ready."], ["B", "Useful but narrower", "Good if it solves your specific gap."], ["C", "Specialist or high cost", "Delay unless you have a clear plan."]] },
    takeaways: ["Rank by role value, not hype.", "Supports and sustain can be higher account value than damage.", "Resource cost matters as much as ceiling."],
    checklist: ["List teams", "Find missing role", "Check relic pressure", "Compare utility", "Invest with purpose"],
    faq: [{ question: "Are these Star Rail tier rankings official?", answer: "No. They are editorial planning guidance and should be tested against your account and current content." }]
  },
  "diablo-4/best-builds": {
    readingTime: "11 min read",
    summary: ["Best for: players choosing a practical class setup", "Skill level: beginner to intermediate", "Time required: 20-30 minutes", "Main goal: choose a build by leveling speed, farming comfort, boss pressure, and gear dependency"],
    sections: [
      { heading: "Quick Answer", body: "The best Diablo 4 build is the one that clears your current activity smoothly with gear you can actually obtain. Leveling builds should be simple, mobile, and resource-stable. Endgame builds can be more specialized, but they need the right aspects, defenses, and resource loop. Do not copy a perfect endgame planner if your character is still missing the pieces that make it function." },
      { heading: "Recommended Setup", body: "Choose a build by activity: campaign leveling, nightmare dungeons, bossing, speed farming, or pushing. For early characters, prioritize area damage, resource reliability, survivability, and movement. For endgame, check whether the build requires specific uniques, glyph levels, tempering, or cooldown breakpoints before committing." },
      { heading: "Step-by-Step Strategy", body: "First, identify the content you are playing today. Second, choose a skill package that handles that content without constant downtime. Third, lock your core damage and defensive layers. Fourth, upgrade aspects and gear in the order that fixes the biggest weakness. Fifth, save advanced variants until the base version feels stable." },
      { heading: "Common Mistakes", body: "Players often switch builds too often and never finish the support pieces. Another mistake is stacking damage while ignoring defenses, then blaming the build when higher-tier content punishes mistakes. If you die before your damage matters, the build needs survival before more offense." },
      { heading: "Checklist", body: "Pick activity, choose core skill, confirm resource loop, add defenses, upgrade aspects, test a dungeon, then decide whether to push or farm." }
    ],
    table: { columns: ["Build Goal", "Priority", "Watch Out For"], rows: [["Leveling", "Simple damage and mobility", "Gear-heavy setups"], ["Farming", "Speed and sustain", "Fragile glass cannon choices"], ["Bossing", "Single-target pressure", "Weak resource loop"], ["Pushing", "Defense layers", "Ignoring crowd control risk"]] },
    takeaways: ["Build for today's content first.", "Gear dependency decides whether a build is practical.", "Defense is part of damage uptime."],
    checklist: ["Pick content", "Check resource", "Add defense", "Upgrade aspects", "Test dungeon", "Adjust one weakness"],
    faq: [{ question: "Should I switch to an endgame Diablo 4 build early?", answer: "Only when you have the core pieces. A leveling build is often faster until the endgame loop is available." }]
  },
  "path-of-exile-2/best-builds": {
    readingTime: "11 min read",
    summary: ["Best for: players choosing a starter build", "Skill level: beginner to intermediate", "Time required: 20-30 minutes", "Main goal: pick a build by budget, defense, mapping comfort, and boss learning curve"],
    sections: [
      { heading: "Quick Answer", body: "A good Path of Exile 2 starter build should function before expensive gear, explain its defensive plan, and scale without forcing constant respecs. The strongest-looking build is not always the best starter. Choose something that can clear maps, recover from mistakes, and teach boss patterns without needing rare items immediately." },
      { heading: "Recommended Setup", body: "Evaluate starter builds by four questions: does it clear packs comfortably, can it handle bosses without perfect play, does it have a clear defense layer, and can upgrades be acquired gradually? Builds with smooth early damage and simple defenses are usually better for first characters than complex late-game scaling plans." },
      { heading: "Step-by-Step Strategy", body: "First, pick the skill fantasy you actually enjoy. Second, check whether the build has a leveling path. Third, identify required gear and optional gear separately. Fourth, test whether deaths come from missing defenses, bad positioning, or low damage. Fifth, upgrade the bottleneck instead of copying a full endgame setup all at once." },
      { heading: "Common Mistakes", body: "New players often pick a build because the final showcase looks powerful, then discover the early version is awkward. Another mistake is ignoring defenses until mapping becomes frustrating. If a build cannot explain how it survives, treat it as incomplete." },
      { heading: "Checklist", body: "Choose skill, check leveling path, identify required gear, confirm defense layer, test mapping, test bossing, upgrade gradually." }
    ],
    table: { columns: ["Build Type", "Good For", "Risk"], rows: [["Budget starter", "First character", "Lower ceiling"], ["Boss learner", "Pattern practice", "Slower mapping"], ["Mapper", "Currency farming", "Boss pressure may lag"], ["High scaling", "Long-term investment", "Weak before gear"]] },
    takeaways: ["Starter builds need a budget path.", "Defense must be explained, not assumed.", "Upgrade the bottleneck, not the whole build."],
    checklist: ["Pick skill", "Check budget", "Check defense", "Map test", "Boss test", "Upgrade gradually"],
    faq: [{ question: "What makes a PoE 2 build beginner-friendly?", answer: "A clear leveling path, replaceable gear, understandable defenses, and room to improve without constant rebuilding." }]
  },
  "elden-ring/best-builds": {
    readingTime: "10 min read",
    summary: ["Best for: players choosing a forgiving build path", "Skill level: beginner to intermediate", "Time required: 20-30 minutes", "Main goal: pick a build that balances damage, survivability, stat clarity, and boss learning"],
    sections: [
      { heading: "Quick Answer", body: "The best Elden Ring build for most players is not the highest damage setup. It is the one that lets you survive long enough to learn bosses while still dealing reliable damage. Pick one main damage stat, enough vigor, a weapon moveset you can control, and a simple upgrade path. A clear build beats a scattered stat sheet." },
      { heading: "Recommended Setup", body: "Newer players should prioritize vigor, weapon upgrades, and a damage stat that matches their chosen weapon. Strength and dexterity builds are straightforward, intelligence and faith builds add range or utility, and hybrid builds should wait until you understand stat scaling. Shields, summons, status effects, and ranged tools are valid parts of a practical build." },
      { heading: "Step-by-Step Strategy", body: "First, choose the weapon feel you like: fast, heavy, ranged, magic, or status. Second, commit to the matching stat. Third, keep vigor healthy. Fourth, upgrade the weapon before obsessing over tiny stat gains. Fifth, adjust talismans and armor around the boss problem you are facing." },
      { heading: "Common Mistakes", body: "Players often spread stats too thin because every new weapon looks tempting. Another mistake is underleveling vigor and blaming the build when mistakes become instant deaths. Damage matters, but surviving one more hit often creates more real progress." },
      { heading: "Checklist", body: "Choose weapon feel, choose main stat, level vigor, upgrade weapon, test boss, adjust talismans, avoid stat drift." }
    ],
    table: { columns: ["Build Style", "Best For", "Beginner Note"], rows: [["Strength", "Stagger and simple scaling", "Slower timing but clear upgrades."], ["Dexterity", "Fast weapons", "Rewards positioning."], ["Intelligence", "Range and burst", "Needs FP planning."], ["Faith", "Utility and sustain", "Flexible but stat hungry."]] },
    takeaways: ["Vigor is part of the build.", "Commit to one main damage plan.", "Weapon upgrades matter more than tiny stat changes early."],
    checklist: ["Pick weapon", "Pick stat", "Level vigor", "Upgrade weapon", "Tune talismans", "Practice boss"],
    faq: [{ question: "What is the easiest Elden Ring build?", answer: "The easiest build is usually a durable setup with clear weapon scaling, enough vigor, and tools that let you learn boss patterns safely." }]
  },
  "monster-hunter-wilds/farming-guide": {
    readingTime: "10 min read",
    summary: ["Best for: hunters planning efficient material routes", "Skill level: all skill levels", "Time required: 15-30 minutes", "Main goal: farm materials without wasting hunts on unfocused objectives"],
    sections: [
      { heading: "Quick Answer", body: "Efficient Monster Hunter Wilds farming starts with the exact material, not the monster name alone. Confirm the part, break condition, capture or carve preference, and whether you need a common drop or a rare one. A good route reduces wasted hunts by targeting the right part and ending the hunt cleanly." },
      { heading: "Recommended Setup", body: "Bring the weapon you can use safely against the target, then add item support for the part you need: traps, bombs, sharpness, status, or survivability. Multiplayer can speed farming only if everyone understands the target part. Solo can be more consistent when you need specific breaks." },
      { heading: "Step-by-Step Strategy", body: "First, identify the material and source. Second, choose whether the goal is break, capture, carve, or quest reward. Third, select a hunt you can repeat without carting. Fourth, focus the correct part before chasing damage. Fifth, stop after the material goal instead of turning every hunt into a full optimization test." },
      { heading: "Common Mistakes", body: "Many players farm the right monster but ignore the right part. Another mistake is using the highest damage weapon even when it makes part targeting awkward. Farming values consistency. A slightly slower hunt with reliable breaks often beats a faster hunt that misses the target material." },
      { heading: "Checklist", body: "Name material, check source, choose hunt, pack part-break tools, focus target part, capture or carve as needed, record the route if it works." }
    ],
    table: { columns: ["Farm Goal", "Route Focus", "Mistake to Avoid"], rows: [["Common material", "Fast repeat hunts", "Overpreparing"], ["Part break", "Targeted damage", "Killing before break"], ["Rare drop", "Consistent clear", "Changing route every hunt"], ["Group farm", "Shared target call", "Everyone hitting random parts"]] },
    takeaways: ["Farm the material condition, not just the monster.", "Reliable part breaks beat messy speed.", "Use the route that you can repeat calmly."],
    checklist: ["Material named", "Source checked", "Part target set", "Items packed", "Route repeated", "Result noted"],
    faq: [{ question: "Is faster always better for Monster Hunter farming?", answer: "No. If a route misses the required part break or condition, it can be faster and still worse." }]
  }
};

function withDeepContent(game, kind, guide) {
  const override = deepGuideOverrides[`${game.slug}/${kind.slug}`];
  return override ? { ...guide, ...override } : guide;
}

export const guides = games.flatMap((game) => [...guideKinds, ...(extraGuideKinds[game.slug] || [])].map((kind, index) => withDeepContent(game, kind, {
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
