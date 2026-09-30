import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Grid2x2, StickyNote, X } from "lucide-react";
import SeoHead from "../components/SeoHead";

import Carterimg from "../assets/CarterRedesign/carter.png";
import DSL from "../assets/CarterRedesign/dsl.png";
import CampaignCreationImg from "../assets/cartercampigh/campaign.png";
import Oldaditem from "../assets/cartercampigh/oldaditem.png";
import CampaignDSP from "../assets/dsp/campaign.png";

/**
 * Carter — interview presentation.
 *
 * A deck, not a page. Deliberately light where the portfolio is dark, because
 * this is a different mode: the reader is no longer skimming, I'm talking and
 * they're listening. Each slide carries only the skeleton — a small label and
 * two to four lines — so the detail lives in what gets said out loud, which is
 * the whole reason a deck beats a scrolling case study in a live round.
 *
 * Keyboard: ← → / space to move, G for the overview, N for speaker notes,
 * Esc to leave the overview.
 */

const INK = "#2E3A45";
const RED = "#E0324B";
const GREEN = "#1E9E4A";

const Label = ({ children }) => (
    <p className="text-lg md:text-xl font-medium mb-10 md:mb-14" style={{ color: "#A8B2BC" }}>
        {children}
    </p>
);

// The workhorse: a label and a few big lines. Nothing else.
const Lines = ({ items }) => (
    <div className="space-y-6 md:space-y-9">
        {items.map((line, i) => (
            <p
                key={i}
                className="font-heading text-3xl md:text-5xl font-bold leading-tight"
                style={{ color: INK }}
            >
                {typeof line === "string" ? line : line.text}
            </p>
        ))}
    </div>
);

const Statement = ({ children }) => (
    <p
        className="font-heading text-4xl md:text-6xl font-bold leading-[1.15] max-w-5xl"
        style={{ color: INK }}
    >
        {children}
    </p>
);

const BigStat = ({ value, label }) => (
    <div>
        <p
            className="font-heading text-[7rem] md:text-[12rem] font-bold leading-none mb-6"
            style={{ color: RED }}
        >
            {value}
        </p>
        <p className="font-heading text-2xl md:text-4xl font-bold" style={{ color: INK }}>
            {label}
        </p>
    </div>
);

const Shot = ({ src, alt, caption }) => (
    <div className="w-full">
        <img
            src={src}
            alt={alt}
            className="w-full max-h-[58vh] object-contain rounded-xl border"
            style={{ borderColor: "#DCE2E8" }}
        />
        {caption && (
            <p
                className="font-heading text-xl md:text-3xl font-bold mt-8 leading-snug"
                style={{ color: INK }}
            >
                {caption}
            </p>
        )}
    </div>
);

/**
 * Business impact as a cascade. This is the slide that earns the most in a live
 * round: it argues that the design decision caused the business outcome, rather
 * than listing numbers next to each other and hoping the link is inferred.
 */
const Cascade = () => (
    <svg viewBox="0 0 1000 470" className="w-full" role="img" aria-label="Business impact cascade: fixing the stalled draft flow leads to advertisers reaching first value, which stops churn, which means more drafts reach launch, producing increased revenue and a faster cross-network launch.">
        {[
            { x: 20, y: 46, t: "Fixed activation" },
            { x: 130, y: 138, t: "Advertisers reach first value" },
            { x: 250, y: 230, t: "They stop churning" },
            { x: 370, y: 322, t: "More drafts reach launch" },
        ].map((n) => (
            <text
                key={n.t}
                x={n.x}
                y={n.y}
                fontSize="30"
                fontWeight="700"
                fill={INK}
                fontFamily="Archivo, system-ui, sans-serif"
            >
                {n.t}
            </text>
        ))}

        {/* Elbow connectors — down from the node, then right into the next */}
        {[
            { x: 34, y1: 60, y2: 118, x2: 118 },
            { x: 144, y1: 152, y2: 210, x2: 238 },
            { x: 264, y1: 244, y2: 302, x2: 358 },
        ].map((e) => (
            <g key={e.x} stroke="#B8C2CC" strokeWidth="2.5" fill="none">
                <path d={`M${e.x} ${e.y1} V${e.y2} H${e.x2 - 10}`} />
                <polygon points={`${e.x2 - 10},${e.y2 - 6} ${e.x2},${e.y2} ${e.x2 - 10},${e.y2 + 6}`} fill="#B8C2CC" stroke="none" />
            </g>
        ))}

        {/* Two green terminals off the last node */}
        <g stroke="#B8C2CC" strokeWidth="2.5" fill="none">
            <path d="M384 336 V400 H630" />
            <polygon points="630,394 640,400 630,406" fill="#B8C2CC" stroke="none" />
            <path d="M384 336 V452 H630" />
            <polygon points="630,446 640,452 630,458" fill="#B8C2CC" stroke="none" />
        </g>
        <text x="652" y="410" fontSize="30" fontWeight="700" fill={GREEN} fontFamily="Archivo, system-ui, sans-serif">
            Increased revenue
        </text>
        <text x="652" y="462" fontSize="30" fontWeight="700" fill={GREEN} fontFamily="Archivo, system-ui, sans-serif">
            Faster cross-network launch
        </text>
    </svg>
);

