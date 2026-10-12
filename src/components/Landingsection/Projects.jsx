import BannerAtlas from "../../assets/atlas/Banner.png";
// Banner imagery — same hero art the old /projects page used.
import BannerCarter from "../../assets/CarterRedesign/Banner.png";
import BannerPoppins from "../../assets/poppins/cover.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// `meta` replaces the old category/icon/accent trio. The icon and the per-card
// accent colour were decoration — three case studies do not need colour-coding
// to be told apart, and the icons said nothing the title didn't.
const projectData = [
  {
    title: "Carter",
    subtitle: "Retail-media DSP, scaling a live platform",
    meta: "Ad-tech · B2B SaaS",
    link: "/carter",
    image: BannerCarter,
    summary:
      "Advertisers stalled in a dense, single-screen setup. The call: rebuild it as a short guided flow — trading more steps for fewer decisions each, betting completion mattered more than speed.",
    outcome: "4.6/5 usability · 3× faster campaign launch",
  },
  {
    title: "Poppins",
    subtitle: "Conversational finance app for iOS",
    meta: "Consumer fintech · Concluded",
    link: "/poppins",
    image: BannerPoppins,
    summary:
      "Finance apps lead with net worth — a number that answers nothing about today. The call: one Safe to Spend figure that always shows its arithmetic, and two named voices so reassurance and opportunity never sound the same.",
    outcome: "Full process, whiteboard to hi-fi · Stopped before build",
  },
  {
    title: "Atlas",
    subtitle: "0-to-1 CMS and booking across a 130-clinic network",
    meta: "Enterprise CMS · Veterinary care",
    link: "/atlas",
    image: BannerAtlas,
    summary:
      "A 130-clinic network each wanting a bespoke site. The call: standardize to 6 templates instead — the trade-off that made the whole network maintainable without gutting local identity.",
    outcome: "+41% organic traffic · +16% booking conversion",
  },
];

const Projects = () => {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      data-testid="projects-section"
      className="scroll-mt-24 bg-cream px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section head. The index ("Three projects") does the work the old
            bracketed [ CASE STUDIES ] tag was doing, and says more.
            No rule above it: the cream band already marks where this section
            starts, so the line was drawing a boundary that was 20px from an
            existing one. */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <h2
            id="case-studies-heading"
            className="font-display font-normal text-ink text-4xl sm:text-5xl tracking-[-0.01em] [text-wrap:balance]"
          >
            Selected work
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint pb-2">
            Three projects · Ad-tech, fintech, veterinary care
          </p>
        </div>

        {/*
          Image beside the copy rather than full bleed above it.
          These banners are 8-bit palette PNGs — 256 colours at ~0.11
          bytes/pixel — so UI screenshots full of gradients band badly once
          they pass roughly 600px on screen. At half the measure they resolve
          cleanly. The side alternates so three rows read as a rhythm instead
          of the same card three times.
        */}
        <div className="space-y-20 md:space-y-28">
          {projectData.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.title} className="group">
                <Link
                  to={p.link}
                  className="grid gap-8 md:grid-cols-2 md:gap-14 md:items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink/60 rounded-sm"
                >
                  <div className={`overflow-hidden rounded-sm bg-surface-2 ${flip ? "md:order-2" : ""}`}>
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.subtitle}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02] will-change-transform"
                    />
                  </div>

                  <div className={flip ? "md:order-1" : ""}>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-4">
                      {p.meta}
                    </p>
                    <h3 className="font-display font-normal text-ink text-3xl sm:text-[2.5rem] leading-[1.1] [text-wrap:balance]">
                      {p.title}
                    </h3>
                    <p className="text-ink-muted text-[0.9375rem] mt-2.5 leading-relaxed">
                      {p.subtitle}
                    </p>

                    <p className="text-ink-soft text-[0.9375rem] leading-[1.7] mt-6">
                      {p.summary}
                    </p>

                    {/* Outcome as a sentence rather than two stat chips in
                        bordered boxes. Same numbers, less dashboard. */}
                    <p className="mt-5 text-[0.8125rem] text-ink-faint border-t border-line pt-4">
                      {p.outcome}
                    </p>

                    {/* This is the click the whole section exists to earn, so
                        it reads as a control rather than as another underlined
                        phrase in a page full of them. Lime fill on hover, with
                        the label inverting to ink so it stays legible. */}
                    <span className="mt-7 inline-flex items-center gap-2 bg-ink text-surface px-6 py-3 rounded-full text-[0.9375rem] font-medium
                      group-hover:bg-ink-soft transition-colors duration-200">
                      Read the case study
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-20 text-xs text-ink-ghost border-t border-line pt-6">
          Figures are internal metrics measured post-launch.
        </p>
      </div>
    </section>
  );
};

export default Projects;
