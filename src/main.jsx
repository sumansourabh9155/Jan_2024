import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { createRoot, hydrateRoot } from "react-dom/client";

import AppShell from "./AppShell";
import { pageRoutes } from "./routes";

// Password for private tools (/expense, /ask) comes from the build environment
// (VITE_TOOLS_PASSWORD in .env / Vercel env). If unset, those routes stay locked
// with no valid password instead of shipping a hardcoded one in the bundle.
const TOOLS_PASSWORD = import.meta.env.VITE_TOOLS_PASSWORD || null;

const container = document.getElementById("root");

/**
 * Resolve the route being hydrated before React touches the DOM.
 *
 * The pre-render emits each page synchronously, with no lazy boundary. If the
 * client then renders that same page through `React.lazy`, it suspends on the
 * first pass, the Suspense markers in the HTML don't line up, and React throws
 * hydration errors (#418 and #422) and re-renders the whole tree from scratch
 * — which works, but throws away the pre-rendered DOM and flashes.
 *
 * Awaiting the chunk first means the client's first render is structurally
 * identical to the server's. It costs nothing in practice: hydration could not
 * have finished before that chunk arrived anyway. Every other route stays lazy.
 */
async function resolveInitialRoute() {
  if (!container.hasChildNodes()) return null;
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const match = pageRoutes.find(
    (r) => r.prerender && r.path.toLowerCase() === pathname.toLowerCase()
  );
  if (!match) return null;
  try {
    const mod = await match.load();
    return { path: match.path, Component: mod.default };
  } catch {
    // A failed chunk shouldn't block the app — fall back to mounting fresh.
    return null;
  }
}

// A `.then` rather than a top-level await: TLA compiles to a module format
// that the configured browser targets (chrome87 / safari14 / firefox78) don't
// support, and raising the target to es2022 just to avoid one `.then` would
// drop real browsers for no gain.
resolveInitialRoute().then((resolved) => {
  const tree = (
    <BrowserRouter>
      <AppShell resolved={resolved} toolsPassword={TOOLS_PASSWORD} />
    </BrowserRouter>
  );

  // Pre-rendered routes arrive with their markup already in #root, so they are
  // hydrated — React adopts the existing DOM instead of discarding and
  // rebuilding it, which is what keeps the first paint from flashing.
  //
  // Routes that were not pre-rendered (the password-gated tools, the deck) and
  // anything served through the SPA fallback shell arrive with an empty #root
  // and are mounted normally. Calling hydrateRoot on an empty container would
  // "succeed" and then warn on every node, so the branch matters.
  if (container.hasChildNodes()) {
    hydrateRoot(container, tree);
  } else {
    createRoot(container).render(tree);
  }

  mountCursorWhenIdle();
});

/**
 * The animated cursor, in its own root outside the hydrated tree.
 *
 * It sets `style="cursor: none"` on every clickable element on the page. Done
 * from inside the app, that fires while React is still working through a
 * 96 KB pre-rendered document, and React then finds attributes on nodes it
 * never rendered — "Extra attributes from the server: style", on 28 anchors.
 *
 * Its own root, mounted when the browser is next idle, keeps it entirely out
 * of hydration. Touch devices never download it at all.
 */
function mountCursorWhenIdle() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const start = () =>
    import("react-animated-cursor").then(({ default: AnimatedCursor }) => {
      const host = document.createElement("div");
      document.body.appendChild(host);
      createRoot(host).render(
        <AnimatedCursor
          showSystemCursor={false}
          innerSize={16}
          outerSize={60}
          // Ink, not white — a white cursor is invisible on a light page.
          color="16, 20, 24"
          outerAlpha={0.08}
          innerScale={0.7}
          outerScale={2}
          trailingSpeed={18}
          clickables={CURSOR_CLICKABLES}
        />
      );
    });
  if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 2000 });
  else setTimeout(start, 200);
}

const CURSOR_CLICKABLES = [
  "a",
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  "label[for]",
  "select",
  "textarea",
  "button",
  ".link",
  {
    target: ".custom",
    options: {
      innerSize: 12,
      outerSize: 12,
      color: "16, 20, 24",
      outerAlpha: 0.3,
      innerScale: 0.7,
      outerScale: 5,
    },
  },
];
