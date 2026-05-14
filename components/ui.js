import { games } from "../data/games.js";
import { guides } from "../data/guides.js";
import { tools } from "../data/tools.js";
import { blogPosts } from "../data/blog.js";
import { searchAll } from "../lib/search.js";
import { site } from "../lib/seo.js";
import { getStored } from "../lib/storage.js";

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function tagPill(label) {
  return `<span class="pill">${escapeHtml(label)}</span>`;
}

export function header() {
  return `<header class="site-header">
    <a class="brand" href="/" data-link><span class="brand-mark">MQ</span><span>MetaQuestly</span></a>
    <nav class="desktop-nav">
      ${["Home", "Games", "Tools", "Tier Lists", "Walkthroughs", "Blog", "About"].map((item) => {
        const href = item === "Home" ? "/" : `/${item.toLowerCase().replaceAll(" ", "-")}`;
        return `<a href="${href}" data-link>${item}</a>`;
      }).join("")}
    </nav>
    <div class="header-actions">
      <button class="icon-button" type="button" data-theme-toggle title="Toggle theme">◐</button>
      <button class="icon-button mobile-only" type="button" data-menu-toggle title="Menu">☰</button>
    </div>
    <nav class="mobile-nav" data-mobile-nav>
      <a href="/" data-link>Home</a><a href="/games" data-link>Games</a><a href="/tools" data-link>Tools</a>
      <a href="/tier-lists" data-link>Tier Lists</a><a href="/walkthroughs" data-link>Walkthroughs</a><a href="/blog" data-link>Blog</a><a href="/about" data-link>About</a>
    </nav>
  </header>`;
}

export function footer() {
  return `<footer class="site-footer">
    <div>
      <a class="brand" href="/" data-link><span class="brand-mark">MQ</span><span>MetaQuestly</span></a>
      <p>${site.tagline}</p>
      <p class="muted">${site.disclaimer}</p>
      <p class="muted">Affiliate disclosure: This site may earn a commission from qualifying purchases through affiliate links. This does not affect our recommendations.</p>
    </div>
    <div class="footer-links">
      <a href="/privacy" data-link>Privacy</a><a href="/terms" data-link>Terms</a><a href="/disclaimer" data-link>Disclaimer</a><a href="/contact" data-link>Contact</a><a href="/sitemap" data-link>Sitemap</a>
    </div>
  </footer>`;
}

export function shell(content) {
  return `${header()}<main>${content}</main>${footer()}`;
}

export function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items.map((item, index) => item.href && index < items.length - 1 ? `<a href="${item.href}" data-link>${escapeHtml(item.label)}</a>` : `<span>${escapeHtml(item.label)}</span>`).join("<span>/</span>")}</nav>`;
}

export function adSlot(position) {
  return `<aside class="ad-slot" data-position="${position}"><span>Advertisement</span><small>${position}</small></aside>`;
}

export function affiliateBox() {
  const items = ["Controllers", "Gaming keyboards", "Mice", "Headsets", "Game gift cards", "Cloud gaming services", "Game subscription services"];
  return `<section class="affiliate-box"><h2>Gear and Services</h2><p>Placeholder module for future affiliate recommendations.</p><div class="chip-row">${items.map(tagPill).join("")}</div><p class="muted">This site may earn a commission from qualifying purchases through affiliate links. This does not affect our recommendations.</p></section>`;
}

export function disclaimerBox() {
  return `<div class="notice">${site.disclaimer} Guide content is editorial and may include starter examples, not official publisher data.</div>`;
}

export function faq(items) {
  return `<section class="section"><h2>FAQ</h2><div class="faq-list">${items.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("")}</div></section>`;
}

export function gameCard(game) {
  return `<article class="game-card" style="--accent:${game.heroColor}">
    <div class="game-card-top"><div class="letter">${escapeHtml(game.name.slice(0, 2))}</div><span class="badge">${escapeHtml(game.popularityLabel)}</span></div>
    <h3><a href="/games/${game.slug}" data-link>${escapeHtml(game.name)}</a></h3>
    <p>${escapeHtml(game.shortDescription)}</p>
    <div class="meta-row"><span>${escapeHtml(game.genre)}</span><span>${game.guides.length} guide types</span><span>${escapeHtml(game.difficulty)}</span></div>
    <div class="chip-row">${game.tags.slice(0, 4).map(tagPill).join("")}</div>
    <a class="button ghost" href="/games/${game.slug}" data-link>Open Hub</a>
  </article>`;
}

export function guideCard(guide) {
  return `<article class="guide-card">
    <span class="badge">${escapeHtml(guide.type)}</span>
    <h3><a href="/games/${guide.gameSlug}/${guide.slug}" data-link>${escapeHtml(guide.title)}</a></h3>
    <p>${escapeHtml(guide.description)}</p>
    <div class="meta-row"><span>${escapeHtml(guide.readingTime)}</span><span>Updated ${guide.updatedAt}</span></div>
  </article>`;
}

export function toolCard(tool) {
  return `<article class="tool-card">
    <h3><a href="/tools/${tool.slug}" data-link>${escapeHtml(tool.name)}</a></h3>
    <p>${escapeHtml(tool.description)}</p>
    <a class="button ghost" href="/tools/${tool.slug}" data-link>${escapeHtml(tool.action)}</a>
  </article>`;
}

export function searchPanel() {
  return `<div class="search-wrap">
    <input class="search-input" data-site-search type="search" placeholder="Search for a game, build, boss, weapon, or guide..." autocomplete="off" />
    <div class="search-results" data-search-results hidden></div>
  </div>`;
}

export function wireSearch(root = document) {
  const input = root.querySelector("[data-site-search]");
  const box = root.querySelector("[data-search-results]");
  if (!input || !box) return;
  input.addEventListener("input", () => {
    const results = searchAll(input.value);
    box.hidden = !input.value.trim();
    box.innerHTML = results.length
      ? results.map((item) => `<a href="${item.url}" data-link><strong>${escapeHtml(item.title)}</strong><span>${item.type}</span><small>${escapeHtml(item.description)}</small></a>`).join("")
      : `<p>No close matches yet. Try a game, tool, boss, build, or guide type.</p>`;
  });
}

export function select(name, options, selected = "") {
  return `<select name="${name}" data-field="${name}">${options.map((option) => `<option value="${escapeHtml(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
}

export function recentPanel() {
  const recent = getStored("mq:recent", []);
  if (!recent.length) return "";
  return `<section class="section"><h2>Recently Viewed</h2><div class="compact-list">${recent.map((item) => `<a href="${item.url}" data-link>${escapeHtml(item.title)}<span>${escapeHtml(item.type)}</span></a>`).join("")}</div></section>`;
}

export function sitemapList() {
  const core = ["/", "/games", "/tools", "/tier-lists", "/walkthroughs", "/blog", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];
  return `<div class="link-grid">${core.map((url) => `<a href="${url}" data-link>${url}</a>`).join("")}${games.map((game) => `<a href="/games/${game.slug}" data-link>/games/${game.slug}</a>`).join("")}${tools.map((tool) => `<a href="/tools/${tool.slug}" data-link>/tools/${tool.slug}</a>`).join("")}${blogPosts.map((post) => `<a href="/blog/${post.slug}" data-link>/blog/${post.slug}</a>`).join("")}</div>`;
}

export function tableOfContents(sections) {
  return `<nav class="toc"><strong>Table of contents</strong>${sections.map((section) => `<a href="#${slugify(section.heading)}">${escapeHtml(section.heading)}</a>`).join("")}</nav>`;
}

export function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
