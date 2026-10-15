/* eslint-disable react-refresh/only-export-components */
import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import ProtectedRoute from "./components/ProtectedRoute";

/**
 * One route table, used by the browser and by the static build.
 *
 * Pages are declared as `import()` factories rather than as `React.lazy`
 * components, because the two consumers need different things from the same
 * list:
 *
 *   · the browser wraps each factory in `React.lazy`, so routes still
 *     code-split and a visitor only downloads the case study they opened;
 *   · the pre-render awaits the factory and renders the real component, because
 *     `renderToString` cannot resolve a lazy boundary — it would emit the
 *     Suspense fallback and bake an empty page.
 *
 * Keeping it in one place is the point: before this, the route list lived in
 * main.jsx, so anything that wanted to enumerate the site (a pre-render, a
 * sitemap generator) had to keep its own copy and quietly drift out of date.
 * `/simfluent` and `/GoDiverse` were already missing from the sitemap for
 * exactly that reason.
 */

// `priority` / `changefreq` feed the sitemap, which the pre-render writes from
// this same list. The sitemap used to be hand-maintained and had silently lost
// /simfluent and /GoDiverse; generating it from the routes makes that failure
// impossible rather than merely unlikely.
//
// `prerender: false` keeps a route out of the static build. The private tools
// sit behind a password and the deck is deliberately noindex, so there is
// nothing to gain from baking them out — and the password gate is all a
// crawler would ever see.
export const pageRoutes = [
  { path: "/", load: () => import("./pages/LandingPage"), prerender: true, priority: "1.0", changefreq: "weekly" },
  { path: "/home", load: () => import("./pages/LandingPage"), prerender: false },
  { path: "/carter", load: () => import("./components/Landingsection/Casestudy/Carter"), prerender: true, priority: "0.9" },
  { path: "/poppins", load: () => import("./components/Landingsection/Casestudy/Poppins"), prerender: true, priority: "0.9" },
  { path: "/atlas", load: () => import("./components/Landingsection/Casestudy/Atlas"), prerender: true, priority: "0.9" },
  { path: "/simfluent", load: () => import("./components/Landingsection/Casestudy/Simfluent"), prerender: true, priority: "0.9" },
  { path: "/GoDiverse", load: () => import("./components/Landingsection/Casestudy/Godiverse"), prerender: true, priority: "0.8" },
  { path: "/resume", load: () => import("./pages/Resume"), prerender: true, priority: "0.8" },
  { path: "/contact", load: () => import("./pages/Contact"), prerender: true, priority: "0.7" },
  // Interview presentation for the Carter case study — its own route so it can
  // be shared as a link and presented full-screen. noindex; not linked.
  { path: "/carter/present", load: () => import("./pages/CarterDeck"), prerender: false },
];

// Behind the password gate; never pre-rendered.
export const protectedRoutes = [
  { path: "/expense", load: () => import("./pages/ExpenseDashboard") },
  { path: "/ask", load: () => import("./pages/InquiryProtocol") },
];

// Case studies moved from /Projects/:slug to /:slug. Old URLs are kept as
// redirects so anything already shared or indexed still lands.
export const redirects = [
  { from: "/Projects/carter", to: "/carter" },
  { from: "/Projects/poppins", to: "/poppins" },
  { from: "/Projects/atlas", to: "/atlas" },
  { from: "/Projects/simfluent", to: "/simfluent" },
  { from: "/Projects/GoDiverse", to: "/GoDiverse" },
  { from: "/projects", to: "/#case-studies" },
];

export const NotFound = () => (
  <div className="font-ui flex flex-col items-center justify-center min-h-screen bg-surface text-ink gap-4 px-6 text-center">
    <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint">404</p>
    <h1 className="font-display text-4xl font-normal">Page not found</h1>
    <p className="text-ink-muted text-[0.9375rem]">
      The page you&apos;re looking for doesn&apos;t exist or has moved.
    </p>
    <a
      href="/"
      className="mt-2 bg-ink text-surface px-6 py-3 rounded-full font-medium text-[0.9375rem] hover:bg-ink-soft transition-colors"
    >
      Back to home
    </a>
  </div>
);

/**
 * The route tree.
 *
 * `resolved` maps a path to an already-imported component. The pre-render
 * passes the one route it is building so that route renders synchronously;
 * the browser passes nothing and everything but the landing page lazy-loads.
 */
export function AppRoutes({ resolved = null, toolsPassword = null }) {
  // The route being hydrated comes in already resolved, so it renders
  // synchronously and matches the pre-rendered markup exactly. Everything else
  // stays lazy and only downloads if the visitor navigates to it.
  //
  // LandingPage used to be a static import as well as a dynamic one, which
  // made Rollup warn and pulled it into the main bundle regardless — the
  // pre-load in main.jsx makes that unnecessary.
  const componentFor = (route) => {
    if (resolved && resolved.path === route.path) return resolved.Component;
    return React.lazy(route.load);
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <Routes>
        {pageRoutes.map((route) => {
          const Component = componentFor(route);
          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}

        {protectedRoutes.map((route) => {
          const Component = React.lazy(route.load);
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute correctPassword={toolsPassword}>
                  <Component />
                </ProtectedRoute>
              }
            />
          );
        })}

        {redirects.map((r) => (
          <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
