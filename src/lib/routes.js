import { games } from "../data/games.js";
import { guides } from "../data/guides.js";
import { tools } from "../data/tools.js";
import { blogPosts } from "../data/blog.js";

export const routes = [
  "/",
  "/games",
  "/tools",
  "/tier-lists",
  "/walkthroughs",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/sitemap",
  "/collections/trending-games",
  "/collections/competitive-shooters",
  "/collections/survival-crafting-games",
  "/collections/co-op-games",
  "/collections/live-service-games",
  "/collections/new-player-friendly-games",
  "/collections/high-skill-games",
  "/collections/open-world-games",
  "/collections/farming-games",
  "/collections/loadout-games",
  ...games.map((game) => `/games/${game.slug}`),
  ...guides.map((guide) => `/games/${guide.gameSlug}/${guide.slug}`),
  ...tools.map((tool) => `/tools/${tool.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`)
];

export function navigate(url) {
  history.pushState({}, "", url);
  window.dispatchEvent(new Event("mq:navigate"));
}

export function link(url, label, className = "") {
  return `<a href="${url}" class="${className}" data-link>${label}</a>`;
}
