/**
 * Static pre-render.
 *
 * The site is a client-rendered SPA, so `dist/index.html` ships an empty
 * `<div id="root">` and nothing else. Anything that reads the page without
 * running JavaScript — Google, a LinkedIn or Slack link preview, an AI resume
 * screener — sees a blank document with one title on it. Every route also
 * served that same title, so every link preview read as the homepage.
 *
 * This renders each public route to HTML at build time and writes it to
 * `dist/<route>/index.html`, with that route's own title, description,
 * canonical, Open Graph tags and JSON-LD in the head. The client bundle then
 * hydrates over it, so behaviour in a real browser is unchanged.
 *
 * Run through Vite (`vite-node`), not plain node, so that `.jsx`, the path
 * aliases and the `?url`/asset imports all resolve exactly as they do in the
 * app build.
 */
import { createElement } from "react";
import { createServer } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { renderToString } from "react-dom/server";
import url from "node:url";

// `new URL("..", …)` already resolves to the project root and ends in a
// slash; passing that through path.dirname() strips a further level and lands
// outside the repo.
const ROOT = url.fileURLToPath(new URL("..", import.meta.url));
const DIST = path.join(ROOT, "dist");

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Build the <head> tags for one route from what useSeo collected. */
function headTags(head) {
  if (!head) return "";
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType = "website",
    twitterCreator,
    jsonLd = [],
    noindex = false,
  } = head;

  const meta = (attr, key, content) =>
    content ? `<meta ${attr}="${key}" content="${escapeHtml(content)}" data-seo>` : "";

  return [
    meta("name", "description", description),
    meta("name", "keywords", keywords),
    noindex ? '<meta name="robots" content="noindex, nofollow" data-seo>' : "",
    meta("property", "og:type", ogType),
    meta("property", "og:title", title),
    meta("property", "og:description", description),
    meta("property", "og:url", canonicalUrl),
    meta("property", "og:image", ogImage),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", title),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", ogImage),
    meta("name", "twitter:creator", twitterCreator),
    canonicalUrl ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" data-seo>` : "",
    ...(jsonLd || [])
      .filter(Boolean)
      .map(
        (obj) =>
          `<script type="application/ld+json" data-seo>${JSON.stringify(obj).replace(
            /</g,
            "\\u003c"
          )}</script>`
      ),
  ]
    .filter(Boolean)
    .join("\n    ");
}

/**
 * Replace the title and drop in the route's head tags.
 * index.html already carries a title and a description; those are the
 * fallbacks, and they are overwritten here rather than duplicated.
 */
// index.html carries a full set of site-level tags — title, description,
// og:title, og:description, og:url, twitter:*. Those are the right fallback
// for a route that isn't pre-rendered, and exactly wrong to leave in place on
// one that is: a crawler reading two og:title tags takes the first, so every
// preview would keep saying "Suman Sourabh — Product Designer" no matter which
// case study was shared. The template's copies are stripped before the
// route's are written.
const SUPERSEDED = [
  /\n?[ \t]*<meta\s+name="description"[\s\S]*?>/gi,
  /\n?[ \t]*<meta\s+name="keywords"[\s\S]*?>/gi,
  /\n?[ \t]*<meta\s+property="og:(?:type|title|description|url|image)"[\s\S]*?>/gi,
  /\n?[ \t]*<meta\s+name="twitter:(?:card|title|description|image|creator)"[\s\S]*?>/gi,
  /\n?[ \t]*<link\s+rel="canonical"[\s\S]*?>/gi,
];

function injectHead(html, head) {
  let out = html;
  if (head?.title) {
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(head.title)}</title>`);
  }
  for (const re of SUPERSEDED) out = out.replace(re, "");
  const tags = headTags(head);
  return tags ? out.replace("</head>", `    ${tags}\n  </head>`) : out;
}

function injectBody(html, markup) {
  return html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${markup}</div>`
  );
}

