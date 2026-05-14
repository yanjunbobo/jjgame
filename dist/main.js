import { games, genres, platforms, tags } from "./data/games.js";
import { guides, guidesForGame } from "./data/guides.js";
import { tools } from "./data/tools.js";
import { blogPosts } from "./data/blog.js";
import { tierLists } from "./data/tierLists.js";
import { setMeta, site } from "./lib/seo.js";
import { addRecent } from "./lib/storage.js";
import {
  adSlot,
  affiliateBox,
  breadcrumbs,
  disclaimerBox,
  escapeHtml,
  faq,
  footer,
  gameCard,
  guideCard,
  header,
  recentPanel,
  searchPanel,
  shell,
  sitemapList,
  slugify,
  tableOfContents,
  tagPill,
  toolCard,
  wireSearch
} from "./components/ui.js";
import { renderTool, wireTools } from "./components/tools.js";

const app = document.querySelector("#app");
const seoCollections = [
  ["trending-games", "Trending Games", (game) => game.popularityLabel === "Trending" || game.popularityLabel === "High interest"],
  ["competitive-shooters", "Competitive Shooters", (game) => ["Shooter", "Battle Royale", "Extraction Shooter"].includes(game.genre) && game.tags.includes("Competitive")],
  ["survival-crafting-games", "Survival and Crafting Games", (game) => game.genre === "Survival" || game.tags.includes("Base Building")],
  ["co-op-games", "Co-op Games", (game) => game.tags.includes("Co-op") || game.tags.includes("Team Play")],
  ["live-service-games", "Live-Service Games", (game) => game.tags.includes("F2P") || game.tags.includes("Ranked") || game.tags.includes("Missions")],
  ["new-player-friendly-games", "New Player Friendly Games", (game) => game.difficulty === "Beginner-friendly" || game.tags.includes("Beginner-friendly")],
  ["high-skill-games", "High Skill Games", (game) => game.difficulty === "Hard"],
  ["open-world-games", "Open World Games", (game) => game.genre === "Open World" || game.tags.includes("Open World")],
  ["farming-games", "Farming Route Games", (game) => game.tags.includes("Farming")],
  ["loadout-games", "Loadout Guide Games", (game) => game.tags.includes("Loadouts") || game.tags.includes("Builds")]
];
const tagAliases = {
  "beginner-guides": ["Beginner-friendly"],
  "best-builds": ["Builds"],
  "farming-routes": ["Farming"],
  "tier-lists": ["Tier Lists"],
  "pvp-loadouts": ["PvP", "Loadouts"],
  "settings-optimization": ["Settings", "Tuning"],
  "base-building": ["Base Building"],
  "extraction-guides": ["Extraction"],
  "money-guides": ["Money"],
  "co-op-guides": ["Co-op", "Team Play"],
  "open-world-guides": ["Open World"]
};

function section(title, content, cls = "section") {
  return `<section class="${cls}"><div class="section-head"><h2>${title}</h2></div>${content}</section>`;
}

