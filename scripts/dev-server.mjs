import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(process.argv[2] || "src");
const port = Number(process.argv[3] || process.env.PORT || 5173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml"
};

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const candidate = resolve(root, clean);
  return candidate.startsWith(root) ? candidate : root;
}

createServer(async (req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  let file = safePath(pathname);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) file = join(root, "index.html");
  if (!existsSync(file)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  if (extname(file) === ".html") {
    const html = await readFile(file, "utf8");
    res.end(html);
    return;
  }
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`MetaQuestly dev server running at http://localhost:${port}`);
});
