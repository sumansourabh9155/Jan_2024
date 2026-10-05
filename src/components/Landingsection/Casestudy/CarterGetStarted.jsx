import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

/**
 * Carter — the Get Started flow a new advertiser walks through.
 *
 * Same chrome as CarterAiSlider (container, control bar, counter, dots) so the
 * two carousels on this page read as one component. The stage differs on
 * purpose: CarterAiSlider cross-fades inside a fixed 1440:860 frame, which
 * would letterbox a long scrolling screen down to a sliver. Here the stage is a
 * fixed-height strip that scrolls sideways, so every frame renders at the same
 * height and keeps its own width — a tall screen is simply narrow.
 *
 * Drop images into src/assets/carter-getstarted/ named 1, 2, 2.1 … and they
 * appear in order; see that folder's README.
 */

const modules = import.meta.glob(
    "../../../assets/carter-getstarted/*.{png,jpg,jpeg,webp}",
    { eager: true }
);

/**
 * Filenames carry the step, and steps have sub-steps: 1, 2, 2.1 … 2.8, 3, 4.1 …
 * A plain string sort (even a numeric-aware one) puts "2.png" after "2.8.png",
 * so the parts are parsed and compared as numbers.
 */
function stepParts(path) {
    const file = path.split("/").pop().replace(/\.[^.]+$/, "");
    const m = file.match(/^\d+(?:\.\d+)*/);
    return m ? m[0].split(".").map(Number) : [];
}

function compareSteps(a, b) {
    const A = stepParts(a);
    const B = stepParts(b);
    for (let i = 0; i < Math.max(A.length, B.length); i++) {
        // A missing segment sorts first, so step 2 precedes step 2.1.
        const x = A[i] ?? -1;
        const y = B[i] ?? -1;
        if (x !== y) return x - y;
    }
    return a.localeCompare(b);
}

function stepLabel(path) {
    const parts = stepParts(path);
    return parts.length ? parts.join(".") : null;
}

// Anything after the number becomes the caption: "2.1-connect-network" reads as
// "Connect network". Bare numeric names simply have no caption.
function captionFromPath(path) {
    const file = path.split("/").pop().replace(/\.[^.]+$/, "");
    const label = file
        .replace(/^\d+(?:\.\d+)*[\s._-]*/, "")
        .replace(/[-_]+/g, " ")
        .trim();
    return label ? label.charAt(0).toUpperCase() + label.slice(1) : null;
}