function guideTable(table) {
  if (!table) return "";
  return `<section><h2>Recommended Comparison</h2><div class="table-wrap"><table><thead><tr>${table.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}

function topicCluster(game, gameGuides) {
  const pick = (match, fallbackTool) => gameGuides.find(match) || { title: fallbackTool.label, description: fallbackTool.description, url: fallbackTool.url, type: "Tool" };
  const clusters = [
    ["Beginner", pick((guide) => guide.slug === "beginner-guide", { label: "Guide Finder", description: "Choose the right starting guide for your current skill level.", url: "/tools/guide-finder" })],
    ["Builds / Loadouts", pick((guide) => ["best-builds", "loadout-guide", "budget-kit-guide", "pvp-loadout-guide"].includes(guide.slug), { label: "Build Finder", description: "Generate a role-based build or loadout card.", url: "/tools/build-finder" })],
    ["Tier List", pick((guide) => guide.slug === "tier-list-guide" || guide.type === "Tier List", { label: "Tier List Explorer", description: "Browse editorial rankings by category and tier.", url: "/tools/tier-list-explorer" })],
    ["Farming / Resource Route", pick((guide) => ["farming-guide", "farms-guide", "money-guide", "mission-farming-guide"].includes(guide.slug), { label: "Farming Route Planner", description: "Plan routes by time, difficulty, and resource type.", url: "/tools/farming-route-planner" })],
    ["Settings", pick((guide) => guide.slug === "settings-guide" || guide.type === "Settings Guide", { label: "Settings Optimizer", description: "Tune visibility, comfort, and consistency.", url: "/tools/settings-optimizer" })],
    ["Tools", { title: `${game.name} Tool Stack`, description: "Use checklists, route planning, build picking, and meta testing together.", url: "/tools", type: "Tools" }]
  ];
  return `<div class="cluster-grid">${clusters.map(([label, item]) => {
    const url = item.url || `/games/${game.slug}/${item.slug}`;
    return `<article class="cluster-card"><span class="badge">${label}</span><h3><a href="${url}" data-link>${escapeHtml(item.title)}</a></h3><p>${escapeHtml(item.description)}</p></article>`;
  }).join("")}</div>`;
}

function homePage() {
  const popular = games.slice(0, 24).map(gameCard).join("");
  const latest = guides.slice(0, 8).map(guideCard).join("");
  return shell(`
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Fast game guides without the clutter</span>
        <h1>Game Guides, Builds & Strategy Tools</h1>
        <p>Find practical guides for popular games — from beginner routes and boss strategies to builds, tier lists, and farming plans.</p>
        ${searchPanel()}
        <div class="cta-row"><a class="button" href="/games" data-link>Explore Games</a><a class="button ghost" href="/tools/guide-finder" data-link>Open Guide Finder</a></div>
      </div>
      <div class="quick-panel">
        <h2>What are you trying to solve today?</h2>
        <label>Select a game<select data-quick-game>${games.slice(0, 12).map((game) => `<option value="${game.slug}">${escapeHtml(game.name)}</option>`).join("")}</select></label>
        <label>Select what you need<select data-quick-goal><option>beginner-guide</option><option>best-builds</option><option>tier-list</option><option>boss-strategy</option><option>farming-guide</option><option>walkthrough</option><option>pvp-loadout</option></select></label>
        <button class="button" data-quick-find>Find Guide</button>
      </div>
    </section>
    ${adSlot("homepage-after-hero")}
    ${section("Popular Games", `<div class="card-grid">${popular}</div>`)}
    ${section("Featured Tools", `<div class="tool-grid-cards">${tools.slice(0, 6).map(toolCard).join("")}</div>`)}
    ${section("Latest Guides", `<div class="guide-grid">${latest}</div>`)}
    ${section("What is MetaQuestly?", `<div class="prose"><p>MetaQuestly is an original, tool-first game guide hub built for players who want practical answers quickly. Instead of dropping you into a wall of links, it combines game hubs, structured starter guides, editorial sample rankings, checklists, and small decision tools.</p><p>Use the guide finder when you know your problem but not the right page. Use the game hubs when you want everything for one game in one clean place. Use tools when a checklist, build card, or route plan is faster than another long article.</p></div>`)}
    ${faq([
      { question: "Is MetaQuestly official?", answer: site.disclaimer },
      { question: "Are tier lists guaranteed?", answer: "No. Tier lists are editorial samples for planning and should be tested against your patch, team, account, and skill level." },
      { question: "Does the site use paid APIs?", answer: "No. The first version is fully static and uses local data files so it can run on GitHub Pages." }
    ])}
  `);
}

function gamesPage() {
  return shell(`
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Games" }])}
    <section class="page-hero"><h1>All Game Guides</h1><p>Search, filter, and sort game hubs by genre, platform, tag, difficulty, and guide coverage.</p>${searchPanel()}</section>
    <section class="filters" data-game-filters>
      <input data-filter="query" placeholder="Filter games..." />
      <select data-filter="genre"><option>All genres</option>${genres.map((item) => `<option>${item}</option>`).join("")}</select>
      <select data-filter="platform"><option>All platforms</option>${platforms.map((item) => `<option>${item}</option>`).join("")}</select>
      <select data-filter="tag"><option>All tags</option>${tags.map((item) => `<option>${item}</option>`).join("")}</select>
      <select data-filter="difficulty"><option>All difficulties</option><option>Beginner-friendly</option><option>Moderate</option><option>Hard</option></select>
      <select data-filter="sort"><option>Popular</option><option>Recently Updated</option><option>A-Z</option><option>Most Guides</option></select>
    </section>
    <section class="section"><div class="card-grid" data-game-list>${games.map(gameCard).join("")}</div></section>
  `);
}

function gameHub(slug) {
  const game = games.find((item) => item.slug === slug);
  if (!game) return notFound();
  const gameGuides = guidesForGame(slug);
  const related = games.filter((item) => item.genre === game.genre && item.slug !== game.slug).slice(0, 4);
  addRecent({ title: game.name, type: "Game", url: `/games/${game.slug}` });
  setMeta({ title: `${game.name} Guides, Builds & Tools`, description: game.shortDescription, canonical: `/games/${game.slug}` });
  return shell(`
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Games", href: "/games" }, { label: game.name }])}
    <section class="game-hero" style="--accent:${game.heroColor}">
      <div><span class="eyebrow">${escapeHtml(game.genre)} guide hub</span><h1>${escapeHtml(game.name)} Guides, Builds & Strategy Tools</h1><p>${escapeHtml(game.shortDescription)}</p><div class="meta-row"><span>Last updated ${game.updatedAt}</span><span>${escapeHtml(game.difficulty)}</span><span>${escapeHtml(game.popularityLabel)}</span></div></div>
      <div class="overview-card"><h2>Game Overview</h2><dl><dt>Genre</dt><dd>${escapeHtml(game.genre)}</dd><dt>Platforms</dt><dd>${game.platforms.join(", ")}</dd><dt>Main guide types</dt><dd>${game.guideTypes.slice(0, 5).join(", ")}</dd><dt>Best for</dt><dd>${escapeHtml(game.bestFor)}</dd></dl></div>
    </section>
    ${disclaimerBox()}
    ${adSlot("sidebar")}
    ${section("Quick Start", `<div class="tool-strip">${["Beginner", "Build", "Tier List", "Boss", "Farming", "Walkthrough", "PvP"].map((label) => `<a href="/tools/guide-finder" data-link>${label}</a>`).join("")}</div>`)}
    ${section("Strategy Topic Cluster", topicCluster(game, gameGuides))}
    ${section("Best Guides for New Players", `<div class="guide-grid">${gameGuides.map(guideCard).join("")}</div>`)}
    ${section("Builds and Loadouts", `<p class="prose narrow">Start with a forgiving setup, then use the Build Finder when you know your role, playstyle, and solo or team context.</p><a class="button" href="/tools/build-finder" data-link>Open Build Finder</a>`)}
    ${section("Tier Lists", `<p class="prose narrow">Use editorial rankings as planning context. They are not official data and should be tested with your own patch, account, and team needs.</p><a class="button ghost" href="/tools/tier-list-explorer" data-link>Explore Tier Lists</a>`)}
    ${section("Farming and Progression", `<p class="prose narrow">Plan short routes, bank rewards regularly, and keep a checklist for the next unlock instead of farming everything at once.</p><a class="button" href="/tools/farming-route-planner" data-link>Plan Farming Route</a>`)}
    ${section("Tools for This Game", `<div class="tool-grid-cards">${tools.slice(0, 6).map(toolCard).join("")}</div>`)}
    ${section("Related Games", `<div class="card-grid compact">${related.map(gameCard).join("")}</div>`)}
    ${faq(game.faq)}
    ${affiliateBox()}
  `);
}

function guidePage(gameSlug, guideSlug) {
  const guide = guides.find((item) => item.gameSlug === gameSlug && item.slug === guideSlug);
  const game = games.find((item) => item.slug === gameSlug);
  if (!guide || !game) return notFound();
  addRecent({ title: guide.title, type: "Guide", url: `/games/${gameSlug}/${guideSlug}` });
  setMeta({ title: guide.title, description: guide.description, canonical: `/games/${gameSlug}/${guideSlug}` });
  return shell(`
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Games", href: "/games" }, { label: game.name, href: `/games/${game.slug}` }, { label: guide.type }])}
    <article class="article-layout">
      <aside>${tableOfContents(guide.sections)}</aside>
      <div class="article">
        <h1>${escapeHtml(guide.title)}</h1>
        <div class="meta-row"><span>Updated ${guide.updatedAt}</span><span>${guide.readingTime}</span><span>${escapeHtml(guide.skillLevel)}</span></div>
        <div class="quick-answer"><h2>Quick Answer</h2><ul>${guide.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><button class="button ghost" data-copy-summary>Copy Summary</button></div>
        ${guide.sections.map((sec) => `<section id="${slugify(sec.heading)}"><h2>${escapeHtml(sec.heading)}</h2><p>${escapeHtml(sec.body)}</p></section>`).join("")}
        ${guideTable(guide.table)}
        <section><h2>Key Takeaways</h2><ul>${guide.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
        <section><h2>Checklist</h2><ul class="checklist">${guide.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
        ${adSlot("in-article")}
        <section><h2>Related Tools</h2><div class="tool-grid-cards">${tools.slice(0, 3).map(toolCard).join("")}</div></section>
        <section><h2>Related Guides</h2><div class="guide-grid">${guidesForGame(game.slug).filter((item) => item.id !== guide.id).map(guideCard).join("")}</div></section>
        ${faq(guide.faq || [{ question: `Is this ${game.name} guide official?`, answer: site.disclaimer }, { question: "How should I use this guide?", answer: "Use it as a starter plan, then adjust based on your patch, account, team, and comfort level." }])}
        ${disclaimerBox()}
      </div>
    </article>
  `);
}

function toolsPage() {
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Tools" }])}<section class="page-hero"><h1>Game Strategy Tools</h1><p>Interactive static tools for builds, guide discovery, checklists, farming plans, loadouts, and game picking.</p></section>${section("All Tools", `<div class="tool-grid-cards">${tools.map(toolCard).join("")}</div>`)}`);
}

function toolPage(slug) {
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) return notFound();
  setMeta({ title: tool.name, description: tool.description, canonical: `/tools/${tool.slug}` });
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: tool.name }])}<section class="page-hero"><h1>${escapeHtml(tool.name)}</h1><p>${escapeHtml(tool.description)}</p></section>${section("What this tool does", `<p class="prose narrow">This tool turns a broad game question into a smaller recommendation you can test in your next session. Results are local editorial samples and do not use paid APIs or official publisher data.</p>`)}${renderTool(slug)}${section("How to use results", `<p class="prose narrow">Treat the result as a starting point. Open the related guide, test one session, and adjust only one variable at a time.</p>`)}${section("Related tools", `<div class="tool-grid-cards">${tools.filter((item) => item.slug !== slug).slice(0, 3).map(toolCard).join("")}</div>`)}${faq([{ question: "Does this tool save data?", answer: "Only the progress checklist saves completion state in your browser localStorage." }, { question: "Are results official?", answer: site.disclaimer }])}`);
}

function tierListsPage() {
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Tier Lists" }])}<section class="page-hero"><h1>Tier Lists</h1><p>Editorial sample rankings across games. Filter by game and category, then open the related game hub or tool.</p></section><section class="filters"><select data-tier-filter="game"><option>All games</option>${games.map((game) => `<option>${escapeHtml(game.name)}</option>`).join("")}</select><select data-tier-filter="category"><option>All categories</option><option>character</option><option>weapon</option><option>class</option><option>item</option><option>map</option></select></section><section class="section"><div class="guide-grid" data-tier-list>${tierLists.map(tierCard).join("")}</div></section>`);
}

