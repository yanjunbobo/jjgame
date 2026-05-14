export const site = {
  name: "MetaQuestly",
  url: "https://game.xxym8.com",
  tagline: "Fast game guides, builds, tier lists, walkthroughs, checklists, and strategy tools for popular games.",
  disclaimer: "Not affiliated with or endorsed by any game publisher. All trademarks belong to their respective owners."
};

export function setMeta({ title, description, canonical }) {
  document.title = title ? `${title} - MetaQuestly` : "MetaQuestly - Game Guides, Builds & Strategy Tools";
  const desc = document.querySelector('meta[name="description"]');
  if (desc && description) desc.setAttribute("content", description);
  const canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag && canonical) canonicalTag.setAttribute("href", `${site.url}${canonical === "/" ? "" : canonical}`);
}
