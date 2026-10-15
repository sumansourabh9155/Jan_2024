import { useEffect } from "react";

import { collectHead } from "../seo/headCollector";

/**
 * Applies per-page SEO directly to <head>.
 *
 * Replaces react-helmet-async, which was rendering nothing in this app — every
 * route shipped the index.html fallback title, no canonical, and no JSON-LD.
 *
 * Strategy: upsert rather than append, so a tag already present in index.html is
 * updated in place instead of duplicated. JSON-LD blocks are ours alone, so they
 * are tagged and replaced wholesale on each route change.
 */

const OWNED = "data-seo";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(OWNED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(OWNED, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function useSeo({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterCreator,
  jsonLd = [],
  noindex = false,
}) {
  const schemaKey = JSON.stringify(jsonLd);

  // ── Pre-render path ───────────────────────────────────────────────────
  // During the static build there is no document, and effects never run, so
  // every page would bake out with index.html's fallback title — which is
  // exactly the "every link preview reads as your homepage" problem.
  //
  // Writing to a module-level collector during render is a side effect in
  // render, which is normally wrong. It is safe here because this branch only
  // ever executes in the single-pass `renderToString` of the build script:
  // one route per process, no concurrency, no re-render, and the value is read
  // once immediately afterwards. In the browser this branch is dead code.
  if (typeof document === "undefined") {
    collectHead({
      title,
      description,
      keywords,
      canonicalUrl,
      ogImage,
      ogType,
      twitterCreator,
      jsonLd,
      noindex,
    });
  }

  useEffect(() => {
    if (title) document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);

    // Only assert robots when we mean it — otherwise leave the default alone.
    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta("name", "robots", "noindex, nofollow");
    } else if (robots && robots.hasAttribute(OWNED)) {
      robots.remove();
    }

    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:creator", twitterCreator);

    upsertLink("canonical", canonicalUrl);

    // Structured data is entirely ours — clear the previous route's and re-add.
    document.head
      .querySelectorAll(`script[type="application/ld+json"][${OWNED}]`)
      .forEach((s) => s.remove());

    (jsonLd || []).filter(Boolean).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute(OWNED, "");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
    // `jsonLd` is intentionally tracked via schemaKey (its serialised form) —
    // callers build the array inline, so a raw reference would change identity
    // on every render and re-run this effect forever.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCreator, noindex, schemaKey]);
}