function tierCard(list) {
  return `<article class="guide-card" data-game="${escapeHtml(list.gameName)}" data-category="${escapeHtml(list.category)}"><span class="badge">${escapeHtml(list.category)}</span><h3>${escapeHtml(list.title)}</h3><p>${escapeHtml(list.description)}</p><a class="button ghost" href="/tools/tier-list-explorer" data-link>Open Explorer</a><a class="button ghost" href="/games/${list.gameSlug}" data-link>Game Hub</a></article>`;
}

function walkthroughsPage() {
  const items = guides.filter((guide) => guide.slug === "beginner-guide" || guide.slug === "farming-guide");
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Walkthroughs" }])}<section class="page-hero"><h1>Walkthroughs</h1><p>Structured routes for early progress, farming, and step-by-step strategy.</p></section>${section("Walkthrough Collection", `<div class="guide-grid">${items.map(guideCard).join("")}</div>`)}`);
}

function blogPage() {
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Blog" }])}<section class="page-hero"><h1>MetaQuestly Blog</h1><p>Short strategy essays about using guides, builds, tier lists, patch notes, and progress systems better.</p></section>${section("Latest Articles", `<div class="guide-grid">${blogPosts.map((post) => `<article class="guide-card"><h3><a href="/blog/${post.slug}" data-link>${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.description)}</p><div class="meta-row"><span>${post.readingTime}</span><span>${post.updatedAt}</span></div></article>`).join("")}</div>`)}`);
}