// ————————————————————————————————————————————————————————————————
// The deck. `note` is what I say out loud; it never renders on the slide.
// ————————————————————————————————————————————————————————————————
const SLIDES = [
    {
        kind: "title",
        nav: "Carter — title",
        render: () => (
            <div>
                <p className="text-lg md:text-xl font-medium mb-6" style={{ color: "#A8B2BC" }}>
                    Case study
                </p>
                <h1
                    className="font-heading text-6xl md:text-8xl font-bold leading-none mb-8"
                    style={{ color: INK }}
                >
                    Carter
                </h1>
                <p className="font-heading text-2xl md:text-4xl font-bold" style={{ color: "#6B7885" }}>
                    Retail media DSP · Product Designer
                </p>
                <p className="text-base md:text-lg mt-6" style={{ color: "#8B96A2" }}>
                    Shyftlabs · 12 months, 2 phases
                </p>
            </div>
        ),
        note: "Set the frame in one breath: B2B ad-tech platform, I was the product designer, twelve months across two phases. Then move — don't linger on the title.",
    },
    {
        label: null,
        kind: "visual",
        nav: "The finished product",
        render: () => <Shot src={Carterimg} alt="Carter platform overview" />,
        note: "Show the finished thing before explaining anything. Say almost nothing here — 'this is where it ended up' — so they have something to hang the next fifteen minutes on.",
    },
    {
        label: "What Carter is",
        render: () => (
            <Lines
                items={[
                    "An operating system for commerce media",
                    "Advertisers plan, launch and measure across retail networks",
                    "B2B SaaS · desktop web",
                ]}
            />
        ),
        note: "Never assume they know the company or the category. Retail media = brands buying ads inside retailers' own properties. One sentence, then move.",
    },
    {
        label: "Where it started",
        render: () => (
            <Shot
                src={Oldaditem}
                alt="The legacy ad management table before redesign"
                caption="Ad management was a legacy table. No hierarchy, no guidance, wireframe-grade UI."
            />
        ),
        note: "Show the before. Don't editorialise — the screenshot does the work. Mention it looked like a mid-fi wireframe in production.",
    },
    {
        label: "Team",
        render: () => (
            <Lines
                items={[
                    "1 Product Head",
                    "12-person core team",
                    "80+ person org around us",
                    "1 of 2 designers, across 12 DSP integrations",
                ]}
            />
        ),
        note: "Be precise about scope of ownership. I was one of two designers covering 12 DSP integrations — say that plainly rather than claiming I led it alone. It's more credible and it's what the resume says.",
    },
    {
        label: "Objectives",
        render: () => (
            <Lines
                items={[
                    "Get advertisers to first value",
                    "One design system across every product",
                    "Make the platform sellable to enterprise",
                    "Scale to cross-network campaigns",
                ]}
            />
        ),
        note: "These were the objectives before I knew the answers. Frame them as the brief, not the outcome.",
    },
    {
        label: "Collaboration",
        render: () => (
            <Lines
                items={[
                    "User interviews with advertisers",
                    "SQL funnel analysis with the data team",
                    "Leadership — the prioritisation argument",
                    "Frontend team — specs and design QA",
                ]}
            />
        ),
        note: "Name who gave me what. The SQL point matters: I pulled the funnel data myself rather than asking for a report, which is why I could argue the case later.",
    },
    {
        label: "Core pain points",
        render: () => (
            <Lines
                items={[
                    "Dense single-screen campaign setup",
                    "No guidance when performance dropped",
                    "Every team built UI independently",
                    "Advertisers stalled before first value",
                ]}
            />
        ),
        note: "Curated, not exhaustive. There were more findings; these are the four that drove decisions. If they ask what else I found, I have the audit.",
    },
    {
        kind: "stat",
        label: "The number that mattered",
        render: () => <BigStat value="Stalled" label="campaigns started in draft and never launched" />,
        note: "This is the hinge of the whole story. Pause here. Twenty-seven percent of advertisers never reached value — which meant we were losing clients faster than sales could close them.",
    },
    {
        kind: "statement",
        label: "The call",
        render: () => (
            <Statement>
                The team wanted features.{" "}
                <span style={{ color: "#8B96A2" }}>I pushed to fix activation first.</span>
            </Statement>
        ),
        note: "The most important slide. If they remember one thing, it should be that I argued against the roadmap with data and won two sprints to prove it.",
    },
    {
        label: "How I made the case",
        render: () => (
            <Lines
                items={[
                    "Churn correlation, not opinion",
                    "VP of Sales pushed back — needed a feature for a deal",
                    "Walked leadership through the funnel math",
                    "Got two sprints to prove it",
                ]}
            />
        ),
        note: "Expect a challenge here. The honest version: I didn't win on charisma, I won because fixing activation had roughly 4× the revenue impact of the next feature and I could show it.",
    },
    {
        label: "Questions we asked",
        render: () => (
            <Lines
                items={[
                    "Where exactly do advertisers stop?",
                    "What are they deciding at that step?",
                    "What do they need in order to decide it?",
                    "Is speed actually the problem?",
                ]}
            />
        ),
        note: "That last question is the one that changed the design. Everyone assumed setup was too slow. It wasn't slow — it was too dense.",
    },
    {
        label: "Observations",
        render: () => (
            <Lines
                items={[
                    "Too many decisions on one screen",
                    "More steps is not slower, if each step is simpler",
                ]}
            />
        ),
        note: "Counter-intuitive finding, so say it slowly. Users weren't asking for fewer clicks. They were asking for fewer things to hold in their head at once.",
    },
    {
        kind: "statement",
        label: "The bet",
        render: () => (
            <Statement>
                Trade more steps for fewer decisions each.{" "}
                <span style={{ color: "#8B96A2" }}>Completion over speed.</span>
            </Statement>
        ),
        note: "Name the trade-off explicitly, including what it cost: the flow got longer. That's the point — I chose that.",
    },
    {
        label: "Decision 1 — Campaign creation",
        render: () => (
            <Shot
                src={CampaignCreationImg}
                alt="Redesigned five-stage campaign creation flow"
                caption="Five stages. One decision each."
            />
        ),
        note: "Walk the five stages left to right and say what decision each one isolates. This is where UI craft gets judged, so slow down.",
    },
    {
        label: "Decision 2 — Design system",
        render: () => (
            <Shot
                src={DSL}
                alt="Carter design system component library"
                caption="Teams stopped re-solving the same problems."
            />
        ),
        note: "Tokens, variables, states, documentation, Figma-to-Storybook parity. The business case wasn't consistency — it was that shipping got 30% faster, which is what let two designers cover twelve integrations.",
    },
    {
        label: "What didn't work first",
        render: () => (
            <Lines
                items={[
                    { text: "AI budget nudges auto-filled the spend" },
                    { text: "Advertisers left them alone" },
                    { text: "Users didn't trust automated inputs on day one" },
                ]}
            />
        ),
        note: "Volunteer the failure before they find it. This is the slide that buys credibility for everything else on the deck.",
    },
    {
        kind: "statement",
        label: "And the winner was…",
        render: () => (
            <Statement>
                Contextual recommendations alongside manual controls.{" "}
                <span style={{ color: GREEN }}>The model proposes, the advertiser decides.</span>
            </Statement>
        ),
        note: "The lesson generalises: with AI features, suggest and let the user commit. Don't act on their behalf before you've earned it.",
    },
    {
        label: "Business impact",
        kind: "wide",
        render: () => <Cascade />,
        note: "Trace it out loud, arrow by arrow. Even without numbers this slide would land, because it shows I understand how a design decision reaches revenue.",
    },
    {
        label: "Scaling across networks",
        render: () => (
            <Lines
                items={[
                    "The redesign earned the trust to expand",
                    "Advertisers already on several networks were asking",
                    "Built the case for leadership, phased",
                    "Unified 12 workflows into one form",
                ]}
            />
        ),
        note: "Keep this brisk — it can eat the clock. The point is that one master creative auto-adapts per network, so a cross-network launch now costs one campaign's time.",
    },
    {
        label: "What shipped",
        render: () => (
            <Shot
                src={CampaignDSP}
                alt="Cross-network campaign management view"
                caption="Plan, launch and measure every retail network in one place."
            />
        ),
        note: "One screen is enough here. If they want more I have the campaign detail and media planning canvas ready.",
    },
    {
        label: "Results",
        render: () => (
            <Lines
                items={[
                    "8% less draft abandonment",
                    "3× faster campaign launch — 1.5 hrs to 30 min",
                    "30% faster shipping from the design system",
                    "4.6/5 usability, task-based sessions",
                ]}
            />
        ),
        note: "Internal metrics measured post-launch over the phase window. If asked about the 4.6: task-based sessions with alpha clients — be ready to say how many participants and which tasks.",
    },
    {
        kind: "statement",
        label: "What I'd do differently",
        render: () => (
            <Statement>
                The hardest call wasn&apos;t a screen.{" "}
                <span style={{ color: "#8B96A2" }}>It was asking the team to stop building.</span>
            </Statement>
        ),
        note: "Close on judgement, not craft. And the honest regret: I should have run the funnel analysis in week one instead of week five — the data was already there.",
    },
    {
        kind: "title",
        nav: "Thank you",
        render: () => (
            <div>
                <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8" style={{ color: INK }}>
                    Thank you
                </h2>
                <p className="font-heading text-xl md:text-3xl font-bold" style={{ color: "#6B7885" }}>
                    Happy to go deeper on any decision here.
                </p>
            </div>
        ),
        note: "Invite the challenge. Then be quiet and let them ask.",
    },
];

