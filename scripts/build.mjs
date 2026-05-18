import { mkdir, rm, cp, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { games } from "../src/data/games.js";
import { guides } from "../src/data/guides.js";
import { tools } from "../src/data/tools.js";
import { blogPosts } from "../src/data/blog.js";
import { tierLists } from "../src/data/tierLists.js";

const siteUrl = process.env.SITE_URL || "https://game.xxym8.com";
const outDir = "dist";
const base = (process.env.SITE_BASE || "").replace(/\/$/, "");
const lastmod = process.env.SITE_LASTMOD || "2026-05-18";

const staticRoutes = [
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
  "/genres/rpg",
  "/genres/shooter",
  "/genres/survival",
  "/genres/sandbox",
  "/genres/mobile",
  "/genres/battle-royale",
  "/genres/extraction-shooter",
  "/genres/open-world",
  "/genres/racing",
  "/platforms/pc",
  "/platforms/playstation",
  "/platforms/xbox",
  "/platforms/mobile",
  "/tags/beginner-guides",
  "/tags/best-builds",
  "/tags/farming-routes",
  "/tags/tier-lists",
  "/tags/pvp-loadouts",
  "/tags/settings-optimization",
  "/tags/base-building",
  "/tags/extraction-guides",
  "/tags/money-guides",
  "/tags/co-op-guides",
  "/tags/open-world-guides",
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
  ...tools.map((tool) => `/tools/${tool.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  ...games.map((game) => `/games/${game.slug}`),
  ...guides.map((guide) => `/games/${guide.gameSlug}/${guide.slug}`)
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function titleFor(path) {
  if (path === "/") return "MetaQuestly - Game Guides, Builds & Strategy Tools";
  const guide = guides.find((item) => path === `/games/${item.gameSlug}/${item.slug}`);
  if (guide) return `${guide.title} - MetaQuestly`;
  const game = games.find((item) => path === `/games/${item.slug}`);
  if (game) return `${game.name} Guides, Builds & Tools - MetaQuestly`;
  const tool = tools.find((item) => path === `/tools/${item.slug}`);
  if (tool) return `${tool.name} - MetaQuestly Tools`;
  const post = blogPosts.find((item) => path === `/blog/${item.slug}`);
  if (post) return `${post.title} - MetaQuestly Blog`;
  const label = path.split("/").filter(Boolean).map((part) => part.replaceAll("-", " ")).join(" - ");
  return `${label.replace(/\b\w/g, (letter) => letter.toUpperCase())} - MetaQuestly`;
}

function descriptionFor(path) {
  const guide = guides.find((item) => path === `/games/${item.gameSlug}/${item.slug}`);
  if (guide) return guide.description;
  const game = games.find((item) => path === `/games/${item.slug}`);
  if (game) return `Fast ${game.name} guides, builds, tier lists, farming routes, walkthroughs, and strategy tools in one clean hub.`;
  const tool = tools.find((item) => path === `/tools/${item.slug}`);
  if (tool) return tool.description;
  const post = blogPosts.find((item) => path === `/blog/${item.slug}`);
  if (post) return post.description;
  return "MetaQuestly helps players find fast game guides, builds, tier lists, walkthroughs, checklists, and strategy tools.";
}

function jsonLdFor(path) {
  const items = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MetaQuestly",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/games?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MetaQuestly",
      url: siteUrl
    }
  ];
  const guide = guides.find((item) => path === `/games/${item.gameSlug}/${item.slug}`);
  if (guide) {
    items.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      dateModified: guide.updatedAt,
      author: { "@type": "Organization", name: "MetaQuestly Editorial" }
    });
  }
  const tool = tools.find((item) => path === `/tools/${item.slug}`);
  if (tool) {
    items.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      applicationCategory: "GameApplication",
      operatingSystem: "Any"
    });
  }
  if (path === "/games" || path === "/tier-lists") {
    items.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.name,
        url: `${siteUrl}/games/${game.slug}`
      }))
    });
  }
  return items.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n");
}

function shell(path) {
  const title = titleFor(path);
  const description = descriptionFor(path);
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="MetaQuestly" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="msvalidate.01" content="06348E2D3365CEEC6C11DC7D2A94F86E" />
  <meta name="google-site-verification" content="9iR16Pj9o70OLRY0a8GwzryOAvnkJQR3gq2AYIfnFQ0" />
  <meta name="theme-color" content="#0b1020" />
  <link rel="stylesheet" href="${base}/styles/styles.css" />
  <script src="${base}/ads.js" defer></script>
  ${jsonLdFor(path)}
</head>
<body>
  <div id="app" data-route="${path}"></div>
  <script type="module" src="${base}/main.js"></script>
</body>
</html>`;
}

async function writeRoute(path) {
  const file = path === "/" ? join(outDir, "index.html") : join(outDir, path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, shell(path), "utf8");
}

async function listFiles(dir, prefix = "") {
  const entries = await readdir(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const rel = prefix ? `${prefix}/${entry}` : entry;
    const info = await stat(full);
    if (info.isDirectory()) files.push(...await listFiles(full, rel));
    else files.push(rel.replaceAll("\\", "/"));
  }
  return files;
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
for (const entry of ["components", "data", "lib", "styles", "main.js"]) {
  await cp(join("src", entry), join(outDir, entry), { recursive: true });
}
if (existsSync("public")) await cp("public", outDir, { recursive: true });
for (const route of staticRoutes) await writeRoute(route);
await writeFile(join(outDir, "404.html"), shell("/404"), "utf8");
await writeFile(join(outDir, "CNAME"), "game.xxym8.com\n", "utf8");
await writeFile(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
await writeFile(join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticRoutes.map((route) => `  <url><loc>${siteUrl}${route === "/" ? "" : route}</loc><lastmod>${lastmod}</lastmod><changefreq>${route === "/" ? "daily" : "weekly"}</changefreq><priority>${route === "/" ? "1.0" : "0.7"}</priority></url>`).join("\n")}\n</urlset>\n`, "utf8");
await writeFile(join(outDir, "feed.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>MetaQuestly Blog</title><link>${siteUrl}/blog</link><description>Game guide strategy notes from MetaQuestly.</description>${blogPosts.map((post) => `<item><title>${escapeHtml(post.title)}</title><link>${siteUrl}/blog/${post.slug}</link><description>${escapeHtml(post.description)}</description></item>`).join("")}</channel></rss>`, "utf8");
const builtFiles = await listFiles(outDir);
console.log(`Built ${staticRoutes.length} routes and ${builtFiles.length} files into ${outDir}.`);
