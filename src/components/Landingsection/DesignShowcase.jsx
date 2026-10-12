import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Four strongest product-UI shots (optimized webp).
import Shopping from "../../assets/Project/shopping.webp";
import Nft from "../../assets/Project/nft.webp";
import Kploy from "../../assets/Project/kploy.webp";
import Payment from "../../assets/Project/payment.webp";

const shots = [
  { img: Shopping, title: "Shopping App", tag: "Product · UI/UX" },
  { img: Nft, title: "NFT Marketplace", tag: "Product · UI" },
  { img: Kploy, title: "Kploy", tag: "Product · UI/UX" },
  { img: Payment, title: "Payment Flow", tag: "Product · UI" },
];

const DesignShowcase = () => {
  const [active, setActive] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef(null);

  const close = useCallback(() => setActive(null), []);

  // Track scroll position so the arrows can disable at the ends.
  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    // Advance by one slide (first child width + gap).
    const card = el.querySelector("[data-slide]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Escape to close the lightbox; lock scroll while it's open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  const arrowClass =
    "w-10 h-10 rounded-full border flex items-center justify-center transition-colors disabled:opacity-25 disabled:cursor-not-allowed";

  return (
    <section
      id="design-gallery"
      aria-labelledby="design-showcase-heading"
      data-testid="design-showcase-section"
      className="scroll-mt-24 bg-surface bg-dotfield py-24 px-6 overflow-hidden"
    >
      {/* The gutter belongs on the section, not inside the container. Inside
          it, the padding was indenting the content a further 21px, so this
          section started 21px right of every other one on the page. */}
      <div className="max-w-6xl mx-auto">
        {/* Header + arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5">
              Selected design work
            </p>
            <h2
              id="design-showcase-heading"
              className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight [text-wrap:balance]"
            >
              Craft. <span className="text-ink-faint italic">Not just process.</span>
            </h2>
            <p className="text-ink-muted mt-4 text-base leading-relaxed">
              Interfaces, brand systems, and marketing design. Scroll through — click any shot to enlarge.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous designs"
              className={`${arrowClass} border-line text-ink bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-line-strong hover:bg-surface-2`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next designs"
              className={`${arrowClass} border-line text-ink bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-line-strong hover:bg-surface-2`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/*
          The track starts on the page's left margin but runs off the right
          edge of the screen instead of stopping at the container. Clipped to
          the container it ended symmetrically on both sides, which read as a
          centred block rather than a left-aligned shelf — and it wasted the
          width. The negative right margin cancels the container's own gutter.
        */}
        <div
          ref={trackRef}
          onScroll={syncArrows}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4
            -mr-6 pr-6 lg:-mr-[max(1.5rem,calc((100vw-72rem)/2))] lg:pr-[max(1.5rem,calc((100vw-72rem)/2))]
            [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
        {shots.map((s) => (
          <button
            key={s.title}
            type="button"
            data-slide
            onClick={() => setActive(s)}
            aria-label={`Enlarge ${s.title}`}
            className="group snap-start flex-none w-[80vw] sm:w-[380px] lg:w-[440px] text-left cursor-pointer
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink/50 rounded-2xl"
          >
            {/* Image container — object-contain keeps the whole design visible */}
            <div className="rounded-sm bg-surface-3 overflow-hidden">
              <div className="aspect-[16/10] flex items-center justify-center">
                <img
                  src={s.img}
                  alt={`${s.title} — product design work by Suman Sourabh`}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full w-auto h-auto object-contain
                    transition-transform duration-[900ms] ease-out group-hover:scale-[1.02] will-change-transform"
                />
              </div>
            </div>

            {/* Caption below the image, so nothing covers the work */}
            <div className="mt-3 px-1">
              <p className="text-[10px] uppercase tracking-[0.18em] text-ink-faint group-hover:text-ink-muted transition-colors">
                {s.tag}
              </p>
              <p className="text-ink font-semibold text-sm mt-0.5">{s.title}</p>
            </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          // A scrim's job is to push the page back, so it stays dark whatever
          // the theme. At bg-surface/90 this was white over white: the lightbox
          // opened with no separation from the gallery behind it.
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface border border-line text-ink flex items-center justify-center hover:bg-surface-2 transition-colors"
          >
            <X size={18} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-6xl w-full">
            <img
              src={active.img}
              alt={`${active.title} — enlarged view`}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/15"
            />
            {/* Caption sits on the dark scrim, not the page, so it takes light
                type. The page tokens would be near-invisible here. */}
            <figcaption className="mt-4 text-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent mb-1">{active.tag}</p>
              <p className="text-white font-semibold text-sm">{active.title}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default DesignShowcase;
