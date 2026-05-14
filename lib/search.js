import { games } from "../data/games.js";
import { guides } from "../data/guides.js";
import { tools } from "../data/tools.js";

function score(text, query) {
  const haystack = text.toLowerCase();
  const needle = query.toLowerCase().trim();
  if (!needle) return 0;
  if (haystack.includes(needle)) return 100 + needle.length;
  let index = 0;
  for (const char of haystack) if (char === needle[index]) index += 1;
  return index === needle.length ? 45 + index : 0;
}

export function searchAll(query) {
  const gameResults = games.map((game) => ({
    type: "Game",
    title: game.name,
    description: game.shortDescription,
    url: `/games/${game.slug}`,
    score: score(`${game.name} ${game.genre} ${game.tags.join(" ")}`, query)
  }));
  const guideResults = guides.map((guide) => ({
    type: "Guide",
    title: guide.title,
    description: guide.description,
    url: `/games/${guide.gameSlug}/${guide.slug}`,
    score: score(`${guide.title} ${guide.type} ${guide.tags.join(" ")}`, query)
  }));
  const toolResults = tools.map((tool) => ({
    type: "Tool",
    title: tool.name,
    description: tool.description,
    url: `/tools/${tool.slug}`,
    score: score(`${tool.name} ${tool.description}`, query)
  }));
  return [...gameResults, ...guideResults, ...toolResults]
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}
