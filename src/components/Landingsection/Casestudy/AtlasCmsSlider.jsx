import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, ImageIcon } from "lucide-react";

/**
 * Atlas CMS 2.0 — static screenshot flow.
 *
 * Replaces the old live-Vercel <iframe> (a load-time, reliability, and
 * confidentiality risk). Drop curated screenshots into
 * src/assets/atlas-cms/ named 1.png, 2.png … and they appear here in order.
 * No per-file wiring. Until any exist, a labelled placeholder renders so the
 * section never looks broken.
 *
 * Autoplay is accessible: pauses on hover/focus, has a visible play/pause
 * toggle, respects prefers-reduced-motion, keyboard-operable with a counter.
 */

const modules = import.meta.glob(
  "../../../assets/atlas-cms/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

function captionFromPath(path) {
  const file = path.split("/").pop().replace(/\.[^.]+$/, "");
  const label = file.replace(/^\d+[\s._-]*/, "").replace(/[-_]+/g, " ").trim();
  return label ? label.charAt(0).toUpperCase() + label.slice(1) : null;
}

const AUTOPLAY_MS = 4000;

const AtlasCmsSlider = () => {
  const slides = useMemo(
    () =>
      Object.keys(modules)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((k) => ({ src: modules[k].default, caption: captionFromPath(k) })),
    []
  );

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!prefersReduced);
  const regionRef = useRef(null);

  const count = slides.length;
  const go = useCallback((n) => setIndex(((n % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!playing || prefersReduced || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, prefersReduced, count]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  // No screenshots dropped in yet → labelled placeholder (never null, so the
  // case study reads intentionally rather than looking broken mid-build).
  if (count === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-accent-ink/35 bg-surface-2 aspect-[1440/860] flex flex-col items-center justify-center text-center px-6">
        <div className="w-12 h-12 rounded-xl bg-accent/25 border border-accent-ink/30 flex items-center justify-center mb-4">
          <ImageIcon size={22} className="text-accent-ink/70" />
        </div>
        <p className="text-ink font-medium mb-1">CMS 2.0 screenshots go here</p>
        <p className="text-ink-faint text-sm max-w-md">
          Drop curated frames into{" "}
          <span className="font-mono text-ink-muted">src/assets/atlas-cms/</span>{" "}
          named <span className="font-mono text-ink-muted">1.png, 2.png…</span> — they
          auto-load into this slider in order.
        </p>
      </div>
    );
  }

  const active = slides[index];

  return (
    <div
      ref={regionRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Atlas CMS 2.0 — screen flow"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(!prefersReduced)}
      onFocus={() => setPlaying(false)}
      className="relative rounded-2xl border border-line bg-surface-2 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink/50"
    >
      {/* Stage — full frame visible, never cropped */}
      <div className="relative bg-surface-2 flex items-center justify-center aspect-[1440/860]">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.caption ? `Atlas CMS 2.0 — ${s.caption}` : `Atlas CMS 2.0, screen ${i + 1} of ${count}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        ))}
      </div>

      {/* Control bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-line bg-surface-3/70">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause autoplay" : "Play autoplay"}
          className="w-8 h-8 rounded-full border border-line bg-surface text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center justify-center hover:border-accent-ink/45 hover:text-accent-ink transition-colors shrink-0"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-ink truncate">
            {active.caption || "CMS 2.0"}
          </p>
        </div>
        <span className="text-xs font-mono text-ink-faint shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screen"
            className="w-8 h-8 rounded-full border border-line bg-surface text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center justify-center hover:border-accent-ink/45 hover:text-accent-ink transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screen"
            className="w-8 h-8 rounded-full border border-line bg-surface text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex items-center justify-center hover:border-accent-ink/45 hover:text-accent-ink transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-4 pt-1 justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to screen ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent-ink" : "w-1.5 bg-line-strong hover:bg-ink-faint"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AtlasCmsSlider;