function blogPost(slug) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return notFound();
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }])}<article class="article single"><h1>${escapeHtml(post.title)}</h1><p class="lead">${escapeHtml(post.description)}</p><div class="meta-row"><span>${post.readingTime}</span><span>Updated ${post.updatedAt}</span></div>${post.sections.map((sec) => `<section><h2>${escapeHtml(sec.heading)}</h2><p>${escapeHtml(sec.body)}</p></section>`).join("")}</article>`);
}

function aggregatePage(type, value) {
  const label = value.replaceAll("-", " ");
  const collection = seoCollections.find((item) => item[0] === value);
  const matched = games.filter((game) => {
    if (type === "genres") return game.genre.toLowerCase() === label.toLowerCase();
    if (type === "platforms") return game.platforms.some((platform) => platform.toLowerCase() === label.toLowerCase());
    if (type === "collections") return collection ? collection[2](game) : false;
    const aliases = tagAliases[value] || [label];
    return game.tags.some((tag) => aliases.some((alias) => tag.toLowerCase() === alias.toLowerCase()));
  });
  const title = collection ? collection[1] : label.replace(/\b\w/g, (c) => c.toUpperCase());
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: type }, { label: title }])}<section class="page-hero"><h1>${escapeHtml(title)} Game Guides</h1><p>Filtered game hubs, guide pages, and tools for this SEO category. Use these pages to jump into games by intent, genre, platform, or current player need.</p></section>${section("Matching Games", `<div class="card-grid">${matched.map(gameCard).join("") || "<p>No matching games yet.</p>"}</div>`)}${section("Useful Tools", `<div class="tool-grid-cards">${tools.slice(0, 5).map(toolCard).join("")}</div>`)}`);
}

