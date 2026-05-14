import { games } from "./games.js";

const categories = ["character", "weapon", "class", "item", "map"];
const names = ["Starter Anchor", "Flexible Carry", "Control Pick", "Burst Option", "Safe Utility", "Niche Tech", "High-Risk Snowball", "Comfort Choice"];

export const tierLists = games.slice(0, 24).map((game, index) => ({
  id: `${game.slug}-sample-tier-list`,
  gameSlug: game.slug,
  gameName: game.name,
  slug: `${game.slug}-sample-tier-list`,
  title: `${game.name} Editorial Sample Tier List`,
  category: categories[index % categories.length],
  updatedAt: "2026-05-14",
  description: `A sample editorial ranking for ${game.name}. Use it as planning context, not as official data.`,
  tiers: ["S", "A", "B", "C"].map((tier, tierIndex) => ({
    tier,
    items: names.slice(tierIndex * 2, tierIndex * 2 + 2).map((name, itemIndex) => ({
      name: `${name} ${index + itemIndex + 1}`,
      reason: tier === "S"
        ? "Strong baseline value with few awkward matchups in common scenarios."
        : tier === "A"
          ? "Reliable when the setup matches your role and current goal."
          : tier === "B"
            ? "Playable, but usually asks for more practice or narrower conditions."
            : "Situational sample pick that should be tested before committing resources."
    }))
  }))
}));
