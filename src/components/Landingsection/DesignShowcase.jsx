import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Full visual archive — optimized webp shots.
import Anime from "../../assets/Project/anime.webp";
import Api from "../../assets/Project/api.webp";
import Drink from "../../assets/Project/drink.webp";
import Fashion from "../../assets/Project/fashion.webp";
import Jewll from "../../assets/Project/jewll.webp";
import Jobringer from "../../assets/Project/jobringer.webp";
import Jwells from "../../assets/Project/jwells.webp";
import Kploy from "../../assets/Project/kploy.webp";
import Nft from "../../assets/Project/nft.webp";
import Payment from "../../assets/Project/payment.webp";
import Shopify from "../../assets/Project/shopify.webp";
import Shopping from "../../assets/Project/shopping.webp";

const shots = [
  { img: Fashion, title: "Fashion Brand", tag: "Branding · UI" },
  { img: Nft, title: "NFT Marketplace", tag: "Product · UI" },
  { img: Shopping, title: "Shopping App", tag: "UI/UX" },
  { img: Kploy, title: "Kploy", tag: "Product · UI/UX" },
  { img: Drink, title: "Beverage Campaign", tag: "Visual · Marketing" },
  { img: Jwells, title: "Jewellery Store", tag: "E-commerce · UI" },
  { img: Payment, title: "Payment Flow", tag: "Product · UI" },
  { img: Api, title: "API Platform", tag: "Design · Branding" },
  { img: Anime, title: "Anime Platform", tag: "UI/UX" },
  { img: Jobringer, title: "Jobringer", tag: "Design · Branding" },
  { img: Shopify, title: "Shopify Store", tag: "E-commerce · Marketing" },
  { img: Jewll, title: "Jewll", tag: "Case Study · UI" },
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
      className="scroll-mt-24 bg-[#050505] py-24 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header + arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-4">
              [ Selected Design Work ]
            </div>
            <h2
              id="design-showcase-heading"
              className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Craft. <span className="text-gray-500">Not just process.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-base leading-relaxed">
              Interfaces, brand systems, and marketing design. Scroll through — click any shot to enlarge.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous designs"
              className={`${arrowClass} border-white/15 text-white bg-white/5 hover:border-[#d6f928]/50 hover:text-[#d6f928]`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next designs"
              className={`${arrowClass} border-white/15 text-white bg-white/5 hover:border-[#d6f928]/50 hover:text-[#d6f928]`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal carousel — inside the container so it lines up with the headline */}
        <div
          ref={trackRef}
          onScroll={syncArrows}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4
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
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6f928]/60 rounded-2xl"
          >
            {/* Image container — object-contain keeps the whole design visible */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] group-hover:border-white/25 transition-colors overflow-hidden">
              <div className="aspect-[16/10] flex items-center justify-center p-3">
                <img
                  src={s.img}
                  alt={`${s.title} — product design work by Suman Sourabh`}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg
                    transition-transform duration-500 group-hover:scale-[1.03] will-change-transform"
                />
              </div>
            </div>

            {/* Caption below the image, so nothing covers the work */}
            <div className="mt-3 px-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 group-hover:text-[#d6f928] transition-colors">
                {s.tag}
              </p>
              <p className="text-white font-semibold text-sm mt-0.5">{s.title}</p>
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
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-6xl w-full">
            <img
              src={active.img}
              alt={`${active.title} — enlarged view`}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#d6f928] mb-1">{active.tag}</p>
              <p className="text-white font-semibold text-sm">{active.title}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default DesignShowcase;
