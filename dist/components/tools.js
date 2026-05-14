import { games } from "../data/games.js";
import { guides } from "../data/guides.js";
import { tierLists } from "../data/tierLists.js";
import { select, escapeHtml } from "./ui.js";
import { getStored, setStored } from "../lib/storage.js";

const goals = ["Beginner Guide", "Best Build", "Tier List", "Boss Strategy", "Farming Route", "Walkthrough", "PvP Loadout"];
const playstyles = ["Careful", "Aggressive", "Explorer", "Competitive", "Collector", "Co-op"];
const gameToolProfiles = {
  rust: {
    build: { title: "Solo Starter Defense Build", core: ["2x1 stone core", "two-door airlock", "tool cupboard pocket", "external bag"], pros: "Cheap, fast to seal, and easy to expand.", cons: "Limited storage until the second expansion." },
    route: { title: "Low-Noise Stone and Scrap Loop", steps: ["Farm stone near base first", "Recycle only after banking a door upgrade", "Avoid roads after hearing repeated shots", "Return before inventory greed changes the goal"], time: "20-30 minutes" },
    checklist: ["Starter sealed", "Bag placed", "Tool cupboard protected", "Stone core upgraded", "Metal door crafted", "First recycle route tested", "Backup bag outside base"],
    tiers: { S: ["Finished airlock", "Protected tool cupboard"], A: ["External bags", "Small honeycomb"], B: ["Roof access", "Early furnace room"], C: ["Oversized footprint", "Unprotected window loot"] }
  },
  "call-of-duty-warzone": {
    build: { title: "Balanced Squad Loadout", core: ["controllable mid-range primary", "close-range backup", "smoke or escape utility", "rotation-focused perk package"], pros: "Covers most squad fights without demanding perfect aim.", cons: "Less explosive than a full pressure class." },
    route: { title: "Contract Into Safe Rotation", steps: ["Pick one contract near a backup building", "Loot enough for first utility", "Regroup before chasing shots", "Rotate before the edge becomes crowded"], time: "10-18 minutes" },
    checklist: ["Primary range chosen", "Weak range covered", "Utility equipped", "Drop backup called", "Regain route known", "Squad role assigned"],
    tiers: { S: ["Low recoil mid-range", "Smoke rotation"], A: ["Fast close-range backup", "Information utility"], B: ["High recoil damage pick", "Sniper support"], C: ["Duplicate-range loadout", "No escape utility"] }
  },
  "escape-from-tarkov": {
    build: { title: "Beginner Extraction Kit", core: ["replaceable weapon", "basic meds", "headset if affordable", "goal-sized backpack"], pros: "Keeps fear low and learning speed high.", cons: "Not designed for extended PvP chains." },
    route: { title: "One Objective Extraction Route", steps: ["Name the extract before moving", "Loot one low-contest area", "Stop sprinting near buildings", "Leave after one meaningful win"], time: "12-25 minutes" },
    checklist: ["Map chosen", "Two extracts known", "Meds packed", "Ammo checked", "Quest or loot goal set", "Fallback route named"],
    tiers: { S: ["Known extract", "Headset awareness"], A: ["Cheap reliable weapon", "Clear raid goal"], B: ["Large backpack", "Optional PvP route"], C: ["Overpriced kit", "No extract plan"] }
  },
  "genshin-impact": {
    build: { title: "Role-First Team Build", core: ["defined on-field role", "energy plan", "correct main stats", "support utility"], pros: "Improves real team uptime instead of only stat screenshots.", cons: "Requires testing rotation comfort." },
    route: { title: "One Character Upgrade Route", steps: ["Pick one character target", "Find the current bottleneck", "Spend resin only there", "Gather local materials off-resin", "Test before farming artifacts"], time: "Daily routine" },
    checklist: ["Role defined", "Weapon chosen", "Main stats fixed", "Energy checked", "Talent priority set", "Team tested"],
    tiers: { S: ["Flexible support", "Reliable off-field value"], A: ["Strong on-field carry", "Efficient reaction enabler"], B: ["Narrow team specialist", "High investment scaler"], C: ["Awkward uptime", "Role overlap"] }
  },
  "marvel-rivals": {
    build: { title: "Two-Hero Role Plan", core: ["comfort hero", "backup problem-solver", "role gap check", "two-fight test rule"], pros: "Keeps swaps intentional and avoids panic picking.", cons: "Needs honest review after losing fights." },
    route: { title: "Hero Practice Loop", steps: ["Pick one role gap", "Play two fights before swapping", "Track value created", "Save one replay note"], time: "One match block" },
    checklist: ["Comfort hero picked", "Backup hero picked", "Team gap identified", "Two fights tested", "Swap reason written", "Tool plan copied"],
    tiers: { S: ["Reliable team utility", "Safe pressure"], A: ["Strong role specialist", "Flexible backup"], B: ["Comfort pick", "Map-dependent value"], C: ["Narrow counter", "High coordination need"] }
  },
  minecraft: {
    build: { title: "Starter Survival Base Plan", core: ["food source", "lit shelter", "storage wall", "nearby farm plots"], pros: "Keeps early survival readable and expandable.", cons: "Not optimized for late-game automation." },
    route: { title: "Early Farm Progression Route", steps: ["Build food first", "Add wood supply", "Start sugar cane", "Create storage labels", "Add utility farm when demand appears"], time: "First 3-5 sessions" },
    checklist: ["Shelter lit", "Food stable", "Bed placed", "Storage labeled", "Crop farm built", "Wood source marked", "First utility farm chosen"],
    tiers: { S: ["Food farm", "Storage system"], A: ["Sugar cane", "Tree area"], B: ["Animal pen", "Mob drops"], C: ["Huge late-game farm too early", "Unlabeled item overflow"] }
  }
};

