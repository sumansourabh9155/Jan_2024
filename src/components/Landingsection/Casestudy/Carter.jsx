import {
    AlertTriangle,
    BarChart2,
    Bug,
    CheckCircle2,
    Clock,
    Cpu,
    Eye,
    FileText,
    Layers,
    Layout,
    Scissors,
    Split,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

import Aditem from "../../../assets/cartercampigh/aditem.png";
import CampaignCreationImg from "../../../assets/cartercampigh/campaign.png";
import CampaignDSP from "../../../assets/dsp/campaign.png";
import CarterAiSlider from "./CarterAiSlider";
import CarterGetStarted from "./CarterGetStarted";
// ================= ASSETS =================
import Carterimg from "../../../assets/CarterRedesign/carter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Oldaditem from "../../../assets/cartercampigh/oldaditem.png";
import SEO from "../../SEO";
import campaigndetail from "../../../assets/dsp/campaigndetail.png";
import mediaplan from "../../../assets/dsp/mediaplan.png";
import v1 from "../../../assets/dsp/1.mp4";
import v3 from "../../../assets/dsp/3.mp4";

import {
    Badge, SubLabel, StatCard, MetaList, Finding, NextCase, Contents, Reveal,
    ShortVersion,
} from "./CaseStudyUI";

// ================= REUSABLE COMPONENTS =================

const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeAlt, afterAlt }) => {
    const [pos, setPos] = useState(50);
    const containerRef = useRef(null);
    const dragging = useRef(false);

    const updatePos = useCallback((clientX) => {
        const rect = containerRef.current.getBoundingClientRect();
        const pct = Math.min(
            100,
            Math.max(0, ((clientX - rect.left) / rect.width) * 100),
        );
        setPos(pct);
    }, []);

    const onMouseDown = () => {
        dragging.current = true;
    };
    const onMouseMove = (e) => {
        if (dragging.current) updatePos(e.clientX);
    };
    const onMouseUp = () => {
        dragging.current = false;
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-sm overflow-hidden select-none cursor-ew-resize border border-line"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchMove={(e) => updatePos(e.touches[0].clientX)}
            onTouchStart={(e) => updatePos(e.touches[0].clientX)}
        >
            {/* BEFORE image — base layer (sets container height) */}
            <img
                loading="lazy"
                decoding="async"
                src={beforeSrc}
                alt={beforeAlt}
                className="w-full h-auto block"
                draggable={false}
            />

            {/* AFTER image — clipped to right of slider */}
            <img
                loading="lazy"
                decoding="async"
                src={afterSrc}
                alt={afterAlt}
                className="absolute top-0 left-0 w-full"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                draggable={false}
            />

            {/* Divider line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-surface/80 pointer-events-none"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
                {/* Handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface flex items-center justify-center">
                    <span className="text-ink text-xs font-bold select-none">⇔</span>
                </div>
            </div>

            {/* Labels */}
            <span className="absolute top-3 left-3 text-[11px] uppercase tracking-[0.18em] text-ink/70 bg-surface-3/80 px-2 py-0.5 rounded pointer-events-none">
                Before
            </span>
            <span className="absolute top-3 right-3 text-[11px] uppercase tracking-[0.18em] text-ink-faint bg-surface-3/80 px-2 py-0.5 rounded pointer-events-none">
                After
            </span>
        </div>
    );
};

// A screen placed next to the argument it settles. The caption is required in
// practice: these used to sit three-in-a-row at the end of Phase 2 with nothing
// saying what any of them proved.
const Shot = ({ label, src, alt, caption }) => (
    <figure className="mb-14">
        <Badge>{label}</Badge>
        <img
            loading="lazy"
            decoding="async"
            src={src}
            alt={alt}
            className="rounded-sm w-full border border-line"
        />
        {caption && (
            <figcaption className="text-ink-muted text-sm leading-[1.7] mt-4 max-w-3xl">
                {caption}
            </figcaption>
        )}
    </figure>
);

// Before, after, and the change. All four cells used to be 14px, so the one
// number the row exists to deliver — the delta — was the same size as its own
// label. The movement is now the loudest thing in the row, and `tabular` keeps
// the column of figures aligned on the decimal rather than ragged.
const MetricRow = ({ label, before, after, delta }) => (
    <div className="flex items-center justify-between gap-4 py-5 border-b border-line-soft last:border-0">
        <span className="text-ink text-sm font-medium w-2/5">{label}</span>
        <span className="text-ink-faint text-sm w-1/5 text-center tabular">{before}</span>
        <span className="text-ink-muted text-sm w-1/5 text-center tabular">{after}</span>
        <span className="text-ink text-[1.375rem] font-medium w-1/5 text-right tracking-[-0.02em] tabular leading-none">
            {delta}
        </span>
    </div>
);

