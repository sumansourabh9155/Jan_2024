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
    let frame;
    let fallback;

    const scrollToEl = (el) => {
      const startY = window.scrollY;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

      // Some environments ignore smooth scrolling — if nothing moved, jump
      // straight there so the link always works.
      clearTimeout(fallback);
      fallback = setTimeout(() => {
        if (Math.abs(window.scrollY - startY) < 2) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, 400);
    };

    const run = (rawHash) => {
      cancelAnimationFrame(frame);

      if (!rawHash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
        if (attempts++ < 120) frame = requestAnimationFrame(tryScroll);
      };

      frame = requestAnimationFrame(tryScroll);
    };

    run(hash);

    // Safety net: catch hash changes the router doesn't surface.
    const onHashChange = () => run(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
