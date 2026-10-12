import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't scroll to #hash targets on its own. This scrolls the
 * matching element into view whenever the hash changes — via the router
 * (useLocation) and via native `hashchange`, since a hash-only change doesn't
 * always reach the router. Retries briefly so it still works when the target
 * section is a lazy chunk that hasn't mounted yet.
 * With no hash, it restores the top of the page on navigation.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let retry;
    let fallback;

    const scrollToEl = (el) => {
      const startY = window.scrollY;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });

      // Some environments ignore smooth scrolling — if nothing moved, jump
      // straight there so the link always works.
      //
      // This has to be "instant", not "auto". `auto` means "use the CSS
      // scroll-behavior", and index.css sets that to smooth globally — so the
      // fallback resolved right back to the behaviour it was there to rescue
      // and did nothing at all.
      clearTimeout(fallback);
      fallback = setTimeout(() => {
        if (Math.abs(window.scrollY - startY) < 2) {
          // scrollIntoView honours scroll-margin-top (the sections carry
          // scroll-mt-24 to clear the fixed header); a raw scrollTo does not,
          // so subtract it here or the heading lands under the navbar.
          const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, left: 0, behavior: "instant" });
        }
      }, 400);
    };

    const run = (rawHash) => {
      clearTimeout(retry);

      if (!rawHash) {
        // Instant, not "auto": a route change should start at the top of the
        // new page, not animate up through content the reader never asked to
        // see. "auto" would inherit the global smooth scroll-behavior.
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }

      const id = decodeURIComponent(rawHash.slice(1));
      let attempts = 0;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          scrollToEl(el);
          return;
        }
        // Section may still be streaming in (lazy + Suspense) — retry ~2s.
        // setTimeout rather than rAF so that really is two seconds: rAF is
        // throttled hard in a backgrounded tab, which would stretch 120
        // attempts into minutes.
        if (attempts++ < 120) retry = setTimeout(tryScroll, 16);
      };

      // Try synchronously first. Waiting a frame meant a hash link did nothing
      // at all while frames were throttled, even though the target was already
      // in the DOM — which is the common case.
      tryScroll();
    };

    run(hash);

    // Safety net: catch hash changes the router doesn't surface.
    const onHashChange = () => run(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      clearTimeout(retry);
      clearTimeout(fallback);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