function basicPage(slug) {
  const copy = {
    about: ["About MetaQuestly", "MetaQuestly is an independent static game guide and tools website built around fast decisions, clean structure, and player-friendly navigation."],
    contact: ["Contact", "For corrections, suggestions, partnerships, or site questions, contact the site owner through the GitHub repository issue tracker."],
    privacy: ["Privacy Policy", "MetaQuestly stores only local browser preferences such as theme, recent pages, and checklist progress. No backend account system is used in this static version."],
    terms: ["Terms", "Use MetaQuestly for personal game planning and informational purposes. Content is provided as editorial guidance without guarantees."],
    disclaimer: ["Disclaimer", site.disclaimer],
    sitemap: ["Sitemap", "Browse the main public routes generated for this static site."]
  }[slug];
  if (!copy) return notFound();
  return shell(`${breadcrumbs([{ label: "Home", href: "/" }, { label: copy[0] }])}<section class="page-hero"><h1>${copy[0]}</h1><p>${copy[1]}</p></section>${slug === "sitemap" ? sitemapList() : recentPanel()}${adSlot("footer")}`);
}

function notFound() {
  return shell(`<section class="page-hero"><h1>Page not found</h1><p>This page is not in the current MetaQuestly route index.</p><a class="button" href="/" data-link>Back Home</a></section>`);
}

