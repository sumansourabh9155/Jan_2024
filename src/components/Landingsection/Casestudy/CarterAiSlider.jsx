import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

/**
 * Carter AI — agentic campaign-assistant flow.
 *
 * Auto-loads every image dropped into src/assets/carter-ai/ (sorted by
 * filename), so exporting frames named 01…19 (or 01-goal-typed.png, etc.)
 * is all that's needed — no per-file wiring.
 *
 * Autoplay is done accessibly: it pauses on hover/focus, has a visible
 * play/pause toggle, respects prefers-reduced-motion, and the whole thing
 * is keyboard-operable with prev/next + a live counter.
 */

// Eagerly import all exported frames. Vite resolves these at build time.
const modules = import.meta.glob(
  "../../../assets/carter-ai/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

function captionFromPath(path) {
  const file = path.split("/").pop().replace(/\.[^.]+$/, "");
  // Strip a leading order prefix like "01-" / "01_" / "01 "
  const label = file.replace(/^\d+[\s._-]*/, "").replace(/[-_]+/g, " ").trim();
  return label ? label.charAt(0).toUpperCase() + label.slice(1) : null;
}

const AUTOPLAY_MS = 4000;

const CarterAiSlider = () => {
  const slides = useMemo(
    () =>
      Object.keys(modules)
        // Natural/numeric sort so 1,2,…,10,…,15 stay in order (not 1,10,11,2).
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

  // Autoplay — only when playing, motion is allowed, and there's >1 slide.
  useEffect(() => {
    if (!playing || prefersReduced || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, prefersReduced, count]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  // Nothing exported yet → render nothing (keeps the case study clean).
  if (count === 0) return null;

  const active = slides[index];

  return (
    <div
      ref={regionRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Carter AI campaign assistant — screen flow"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(!prefersReduced)}
      onFocus={() => setPlaying(false)}
      className="relative rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6f928]/60"
    >
      {/* Stage — full frame visible, never cropped */}
      <div className="relative bg-[#0d0d0f] flex items-center justify-center aspect-[1440/860]">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.caption ? `Carter AI — ${s.caption}` : `Carter AI campaign assistant, screen ${i + 1} of ${count}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        ))}
      </div>

      {/* Control bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-white/10 bg-black/40">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause autoplay" : "Play autoplay"}
          className="w-8 h-8 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center hover:border-[#d6f928]/50 hover:text-[#d6f928] transition-colors shrink-0"
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* Caption + counter */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white truncate">
            {active.caption || "Guided campaign setup"}
          </p>
        </div>
        <span className="text-xs font-mono text-gray-500 shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screen"
            className="w-8 h-8 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center hover:border-[#d6f928]/50 hover:text-[#d6f928] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screen"
            className="w-8 h-8 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center hover:border-[#d6f928]/50 hover:text-[#d6f928] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Progress dots (compact, scrollable if many) */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-4 pt-1 justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to screen ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-[#d6f928]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarterAiSlider;