const CarterDeck = () => {
    const [i, setI] = useState(0);
    const [notes, setNotes] = useState(false);
    const [overview, setOverview] = useState(false);

    const clamp = (n) => Math.min(SLIDES.length - 1, Math.max(0, n));

    // Absolute jump — used by the overview grid.
    const go = useCallback((n) => setI(clamp(n)), []);

    // Relative move. Has to read the previous value from the updater rather than
    // from the render closure, or two key presses inside one tick both compute
    // from the same index and only advance once — which is exactly how a held
    // arrow key behaves.
    const step = useCallback((d) => setI((prev) => clamp(prev + d)), []);

    // The rest of the site paints html/body black. Left alone, an overscroll
    // bounce flashes black behind a light deck — which looks broken on a shared
    // screen. Repaint for this route only, and put it back on the way out.
    useEffect(() => {
        const { body, documentElement: html } = document;
        const prevBody = body.style.backgroundColor;
        const prevHtml = html.style.backgroundColor;
        body.style.backgroundColor = "#F4F6F9";
        html.style.backgroundColor = "#F4F6F9";
        return () => {
            body.style.backgroundColor = prevBody;
            html.style.backgroundColor = prevHtml;
        };
    }, []);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
                e.preventDefault();
                setOverview(false);
                step(1);
            } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
                e.preventDefault();
                setOverview(false);
                step(-1);
            } else if (e.key === "Home") {
                go(0);
            } else if (e.key === "End") {
                go(SLIDES.length - 1);
            } else if (e.key === "n" || e.key === "N") {
                setNotes((v) => !v);
            } else if (e.key === "g" || e.key === "G") {
                setOverview((v) => !v);
            } else if (e.key === "Escape") {
                setOverview(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go, step]);

    const slide = SLIDES[i];
    const wide = slide.kind === "wide";

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F4F6F9" }}>
            <SeoHead
                title="Carter — Case Study Presentation | Suman Sourabh"
                description="A presentation walkthrough of the Carter retail media DSP case study."
                canonicalUrl="https://www.sumansourabh.com/carter/present"
                includeSchemas={[]}
                noindex
            />

            {/* Chrome — deliberately faint so it disappears while presenting */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 shrink-0">
                <Link
                    to="/carter"
                    className="inline-flex items-center gap-2 text-sm hover:opacity-100 opacity-45 transition-opacity"
                    style={{ color: INK }}
                >
                    <ArrowLeft size={15} /> Case study
                </Link>
                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => setNotes((v) => !v)}
                        aria-pressed={notes}
                        className="p-2.5 rounded-lg transition-opacity"
                        style={{ color: INK, opacity: notes ? 0.9 : 0.35 }}
                        title="Speaker notes (N)"
                    >
                        <StickyNote size={17} />
                    </button>
                    <button
                        type="button"
                        onClick={() => setOverview((v) => !v)}
                        aria-pressed={overview}
                        className="p-2.5 rounded-lg transition-opacity"
                        style={{ color: INK, opacity: overview ? 0.9 : 0.35 }}
                        title="All slides (G)"
                    >
                        {overview ? <X size={17} /> : <Grid2x2 size={17} />}
                    </button>
                </div>
            </div>

            {overview ? (
                <div className="flex-1 px-5 md:px-8 pb-10 overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
                        {SLIDES.map((s, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    go(idx);
                                    setOverview(false);
                                }}
                                className="text-left rounded-xl border p-4 min-h-[92px] transition-colors"
                                style={{
                                    borderColor: idx === i ? INK : "#DCE2E8",
                                    backgroundColor: idx === i ? "#E8ECF1" : "#FFFFFF",
                                }}
                            >
                                <span className="text-xs font-mono block mb-1.5" style={{ color: "#A8B2BC" }}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm font-semibold leading-snug" style={{ color: INK }}>
                                    {s.nav || s.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24 pb-6">
                        <div className={`w-full mx-auto ${wide ? "max-w-6xl" : "max-w-5xl"}`}>
                            {slide.label && <Label>{slide.label}</Label>}
                            {slide.render()}
                        </div>
                    </div>

                    {notes && (
                        <div
                            className="shrink-0 border-t px-6 md:px-16 lg:px-24 py-5"
                            style={{ borderColor: "#DCE2E8", backgroundColor: "#EAEEF3" }}
                        >
                            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#A8B2BC" }}>
                                Say this
                            </p>
                            <p className="text-sm md:text-base leading-relaxed max-w-4xl" style={{ color: "#4A5560" }}>
                                {slide.note}
                            </p>
                        </div>
                    )}

                    {/* Footer controls */}
                    <div className="shrink-0 flex items-center justify-between px-5 md:px-8 py-4">
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                onClick={() => step(-1)}
                                disabled={i === 0}
                                aria-label="Previous slide"
                                className="p-2.5 rounded-lg disabled:opacity-20 transition-opacity"
                                style={{ color: INK, opacity: i === 0 ? 0.2 : 0.5 }}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                type="button"
                                onClick={() => step(1)}
                                disabled={i === SLIDES.length - 1}
                                aria-label="Next slide"
                                className="p-2.5 rounded-lg disabled:opacity-20 transition-opacity"
                                style={{ color: INK, opacity: i === SLIDES.length - 1 ? 0.2 : 0.5 }}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <p className="text-xs font-mono" style={{ color: "#A8B2BC" }}>
                            {String(i + 1).padStart(2, "0")} / {SLIDES.length}
                            <span className="hidden md:inline"> · ← → move · N notes · G all slides</span>
                        </p>
                    </div>

                    {/* Thin progress rail */}
                    <div className="h-[3px] shrink-0" style={{ backgroundColor: "#DCE2E8" }}>
                        <div
                            className="h-full transition-all duration-300"
                            style={{
                                width: `${((i + 1) / SLIDES.length) * 100}%`,
                                backgroundColor: INK,
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CarterDeck;