const CarterGetStarted = () => {
    const slides = useMemo(
        () =>
            Object.keys(modules)
                .sort(compareSteps)
                .map((k) => ({
                    src: modules[k].default,
                    step: stepLabel(k),
                    caption: captionFromPath(k),
                })),
        []
    );

    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const count = slides.length;
    const active = slides[index] || {};

    /**
     * Recomputes the active frame and the edge states. Also runs on image load:
     * each frame is zero-width until it decodes, so measuring only on mount
     * would leave the arrows disabled and the counter stuck on 1.
     */
    const sync = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        const start = el.scrollLeft <= 1;
        const end = el.scrollLeft >= max - 1;
        setAtStart(start);
        setAtEnd(end);

        // At max scroll the last frame can never reach the left edge, so
        // nearest-edge matching would stick one short of the end.
        if (end) {
            setIndex(el.children.length - 1);
            return;
        }

        // Measure against the track's own box. offsetLeft is relative to the
        // positioned shell, not the scroller, so it reads ~14px off and the
        // active frame never changes.
        const trackLeft = el.getBoundingClientRect().left;
        let best = 0;
        let bestDist = Infinity;
        [...el.children].forEach((f, i) => {
            const d = Math.abs(f.getBoundingClientRect().left - trackLeft);
            if (d < bestDist) {
                bestDist = d;
                best = i;
            }
        });
        setIndex(best);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        sync();
        el.addEventListener("scroll", sync, { passive: true });
        window.addEventListener("resize", sync);
        return () => {
            el.removeEventListener("scroll", sync);
            window.removeEventListener("resize", sync);
        };
    }, [sync, count]);

    /**
     * Let the browser do the positioning. Computing a scroll offset by hand and
     * then letting scroll-snap correct it races badly — the first click lands
     * nowhere and prev can travel forwards. scrollIntoView lands on the snap
     * point directly; block:"nearest" keeps it from scrolling the page.
     */
    const go = useCallback((i) => {
        const el = trackRef.current;
        if (!el) return;
        const target = el.children[Math.min(count - 1, Math.max(0, i))];
        if (!target) return;
        target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            inline: "start",
            block: "nearest",
        });
    }, [count]);

    if (count === 0) {
        return (
            <div className="mb-20">
                <Header />
                <div className="h-[520px] rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-3 text-center px-6">
                    <ImageIcon size={26} className="text-gray-600" />
                    <p className="text-gray-400 text-sm font-medium">
                        Get Started screens go here
                    </p>
                    <p className="text-gray-600 text-xs max-w-sm leading-relaxed">
                        Add images to{" "}
                        <code className="text-gray-400">src/assets/carter-getstarted/</code> as{" "}
                        <code className="text-gray-400">1.webp</code>,{" "}
                        <code className="text-gray-400">2.1.webp</code> … and they appear here
                        in order.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-20">
            <Header />

            <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden">
                {/* Stage — fixed height, scrolls sideways. Nothing is cropped. */}
                <div
                    ref={trackRef}
                    role="group"
                    aria-label="Carter Get Started flow — scroll sideways to see each screen"
                    tabIndex={0}
                    className="carter-gs-track flex gap-4 overflow-x-auto overflow-y-hidden p-4 snap-x snap-mandatory focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6f928]/60 focus-visible:ring-inset"
                >
                    {slides.map((s, i) => (
                        <div
                            key={s.src}
                            className="snap-start shrink-0 h-[clamp(300px,50vh,540px)] rounded-lg overflow-hidden border border-white/10 bg-black/40"
                        >
                            <img
                                src={s.src}
                                alt={
                                    s.caption
                                        ? `Carter Get Started — ${s.caption}`
                                        : `Carter Get Started, step ${s.step || i + 1} of ${count}`
                                }
                                // Every frame loads up front, deliberately. Frames are
                                // sized by their image, so a late-loading one shifts
                                // everything to its right — which breaks an in-flight
                                // scroll and sends the arrows and dots to the wrong
                                // slide. The whole optimized set is ~1.5MB, so the
                                // stable layout is worth more than the deferral.
                                loading="eager"
                                decoding="async"
                                onLoad={sync}
                                className="h-full w-auto max-w-none object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Edge fades — hint that the strip continues sideways. */}
                <div
                    className={`pointer-events-none absolute left-0 top-0 bottom-[86px] w-10 bg-gradient-to-r from-[#0d0d0f] to-transparent transition-opacity duration-300 ${atStart ? "opacity-0" : "opacity-100"}`}
                />
                <div
                    className={`pointer-events-none absolute right-0 top-0 bottom-[86px] w-10 bg-gradient-to-l from-[#0d0d0f] to-transparent transition-opacity duration-300 ${atEnd ? "opacity-0" : "opacity-100"}`}
                />

                {/* Control bar — matches CarterAiSlider */}
                <div className="flex items-center gap-3 px-4 py-3 border-t border-white/10 bg-black/40">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">
                            {active.caption ||
                                (active.step ? `Step ${active.step}` : "Get Started flow")}
                        </p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 shrink-0 tabular-nums">
                        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => go(index - 1)}
                            disabled={atStart}
                            aria-label="Previous screen"
                            className="w-8 h-8 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center transition-colors enabled:hover:border-[#d6f928]/50 enabled:hover:text-[#d6f928] disabled:opacity-30"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(index + 1)}
                            disabled={atEnd}
                            aria-label="Next screen"
                            className="w-8 h-8 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center transition-colors enabled:hover:border-[#d6f928]/50 enabled:hover:text-[#d6f928] disabled:opacity-30"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Progress dots — small visual, 24px+ touch target via padding. */}
                <div className="flex flex-wrap gap-0.5 px-4 pb-2 pt-0 justify-center bg-black/40">
                    {slides.map((s, i) => (
                        <button
                            key={s.src}
                            type="button"
                            onClick={() => go(i)}
                            aria-label={`Go to step ${s.step || i + 1}`}
                            aria-current={i === index}
                            className="group/dot flex items-center justify-center py-3 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6f928]/60 rounded"
                        >
                            <span
                                className={`block h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-[#d6f928]" : "w-1.5 bg-white/20 group-hover/dot:bg-white/50"}`}
                            />
                        </button>
                    ))}
                </div>

                <style>{`
                    .carter-gs-track { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }
                    .carter-gs-track::-webkit-scrollbar { height: 8px; }
                    .carter-gs-track::-webkit-scrollbar-track { background: transparent; }
                    .carter-gs-track::-webkit-scrollbar-thumb {
                        background-color: rgba(255,255,255,0.18);
                        border-radius: 999px;
                    }
                    .carter-gs-track::-webkit-scrollbar-thumb:hover { background-color: rgba(214,249,40,0.4); }
                `}</style>
            </div>
        </div>
    );
};

const Header = () => (
    <div className="max-w-2xl mb-5">
        <p className="text-[11px] font-mono text-gray-500 tracking-widest uppercase mb-3">
            The Get Started flow
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
            What a new advertiser sees first.
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            Before the decisions below make sense, here is the product itself &mdash; the
            onboarding a new advertiser walks through on their way to a first live campaign.
        </p>
    </div>
);

export default CarterGetStarted;
