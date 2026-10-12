import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
// Cropped from the original: the top 30% was sky and the left 15% scrub, which
// left the subject small and low in frame. The original is kept alongside.
import suman from "../../assets/Img/suman-hero.jpg";

// Every figure here is on the resume verbatim. Nothing on this site should
// state a number he would have to reconcile with that PDF in an interview.
//
// Chosen for what they prove rather than for size. A usability score is
// self-reported and abstract, and Figma copies measure reach, not outcome —
// both were replaced. What's left says: I make the user faster, I make the
// engineering team faster, and I've done it end to end for 2.5 years.
const proof = [
  { value: "3×", label: "Faster campaign launch" },
  { value: "+30%", label: "Engineering velocity" },
  { value: "2.5+", label: "Years end-to-end" },
];

// These sit in the hero partly to fill the column and partly because the
// landing page otherwise never states these terms in plain text — they are
// the phrases a recruiter or a search engine actually matches on.
// Eight rather than six: six wrapped 5/1 and left a chip stranded on its own
// line. Eight fills the second row, and every extra term is one a recruiter
// or a search engine actually matches on.
const capabilities = [
  "Product design",
  "Interaction design",
  "Design systems",
  "AI-native UX",
  "User research",
  "Prototyping",
  "Usability testing",
  "Design-to-code",
];

const CELL = 72;

const HeroSection = () => {
  const gridRef = useRef(null);
  const frame = useRef(0);

  // Snap a highlight to the grid cell under the pointer. Written straight to
  // the element's custom properties and rAF-throttled, so a pointer sweep
  // costs one style write per frame instead of a React render per event.
  const onPointerMove = useCallback((e) => {
    const el = gridRef.current;
    if (!el || frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--cell-x", `${Math.floor((clientX - r.left) / CELL) * CELL}px`);
      el.style.setProperty("--cell-y", `${Math.floor((clientY - r.top) / CELL) * CELL}px`);
    });
  }, []);

  return (
    // One viewport, contents centred in it. The section sizes to the screen
    // rather than to its own padding, so the whole pitch lands before any
    // scrolling happens.
    <section
      aria-label="Introduction"
      data-testid="hero-section"
      ref={gridRef}
      onPointerMove={onPointerMove}
      className="relative w-full bg-surface bg-plusgrid cell-hover overflow-hidden px-6 pt-24 pb-12 lg:pt-28 lg:pb-14 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">

        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-5 lg:mb-7">
          Product Designer — AI products, design systems, 0&#8209;to&#8209;1
        </p>

        {/* Full width, so the serif gets the measure it needs. Confined to a
            column it wrapped to four ragged lines and lost its authority. */}
        <h1 className="font-display font-normal text-ink text-[2.125rem] leading-[1.12] tracking-[-0.015em] sm:text-[3.5rem] lg:text-[5rem] [text-wrap:balance]">
          {/* The hyphens in these two terms are part of the term, not break
              opportunities — at narrow widths the line was breaking after
              "0-to-" and leaving a stranded "1". */}
          I design <span className="whitespace-nowrap">0-to-1</span> and{" "}
          <span className="whitespace-nowrap">1-100</span> products
          <span className="block text-ink-faint italic">and ship them end to end myself.</span>
        </h1>

        {/* Both columns start at the image's top edge and the left one simply
            runs as long as it needs to. Pinning the figures to the bottom
            forced a hole in the middle of the column. */}
        <div className="mt-8 lg:mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16 items-start">

          <div>
            {/* Figures lead: they are the most concrete thing on the page and
                they set up the sentence underneath. */}
            {/* A fixed three-column grid at every width. Laid out with
                flex-wrap they overflowed the column by ~15px once the face
                changed and dropped the third figure onto its own row — a grid
                can't surprise us that way when the type changes again. */}
            <dl className="grid grid-cols-3 gap-x-5 gap-y-6">
              {proof.map((p) => (
                <div key={p.label}>
                  <dt className="text-2xl sm:text-[1.75rem] font-medium text-ink leading-none tracking-[-0.01em]">{p.value}</dt>
                  <dd className="mt-2 sm:mt-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-ink-faint">
                    {p.label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-[1.0625rem] leading-[1.65] text-ink-muted max-w-lg mt-9">
              A Product Designer with a CS/ML background. I take AI products from
              user research through to a launched, polished interface — interaction,
              design systems, and the build itself.
            </p>

            {/* Hairline chips, not the filled mono pills from before. */}
            <ul className="flex flex-wrap gap-2 mt-7">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="text-[0.8125rem] text-ink-muted border border-line rounded-full px-3.5 py-1.5"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
              <Link to="/#case-studies">
                <button className="bg-ink text-surface px-7 py-3.5 rounded-full text-[0.9375rem] font-medium hover:bg-ink-soft transition-colors">
                  See selected work
                </button>
              </Link>
              <Link
                to="/contact"
                className="text-[0.9375rem] font-medium text-ink underline underline-offset-[6px] decoration-line-strong hover:decoration-ink transition-colors px-4 py-3.5"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <img
              src={suman}
              width="1275"
              height="1400"
              decoding="async"
              alt="Suman Sourabh, Product Designer"
              className="w-full max-w-[13rem] sm:max-w-[15rem] lg:max-w-none h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