const CarterEcosystem = () => {
    return (
        <div className="font-ui text-ink bg-surface">
            <SEO
                title="Carter — Platform Redesign, Design System & Commerce-Media Features — Product Design Case Study"
                description="How I redesigned Carter's inconsistent platform, built its design system, and designed the cross-network campaign features for a unified commerce-media operating system."
                keywords="product design case study, carter, platform redesign, DSP, retail media network, ad tech, UX design, design systems, activation funnel, interaction design"
                url="https://www.sumansourabh.com/carter"
            />
            <Navbar />
            <main id="main">

            {/* ================= HERO ================= */}
            <section className="bg-surface bg-plusgrid pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Left-aligned, on the page's own margin — the rest of the
                        site never centres a column. */}
                    <div className="max-w-3xl mb-10">
                        {/* Real Carter logo (from trycarter.com), inlined as SVG.
                            The raised chip it sat on was the only shadow left on
                            the site; the client's blue reads fine on white. */}
                        <div className="inline-block mb-7">
                            <svg viewBox="0 0 136 41" width="116" height="35" fill="none" role="img" aria-label="Carter logo" className="block">
                                <path fill="#0125BB" d="M19.715 33.078 13.252 37l-4.745-2.903 11.208-6.681zM1.312 12.32 13.591 5l4.75 2.898-12.079 7.345-4.95-2.924Zm7.271 4.313 12.284-7.325 4.745 2.898-12.078 7.345-4.956-2.924zM0 14.43l4.684 2.712v7.623L0 27.565zm26.72 22.287-4.669-2.795v-16.61L26.72 14.6zM6.662 32.63 1.424 29.5l4.787-2.856 5.442 3.104zm43.588.838c-7.452 0-12.96-5.58-12.96-13.068S42.87 7.332 50.394 7.332c1.98 0 3.708.432 5.544 1.404v6.228c-1.476-1.44-3.312-2.196-5.328-2.196-4.248 0-7.452 3.24-7.452 7.632 0 4.356 3.204 7.632 7.452 7.632 2.016 0 3.852-.756 5.328-2.196v6.192c-2.016 1.008-3.672 1.44-5.688 1.44m14.256-.036c-3.708 0-6.264-2.556-6.264-5.976 0-3.384 2.52-5.796 6.156-5.76 1.764.036 2.988.576 3.708 1.692.036-2.304-1.584-3.636-4.248-3.636-1.368 0-2.592.324-3.744 1.08v-4.464c1.476-.684 3.024-1.008 4.716-1.008 5.184 0 8.352 2.916 8.352 7.668V33h-4.86v-1.512c-.756 1.332-1.98 1.944-3.816 1.944m1.548-3.888c1.296 0 2.196-.9 2.196-2.124 0-1.188-.9-2.052-2.196-2.052s-2.196.864-2.196 2.088.9 2.088 2.196 2.088M76.007 33V15.828h5.4v2.412c.864-1.872 2.304-2.808 4.356-2.808.432 0 .72.036 1.152.18v5.544c-.684-.54-1.26-.792-2.016-.792-2.16 0-3.492 1.62-3.492 4.032V33zm21.766.468c-3.96 0-6.156-2.448-6.12-6.336v-6.84h-2.7v-4.464h2.7v-5.22h5.4v5.22h4.248v4.464h-4.248v6.048c0 1.476.756 2.196 2.16 2.196.72 0 1.44-.216 2.088-.684v4.752a7.6 7.6 0 0 1-3.528.864m15.199 0c-5.724 0-10.188-4.14-10.188-9.504 0-4.896 3.744-8.604 9.072-8.604 5.796 0 9.252 4.428 8.568 10.944h-11.556c.864 1.512 2.556 2.34 4.788 2.34 1.836 0 3.564-.54 5.256-1.62v4.824c-2.052 1.116-3.924 1.62-5.94 1.62m-4.608-10.908h6.984c-.396-1.908-1.728-3.096-3.6-3.096s-3.06 1.188-3.384 3.096M122.8 33V15.828h5.4v2.412c.864-1.872 2.304-2.808 4.356-2.808.432 0 .72.036 1.152.18v5.544c-.684-.54-1.26-.792-2.016-.792-2.16 0-3.492 1.62-3.492 4.032V33z" />
                            </svg>
                        </div>
                        <Badge>B2B SaaS &middot; Ad Tech &middot; Retail Media</Badge>
                        <h1 className="font-display text-[3.25rem] md:text-7xl font-normal text-ink tracking-[-0.02em] leading-[0.95] mb-6">
                            Carter <span className="text-ink-faint">Ecosystem</span>
                        </h1>
                        <p className="text-lg text-ink-muted leading-[1.6] max-w-2xl">
                            Carter is a unified operating system for commerce media. I led design
                            across 12 DSP integrations as one of two designers — redesigning an
                            inconsistent, wireframe-grade platform, building its design system, and
                            designing the multi-DSP orchestration and AI-agent features.
                        </p>
                    </div>

                    {/* ── The thirty-second read ──────────────────────────────
                        Order here is deliberate, and it is not the order a case
                        study usually runs in. The four numbers come before the
                        screenshot and before the project metadata, because the
                        first question a recruiter has is "did the work work?" —
                        not what tools I used.

                        These numbers used to live eight screens down, inside the
                        phase that produced each one. True to the narrative,
                        useless to someone scanning.

                        Labels are lifted verbatim from those phase sections — no
                        new attribution invented up here, because two of these
                        numbers are claimed by two different phases further down
                        and that needs settling before it gets restated. */}
                    <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                        <StatCard value="3&times;" label="Faster campaign launch — 1.5 hours down to 30 minutes." />
                        <StatCard value="&darr; 8%" label="Draft abandonment after the guided-flow rebuild." />
                        <StatCard value="30%" label="Faster shipping velocity from component infrastructure." />
                        <StatCard value="4.6/5" label="Usability score, task-based sessions." />
                    </div>

                    <img
                        src={Carterimg}
                        alt="Carter Platform Overview"
                        className="mt-14 rounded-sm w-full object-cover border border-line"
                    />

                    {/* The short version — the whole arc before the detail starts, for
                        anyone who reads one screen and decides from it. */}
                    <ShortVersion
                        className="mt-14"
                        rows={[
                            {
                                k: "The problem",
                                v: (
                                    <>
                                        A live platform that was quietly losing people &mdash; advertisers{" "}
                                        <span className="text-ink font-medium">stalled in draft</span> and never
                                        reached a launched campaign.
                                    </>
                                ),
                            },
                            {
                                k: "The call",
                                v: (
                                    <>
                                        Find out why before building anything new. Interviews, session recordings
                                        and SQL funnel analysis, then{" "}
                                        <span className="text-ink font-medium">got leadership to prioritise the fix</span>.
                                    </>
                                ),
                            },
                            {
                                k: "What I owned",
                                v: (
                                    <>
                                        Research, IA, interaction design, the design system, and design QA &mdash;{" "}
                                        <span className="text-ink font-medium">one of two designers</span> across
                                        12 DSP integrations in a 12-person core team.
                                    </>
                                ),
                            },
                            {
                                k: "The outcome",
                                v: (
                                    <>
                                        Draft abandonment <span className="mark text-ink font-medium">down 8%</span>,
                                        campaign launch <span className="mark text-ink font-medium">3× faster</span>,
                                        engineering <span className="mark text-ink font-medium">30% faster</span> off
                                        the design system, <span className="mark text-ink font-medium">4.6/5</span> usability.
                                    </>
                                ),
                            },
                        ]}
                    />

                    <Contents
                        className="mt-14 max-w-3xl"
                        items={[
                            { to: "context", label: "Context & my role" },
                            { to: "phase-1", label: "Phase 1 — Activation" },
                            { to: "phase-2", label: "Phase 2 — Cross-network" },
                            { to: "ai-assistant", label: "Agentic AI assistant" },
                            { to: "reflection", label: "What I'd do differently" },
                        ]}
                    />

                    {/* Company, platform, duration, tools. Real information, but
                        nobody decides anything from it — so it closes the hero
                        rather than sitting between the headline and the proof. */}
                    <MetaList
                        className="mt-14"
                        cols="md:grid-cols-5"
                        items={[
                            { term: "Company", value: "Shyftlabs" },
                            { term: "My role", value: "Product Designer" },
                            { term: "Platform", value: "Desktop Web" },
                            { term: "Duration", value: "12 Months, 2 Phases" },
                            { term: "Design team", value: "1 of 2 designers" },
                        ]}
                    />
                    <p className="mt-8 text-[0.8125rem] text-ink-faint leading-[1.7] max-w-2xl">
                        <span className="text-ink-ghost">Tools &middot; </span>
                        {["Jira", "Figma", "Storybook", "React", "Tailwind CSS"].join(" · ")}
                    </p>
                </div>
            </section>

            {/* ================= WHY I HAD PM AUTHORITY ================= */}
            <section id="context" className="scroll-mt-24 bg-cream py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Product tour first: the Get Started flow doubles as the
                        introduction to the platform, so it runs ahead of the role
                        and the decisions rather than being buried among them. */}
                    <CarterGetStarted />

                    <div className="max-w-3xl mb-14">
                        <Badge>01 &mdash; Context &amp; My Role</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Two designers. Twelve integrations.{" "}
                            <span className="text-ink-muted">Research to shipped UI.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed">
                            Carter had product-market fit but a product that was quietly
                            breaking people. The Product Head gave me design ownership because I
                            could
                            <span className="text-ink font-medium">
                                {" "}
                                read the codebase, run user research, and ship the UI myself
                            </span>
                            . Day to day I worked with a{" "}
                            <span className="mark text-ink font-medium">12-person core team</span>{" "}
                            inside an 80+ person org; the wider product group ran their own tracks. Design
                            stayed lean throughout &mdash; I was{" "}
                            <span className="text-ink font-medium">one of two designers</span> covering
                            12 DSP integrations, which is why the work had to be systematised rather than
                            drawn screen by screen.
                        </p>
                        <p className="text-ink-faint text-sm leading-relaxed mt-4">
                            Timeline note: I moved onto Carter after leading the first stage of{" "}
                            <Link to="/atlas" className="text-ink-soft underline underline-offset-2 hover:text-ink transition-colors">Atlas</Link>,
                            and kept supporting Atlas part-time through Phase 1 here before returning to it
                            full-time later. The twelve months below are the Carter engagement window, not
                            twelve months of exclusive work.
                        </p>
                    </div>

                    {/* What I Owned — Icon Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <FileText size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">
                                    Specs & Scope
                                </h4>
                                <p className="text-ink-muted text-xs leading-relaxed">
                                    Wrote detailed design specs and acceptance criteria. Helped
                                    prioritize what shipped and what didn&apos;t.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Users size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">
                                    Embedded with Engineering
                                </h4>
                                <p className="text-ink-muted text-xs leading-relaxed">
                                    Partnered daily with the frontend team inside an 80+ person
                                    org — specs and design QA on every ticket.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-line pt-5 flex gap-4">
                            <div className="text-ink-faint flex-shrink-0">
                                <Bug size={18} className="text-ink-faint" />
                            </div>
                            <div>
                                <h4 className="text-ink font-semibold text-sm mb-1">
                                    QA & Jira Process
                                </h4>
                                <p className="text-ink-muted text-xs leading-relaxed">
                                    Structured acceptance criteria, expected behavior, and edge
                                    cases for every ticket.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-ink border-l-4 border-accent-ink/40 pl-6 italic font-light text-base max-w-3xl">
                        &ldquo;The platform works, but nobody outside the team knows how to
                        use it confidently.&rdquo;
                        <span className="text-ink-faint not-italic block mt-2 text-sm">
                            — Internal Stakeholder Interview
                        </span>
                    </p>
                </div>
            </section>

            {/* ================= PHASE 1 ================= */}
            <section id="phase-1" className="scroll-mt-24 bg-surface py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-14">
                        <div className="text-[11px] text-ink-ghost uppercase tracking-[0.18em] whitespace-nowrap">
                            Phase 01
                        </div>
                        <div className="h-px bg-surface-3 flex-grow"></div>
                        <div className="text-[11px] text-ink-ghost uppercase tracking-[0.18em] whitespace-nowrap">
                            Redesign &amp; Design System
                        </div>
                    </div>

                    {/* Phase 01 Roadmap Timeline SVG */}
                    <div className="overflow-x-auto my-6">
                    <svg
                        className="w-full h-auto max-w-3xl min-w-[560px]"
                        viewBox="0 0 400 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter
                                id="p1GlowRed"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter
                                id="p1GlowLime"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Dashed connecting line */}
                        <line
                            x1="50"
                            y1="35"
                            x2="350"
                            y2="35"
                            stroke="#3b82f6"
                            strokeOpacity="0.2"
                            strokeWidth="1"
                            strokeDasharray="6 4"
                        />
                        {/* Node 1 — Broken (red) */}
                        <circle
                            cx="50"
                            cy="35"
                            r="10"
                            fill="#ef4444"
                            fillOpacity="0.15"
                            stroke="#ef4444"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                            filter="url(#p1GlowRed)"
                        />
                        <circle cx="50" cy="35" r="3" fill="#ef4444" fillOpacity="0.6" />
                        <text
                            x="50"
                            y="62"
                            textAnchor="middle"
                            fill="#101418"
                            fillOpacity="0.82"
                            fontFamily="monospace"
                            fontSize="7"
                        >
                            BROKEN
                        </text>
                        {/* Node 2 — Audit (blue) */}
                        <circle
                            cx="150"
                            cy="35"
                            r="10"
                            fill="#3b82f6"
                            fillOpacity="0.1"
                            stroke="#3b82f6"
                            strokeOpacity="0.4"
                            strokeWidth="1.5"
                        />
                        <circle cx="150" cy="35" r="3" fill="#3b82f6" fillOpacity="0.85" />
                        <text
                            x="150"
                            y="62"
                            textAnchor="middle"
                            fill="#101418"
                            fillOpacity="0.82"
                            fontFamily="monospace"
                            fontSize="7"
                        >
                            AUDIT
                        </text>
                        {/* Node 3 — Redesign (blue) */}
                        <circle
                            cx="250"
                            cy="35"
                            r="10"
                            fill="#3b82f6"
                            fillOpacity="0.1"
                            stroke="#3b82f6"
                            strokeOpacity="0.4"
                            strokeWidth="1.5"
                        />
                        <circle cx="250" cy="35" r="3" fill="#3b82f6" fillOpacity="0.85" />
                        <text
                            x="250"
                            y="62"
                            textAnchor="middle"
                            fill="#101418"
                            fillOpacity="0.82"
                            fontFamily="monospace"
                            fontSize="7"
                        >
                            REDESIGN
                        </text>
                        {/* Node 4 — Launch (lime) */}
                        <circle
                            cx="350"
                            cy="35"
                            r="10"
                            fill="#5E7000"
                            fillOpacity="0.15"
                            stroke="#5E7000"
                            strokeOpacity="0.5"
                            strokeWidth="1.5"
                            filter="url(#p1GlowLime)"
                        />
                        <circle cx="350" cy="35" r="3" fill="#5E7000" fillOpacity="0.6" />
                        <text
                            x="350"
                            y="62"
                            textAnchor="middle"
                            fill="#101418"
                            fillOpacity="0.82"
                            fontFamily="monospace"
                            fontSize="7"
                        >
                            SHIPPED
                        </text>
                        {/* Arrow tips between nodes */}
                        <polygon
                            points="95,35 88,31 88,39"
                            fill="#3b82f6"
                            fillOpacity="0.3"
                        />
                        <polygon
                            points="195,35 188,31 188,39"
                            fill="#3b82f6"
                            fillOpacity="0.3"
                        />
                        <polygon
                            points="295,35 288,31 288,39"
                            fill="#5E7000"
                            fillOpacity="0.3"
                        />
                    </svg>
                    </div>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-14">
                        <Badge>02 &mdash; The Call I Made</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            The team wanted features.{" "}
                            <span className="text-ink-muted">
                                I pushed to fix activation first.
                            </span>
                        </h2>

                        {/* RICE Prioritization Visual */}
                        <div className="overflow-x-auto my-6">
                        <svg
                            className="w-full h-auto max-w-3xl min-w-[560px]"
                            viewBox="0 0 400 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="riceWinGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#5E7000" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#5E7000" stopOpacity="0.05" />
                                </linearGradient>
                                <filter
                                    id="riceGlow"
                                    x="-50%"
                                    y="-50%"
                                    width="200%"
                                    height="200%"
                                >
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Baseline */}
                            <line
                                x1="40"
                                y1="72"
                                x2="360"
                                y2="72"
                                stroke="#101418"
                                strokeOpacity="0.08"
                                strokeWidth="1"
                            />
                            {/* R bar */}
                            <rect
                                x="60"
                                y="42"
                                width="40"
                                height="30"
                                rx="3"
                                fill="#3b82f6"
                                fillOpacity="0.12"
                                stroke="#3b82f6"
                                strokeOpacity="0.25"
                                strokeWidth="1"
                            />
                            <text
                                x="80"
                                y="82"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="8"
                            >
                                R
                            </text>
                            <text
                                x="80"
                                y="38"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="7"
                            >
                                HIGH
                            </text>
                            {/* I bar — tallest, the winner */}
                            <rect
                                x="140"
                                y="14"
                                width="40"
                                height="58"
                                rx="3"
                                fill="url(#riceWinGrad)"
                                stroke="#5E7000"
                                strokeOpacity="0.5"
                                strokeWidth="1.5"
                                filter="url(#riceGlow)"
                            />
                            <text
                                x="160"
                                y="82"
                                textAnchor="middle"
                                fill="#5E7000"
                                fillOpacity="1"
                                fontFamily="monospace"
                                fontSize="8"
                                fontWeight="bold"
                            >
                                I
                            </text>
                            <text
                                x="160"
                                y="10"
                                textAnchor="middle"
                                fill="#5E7000"
                                fillOpacity="1"
                                fontFamily="monospace"
                                fontSize="7"
                            >
                                ACTIVATION
                            </text>
                            {/* C bar */}
                            <rect
                                x="220"
                                y="36"
                                width="40"
                                height="36"
                                rx="3"
                                fill="#a855f7"
                                fillOpacity="0.1"
                                stroke="#a855f7"
                                strokeOpacity="0.25"
                                strokeWidth="1"
                            />
                            <text
                                x="240"
                                y="82"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="8"
                            >
                                C
                            </text>
                            <text
                                x="240"
                                y="32"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="7"
                            >
                                90%
                            </text>
                            {/* E bar */}
                            <rect
                                x="300"
                                y="48"
                                width="40"
                                height="24"
                                rx="3"
                                fill="#3b82f6"
                                fillOpacity="0.1"
                                stroke="#3b82f6"
                                strokeOpacity="0.2"
                                strokeWidth="1"
                            />
                            <text
                                x="320"
                                y="82"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="8"
                            >
                                E
                            </text>
                            <text
                                x="320"
                                y="44"
                                textAnchor="middle"
                                fill="#101418"
                                fillOpacity="0.82"
                                fontFamily="monospace"
                                fontSize="7"
                            >
                                2 SPRINTS
                            </text>
                        </svg>
                        </div>

                        {/* The headline above states the call; this is the working
                            behind it. Collapsed, because a recruiter scanning wants
                            to know I made the call — and whoever is interviewing me
                            wants to know how. Both are served without making the
                            first reader scroll past the second one's answer. */}
                        <Reveal summary="How I made the case to leadership">
                            <p className="text-ink-muted text-base leading-relaxed mb-5">
                                I scored the backlog using RICE — reach, impact, confidence,
                                effort — and the picture was clear: the largest win available
                                wasn&apos;t a new feature, it was the campaigns already being
                                started and never finished.
                            </p>
                            <p className="text-ink-muted text-base leading-relaxed">
                                The VP of Sales pushed back — &ldquo;we need feature X for the
                                Kroger deal.&rdquo; I walked leadership through what the interviews,
                                session recordings and funnel query actually showed: advertisers
                                stalling in draft, repeatedly, at the same step. That got the fix
                                prioritised ahead of the roadmap.
                            </p>
                        </Reveal>

                        {/* Discovery */}
                        <Reveal summary="What discovery actually found">
                            <p className="text-ink-muted text-base leading-relaxed">
                                Interviewed{" "}
                                <span className="mark text-ink font-medium">
                                    8 advertisers + 5 internal ops
                                </span>{" "}
                                over 2 weeks. Pulled 200+ session recordings from Hotjar. The
                                key insight: users weren&apos;t confused by complexity — they
                                had{" "}
                                <span className="text-ink font-medium">
                                    no confidence signals
                                </span>{" "}
                                at any step. That reframed the problem from &ldquo;simplify the
                                UI&rdquo; to &ldquo;add feedback at every decision point.&rdquo;
                            </p>
                        </Reveal>
                    </div>

                    {/* Audit Findings */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                        <Finding
                            value="Stalled drafts"
                            title="Campaigns started, never launched"
                            icon={<AlertTriangle size={18} />}
                        >
                            Advertisers dropped at the same step of the campaign builder
                            and left the draft sitting. Directly impacting time to value.
                        </Finding>
                        <Finding value="0" title="Actionable Insights" icon={<Eye size={18} />}>
                            Ad management was a legacy table. CTR down 40%? No guidance on
                            what to do. Retention killer.
                        </Finding>
                        <Finding value="12" title="Teams, Zero Consistency" icon={<Split size={18} />}>
                            Every team built UI independently. Engineering velocity bled out
                            on rework.
                        </Finding>
                    </div>

                    {/* ——— DECISION 1: THE DESIGN SYSTEM ——— */}
                    <div className="mb-16">
                        <Badge>03 &mdash; What I Designed</Badge>
                        <SubLabel>Decision 1 &middot; Design System</SubLabel>
                        <h3 className="font-ui text-3xl font-medium text-ink mb-4">
                            The UI looked like a wireframe.{" "}
                            <span className="text-ink-muted">So I built the system underneath it.</span>
                        </h3>
                        <Reveal summary="Why a system, not a screen-by-screen redesign" className="max-w-3xl mb-10">
                            <p className="text-ink-muted text-base leading-relaxed">
                                The platform had no visual consistency &mdash; spacing, colour and components drifted
                                screen to screen, and much of it still read like a mid-fi wireframe. Redesigning screens
                                one at a time wouldn&apos;t hold, because every team was building UI independently and
                                re-solving the same problems. So the first call wasn&apos;t a screen, it was the layer
                                underneath: a governed component library with design tokens, documented states, an 8pt
                                grid and WCAG 2.1 AA baked in &mdash; with design-to-code parity in Storybook, so every
                                new screen inherited consistency by default.
                            </p>
                        </Reveal>
                        <img
                            loading="lazy"
                            decoding="async"
                            src={DSL}
                            alt="Carter Design System — tokens, components and documented states"
                            className="rounded-sm w-full border border-line mb-10"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard
                                value="1 library"
                                label="Tokens, components, and documented states adopted across the platform."
                                icon={<Layers size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="+30%"
                                label="Faster shipping velocity once engineering built from shared components."
                                icon={<Zap size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="Storybook"
                                label="Design-to-code parity — the same component in Figma and in production."
                                icon={<CheckCircle2 size={18} className="text-ink" />}
                            />
                        </div>
                    </div>

                    {/* ——— DECISION 2: CAMPAIGN CREATION ——— */}
                    <div className="mb-16">
                        <Badge>Product Decision 2 — Activation Funnel Fix</Badge>
                        <h3 className="font-ui text-3xl font-medium text-ink mb-4">
                            From a form dump to a guided 5-stage flow
                        </h3>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-10">
                            Wrote the PRD, mapped every drop-off from session recordings.
                            Applied Hick&apos;s Law — reduced choices from 12 to 3 per step.
                            Each stage gave live validation and AI-powered budget
                            recommendations.
                        </p>
                        <img
                            loading="lazy"
                            decoding="async"
                            src={CampaignCreationImg}
                            alt="Campaign Creation Redesign"
                            className="rounded-sm w-full border border-line mb-10"
                        />

                        {/* Product Calls — detail behind the headline above. */}
                        <Reveal summary="The four product calls inside the flow" className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="border-t border-line pt-5 flex gap-4">
                                <div className="text-ink-faint flex-shrink-0">
                                    <Layers size={18} className="text-ink-faint" />
                                </div>
                                <div>
                                    <h4 className="text-ink font-semibold text-sm mb-1">
                                        Persistent Progress State
                                    </h4>
                                    <p className="text-ink-muted text-xs leading-relaxed">
                                        Scoped in PRD. Users jump between steps without data loss.
                                        TTV dropped immediately.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-line pt-5 flex gap-4">
                                <div className="text-ink-faint flex-shrink-0">
                                    <CheckCircle2 size={18} className="text-ink" />
                                </div>
                                <div>
                                    <h4 className="text-ink font-semibold text-sm mb-1">
                                        Inline Validation
                                    </h4>
                                    <p className="text-ink-muted text-xs leading-relaxed">
                                        Eliminated the #1 support ticket. Errors per field, not a
                                        post-submission wall.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-line pt-5 flex gap-4">
                                <div className="text-ink-faint flex-shrink-0">
                                    <Cpu size={18} className="text-ink-faint" />
                                </div>
                                <div>
                                    <h4 className="text-ink font-semibold text-sm mb-1">
                                        AI Budget Nudges
                                    </h4>
                                    <p className="text-ink-muted text-xs leading-relaxed">
                                        Historical spend recommendations embedded in the flow.
                                        Contextual guidance, not a modal.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-line pt-5 flex gap-4">
                                <div className="text-ink-faint flex-shrink-0">
                                    <BarChart2 size={18} className="text-ink-faint" />
                                </div>
                                <div>
                                    <h4 className="text-ink font-semibold text-sm mb-1">
                                        Pre-Launch Forecast
                                    </h4>
                                    <p className="text-ink-muted text-xs leading-relaxed">
                                        Projected impressions, clicks, ROI. Gave advertisers
                                        conviction. Launch rate +20pts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        </Reveal>

                        <Reveal summary="Before and after, metric by metric">
                        <div className="pt-2">
                            <div className="flex items-center justify-between pb-3 border-b border-line mb-1">
                                <span className="text-ink-faint text-xs uppercase tracking-widest w-2/5">
                                    Metric
                                </span>
                                <span className="text-ink-faint text-xs uppercase tracking-widest w-1/5 text-center">
                                    Before
                                </span>
                                <span className="text-ink-faint text-xs uppercase tracking-widest w-1/5 text-center">
                                    After
                                </span>
                                <span className="text-ink-faint text-xs uppercase tracking-widest w-1/5 text-right">
                                    Delta
                                </span>
                            </div>
                            <MetricRow
                                label="Review Time / Item"
                                before="6.4 min"
                                after="3.1 min"
                                delta="-52%"
                            />
                            <MetricRow
                                label="Creative Swap Rate"
                                before="14%"
                                after="47%"
                                delta="+33pts"
                            />
                            <MetricRow
                                label="Avg. Setup Time"
                                before="7.1 min"
                                after="4.1 min"
                                delta="-42%"
                            />
                            <MetricRow
                                label="Campaign Launch Rate"
                                before="61%"
                                after="81%"
                                delta="+20pts"
                            />
                        </div>
                        </Reveal>

                        {/* What didn't work */}
                        <div className="mt-8 border-l-2 border-line-strong pl-5 max-w-3xl">
                            <p className="text-ink-ghost text-[11px] uppercase tracking-[0.18em] mb-2">
                                What didn&apos;t work first
                            </p>
                            <p className="text-ink-muted text-sm leading-relaxed">
                                First version of AI budget nudges auto-filled spend amounts.
                                Advertisers didn&apos;t trust automated inputs on day one and
                                largely left them alone. Reworked it into{" "}
                                <span className="text-ink font-medium">
                                    suggestions sitting beside manual controls
                                </span>
                                &nbsp;— the model proposes, the advertiser still decides.
                            </p>
                        </div>
                    </div>

                    {/* ——— DECISION 3: AD ITEM MANAGEMENT ——— */}
                    <div className="mb-16">
                        <Badge>Product Decision 3 — Retention Feature</Badge>
                        <h3 className="font-ui text-3xl font-medium text-ink mb-4">
                            From a reporting table{" "}
                            <span className="text-ink-muted font-light">
                                to an optimization engine.
                            </span>
                        </h3>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-10">
                            Card-based layout with pacing charts, proactive alerts, and
                            one-click actions. Product bet: move from passive reporting to
                            active guidance.
                        </p>

                        <div className="mb-10">
                            <BeforeAfterSlider
                                beforeSrc={Oldaditem}
                                afterSrc={Aditem}
                                beforeAlt="Old Ad Item Interface"
                                afterAlt="New Ad Item Interface"
                            />
                        </div>
                    </div>

                    {/* Phase 1 Outcomes */}
                    <div className="border-t border-line pt-10">
                        <Badge>Phase 1 — Business Outcomes</Badge>
                        {/* Stated as a chain rather than a scoreboard — each number is the
                            cause of the next one, which is the actual argument. */}
                        <p className="text-ink-muted text-sm leading-relaxed mb-10 max-w-2xl">
                            These are one chain, not separate results. Rebuilding the dense form as a short
                            guided flow cut <span className="mark text-ink font-medium">draft abandonment 8%</span>,
                            so more of the campaigns advertisers started actually reached launch. The agentic
                            assistant then took the launch itself from{" "}
                            <span className="mark text-ink font-medium">1.5 hours to 30 minutes</span>. In parallel,
                            the component library made engineering{" "}
                            <span className="mark text-ink font-medium">30% faster</span>, which is what let a
                            two-designer team keep pace with 12 DSP integrations.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatCard
                                value="4.6/5"
                                label="Usability score, task-based sessions."
                                icon={<TrendingUp size={18} className="text-ink" />}
                            />
                            <StatCard
                                value="30%"
                                label="Faster shipping velocity from component infrastructure."
                                icon={<Zap size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="&darr; 8%"
                                label="Draft abandonment after the guided-flow rebuild."
                                icon={<Target size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="3&times;"
                                label="Faster campaign launch — 1.5 hours down to 30 minutes."
                                icon={<Clock size={18} className="text-ink-faint" />}
                            />
                        </div>
                        <p className="text-ink-ghost text-xs mt-6">
                            Figures are internal metrics measured post-launch over the phase window.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= PHASE 2 ================= */}
            <section id="phase-2" className="scroll-mt-24 bg-cream py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Phase Divider */}
                    <div className="flex items-center gap-6 mb-14">
                        <div className="text-[11px] text-ink-ghost uppercase tracking-[0.18em] whitespace-nowrap">
                            Phase 02
                        </div>
                        <div className="h-px bg-surface-3 flex-grow"></div>
                        <div className="text-[11px] text-ink-ghost uppercase tracking-[0.18em] whitespace-nowrap">
                            Features &amp; Flow Optimization
                        </div>
                    </div>

                    {/* Phase 02 Concept Vector — fragmented networks → unified DSP */}
                    <div className="overflow-x-auto my-6">
                    <svg
                        className="w-full h-auto max-w-3xl min-w-[560px]"
                        viewBox="0 0 400 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="dsp-hub-grad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#5E7000" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#5E7000" stopOpacity="0.1" />
                            </linearGradient>
                            <filter id="dsp-glow">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* 4 fragmented networks on the left */}
                        {[0, 1, 2, 3].map((i) => (
                            <rect
                                key={i}
                                x={10 + i * 2}
                                y={12 + i * 14}
                                width={28}
                                height={10}
                                rx="2"
                                stroke="#ef4444"
                                strokeOpacity="0.3"
                                strokeWidth="0.8"
                                fill="#ef4444"
                                fillOpacity="0.05"
                            />
                        ))}
                        <text
                            x="24"
                            y="78"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="7"
                            fill="#101418"
                            fillOpacity="0.82"
                        >
                            4 NETWORKS
                        </text>
                        {/* Converging lines */}
                        {[0, 1, 2, 3].map((i) => (
                            <line
                                key={i}
                                x1="40"
                                y1={17 + i * 14}
                                x2="160"
                                y2="40"
                                stroke="#5E7000"
                                strokeOpacity="0.15"
                                strokeWidth="0.6"
                                strokeDasharray="4 3"
                            />
                        ))}
                        {/* Central DSP hub */}
                        <circle
                            cx="160"
                            cy="40"
                            r="18"
                            fill="#5E7000"
                            fillOpacity="0.06"
                            stroke="#5E7000"
                            strokeOpacity="0.4"
                            strokeWidth="1.5"
                            filter="url(#dsp-glow)"
                        />
                        <circle cx="160" cy="40" r="6" fill="#5E7000" fillOpacity="0.65" />
                        <text
                            x="160"
                            y="76"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="7"
                            fill="#5E7000"
                            fillOpacity="1"
                        >
                            DSP
                        </text>
                        {/* Arrow right */}
                        <line
                            x1="182"
                            y1="40"
                            x2="230"
                            y2="40"
                            stroke="#5E7000"
                            strokeOpacity="0.3"
                            strokeWidth="0.8"
                        />
                        <polygon
                            points="230,37 238,40 230,43"
                            fill="#5E7000"
                            fillOpacity="0.3"
                        />
                        {/* Unified view */}
                        <rect
                            x="242"
                            y="18"
                            width="110"
                            height="44"
                            rx="4"
                            fill="url(#dsp-hub-grad)"
                            stroke="#5E7000"
                            strokeOpacity="0.2"
                            strokeWidth="0.8"
                        />
                        {[0, 1, 2].map((i) => (
                            <rect
                                key={i}
                                x={250}
                                y={25 + i * 12}
                                width={94}
                                height={7}
                                rx="1"
                                fill="#5E7000"
                                fillOpacity={0.06 + i * 0.01}
                            />
                        ))}
                        <text
                            x="296"
                            y="76"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="7"
                            fill="#5E7000"
                            fillOpacity="1"
                        >
                            UNIFIED VIEW
                        </text>
                        {/* 4x LTV label */}
                        <text
                            x="370"
                            y="36"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="9"
                            fill="#5E7000"
                            fillOpacity="1"
                            filter="url(#dsp-glow)"
                        >
                            4x
                        </text>
                        <text
                            x="370"
                            y="47"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="6"
                            fill="#101418"
                            fillOpacity="0.82"
                        >
                            LTV
                        </text>
                    </svg>
                    </div>

                    {/* Strategic Bet */}
                    <div className="max-w-3xl mb-14">
                        <Badge>05 &mdash; Scaling The Bet</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            Phase 1 earned trust.{" "}
                            <span className="text-ink-muted">
                                I used it to expand the platform.
                            </span>
                        </h2>
                        <Reveal summary="How the mandate expanded">
                            <p className="text-ink-muted text-base leading-relaxed mb-5">
                                After the redesign shipped, enterprise clients started asking for
                                cross-network campaign management. I ran competitive analysis — no
                                unified DSP existed for retail media at this scale.
                            </p>
                            <p className="text-ink-muted text-base leading-relaxed">
                                Built the case for leadership: where the gap was, what it would
                                take to close it, and a phased roadmap to get there. The argument
                                that landed was simple — advertisers already running on several
                                networks were the ones asking, and they were the accounts worth
                                keeping.
                            </p>
                        </Reveal>
                    </div>

                    {/* Context */}
                    <div className="max-w-3xl mb-14">
                        <Badge>Phase 2 — Cross-Network Features</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-6">
                            One platform.{" "}
                            <span className="text-ink-muted">Every retail ad network.</span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            Carter&apos;s cross-network command center — plan, launch, and measure
                            campaigns across every retail media network in one place. I owned the
                            design of these features end-to-end — research, IA, interaction design,
                            and design QA alongside the frontend team.
                        </p>
                        <p className="text-ink border-l-4 border-accent-ink/40 pl-6 italic font-light text-base">
                            &ldquo;I spend 4 hours every Monday just pulling reports. I still
                            don&apos;t know which channel is working.&rdquo;
                            <span className="text-ink-faint not-italic block mt-2 text-sm">
                                — Enterprise Advertiser, User Research
                            </span>
                        </p>
                    </div>

                    {/* Answers the quote directly above it: which channel is working. */}
                    <Shot
                        label="Cross-Network Performance"
                        src={campaigndetail}
                        alt="Carter DSP — campaign performance across channels, with keyword, geo and device breakdowns and an optimisation panel"
                        caption="The answer to the quote above. Revenue and delivery per channel in one place, with the keyword, geo, language and device breakdowns underneath — and an optimisation panel that proposes changes but leaves the advertiser to accept or reject each one."
                    />

                    {/* Market Gap + North Stars — the research that justified
                        Phase 2. Supporting evidence, not the headline. */}
                    <Reveal summary="The market gap, and the north stars I set against it" className="mb-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="border-t border-line pt-6">
                            <Badge>The Market Gap</Badge>
                            <div className="space-y-4 mt-2">
                                {[
                                    {
                                        icon: <BarChart2 size={16} className="text-ink-faint" />,
                                        text: "No unified performance view across networks",
                                    },
                                    {
                                        icon: <Layout size={16} className="text-ink-faint" />,
                                        text: "Creative uploaded per-network — massive duplication",
                                    },
                                    {
                                        icon: <AlertTriangle size={16} className="text-ink-faint" />,
                                        text: "Budget splits done manually. Overspend on saturated segments",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="text-ink-faint flex-shrink-0 mt-0.5">
                                            {item.icon}
                                        </div>
                                        <p className="text-ink-muted text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-line pt-6">
                            <Badge>North Star Metrics</Badge>
                            <div className="space-y-4 mt-2">
                                {[
                                    {
                                        icon: <Zap size={16} className="text-ink-faint" />,
                                        text: "A cross-network launch should cost one campaign's time",
                                    },
                                    {
                                        icon: <CheckCircle2 size={16} className="text-ink-faint" />,
                                        text: "Creative compliance through per-network spec validation",
                                    },
                                    {
                                        icon: <Target size={16} className="text-ink-faint" />,
                                        text: "Single KPI standard — one source of truth",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="text-ink-faint flex-shrink-0 mt-0.5">
                                            {item.icon}
                                        </div>
                                        <p className="text-ink-muted text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    </Reveal>

                    {/* Answers the north star directly above: a cross-network launch
                        should cost one campaign's time. */}
                    <Shot
                        label="Multi-DSP Campaign Launcher"
                        src={CampaignDSP}
                        alt="Carter DSP — the single campaign creation flow: objective, creative, budget and pacing, targeting, placements, ad detail"
                        caption="One form for every network. Objective, creative, budget and pacing, targeting, placements — each step asks once and fans the answer out to each network's own spec, instead of repeating the entire setup per platform."
                    />

                    {/* Answers the "budget splits done manually" gap listed above. */}
                    <Shot
                        label="Media Plan &amp; Budget Distribution"
                        src={mediaplan}
                        alt="Carter DSP — media plan summary with per-network ad item breakdown, and a bulk budget distribution modal"
                        caption="Where the budget split stops being manual. The plan summarises every ad item per network, and bulk distribution allocates a total across platforms with the split visible — so a reallocation is a decision someone can see and argue with, not a spreadsheet edit nobody notices."
                    />

                    {/* What I Said No To */}
                    <div className="border-t border-line pt-6 max-w-4xl mb-14 flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="text-ink-faint flex-shrink-0">
                            <Scissors size={20} className="text-ink-faint" />
                        </div>
                        <div>
                            <h4 className="text-ink font-semibold mb-3">
                                What I Said No To
                            </h4>
                            <p className="text-ink-muted text-sm leading-relaxed">
                                A long module wishlist, scoped down to what shipped. Cut{" "}
                                <span className="text-ink font-medium">
                                    real-time bidding
                                </span>{" "}
                                (no data yet),
                                <span className="text-ink font-medium">
                                    {" "}
                                    custom attribution
                                </span>{" "}
                                (3-month build, unclear ROI), and{" "}
                                <span className="text-ink font-medium">
                                    white-label theming
                                </span>{" "}
                                (sales request, not user need). Every cut documented in the PRD
                                with trigger conditions for revisiting.
                            </p>
                        </div>
                    </div>

                    {/* ——— AGENTIC AI CAMPAIGN ASSISTANT ——— */}
                    {/* Anchored and listed in the contents: this is the strongest
                        story on the page and it sits eleven screens down. A jump
                        link surfaces it without reordering the narrative. */}
                    <div id="ai-assistant" className="scroll-mt-24 mb-14">
                        <Badge>Product Decision &mdash; Agentic AI Campaign Assistant</Badge>
                        <h3 className="font-ui text-3xl font-medium text-ink mb-4">
                            Campaign creation:{" "}
                            <span className="text-ink-muted font-light">
                                1.5 hours &rarr; 30 minutes.
                            </span>
                        </h3>
                        <p className="text-ink-muted text-base leading-relaxed max-w-3xl mb-8">
                            Even with the guided flow, building a campaign still meant
                            manually translating a media brief into targeting, budgets, flight
                            dates, and creative slots. I designed and shipped an
                            <span className="text-ink font-medium">
                                {" "}
                                agentic assistant on the Claude API
                            </span>
                            : the advertiser provides the brief, the assistant drafts the full
                            campaign structure step by step, and the user reviews and edits
                            each section before anything goes live &mdash; human-in-the-loop
                            by design, because advertisers had already shown us they
                            don&apos;t trust silent automation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard
                                value="3&times;"
                                label="Operational efficiency — campaign launch time cut from 1.5 hours to 30 minutes."
                                icon={<Zap size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="Draft, don't decide"
                                label="The assistant proposes; the advertiser approves. Every AI output editable before launch."
                                icon={<Cpu size={18} className="text-ink-faint" />}
                            />
                            <StatCard
                                value="Spec-checked"
                                label="Drafts validated against each network's specs before submission — errors caught pre-launch, not post."
                                icon={<CheckCircle2 size={18} className="text-ink" />}
                            />
                        </div>

                        {/* The assistant, screen by screen */}
                        <div className="mt-10">
                            <p className="text-[11px] text-ink-faint uppercase tracking-[0.18em] mb-4">
                                The flow, screen by screen
                            </p>
                            <CarterAiSlider />
                        </div>
                    </div>

                    {/* Video Walkthrough */}
                    <div className="border-t border-line pt-10 mb-14">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <video
                                controls
                                autoPlay
                                loop
                                muted
                                className="w-full md:w-1/2 rounded-sm border border-line"
                            >
                                <source src={v1} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2">
                                <Badge>Product Architecture</Badge>
                                <h3 className="font-ui text-2xl font-medium text-ink mb-6">
                                    Four bets that defined the DSP
                                </h3>
                                <div className="space-y-5">
                                    {[
                                        {
                                            icon: <Layers size={16} className="text-ink-faint" />,
                                            title: "Unified Orchestration",
                                            desc: "One campaign pushed to all RMNs with auto-reformatting.",
                                        },
                                        {
                                            icon: <Users size={16} className="text-ink-faint" />,
                                            title: "Shared Targeting",
                                            desc: "Audience overlap detection across networks. First-of-its-kind.",
                                        },
                                        {
                                            icon: <Layout size={16} className="text-ink-faint" />,
                                            title: "Dynamic Creative",
                                            desc: "One master asset → compliant variants for every network.",
                                        },
                                        {
                                            icon: <TrendingUp size={16} className="text-ink" />,
                                            title: "Smart Budgeting",
                                            desc: "Real-time spend allocation based on performance signals.",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="text-ink-faint flex-shrink-0 mt-0.5">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-ink text-sm font-medium">
                                                    {item.title}
                                                </p>
                                                <p className="text-ink-muted text-xs">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 Impact */}
                    <div className="border-t border-line pt-10">
                        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                            <video
                                controls
                                autoPlay
                                loop
                                muted
                                className="w-full md:w-1/2 rounded-sm border border-line"
                            >
                                <source src={v3} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2">
                                <Badge>Phase 2 — Impact at Launch</Badge>
                                {/* Why the setup-time number matters, not just what it was. */}
                                <p className="text-ink-muted text-sm leading-relaxed mb-8">
                                    Setup time was the constraint that actually mattered: running a campaign
                                    across every network meant repeating the same work per network, so advertisers
                                    ran fewer, larger, blunter campaigns than they wanted to. Unifying{" "}
                                    <span className="mark text-ink font-medium">12 workflows into one form</span>,
                                    with one master creative auto-adapted per network, means a cross-network
                                    launch now takes one campaign&apos;s time. Validated through task-based
                                    sessions with alpha clients.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        {
                                            value: "12 → 1",
                                            label: "Workflows Unified",
                                            desc: "One form for every network integration",
                                        },
                                        {
                                            value: "1 creative",
                                            label: "Auto-Adapted",
                                            desc: "One master, reshaped to each network's specs",
                                        },
                                        {
                                            value: "4.6/5",
                                            label: "Usability Score",
                                            desc: "Task-based sessions with alpha clients",
                                        },
                                        {
                                            value: "3&times;",
                                            label: "Faster Launch",
                                            desc: "1.5 hours → 30 minutes with the AI assistant",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="border-b border-line-soft pb-5 last:border-0 last:pb-0"
                                        >
                                            <div className="flex items-baseline gap-3 mb-1">
                                                <span className="font-ui text-xl font-medium text-ink">
                                                    {item.value}
                                                </span>
                                                <span className="text-ink text-sm font-medium">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <p className="text-ink-muted text-xs">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= CLOSING ================= */}
            <section id="reflection" className="scroll-mt-24 bg-surface py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <Badge>09 &mdash; What I&apos;d Do Differently</Badge>
                        <h2 className="font-display text-4xl md:text-5xl font-normal text-ink leading-tight mb-8">
                            The hardest call wasn&apos;t a screen.{" "}
                            <span className="text-ink-muted">
                                It was asking the team to stop building.
                            </span>
                        </h2>
                        <p className="text-ink-muted text-base leading-relaxed mb-5">
                            The roadmap was full of new features. The research said the product was
                            losing people before they ever reached one. Arguing for two sprints to fix
                            activation instead &mdash; on a team that wanted to ship &mdash; was the decision
                            everything else rested on, and it moved campaign launch rate by twenty
                            percentage points.
                        </p>
                        <p className="text-ink-muted text-base leading-relaxed">
                            After that the work was ordinary in the best sense: interviews and session
                            recordings, a design system so teams stopped re-solving the same problems,
                            specs and QA with the frontend group, and every screen in Phase 2 owned end to end.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT CASE STUDY ================= */}
            <NextCase to="/atlas" title="Atlas: CMS architecture across a 130-clinic network" />
            </main>
            <Footer />
        </div>
    );
};
export default CarterEcosystem;
