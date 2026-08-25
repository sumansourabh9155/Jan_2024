import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Google Analytics 4.
 *
 * Three things the stock gtag snippet gets wrong for this site:
 *
 * 1. It fires one page_view on load and never again. In a React Router app that
 *    means every case study is invisible and all traffic collapses onto "/".
 *    Automatic page_view is disabled here and one is sent per route change.
 *
 * 2. It reports whatever document.title happens to be at load time. Each route
 *    sets its own title in an effect, so the hit is sent on the next tick to
 *    avoid attributing the new URL to the previous page's name.
 *
 * 3. It downloads gtag.js during initial render, competing with LCP. Here the
 *    dataLayer queue is opened synchronously — so no hits are lost — but the
 *    script itself is fetched when the browser goes idle. Queued calls flush
 *    automatically once it arrives.
 *
 * A GA4 measurement ID is not a secret (it is public in any GA-enabled page),
 * so it ships as the default and the env var is only an override for using a
 * separate property per environment.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-R2Q7XQ6WBW";

// Never record local development traffic — it would pollute real numbers.
const ENABLED = Boolean(GA_ID) && import.meta.env.PROD;

let initialised = false;

function whenIdle(fn) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(fn, { timeout: 3000 });
  } else {
    setTimeout(fn, 1500);
  }
}

function init() {
  if (initialised) return;
  initialised = true;

  // Open the queue immediately so nothing is dropped before gtag.js lands.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });

  whenIdle(() => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  });
}

export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!ENABLED) return;
    init();

    const t = setTimeout(() => {
      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => clearTimeout(t);
  }, [pathname, search]);

  return null;
}
