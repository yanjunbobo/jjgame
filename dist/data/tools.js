export const tools = [
  ["guide-finder", "Game Guide Finder", "Choose a game, goal, skill level, platform, and playstyle to get the next guide to read.", "Find Guide"],
  ["build-finder", "Build Finder", "Generate starter build cards with core items, strengths, weaknesses, and related guides.", "Find Build"],
  ["tier-list-explorer", "Tier List Explorer", "Browse editorial sample rankings by game, category, and season, then filter by tier.", "Explore Tiers"],
  ["progress-checklist", "Progress Checklist", "Track beginner basics, story, builds, farming, bosses, endgame, and ranked progress with local saving.", "Open Checklist"],
  ["farming-route-planner", "Farming Route Planner", "Plan a repeatable farming route based on resource type, time available, and difficulty.", "Plan Route"],
  ["loadout-picker", "Loadout Picker", "Pick a loadout by combat range, role, skill level, and solo or team preference.", "Pick Loadout"],
  ["meta-shift-planner", "Meta Shift Planner", "Turn patch changes, playstyle, and role pressure into a practical next test plan.", "Plan Test"],
  ["settings-optimizer", "Settings Optimizer", "Get a simple settings review checklist for comfort, clarity, and competitive consistency.", "Tune Settings"],
  ["random-game-picker", "Random Game Picker", "Choose genre, platform, session length, and solo or co-op preference to find your next game.", "Pick Game"]
].map(([slug, name, description, action], index) => ({ id: index + 1, slug, name, description, action }));
