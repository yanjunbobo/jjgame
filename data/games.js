const names = [
  ["genshin-impact", "Genshin Impact", "RPG", ["PC", "PlayStation", "Mobile"], ["Open World", "F2P", "Builds", "Farming"], "Beginner-friendly", "High interest", "#4f8cff"],
  ["honkai-star-rail", "Honkai: Star Rail", "RPG", ["PC", "PlayStation", "Mobile"], ["F2P", "Builds", "Tier Lists"], "Moderate", "Popular", "#7c5cff"],
  ["zenless-zone-zero", "Zenless Zone Zero", "RPG", ["PC", "PlayStation", "Mobile"], ["F2P", "Builds", "Characters"], "Moderate", "Trending", "#18d4b8"],
  ["fortnite", "Fortnite", "Shooter", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"], ["Competitive", "Ranked", "F2P"], "Beginner-friendly", "Evergreen", "#5ddcff"],
  ["minecraft", "Minecraft", "Sandbox", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"], ["Open World", "Co-op", "Beginner-friendly"], "Beginner-friendly", "Evergreen", "#52d273"],
  ["roblox", "Roblox", "Sandbox", ["PC", "Xbox", "Mobile"], ["F2P", "Co-op", "Beginner-friendly"], "Beginner-friendly", "Popular", "#ff6f91"],
  ["valorant", "Valorant", "Shooter", ["PC"], ["Competitive", "Ranked", "F2P"], "Hard", "High interest", "#ff4655"],
  ["counter-strike-2", "Counter-Strike 2", "Shooter", ["PC"], ["Competitive", "Ranked", "Settings"], "Hard", "Evergreen", "#f5a623"],
  ["league-of-legends", "League of Legends", "MOBA", ["PC"], ["Competitive", "Ranked", "Builds"], "Hard", "Evergreen", "#3aa9ff"],
  ["dota-2", "Dota 2", "MOBA", ["PC"], ["Competitive", "Ranked", "Builds"], "Hard", "Evergreen", "#e35b4f"],
  ["apex-legends", "Apex Legends", "Shooter", ["PC", "PlayStation", "Xbox", "Switch"], ["Competitive", "Ranked", "F2P"], "Hard", "Popular", "#ff7a3d"],
  ["overwatch-2", "Overwatch 2", "Shooter", ["PC", "PlayStation", "Xbox", "Switch"], ["Competitive", "Ranked", "F2P"], "Moderate", "Popular", "#f99e1a"],
  ["marvel-rivals", "Marvel Rivals", "Shooter", ["PC", "PlayStation", "Xbox"], ["Competitive", "Characters", "Team Play"], "Moderate", "Trending", "#f4436c"],
  ["elden-ring", "Elden Ring", "RPG", ["PC", "PlayStation", "Xbox"], ["Open World", "Bosses", "Builds"], "Hard", "Evergreen", "#c7a34b"],
  ["elden-ring-nightreign", "Elden Ring Nightreign", "Roguelike", ["PC", "PlayStation", "Xbox"], ["Co-op", "Bosses", "Builds"], "Hard", "Trending", "#8f67ff"],
  ["black-myth-wukong", "Black Myth: Wukong", "RPG", ["PC", "PlayStation", "Xbox"], ["Bosses", "Walkthrough", "Action"], "Hard", "High interest", "#d19a66"],
  ["monster-hunter-wilds", "Monster Hunter Wilds", "RPG", ["PC", "PlayStation", "Xbox"], ["Co-op", "Weapons", "Farming"], "Moderate", "Trending", "#45d1a8"],
  ["path-of-exile-2", "Path of Exile 2", "RPG", ["PC", "PlayStation", "Xbox"], ["Builds", "Farming", "Endgame"], "Hard", "High interest", "#7b6dff"],
  ["diablo-4", "Diablo 4", "RPG", ["PC", "PlayStation", "Xbox"], ["Builds", "Farming", "Endgame"], "Moderate", "Popular", "#b83737"],
  ["baldurs-gate-3", "Baldur's Gate 3", "RPG", ["PC", "PlayStation", "Xbox"], ["Story", "Builds", "Choices"], "Moderate", "Evergreen", "#c778dd"],
  ["pokemon-go", "Pokemon GO", "Mobile", ["Mobile"], ["F2P", "PvP", "Collection"], "Beginner-friendly", "Evergreen", "#58b7ff"],
  ["pokemon-tcg-pocket", "Pokemon TCG Pocket", "Mobile", ["Mobile"], ["F2P", "Decks", "Collection"], "Beginner-friendly", "Trending", "#f2c94c"],
  ["clash-royale", "Clash Royale", "Mobile", ["Mobile"], ["Competitive", "Decks", "F2P"], "Moderate", "Evergreen", "#3b82f6"],
  ["brawl-stars", "Brawl Stars", "Mobile", ["Mobile"], ["Competitive", "F2P", "Characters"], "Moderate", "Popular", "#ffca3a"],
  ["pubg-mobile", "PUBG Mobile", "Shooter", ["Mobile"], ["Competitive", "Ranked", "F2P"], "Moderate", "Popular", "#d99a37"],
  ["stardew-valley", "Stardew Valley", "Sandbox", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"], ["Co-op", "Farming", "Beginner-friendly"], "Beginner-friendly", "Evergreen", "#8bd56f"],
  ["terraria", "Terraria", "Sandbox", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"], ["Bosses", "Crafting", "Co-op"], "Moderate", "Evergreen", "#6bb6ff"],
  ["warframe", "Warframe", "MMO", ["PC", "PlayStation", "Xbox", "Switch"], ["F2P", "Farming", "Builds"], "Moderate", "Evergreen", "#00d4ff"],
  ["world-of-warcraft", "World of Warcraft", "MMO", ["PC"], ["Endgame", "Builds", "Raids"], "Hard", "Evergreen", "#2f80ed"],
  ["final-fantasy-xiv", "Final Fantasy XIV", "MMO", ["PC", "PlayStation", "Xbox"], ["Story", "Raids", "Jobs"], "Moderate", "Evergreen", "#7b61ff"],
  ["grand-theft-auto-online", "Grand Theft Auto Online", "Open World", ["PC", "PlayStation", "Xbox"], ["Open World", "Money", "Co-op", "Vehicles"], "Moderate", "High interest", "#37d67a"],
  ["rust", "Rust", "Survival", ["PC", "PlayStation", "Xbox"], ["Survival", "PvP", "Base Building", "Farming"], "Hard", "High interest", "#d97845"],
  ["dayz", "DayZ", "Survival", ["PC", "PlayStation", "Xbox"], ["Survival", "Open World", "PvP", "Beginner-friendly"], "Hard", "Popular", "#8aa16a"],
  ["rainbow-six-siege", "Rainbow Six Siege", "Shooter", ["PC", "PlayStation", "Xbox"], ["Competitive", "Ranked", "Operators", "Settings"], "Hard", "Popular", "#f5d04c"],
  ["call-of-duty-warzone", "Call of Duty: Warzone", "Battle Royale", ["PC", "PlayStation", "Xbox"], ["Competitive", "Loadouts", "F2P", "Ranked"], "Moderate", "High interest", "#7fb069"],
  ["escape-from-tarkov", "Escape from Tarkov", "Extraction Shooter", ["PC"], ["Extraction", "PvP", "Farming", "Loadouts"], "Hard", "Popular", "#9b8f7a"],
  ["helldivers-2", "Helldivers 2", "Shooter", ["PC", "PlayStation", "Xbox"], ["Co-op", "Loadouts", "Missions", "Farming"], "Moderate", "Trending", "#f6c445"],
  ["palworld", "Palworld", "Survival", ["PC", "Xbox", "PlayStation"], ["Open World", "Co-op", "Base Building", "Collection"], "Moderate", "Evergreen", "#69d2e7"],
  ["forza-horizon-6", "Forza Horizon 6", "Racing", ["PC", "Xbox"], ["Racing", "Tuning", "Open World", "Cars"], "Beginner-friendly", "Trending", "#ff4f9a"],
  ["subnautica-2", "Subnautica 2", "Survival", ["PC", "Xbox"], ["Survival", "Exploration", "Base Building", "Co-op"], "Moderate", "Trending", "#28c7fa"]
];

const guideTypes = ["Beginner Guide", "Best Builds", "Tier List", "Walkthrough", "Farming Routes", "Boss Guide", "Weapons / Characters / Items", "Tips & Tricks", "FAQ"];
const toolSlugs = ["guide-finder", "build-finder", "tier-list-explorer", "progress-checklist", "farming-route-planner", "loadout-picker", "meta-shift-planner"];
const extraGuideSlugs = {
  "genshin-impact": ["tier-list-guide", "settings-guide"],
  minecraft: ["farms-guide", "settings-guide"],
  "marvel-rivals": ["tier-list-guide", "settings-guide"],
  valorant: ["settings-guide", "tier-list-guide"],
  fortnite: ["settings-guide", "loadout-guide"],
  "honkai-star-rail": ["tier-list-guide"],
  "diablo-4": ["tier-list-guide", "settings-guide"],
  "path-of-exile-2": ["tier-list-guide"],
  "elden-ring": ["settings-guide"],
  "monster-hunter-wilds": ["tier-list-guide"],
  "grand-theft-auto-online": ["money-guide", "vehicle-guide"],
  rust: ["base-design-guide", "pvp-loadout-guide", "tier-list-guide", "settings-guide"],
  dayz: ["first-hour-survival", "loot-route-guide"],
  "rainbow-six-siege": ["operator-guide", "ranked-setup-guide"],
  "call-of-duty-warzone": ["loadout-guide", "drop-route-guide", "tier-list-guide", "settings-guide"],
  "escape-from-tarkov": ["extraction-guide", "budget-kit-guide", "tier-list-guide", "settings-guide"],
  "helldivers-2": ["stratagem-guide", "mission-farming-guide"],
  palworld: ["base-building-guide", "pal-breeding-guide"],
  "forza-horizon-6": ["car-tuning-guide", "money-and-progression-guide"],
  "subnautica-2": ["base-building-guide", "exploration-route-guide"]
};

export const games = names.map(([slug, name, genre, platforms, tags, difficulty, popularityLabel, heroColor], index) => ({
  id: index + 1,
  slug,
  name,
  shortDescription: `${name} guides focused on quick decisions, practical setup choices, progression planning, and tool-assisted strategy.`,
  genre,
  platforms,
  tags,
  difficulty,
  guideTypes,
  popularityLabel,
  updatedAt: "2026-05-14",
  heroColor,
  guides: ["beginner-guide", "best-builds", "farming-guide", ...(extraGuideSlugs[slug] || [])],
  tools: toolSlugs,
  bestFor: tags.slice(0, 3).join(", "),
  faq: [
    {
      question: `Is this ${name} hub beginner-friendly?`,
      answer: `Yes. The hub starts with low-risk basics, then links to build, farming, tier list, and walkthrough pages when you are ready for more detail.`
    },
    {
      question: `Are the ${name} rankings official?`,
      answer: `No. Rankings on MetaQuestly are editorial samples meant to help planning. They are not official publisher data or guaranteed performance numbers.`
    }
  ]
}));

export const genres = ["RPG", "Shooter", "Survival", "Sandbox", "MOBA", "Sports", "Strategy", "Roguelike", "Mobile", "MMO", "Open World", "Battle Royale", "Extraction Shooter", "Racing"];
export const platforms = [...new Set(games.flatMap((game) => game.platforms))].sort();
export const tags = [...new Set(games.flatMap((game) => game.tags))].sort();