function render() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  let html;
  if (path === "/") html = homePage();
  else if (path === "/games") html = gamesPage();
  else if (parts[0] === "games" && parts.length === 2) html = gameHub(parts[1]);
  else if (parts[0] === "games" && parts.length === 3) html = guidePage(parts[1], parts[2]);
  else if (path === "/tools") html = toolsPage();
  else if (parts[0] === "tools" && parts.length === 2) html = toolPage(parts[1]);
  else if (path === "/tier-lists") html = tierListsPage();
  else if (path === "/walkthroughs") html = walkthroughsPage();
  else if (path === "/blog") html = blogPage();
  else if (parts[0] === "blog" && parts.length === 2) html = blogPost(parts[1]);
  else if (["genres", "platforms", "tags", "collections"].includes(parts[0]) && parts.length === 2) html = aggregatePage(parts[0], parts[1]);
  else html = basicPage(parts[0]);
  app.innerHTML = html;
  wire();
}

function wire() {
  wireSearch(app);
  wireTools(app);
  app.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("mq:theme", next);
  });
  app.querySelector("[data-menu-toggle]")?.addEventListener("click", () => app.querySelector("[data-mobile-nav]")?.classList.toggle("open"));
  app.querySelector("[data-quick-find]")?.addEventListener("click", () => {
    const game = app.querySelector("[data-quick-game]").value;
    const goal = app.querySelector("[data-quick-goal]").value;
    const target = goal === "best-builds" || goal === "farming-guide" || goal === "beginner-guide" ? `/games/${game}/${goal}` : `/tools/guide-finder`;
    history.pushState({}, "", target);
    render();
  });
  wireGameFilters();
  wireTierFilters();
  app.querySelector("[data-copy-summary]")?.addEventListener("click", async (event) => {
    const text = [...app.querySelectorAll(".quick-answer li")].map((item) => item.textContent).join("\n");
    await navigator.clipboard.writeText(text);
    event.currentTarget.textContent = "Copied";
  });
}

function wireGameFilters() {
  const container = app.querySelector("[data-game-filters]");
  const list = app.querySelector("[data-game-list]");
  if (!container || !list) return;
  const update = () => {
    const value = (name) => container.querySelector(`[data-filter="${name}"]`).value;
    const query = value("query").toLowerCase();
    let filtered = games.filter((game) =>
      (!query || `${game.name} ${game.genre} ${game.tags.join(" ")}`.toLowerCase().includes(query)) &&
      (value("genre") === "All genres" || game.genre === value("genre")) &&
      (value("platform") === "All platforms" || game.platforms.includes(value("platform"))) &&
      (value("tag") === "All tags" || game.tags.includes(value("tag"))) &&
      (value("difficulty") === "All difficulties" || game.difficulty === value("difficulty"))
    );
    if (value("sort") === "A-Z") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (value("sort") === "Most Guides") filtered.sort((a, b) => b.guideTypes.length - a.guideTypes.length);
    if (value("sort") === "Recently Updated") filtered.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    list.innerHTML = filtered.map(gameCard).join("");
  };
  container.querySelectorAll("input,select").forEach((field) => field.addEventListener("input", update));
}

function wireTierFilters() {
  const list = app.querySelector("[data-tier-list]");
  if (!list) return;
  app.querySelectorAll("[data-tier-filter]").forEach((field) => field.addEventListener("input", () => {
    const game = app.querySelector('[data-tier-filter="game"]').value;
    const category = app.querySelector('[data-tier-filter="category"]').value;
    list.querySelectorAll("[data-game]").forEach((card) => {
      const visible = (game === "All games" || card.dataset.game === game) && (category === "All categories" || card.dataset.category === category);
      card.style.display = visible ? "" : "none";
    });
  }));
}

document.documentElement.dataset.theme = localStorage.getItem("mq:theme") || "dark";
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (!link || link.origin !== location.origin) return;
  event.preventDefault();
  history.pushState({}, "", link.pathname);
  render();
  scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("popstate", render);
render();
