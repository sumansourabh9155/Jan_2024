/**
 * Head collector for the static build.
 *
 * `useSeo` applies title, meta, canonical and JSON-LD in an effect, which is
 * right in the browser and useless during pre-rendering: effects don't run in
 * `renderToString`, so every pre-rendered page would ship index.html's
 * fallback title and description.
 *
 * So during the build, `useSeo` hands its values here instead, and the
 * pre-render script reads them back after rendering each route and writes real
 * tags into that route's HTML.
 *
 * Scope note: a module-level singleton is only safe because the build renders
 * one route at a time in a single pass and reads the result immediately. It is
 * never imported into a browser bundle path that runs concurrently — the
 * calling branch in `useSeo` is gated on `document` being undefined.
 */

let current = null;

export function collectHead(data) {
  current = data;
}

export function takeHead() {
  const head = current;
  current = null;
  return head;
}