/**
 * Rewrite dev asset paths to their built, content-hashed equivalents.
 *
 * Rendering happens through Vite's SSR pipeline, where `import banner from
 * "../assets/Banner.png"` evaluates to "/src/assets/.../Banner.png" — the path
 * the dev server serves it from. Nothing serves that in production: there is
 * no /src in dist. Left alone, every pre-rendered page would show broken
 * images to anyone reading it without JavaScript (the exact audience this
 * whole exercise is for), and would mismatch the hashed URL the client bundle
 * asks for a moment later, which is what was throwing React #418 on every
 * image during hydration.
 *
 * The client build's manifest maps one to the other.
 */
function rewriteAssetUrls(markup, manifest, base = "/") {
  return markup.replace(/\/src\/[^"'()\s>]+/g, (devPath) => {
    const key = devPath.replace(/^\//, "");
    const entry = manifest[key];
    if (!entry?.file) return devPath; // leave it; the audit below will catch it
    return base + entry.file;
  });
}

async function main() {
  const template = await fs.readFile(path.join(DIST, "index.html"), "utf8");
  const manifest = JSON.parse(
    await fs.readFile(path.join(DIST, ".vite", "manifest.json"), "utf8")
  );

  // The "/" route is written back to dist/index.html — the same file this
  // reads as its shell. Run the script twice without rebuilding and the second
  // run takes an already-rendered landing page as the template, splices the
  // next route into the middle of it, and produces pages carrying two <h1>s
  // and two footers. Caught exactly that way.
  //
  // An empty #root is the signal that this is a fresh `vite build` output, so
  // it is checked rather than assumed.
  if (!/<div id="root">\s*<\/div>/.test(template)) {
    throw new Error(
      "dist/index.html already contains rendered markup, so it can't be used as\n" +
        "the template. Run `vite build` first — or just use `npm run build:static`,\n" +
        "which does both in order."
    );
  }

  // A Vite dev server in middleware mode gives us module resolution identical
  // to the app build (JSX, aliases, asset URLs) without starting an HTTP
  // listener.
  const vite = await createServer({
    // Production mode matters: in dev the React plugin injects React Refresh
    // boilerplate, which references `module` and throws immediately under SSR.
    // It also makes `import.meta.env.PROD` true, so Analytics behaves as it
    // will in the real build rather than disabling itself.
    mode: "production",
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
    logLevel: "warn",
    ssr: {
      // Two separate problems, two settings.
      //
      // noExternal: left alone, Vite externalises these and Node loads them
      // itself, where `import { Routes } from "react-router-dom"` fails —
      // named exports can't be read off a CommonJS module.
      noExternal: ["react-router", "react-router-dom", "react-helmet-async"],
      //
      // conditions: react-router-dom's export map puts "node" before "import",
      // and the node branch resolves to dist/index.js — the CJS build, full of
      // `require` calls that have no meaning once Vite inlines them. Asking for
      // the ESM conditions first gets dist/index.mjs, which is the same code
      // the browser bundle uses.
      resolve: {
        conditions: ["module-sync", "import", "module", "browser", "default"],
      },
    },
  });

  // StaticRouter has to come out of Vite's SSR graph, not from a plain import
  // at the top of this file. react-router-dom is in `noExternal`, so Vite
  // bundles its own copy — and a <StaticRouter> from a second copy publishes
  // its context to a different React context object, so every useLocation()
  // inside the tree reports "may be used only in the context of a <Router>".
  const { StaticRouter } = await vite.ssrLoadModule("react-router-dom");
  const { pageRoutes } = await vite.ssrLoadModule("/src/routes.jsx");
  const { default: AppShell } = await vite.ssrLoadModule("/src/AppShell.jsx");
  const { takeHead } = await vite.ssrLoadModule("/src/seo/headCollector.js");

  const targets = pageRoutes.filter((r) => r.prerender);
  const results = [];

  for (const route of targets) {
    // Resolve the page up front: renderToString cannot suspend, so the route
    // being built has to be a real component, not a lazy one.
    //
    // The factory is invoked directly rather than having its import path
    // scraped out of `Function.prototype.toString`. routes.jsx was loaded
    // through Vite's SSR graph, so its dynamic imports are already rewritten
    // and resolve correctly from here — and a real call survives minification,
    // formatting and anyone editing the route table, which a regex over
    // source text does not.
    const mod = await route.load();
    const Component = mod.default;

    takeHead(); // clear anything left from the previous route
    // createElement rather than JSX so this file is plain ESM and runs on
    // `node` directly. Using JSX here would mean adding vite-node or tsx just
    // to transform one call — a dependency the deploy would have to install on
    // every build, for no gain.
    const markup = renderToString(
      createElement(
        StaticRouter,
        { location: route.path },
        createElement(AppShell, { resolved: { path: route.path, Component } })
      )
    );
    const head = takeHead();

    const html = injectBody(
      injectHead(template, head),
      rewriteAssetUrls(markup, manifest)
    );

    const outDir =
      route.path === "/" ? DIST : path.join(DIST, route.path.replace(/^\//, ""));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");

    results.push({
      route: route.path,
      kb: +(Buffer.byteLength(html) / 1024).toFixed(1),
      chars: markup.length,
      devPaths: (html.match(/"\/src\//g) || []).length,
      title: head?.title?.slice(0, 54) ?? "(none)",
    });
  }

  await vite.close();

  // Sitemap, from the same route list that was just rendered. Previously a
  // hand-maintained file in public/, which had drifted: /simfluent and
  // /GoDiverse were both live and both missing from it.
  const SITE = "https://www.sumansourabh.com";
  const today = new Date().toISOString().slice(0, 10);
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    targets
      .map((r) =>
        [
          "  <url>",
          `    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>${r.changefreq || "monthly"}</changefreq>`,
          `    <priority>${r.priority || "0.8"}</priority>`,
          "  </url>",
        ].join("\n")
      )
      .join("\n") +
    "\n</urlset>\n";
  await fs.writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");

  // The SPA fallback shell: the untouched template, empty #root and all.
  //
  // Vercel checks the filesystem before applying rewrites, so every
  // pre-rendered route is served from its own file and only everything else
  // falls through to this. It can't fall through to "/" any more: that now
  // holds the rendered landing page, so an unknown URL would answer 200 with
  // the homepage's content — a soft 404, and duplicate content under every
  // wrong URL anyone ever links.
  //
  // It also keeps the routes that are deliberately not pre-rendered honest.
  // They arrive with an empty #root, which is the branch in main.jsx that
  // mounts instead of hydrating — no markup to mismatch against.
  await fs.writeFile(path.join(DIST, "app.html"), template, "utf8");

  const pad = (s, n) => String(s).padEnd(n);
  console.log(`\n  Pre-rendered ${results.length} routes\n`);
  console.log(`  ${pad("route", 16)}${pad("html", 9)}${pad("markup", 10)}title`);
  for (const r of results) {
    console.log(
      `  ${pad(r.route, 16)}${pad(r.kb + " KB", 9)}${pad(r.chars.toLocaleString(), 10)}${r.title}`
    );
  }

  const unresolved = results.filter((r) => r.devPaths > 0);
  if (unresolved.length) {
    console.error(
      "\n  !! dev asset paths survived the rewrite — these would 404 in production:\n" +
        unresolved.map((r) => `     ${r.route} (${r.devPaths})`).join("\n")
    );
    process.exitCode = 1;
  }

  const empty = results.filter((r) => r.chars < 2000);
  if (empty.length) {
    console.error(
      `\n  !! ${empty.length} route(s) rendered almost nothing — ` +
        `that usually means a lazy boundary swallowed the page:\n` +
        empty.map((r) => `     ${r.route} (${r.chars} chars)`).join("\n")
    );
    process.exitCode = 1;
  }
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
