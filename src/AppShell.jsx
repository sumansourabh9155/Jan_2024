import { HelmetProvider } from "react-helmet-async";

import Analytics from "./components/Analytics";
import ScrollToHash from "./components/ScrollToHash";
import { AppRoutes } from "./routes";

/**
 * Everything inside the router, shared by the browser and the static build.
 *
 * The router itself is deliberately NOT here: the browser mounts this inside a
 * BrowserRouter, the pre-render inside a StaticRouter pinned to one URL.
 */

export default function AppShell({ resolved = null, toolsPassword = null, helmetContext = {} }) {
  return (
    // The animated cursor is deliberately absent: it mutates every anchor on
    // the page (style="cursor: none"), and doing that while React is still
    // hydrating a 96 KB document makes React report extra attributes it didn't
    // render. It is mounted from main.jsx in its own root once hydration is
    // finished, so it never takes part in hydration at all.
    //
    // Page SEO runs through useSeo, not Helmet — but /expense and /ask still
    // render a <Helmet>, and react-helmet-async throws without a provider
    // above it. This used to sit in main.jsx; it lives here so the browser
    // entry and the pre-render both get it without having to remember.
    <HelmetProvider context={helmetContext}>
      <div>
        <ScrollToHash />
        <AppRoutes resolved={resolved} toolsPassword={toolsPassword} />
        {/* After the routes, so the page's title is already set when the hit fires. */}
        <Analytics />
      </div>
    </HelmetProvider>
  );
}