function gameOptions() {
  return games.map((game) => game.name);
}

function findGame(name) {
  return games.find((game) => game.name === name) || games[0];
}

function list(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function panel(slug, body) {
  return `<section class="tool-interface" data-tool="${slug}">${body}<div class="tool-results" data-tool-results></div></section>`;
}

export function guideFinderTool() {
  return panel("guide-finder", `<div class="tool-grid">${select("game", gameOptions())}${select("goal", goals)}${select("skill", ["Beginner", "Intermediate", "Advanced"])}${select("platform", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"])}${select("playstyle", playstyles)}<button class="button" data-run-tool>Find Guide</button></div>`);
}

export function buildFinderTool() {
  return panel("build-finder", `<div class="tool-grid">${select("game", gameOptions())}${select("role", ["DPS", "Tank", "Support", "Controller", "Duelist", "Flex", "Farmer"])}${select("playstyle", playstyles)}${select("mode", ["Solo", "Team"])}${select("skill", ["Beginner", "Advanced"])}<button class="button" data-run-tool>Find Build</button></div>`);
}

export function tierListExplorerTool() {
  return panel("tier-list-explorer", `<div class="tool-grid">${select("game", gameOptions())}${select("category", ["character", "weapon", "class", "item", "map"])}${select("patch", ["Current editorial sample", "Starter season", "Evergreen basics"])}${select("tier", ["All", "S", "A", "B", "C"])}<button class="button" data-run-tool>Explore Tier List</button></div>`);
}

export function progressChecklistTool() {
  return panel("progress-checklist", `<div class="tool-grid">${select("game", gameOptions())}<button class="button" data-run-tool>Open Checklist</button></div>`);
}

export function farmingRoutePlannerTool() {
  return panel("farming-route-planner", `<div class="tool-grid">${select("game", gameOptions())}${select("resource", ["Upgrade materials", "Currency", "Crafting parts", "XP", "Boss drops"])}${select("time", ["15 minutes", "30 minutes", "60 minutes"])}${select("difficulty", ["Low risk", "Balanced", "High reward"])}<button class="button" data-run-tool>Plan Route</button></div>`);
}

export function loadoutPickerTool() {
  return panel("loadout-picker", `<div class="tool-grid">${select("game", gameOptions())}${select("range", ["Close", "Mid", "Long", "Flexible"])}${select("role", ["Entry", "Support", "Control", "Burst", "Sustain"])}${select("skill", ["Beginner", "Advanced"])}${select("mode", ["Solo", "Team"])}<button class="button" data-run-tool>Pick Loadout</button></div>`);
}

export function metaShiftPlannerTool() {
  return panel("meta-shift-planner", `<div class="tool-grid">${select("game", gameOptions())}${select("change", ["New patch", "Balance change", "Map rotation", "Popular strategy", "New season"])}${select("role", ["Damage", "Support", "Tank", "Entry", "Farmer", "Builder", "Explorer", "Driver"])}${select("risk", ["Low risk", "Balanced", "Aggressive testing"])}${select("session", ["One match", "30 minutes", "One evening"])}<button class="button" data-run-tool>Plan Test</button></div>`);
}

export function randomGamePickerTool() {
  return panel("random-game-picker", `<div class="tool-grid">${select("genre", ["Any", "RPG", "Shooter", "Survival", "Sandbox", "MOBA", "Mobile", "MMO", "Roguelike", "Battle Royale", "Extraction Shooter", "Racing", "Open World"])}${select("platform", ["Any", "PC", "PlayStation", "Xbox", "Switch", "Mobile"])}${select("session", ["Short", "Medium", "Long"])}${select("mode", ["Solo", "Co-op", "Either"])}<button class="button" data-run-tool>Pick Game</button></div>`);
}

export function settingsOptimizerTool() {
  return panel("settings-optimizer", `<div class="tool-grid">${select("game", gameOptions())}${select("priority", ["Visibility", "Performance", "Comfort", "Competitive consistency"])}${select("platform", ["PC", "PlayStation", "Xbox", "Switch", "Mobile"])}<button class="button" data-run-tool>Review Settings</button></div>`);
}

export function renderTool(slug) {
  const map = {
    "guide-finder": guideFinderTool,
    "build-finder": buildFinderTool,
    "tier-list-explorer": tierListExplorerTool,
    "progress-checklist": progressChecklistTool,
    "farming-route-planner": farmingRoutePlannerTool,
    "loadout-picker": loadoutPickerTool,
    "meta-shift-planner": metaShiftPlannerTool,
    "random-game-picker": randomGamePickerTool,
    "settings-optimizer": settingsOptimizerTool
  };
  return (map[slug] || guideFinderTool)();
}

function values(container) {
  return Object.fromEntries([...container.querySelectorAll("[data-field]")].map((field) => [field.dataset.field, field.value]));
}

export function wireTools(root = document) {
  root.querySelectorAll("[data-tool]").forEach((container) => {
    const button = container.querySelector("[data-run-tool]");
    const output = container.querySelector("[data-tool-results]");
    const run = () => {
      const data = values(container);
      const game = findGame(data.game);
      output.innerHTML = resultFor(container.dataset.tool, game, data);
      output.querySelectorAll("[data-copy]").forEach((copyButton) => {
        copyButton.addEventListener("click", async () => {
          await navigator.clipboard.writeText(copyButton.dataset.copy);
          copyButton.textContent = "Copied";
        });
      });
      output.querySelectorAll("[data-checklist-key]").forEach((box) => {
        box.addEventListener("change", () => {
          const key = box.dataset.checklistKey;
          const saved = getStored("mq:checklist", {});
          saved[key] = box.checked;
          setStored("mq:checklist", saved);
        });
      });
    };
    button?.addEventListener("click", run);
    run();
  });
}

function resultFor(slug, game, data) {
  const profile = gameToolProfiles[game.slug] || {};
  if (slug === "guide-finder") {
    const guide = guides.find((item) => item.gameSlug === game.slug && item.type === data.goal) || guides.find((item) => item.gameSlug === game.slug);
    return `<div class="result-card"><h3>Recommended next read</h3><p>${escapeHtml(game.name)} players asking for ${escapeHtml(data.goal)} should start with a practical, low-friction guide.</p><a class="button" href="/games/${guide.gameSlug}/${guide.slug}" data-link>${escapeHtml(guide.title)}</a><a class="button ghost" href="/tools/progress-checklist" data-link>Track Progress</a></div>`;
  }
  if (slug === "build-finder") {
    if (profile.build) {
      const text = `${game.name}: ${profile.build.title} - ${profile.build.core.join(", ")}`;
      return `<div class="result-card"><h3>${escapeHtml(profile.build.title)}</h3><ul>${list(profile.build.core)}</ul><p><strong>Pros:</strong> ${escapeHtml(profile.build.pros)}</p><p><strong>Weakness:</strong> ${escapeHtml(profile.build.cons)}</p><button class="button ghost" data-copy="${escapeHtml(text)}">Copy Build</button><a class="button" href="/games/${game.slug}/best-builds" data-link>Open Build Guide</a></div>`;
    }
    const text = `${game.name} ${data.role} ${data.playstyle} ${data.mode} starter build`;
    return `<div class="result-card"><h3>${escapeHtml(data.role)} ${escapeHtml(data.playstyle)} Build</h3><ul><li>Core: stable opener, safe recovery option, flexible utility slot.</li><li>Pros: readable, low-risk, easy to adjust.</li><li>Cons: lower ceiling than specialized advanced setups.</li><li>Difficulty: ${escapeHtml(data.skill)}</li></ul><button class="button ghost" data-copy="${escapeHtml(text)}">Copy Build</button><a class="button" href="/games/${game.slug}/best-builds" data-link>Open Build Guide</a></div>`;
  }
  if (slug === "tier-list-explorer") {
    if (profile.tiers) {
      const tiers = Object.entries(profile.tiers)
        .filter(([tier]) => data.tier === "All" || data.tier === tier)
        .map(([tier, items]) => `<section class="tier tier-${tier}"><strong>${tier} Tier</strong>${items.map((item) => `<div><b>${escapeHtml(item)}</b><span>Editorial sample ranking based on practical value, ease of use, and role coverage.</span></div>`).join("")}</section>`)
        .join("");
      return `<div class="result-card"><h3>${escapeHtml(game.name)} Game-Specific Tier Notes</h3><p class="muted">Editorial sample ranking, not official data.</p>${tiers}</div>`;
    }
    const list = tierLists.find((item) => item.gameSlug === game.slug) || tierLists[0];
    const filtered = data.tier === "All" ? list.tiers : list.tiers.filter((tier) => tier.tier === data.tier);
    return `<div class="result-card"><h3>${escapeHtml(list.title)}</h3><p class="muted">Editorial sample ranking, not official data.</p>${filtered.map((tier) => `<section class="tier tier-${tier.tier}"><strong>${tier.tier} Tier</strong>${tier.items.map((item) => `<div><b>${escapeHtml(item.name)}</b><span>${escapeHtml(item.reason)}</span></div>`).join("")}</section>`).join("")}</div>`;
  }
  if (slug === "progress-checklist") {
    const steps = profile.checklist || ["Beginner basics", "Main story", "Build setup", "Resource farming", "Bosses", "Endgame", "PvP / Ranked"];
    const saved = getStored("mq:checklist", {});
    return `<div class="result-card"><h3>${escapeHtml(game.name)} Progress Checklist</h3>${steps.map((step) => {
      const key = `${game.slug}:${step}`;
      return `<label class="check-row"><input type="checkbox" data-checklist-key="${escapeHtml(key)}" ${saved[key] ? "checked" : ""} /> <span>${escapeHtml(step)}</span></label>`;
    }).join("")}<button class="button ghost" data-copy="${escapeHtml(`${game.name} checklist: ${steps.join(", ")}`)}">Copy Checklist</button></div>`;
  }
  if (slug === "farming-route-planner") {
    if (profile.route) {
      return `<div class="result-card"><h3>${escapeHtml(profile.route.title)}</h3><p>Estimated time: ${escapeHtml(profile.route.time)}. Difficulty: ${escapeHtml(data.difficulty)}.</p><ol>${list(profile.route.steps)}</ol><a class="button" href="/games/${game.slug}/farming-guide" data-link>Open Farming Guide</a></div>`;
    }
    return `<div class="result-card"><h3>${escapeHtml(data.resource)} Route</h3><p>Estimated time: ${escapeHtml(data.time)}. Difficulty: ${escapeHtml(data.difficulty)}.</p><ol><li>Start with the safest repeatable activity.</li><li>Clear one high-value objective before detouring.</li><li>Reset, bank rewards, and repeat only if the route stayed comfortable.</li></ol><a class="button" href="/games/${game.slug}/farming-guide" data-link>Open Farming Guide</a></div>`;
  }
  if (slug === "loadout-picker") {
    return `<div class="result-card"><h3>${escapeHtml(data.range)} ${escapeHtml(data.role)} Loadout</h3><p>Why it works: it keeps your role clear while leaving one flexible slot for map, team, or boss pressure.</p><p>Weakness: specialized opponents may force a swap if you cannot control distance.</p><a class="button" href="/games/${game.slug}/best-builds" data-link>Open Related Guide</a></div>`;
  }
  if (slug === "meta-shift-planner") {
    const testPlan = `${game.name} ${data.change} ${data.role} ${data.risk} test plan`;
    return `<div class="result-card"><h3>${escapeHtml(data.change)} Test Plan</h3><p>Use this as an editorial planning tool, not as official patch analysis. The goal is to test one meaningful change without rebuilding your entire setup.</p><ol><li>Keep your current setup as the control version.</li><li>Change one slot related to ${escapeHtml(data.role)} pressure.</li><li>Run the test for ${escapeHtml(data.session)} and track comfort, mistakes, and clear value.</li><li>If the new version only wins in perfect conditions, keep it as a situational option.</li></ol><button class="button ghost" data-copy="${escapeHtml(testPlan)}">Copy Test Plan</button><a class="button" href="/games/${game.slug}" data-link>Open Game Hub</a></div>`;
  }
  if (slug === "random-game-picker") {
    const pool = games.filter((item) => (data.genre === "Any" || item.genre === data.genre) && (data.platform === "Any" || item.platforms.includes(data.platform)));
    const pick = pool[(data.session.length + data.mode.length) % (pool.length || 1)] || games[0];
    return `<div class="result-card"><h3>Try ${escapeHtml(pick.name)}</h3><p>You might like it because it matches your ${escapeHtml(data.genre)} / ${escapeHtml(data.platform)} preference and has guide coverage ready.</p><a class="button" href="/games/${pick.slug}" data-link>Open Game Hub</a></div>`;
  }
  return `<div class="result-card"><h3>${escapeHtml(game.name)} Settings Review</h3><ul><li>Prioritize clarity before visual flair.</li><li>Keep sensitivity or camera speed consistent for a full session.</li><li>Disable distracting effects only when they hide important information.</li></ul></div>`;
}
