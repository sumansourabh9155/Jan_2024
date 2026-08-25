import {
    AlertTriangle,
    ArrowRight,
    Ban,
    Calculator,
    CalendarDays,
    Clock,
    ExternalLink,
    FileText,
    Gauge,
    Landmark,
    MessageSquare,
    PenTool,
    PlayCircle,
    Route,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Target,
    Users
} from "lucide-react";

// Every image here earns its place next to a specific argument. No carousels.
import Cover from "../../../assets/poppins/cover.png";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import SEO from "../../SEO";
import ShotBankAsk from "../../../assets/poppins/04-onboarding/3-The-bank-ask.png";
import ShotBoard1 from "../../../assets/poppins/01-discovery/1-Screen-skeletons-and-goal-structure.png";
import ShotBoard2 from "../../../assets/poppins/01-discovery/2-Working-the-chat-to-goal-path.png";
import ShotBoard3 from "../../../assets/poppins/01-discovery/3-Mapping-the-question-flow.png";
import ShotBoard4 from "../../../assets/poppins/01-discovery/4-Deciding-the-first-screen.png";
import ShotBoard5 from "../../../assets/poppins/01-discovery/5-Plan-and-projection-logic.png";
import ShotBoard6 from "../../../assets/poppins/01-discovery/6-Vault-and-document-thinking.png";
import ShotBoard7 from "../../../assets/poppins/01-discovery/7-Categories-dates-and-sorting.png";
import ShotBoard8 from "../../../assets/poppins/01-discovery/8-Multiple-people-one-shared-goal.png";
import ShotCalendar from "../../../assets/poppins/05-core-screens/14-Financial-calendar.png";
import ShotChatOpening from "../../../assets/poppins/04-onboarding/2-Chat-onboarding-mid-flow.png";
import ShotChatToGoal from "../../../assets/poppins/02-flows/2-Chat-to-goal-context-mapping.png";
import ShotEmpty from "../../../assets/poppins/06-states/1-Not-enough-data-yet.png";
import ShotFork from "../../../assets/poppins/02-flows/3-Onboarding-fork-three-paths.png";
import ShotGoal from "../../../assets/poppins/05-core-screens/12-Committing-to-a-goal.png";
import ShotLoop from "../../../assets/poppins/02-flows/1-Core-value-loop-chat-to-calendar.png";
import ShotOnboardingVersions from "../../../assets/poppins/04-onboarding/1-Onboarding-v1-and-v2.png";
import ShotPlan from "../../../assets/poppins/05-core-screens/11-Planning-a-trip.png";
import ShotSafeToSpend from "../../../assets/poppins/05-core-screens/02-Safe-to-spend-explained.png";
import ShotSite from "../../../assets/poppins/07-website/1-Landing-page.png";
import ShotSpotter from "../../../assets/poppins/05-core-screens/09-Ask-Poppins.png";
import ShotWaBill from "../../../assets/poppins/03-whatsapp/2-Bill-alert.png";
import ShotWaSunday from "../../../assets/poppins/03-whatsapp/1-Sunday-summary.png";

// Figma blocks third-party framing on these (x-frame-options: SAMEORIGIN),
// so these open in a new tab rather than embedding.
const PROTOTYPES = [
    {
        name: "The app, end to end",
        desc: "The full interactive build — onboarding through to the dashboard.",
        href: "https://www.figma.com/make/SCI1FkbkEiqi1nTd9BtnmL/Prototype-it?fullscreen=1",
    },
    {
        name: "The Plan tab",
        desc: "Scenario modelling: describe something, see it costed against everything else.",
        href: "https://www.figma.com/make/2n5kc1YjJr3qve9UwhEKDF/Plan-Tab-Prototype-Design?fullscreen=1",
    },
    {
        name: "Insight storytelling",
        desc: "How a single observation is framed so it reads as help rather than judgement.",
        href: "https://www.figma.com/make/evE9K4xepHaq43WePO1wwt/Enhance-Storytelling-for-Insights?fullscreen=1",
    },
];

// ================= SHARED BITS =================

const Badge = ({ children }) => (
    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d6f928] tracking-widest uppercase mb-6 bg-[#d6f928]/5 px-3 py-1 rounded border border-[#d6f928]/20">
        {children}
    </div>
);

const IconCard = ({ icon, title, children }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{children}</p>
        </div>
    </div>
);

const Decision = ({ n, icon, tone, title, children }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
            <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${tone}`}>{icon}</div>
            <div className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                Decision {String(n).padStart(2, "0")}
            </div>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 max-w-3xl leading-snug">{title}</h3>
        {children}
    </div>
);

// Prose and the screen it describes, side by side — a phone screenshot is tall and
// narrow, so stacking it wastes an enormous amount of vertical space.
const SplitFigure = ({ src, alt, caption, children }) => (
    // Constrained to the same measure as the surrounding prose (max-w-3xl) so the
    // pair reads as one block in the text column, rather than a screen adrift at
    // the far right of a much wider container.
    <div className="max-w-3xl my-10">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_216px] gap-6 sm:gap-9 items-center">
            <div className="min-w-0">{children}</div>
            <figure className="mx-auto sm:mx-0 w-[216px]">
                {/* The phone is seated on a panel so it sits on something. */}
                <div className="rounded-[22px] bg-white/[0.04] border border-white/10 p-2.5">
                    <img
                        loading="lazy"
                        decoding="async"
                        src={src}
                        alt={alt}
                        className="rounded-[14px] w-full block"
                    />
                </div>
                {caption && (
                    <figcaption className="text-gray-500 text-[11px] mt-3 leading-relaxed">{caption}</figcaption>
                )}
            </figure>
        </div>
    </div>
);

// A very tall artefact — shown at a fixed height and scrolled in place, so one
// long page doesn't add five thousand pixels to this one.
const ScrollFrame = ({ src, alt, caption, url, height = "h-[560px]" }) => (
    <figure className="my-10">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e1e1e]">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] border-b border-white/10">
                <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex items-center gap-2 bg-[#3a3a3a] rounded-md px-3 py-1.5 mx-4 min-w-0">
                    <span className="text-gray-400 text-xs font-mono truncate">{url}</span>
                </div>
            </div>
            <div className={`${height} overflow-y-auto overflow-x-hidden bg-white`}>
                <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full block" />
            </div>
        </div>
        {caption && (
            <figcaption className="text-gray-500 text-xs mt-3 max-w-2xl leading-relaxed">
                {caption} <span className="text-gray-600">Scroll inside the window to see the full page.</span>
            </figcaption>
        )}
    </figure>
);

// A wide artefact — a diagram, a board, a full page.
const FigureWide = ({ src, alt, caption }) => (
    <figure className="my-10">
        <img
            loading="lazy"
            decoding="async"
            src={src}
            alt={alt}
            className="rounded-2xl w-full border border-white/10 bg-[#0d0d0f]"
        />
        {caption && (
            <figcaption className="text-gray-500 text-xs mt-3 max-w-2xl leading-relaxed">{caption}</figcaption>
        )}
    </figure>
);

// A small set shown together, because the comparison is the point.
const FigureRow = ({ items, caption, cols = "sm:grid-cols-3", width = "", phone = false }) => (
    <figure className={`my-10 ${width}`}>
        <div className={`grid grid-cols-1 ${cols} gap-4`}>
            {items.map((it) => (
                <div key={it.alt}>
                    {phone ? (
                        <div className="rounded-[20px] bg-white/[0.04] border border-white/10 p-2">
                            <img loading="lazy" decoding="async" src={it.src} alt={it.alt} className="rounded-[13px] w-full block" />
                        </div>
                    ) : (
                        <img loading="lazy" decoding="async" src={it.src} alt={it.alt} className="rounded-xl w-full border border-white/10 bg-[#0d0d0f]" />
                    )}
                    {it.label && (
                        <p className="text-[11px] font-mono uppercase tracking-widest text-gray-600 mt-2.5 text-center">{it.label}</p>
                    )}
                </div>
            ))}
        </div>
        {caption && (
            <figcaption className="text-gray-500 text-xs mt-4 max-w-2xl leading-relaxed">{caption}</figcaption>
        )}
    </figure>
);

// Verbatim product copy — the voice system made visible.
const Voice = ({ who, children }) => (
    <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-5">
        <p className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${who === "spotter" ? "text-emerald-300" : "text-gray-500"}`}>
            {who === "spotter" ? "The Spotter" : "The Steady Hand"}
        </p>
        <p className="text-gray-200 text-sm leading-relaxed italic">{children}</p>
    </div>
);

// One of the four people the onboarding was written against.
const Persona = ({ name, meta, types, feels, converts }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-gray-500 text-xs mb-4">{meta}</p>
        <dl className="space-y-3">
            <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1">Types</dt>
                <dd className="text-gray-300 text-xs leading-relaxed italic">&ldquo;{types}&rdquo;</dd>
            </div>
            <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1">Arrives feeling</dt>
                <dd className="text-gray-400 text-xs leading-relaxed">{feels}</dd>
            </div>
            <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-emerald-300/70 mb-1">What converts them</dt>
                <dd className="text-gray-300 text-xs leading-relaxed">{converts}</dd>
            </div>
        </dl>
    </div>
);

const Rule = ({ children }) => (
    <li className="flex gap-3 text-gray-400 text-sm leading-relaxed">
        <Ban size={15} className="text-red-400/70 shrink-0 mt-0.5" />
        <span>{children}</span>
    </li>
);

const Poppins = () => {
    return (
        <div className="text-white bg-[#050505]">
            <SEO
                title="Poppins: A Conversational Finance App — Product Design Case Study"
                description="Designing Poppins, an iOS conversational finance assistant: market and competitor research, four user archetypes, a permission ladder where every ask is earned, five intent-matched bank asks, and mobile micro-interaction craft — plus the decision to stop."
                keywords="product design case study, iOS app design, conversational UI, fintech UX, user research, personas, user stories, mobile interaction design, onboarding design, voice and tone, design process"
                canonicalUrl="https://www.sumansourabh.com/Projects/poppins"
            />
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="bg-[#050505] pt-32 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <Badge>[ iOS &middot; Consumer Fintech &middot; Conversational UI ]</Badge>

                        <div className="flex justify-center mb-6">
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 border border-white/15 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                Concluded &mdash; not shipped
                            </span>
                        </div>

                        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
                            Poppins
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                            A conversational finance app built on one idea: replace the dashboard with
                            <span className="text-white font-medium"> a single number you can trust</span>, and earn
                            every permission before asking for it. Three months of research-led design &mdash;
                            whiteboard to high fidelity &mdash; and a deliberate decision not to build it.
                        </p>
                    </div>

                    <figure className="max-w-md mx-auto">
                        <div className="rounded-[26px] bg-white/[0.04] border border-white/10 p-3 w-[260px] mx-auto">
                            <img
                                src={Cover}
                                alt="Poppins home screen showing a Safe to Spend figure of $320, the week's bills, and an observation from The Steady Hand about grocery spending"
                                className="rounded-2xl w-full object-cover border border-white/10"
                            />
                        </div>
                        <figcaption className="text-gray-500 text-xs mt-4 leading-relaxed text-center">
                            The entire thesis in one screen: no dashboard, one number, the week&apos;s commitments
                            beneath it, and a single calm observation &mdash; labelled, so you know which voice is speaking.
                        </figcaption>
                    </figure>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">My Role</p>
                            <p className="text-white font-medium">Product Designer</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Platform</p>
                            <p className="text-white font-medium">iOS + Marketing Site</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Duration</p>
                            <p className="text-white font-medium">~3 Months</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Outcome</p>
                            <p className="text-white font-medium">Stopped at v1 scope</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {["Figma", "FigJam", "Whiteboarding", "iOS / HIG", "Conversation Design", "Competitive Research", "Plaid", "Flowcharting"].map((t) => (
                            <span key={t} className="text-xs px-3 py-1 bg-white/5 text-gray-500 border border-white/10 rounded-full">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROTOTYPES ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
                        <div className="max-w-2xl">
                            <Badge>[ Try It ]</Badge>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                                Three working prototypes.
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The flows below were built as interactive prototypes, not static frames &mdash; the
                                conversation, the plan modelling, and the way an insight is delivered all needed to be
                                felt in sequence to know whether they worked.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {PROTOTYPES.map((p) => (
                            <a
                                key={p.name}
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-6
                                    hover:border-emerald-400/40 hover:bg-white/[0.07] transition-colors
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                                        <PlayCircle size={18} className="text-emerald-300" />
                                    </div>
                                    <h3 className="text-white font-semibold text-base mb-1.5">{p.name}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300">
                                    Open prototype
                                    <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-600 text-xs mt-4">Opens in Figma, in a new tab.</p>
                </div>
            </section>

            {/* ================= PROBLEM ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <Badge>[ The Problem ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Nobody wants a dashboard.{" "}
                            <span className="text-gray-400">They want to stop worrying.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            A person&apos;s financial life is spread across six places at once &mdash; cash in one
                            bank app, a card in another, a loan with a servicer, investments on a brokerage, bills
                            in the inbox, and the insurance policy in a drawer. The cost isn&apos;t inconvenience.
                            It&apos;s <span className="text-white font-medium">a permanent low-grade anxiety</span> about
                            money you can&apos;t answer without twenty minutes of mental arithmetic.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Existing tools split into two camps, and neither solves it: passive dashboards that show
                            numbers and offer no guidance, or trackers that demand manual entry nobody sustains.
                            Both answer <em>&ldquo;what happened?&rdquo;</em> The question people actually ask is
                            <span className="text-white font-medium"> &ldquo;am I okay, and can I afford this?&rdquo;</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <IconCard icon={<Users size={18} className="text-emerald-300" />} title="Who it was for">
                            The organised-but-stretched professional. Earns steadily, has a loan or two, financially
                            literate enough to care &mdash; and far too busy to maintain a spreadsheet.
                        </IconCard>
                        <IconCard icon={<Clock size={18} className="text-blue-400" />} title="The jobs to be done">
                            &ldquo;Tell me if I can afford this, quickly and honestly.&rdquo; &ldquo;Warn me before
                            something lapses.&rdquo; &ldquo;Tell me if my goal is realistic.&rdquo;
                        </IconCard>
                        <IconCard icon={<ShieldCheck size={18} className="text-[#d6f928]" />} title="The hard constraint">
                            Money is the most trust-sensitive category in consumer software. Every design decision
                            had to survive the question <em>&ldquo;why should I believe this number?&rdquo;</em>
                        </IconCard>
                    </div>
                </div>
            </section>

            {/* ================= MARKET RESEARCH ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <Badge>[ Research &mdash; The Market ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            We started by proving{" "}
                            <span className="text-gray-400">we weren&apos;t needed.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            The first work wasn&apos;t design, it was a competitive teardown. Personal finance is one
                            of the most crowded categories in consumer software, so the honest question up front was
                            not &ldquo;what should we build?&rdquo; but{" "}
                            <span className="text-white font-medium">&ldquo;what does nobody already do?&rdquo;</span>
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            One market condition made the question worth asking at all: Mint&apos;s shutdown had
                            displaced a large installed base of users who were actively shopping for a replacement.
                            A crowded market with a freshly unsettled population is a genuinely different proposition
                            from a crowded market at rest.
                        </p>
                    </div>

                    <div className="overflow-x-auto mb-12">
                        <table className="w-full min-w-[680px] text-sm border border-white/10 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Product</th>
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Strength</th>
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">The gap we saw</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400">
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Monarch</td>
                                    <td className="p-4">Beautiful dashboard, strong net-worth tracking</td>
                                    <td className="p-4">Everything lives inside the app. No proactive delivery, no document layer.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Cleo</td>
                                    <td className="p-4">Personality-led chat, strong with under-25s</td>
                                    <td className="p-4">Locked in its own app. No vault, no calendar, no cross-domain reasoning.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Mint / YNAB</td>
                                    <td className="p-4">Budgeting discipline</td>
                                    <td className="p-4">Budget-first. Nothing proactive, nothing for life admin.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Bank apps</td>
                                    <td className="p-4">Authoritative balances</td>
                                    <td className="p-4">Built to serve the bank, not the person. History, not guidance.</td>
                                </tr>
                                <tr className="border-t border-white/10 bg-emerald-500/5">
                                    <td className="p-4 text-emerald-300 font-medium">Poppins</td>
                                    <td className="p-4 text-gray-300">Proactive, cross-domain, delivered where people already are</td>
                                    <td className="p-4 text-gray-300">Connects bills, documents, balance and calendar &mdash; and reasons across all four.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="max-w-3xl">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">The behavioural finding that shaped the product</h3>
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            Every competitor made the same assumption: that the product is the app, and the job is
                            getting people back into it. But mobile attention doesn&apos;t work that way any more.
                            Push notifications are routinely dismissed or disabled; messaging apps are not.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="font-heading text-3xl font-bold text-emerald-300 mb-1">~98%</p>
                                <p className="text-gray-400 text-xs leading-relaxed">Typical open rate for a WhatsApp message</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="font-heading text-3xl font-bold text-gray-500 mb-1">15&ndash;20%</p>
                                <p className="text-gray-400 text-xs leading-relaxed">Typical open rate for an app push notification</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                <p className="font-heading text-3xl font-bold text-white mb-1">&lt;60s</p>
                                <p className="text-gray-400 text-xs leading-relaxed">To first useful message, with no install required</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed">
                            That gap reframed the delivery channel as a product decision rather than a notification
                            setting. If the app is where you <em>look things up</em> and messaging is where you
                            actually <em>get told</em>, then the reminder belongs in the thread, not behind an icon
                            badge. It also inherits something the app can&apos;t buy: fifteen years of accumulated
                            trust in the channel itself.
                        </p>
                    </div>

                    <FigureRow
                        cols="sm:grid-cols-2"
                        width="max-w-md"
                        phone
                        items={[
                            { src: ShotWaSunday, alt: "Poppins Sunday summary delivered as a WhatsApp message", label: "Scheduled — the Sunday summary" },
                            { src: ShotWaBill, alt: "Poppins urgent bill alert delivered as a WhatsApp message", label: "Urgent — a bill about to land" },
                        ]}
                        caption="Designing for a channel you don't control. No layout, no navigation, no brand furniture — the whole product reduced to what survives as plain text in someone else's app. The two classes are deliberately distinct: a scheduled check-in the user chose the time for, and an urgent alert allowed to break that schedule."
                    />

                    <div className="max-w-3xl mt-2">
                        <p className="text-gray-400 text-base leading-relaxed">
                            This turned out to be the hardest writing in the project. Inside the app you can lean on
                            hierarchy, colour and position to carry meaning. In a message thread you have{" "}
                            <span className="text-white font-medium">one paragraph and no second chance</span> &mdash;
                            which is exactly why the voice rules had to be written down before this surface could be
                            designed at all.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SEGMENTS + PERSONAS ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <Badge>[ Research &mdash; Who We Designed For ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Four segments, ranked &mdash;{" "}
                            <span className="text-gray-400">then written against by name.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            We identified four segments, then deliberately sequenced them rather than designing for
                            all four at once. Ordering forced the product to be excellent for one group first and
                            adequate for the rest, which is a design constraint as much as a go-to-market one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {[
                            { p: "01", name: "Everyday Spenders", age: "22–30", why: "Largest pool, and Safe to Spend is an exact fit for how they think. Also the most messaging-native group.", state: "v1 focus" },
                            { p: "02", name: "Life Admin Overwhelmed", age: "28–40", why: "The document vault and proactive alerts address their single biggest pain, and they have the highest willingness to pay.", state: "v1" },
                            { p: "03", name: "Coupled Up", age: "25–45", why: "Shared budgets and household view. The incumbent's strongest segment — so the hardest to win and the most valuable to take.", state: "Later" },
                            { p: "04", name: "Side Hustlers", age: "22–40", why: "Irregular income is underserved everywhere and they advocate loudly — but the complexity didn't belong in v1.", state: "Deferred" },
                        ].map((s) => (
                            <div key={s.p} className={`rounded-2xl p-6 border ${s.state === "v1 focus" ? "bg-emerald-500/5 border-emerald-400/25" : "bg-white/5 border-white/10"}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono text-gray-600">{s.p}</span>
                                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${s.state === "v1 focus" ? "text-emerald-300 border-emerald-400/30 bg-emerald-500/10" : "text-gray-500 border-white/10 bg-white/5"}`}>
                                        {s.state}
                                    </span>
                                </div>
                                <p className="text-white font-semibold text-sm">{s.name}</p>
                                <p className="text-gray-500 text-xs mb-3">{s.age}</p>
                                <p className="text-gray-400 text-xs leading-relaxed">{s.why}</p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mb-8">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">The four people the first screen was written for</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Segments are useful for prioritisation and useless for writing copy. So the opening
                            conversation was designed against four specific archetypes &mdash; what each one types,
                            what each one is feeling when they arrive, and{" "}
                            <span className="text-white font-medium">the exact moment each one decides to stay</span>.
                            That last column is what made the flow testable: if a moment converts nobody, it has no
                            reason to exist.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <Persona
                            name="Sara, 31"
                            meta="Marketing manager · three banking apps · sometimes pays bills late"
                            types="I never know what's due until it's almost late"
                            feels="Relieved that someone finally asked the right question."
                            converts="Moment 4 — she sees a bill due in two days that she hadn't checked."
                        />
                        <Persona
                            name="Marcus, 27"
                            meta="Software engineer · good income · no idea where it goes"
                            types="Where does all my money go every month"
                            feels="Curious. Nobody has ever answered this specifically for him."
                            converts="Moment 2 — the savings-rate benchmark lands because it uses real numbers."
                        />
                        <Persona
                            name="Diane, 44"
                            meta="Nurse, two children · anxious about money, avoids thinking about it"
                            types="Taps 'Where does my money go?' — exactly what she wants to know"
                            feels="Defensive. She expects a lecture, or a frightening number."
                            converts="Moment 2 — the feeling is validated before anything is fixed. No lecture."
                        />
                        <Persona
                            name="James, 38"
                            meta="Small business owner · has tried four finance apps and quit all four"
                            types="Show me something the other apps can't"
                            feels="Testing the product. Actively looking for a reason to leave."
                            converts="Moment 2 — a specific, non-generic answer."
                        />
                    </div>

                    <div className="bg-[#d6f928]/5 border border-[#d6f928]/20 rounded-2xl p-6 max-w-3xl">
                        <p className="text-[#d6f928] text-xs uppercase tracking-widest mb-2 font-mono font-semibold">The constraint this produced</p>
                        <p className="text-white text-base leading-relaxed">
                            James generated the single most useful rule in the project:{" "}
                            <span className="italic">if the second message says &ldquo;connect your account to find
                                out&rdquo;, James leaves.</span> One sceptical archetype turned a vague ambition
                            &mdash; be genuinely useful early &mdash; into a hard, checkable constraint on a
                            specific screen.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= EMOTIONAL REGISTER ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <Badge>[ Research &mdash; Emotional State ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            People arrive in one of four states.{" "}
                            <span className="text-gray-400">None of them want to be labelled.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Users open a finance app feeling <span className="text-white font-medium">anxious,
                                confused, behind, or overwhelmed</span> &mdash; and the failure mode of every product in
                            the category is to either amplify that feeling or dismiss it. &ldquo;You&apos;re
                            overspending&rdquo; is a label. &ldquo;Don&apos;t worry, you&apos;re fine&rdquo; is
                            dismissal. Neither is what the person came for.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            So the response pattern was specified as a fixed three-part structure, in order. Once
                            written down it stopped being a matter of taste and became something any piece of copy
                            could be checked against before it shipped.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-xs font-mono text-emerald-300 mb-2">01 &mdash; Acknowledge</p>
                            <p className="text-white text-sm font-medium mb-2">Reflect the situation without naming it</p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                &ldquo;Most people find the same thing&rdquo; is acknowledgment. It makes the feeling
                                normal without making it the user&apos;s identity.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-xs font-mono text-emerald-300 mb-2">02 &mdash; Give a real fact</p>
                            <p className="text-white text-sm font-medium mb-2">Something specific to hold onto</p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                A number, a named pattern, a comparison to their own history. Sympathy is cheap;
                                specific information is rare, and it&apos;s what makes the product feel
                                knowledgeable rather than merely kind.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <p className="text-xs font-mono text-emerald-300 mb-2">03 &mdash; Offer one option</p>
                            <p className="text-white text-sm font-medium mb-2">Framed as a choice, never a requirement</p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                &ldquo;Worth a look&rdquo; rather than &ldquo;you need to.&rdquo; The decision stays
                                with the user. The goal is that they leave clearer &mdash; not fixed.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            The same structure, applied to four different opening worries, produced four different
                            answers &mdash; each leading with a benchmark rather than a question back:
                        </p>
                        <div className="space-y-3">
                            <Voice who="steady">
                                Most people miss bills not because they forget, but because they&apos;re spread across
                                emails, apps and auto-pays. The average person has around eight recurring charges they
                                can&apos;t name off the top of their head. Let me find yours and put them in one place.
                            </Voice>
                            <Voice who="steady">
                                A $3,000 balance at 20% APR is about $50 a month in interest &mdash; roughly $600 a
                                year going to the lender rather than to you. The path out is usually simpler than it
                                feels.
                            </Voice>
                        </div>
                        <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                            &ldquo;$600 a year&rdquo; is visceral in a way &ldquo;20% APR&rdquo; is not. Choosing the
                            unit the user actually feels was a recurring copy decision throughout.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= DISCOVERY ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-4">
                        <Badge>[ Discovery ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            It started on a wall,{" "}
                            <span className="text-gray-400">not in Figma.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Before any screen existed we mapped the product by hand &mdash; what a person actually
                            asks, in what order, and what the system needs to know to answer honestly. Working on a
                            wall kept the arguments about <span className="text-white font-medium">structure</span> rather
                            than layout, which is where they belonged.
                        </p>
                    </div>

                    <FigureRow
                        cols="sm:grid-cols-2 lg:grid-cols-4"
                        items={[
                            { src: ShotBoard1, alt: "Whiteboard with hand-drawn screen skeletons, the goal structure and a tab bar", label: "Screens, by hand" },
                            { src: ShotBoard2, alt: "Whiteboard working through the chat-to-goal path", label: "Chat to goal" },
                            { src: ShotBoard3, alt: "Whiteboard mapping the dashboard, net worth and profile with connecting arrows", label: "How surfaces connect" },
                            { src: ShotBoard4, alt: "Whiteboard arguing what belongs on the first screen", label: "What earns the first screen" },
                            { src: ShotBoard5, alt: "Whiteboard working out plan and projection logic", label: "Plan and projection logic" },
                            { src: ShotBoard6, alt: "Whiteboard structuring profile, settings, vault and transactions", label: "Vault and profile structure" },
                            { src: ShotBoard7, alt: "Whiteboard note on filtering by bank, category, date and amount", label: "Filtering and sorting" },
                            { src: ShotBoard8, alt: "Whiteboard note asking whether a household shares access and goals", label: "One household, shared goals?" },
                        ]}
                        caption="Eight boards from the wall — screen skeletons, the chat-to-goal path, how the surfaces connect, what earns the first screen, projection logic, vault structure, filtering rules, and a question we deliberately left open about shared household goals. Nearly every structural decision in the product was settled at this fidelity, which is why the high-fidelity pass moved quickly."
                    />

                    <div className="max-w-3xl mt-12">
                        <h3 className="font-heading text-2xl font-bold text-white mb-6">Two findings that shaped the interface</h3>
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-2">Finding 01</p>
                                <p className="text-white font-medium text-sm mb-2">A blank prompt box intimidates people.</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    &ldquo;What would you like to ask?&rdquo; is a design failure disguised as
                                    flexibility &mdash; users freeze. The fix became a rule: the chat always offers
                                    <span className="text-white font-medium"> contextual starter pills based on current state</span>.
                                    Just uploaded an insurance document? A pill appears offering to ask about that policy.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-2">Finding 02</p>
                                <p className="text-white font-medium text-sm mb-2">Chat has to be omnipresent <em>and</em> omni-aware.</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A chat that forgets where you are makes you re-explain yourself. If someone is
                                    viewing their health policy in the Vault and taps chat, it should already know
                                    &mdash; <span className="text-white font-medium">the context carries into the conversation</span>,
                                    not the other way round.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= THE LOOP ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-4">
                        <Badge>[ Architecture ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            One loop the whole product hangs off.
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Everything resolves to a single value loop:{" "}
                            <span className="text-white font-medium">Chat &rarr; Plan &rarr; Goal &rarr; Calendar</span>.
                            You describe something you want, the system models it against your whole financial
                            picture, you commit to it, and it lands in the calendar you already check.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Mapping it as a logic flow &mdash; not a happy-path storyboard &mdash; is what surfaced
                            the decisions that mattered. Two came straight out of the diagram: committing to a goal
                            had to <span className="text-white font-medium">feel like a decision, not a form submission</span>;
                            and when two goals compete for the same monthly surplus, the system has to
                            <span className="text-white font-medium"> say so before confirming</span> rather than
                            quietly create both.
                        </p>
                    </div>

                    <FigureWide
                        src={ShotLoop}
                        alt="Core value loop flowchart: entry point, describe a scenario, gather variables, show projection, make this a goal, confirmation, goal created, calendar sync — with branch conditions annotated"
                        caption="Drawn as logic, not as a happy path. The branch conditions live on the diagram — conflicting goals warn before confirming, and if the calendar isn't connected the goal still works in-app rather than blocking."
                    />

                    <div className="max-w-3xl mt-14 mb-2">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">Where the conversations connect</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            The harder problem sat underneath the loop: several separate conversations can feed the
                            same goal, and a goal can be revisited months later from a new one. Mapping which chats
                            resolve into which goals is what established that{" "}
                            <span className="text-white font-medium">context has to persist across sessions</span>{" "}
                            rather than living inside a single thread &mdash; closer to a workspace than a chat log.
                        </p>
                    </div>

                    <FigureWide
                        src={ShotChatToGoal}
                        alt="Diagram mapping five separate chat conversations resolving into two goals, with shared context and analytics annotated"
                        caption="Five conversations, two goals. Questions about food spending, saving targets, a gaming PC, a house in five years and a car upgrade don't each start from zero — they share one financial context, and any of them can become or update a goal."
                    />

                    <div className="max-w-3xl mt-14 mb-2">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">The same loop, as screens</h3>
                        <p className="text-gray-400 text-base leading-relaxed">
                            A trip to Japan, end to end. The plan states the trade-off in words rather than hiding it
                            &mdash; <span className="text-white font-medium">the car fund pauses</span> &mdash; the
                            commit screen shows exactly what is being agreed to, and the dates land in the calendar
                            the person already checks.
                        </p>
                    </div>

                    <FigureRow
                        width="max-w-2xl"
                        phone
                        items={[
                            { src: ShotPlan, alt: "Poppins chat modelling a Japan trip with a cost summary showing target amount, monthly saving, timeline and the impact on an existing car fund", label: "1 — Model it, trade-off included" },
                            { src: ShotGoal, alt: "Poppins new goal screen with target amount, monthly contribution, start date, and calendar and WhatsApp options", label: "2 — Commit to it" },
                            { src: ShotCalendar, alt: "Poppins financial calendar showing synced dates alongside salary and bills", label: "3 — It lands in the calendar" },
                        ]}
                    />
                </div>
            </section>

            {/* ================= DECISIONS ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-14">
                        <Badge>[ Design Decisions ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                            Seven decisions that defined the product.
                        </h2>
                    </div>

                    {/* 1 — Safe to Spend */}
                    <Decision
                        n={1}
                        icon={<Calculator size={20} className="text-emerald-300" />}
                        tone="bg-emerald-500/10 border-emerald-400/20"
                        title="Replace the dashboard with one number — and always show its arithmetic."
                    >
                        <SplitFigure
                            src={ShotSafeToSpend}
                            alt="Poppins Safe to Spend explanation screen: available balance minus bills, savings commitment and recurring expenses, with the prior two weeks shown for comparison"
                            caption="Available balance, minus bills due, minus the savings commitment, minus recurring expenses — with last week and a month ago underneath."
                        >
                            <p className="text-gray-400 text-base leading-relaxed mb-5">
                                Net worth is the metric finance apps lead with, and it&apos;s the wrong one: it&apos;s
                                slow-moving, emotionally loaded, and answers nothing about today. The product decision
                                was to lead with <span className="text-white font-medium">Safe to Spend</span> &mdash; what
                                is genuinely free to use this week, after everything already committed.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                One number invites exactly one question: <em>says who?</em> So the number is never shown
                                alone. Tapping it opens the full subtraction, plus the same figure for the previous week
                                and a month ago, so it reads as a trend rather than a verdict. The principle we held to:{" "}
                                <span className="text-white font-medium">never show a number you can&apos;t explain.</span>
                            </p>
                        </SplitFigure>
                    </Decision>

                    {/* 2 — Two voices */}
                    <Decision
                        n={2}
                        icon={<MessageSquare size={20} className="text-blue-400" />}
                        tone="bg-blue-500/10 border-blue-400/20"
                        title="One voice, two depths — because reassurance and opportunity can't sound the same."
                    >
                        <SplitFigure
                            src={ShotSpotter}
                            alt="Poppins chat showing The Spotter answering whether a trip to Japan is affordable, leading with the answer and the monthly figure"
                            caption="The Spotter, activated — labelled in the interface so the user knows which voice is speaking."
                        >
                            <p className="text-gray-400 text-base leading-relaxed mb-5">
                                An assistant that talks about money has one hard problem: the same cheerful tone that
                                works for &ldquo;you hit your savings goal&rdquo; is unbearable attached to &ldquo;you
                                are overdrawn.&rdquo; A single register either patronises people in bad moments or
                                under-sells the good ones.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The character brief settled it before any copy was written: Poppins is{" "}
                                <span className="text-white font-medium">a navigator reading a map, not a teacher marking
                                    homework</span> &mdash; reading numbers the way a doctor reads a chart. Calm, specific,
                                surprised by nothing. From that came two depths of the same voice, with separate jobs,
                                separate contexts, and an explicit list of things each one never says &mdash; and
                                crucially, <span className="text-white font-medium">there is no personality setting</span>.
                                The depth adapts to the moment rather than to a preference the user has to manage.
                            </p>
                        </SplitFigure>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-semibold text-sm mb-2">The Steady Hand</h4>
                                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                    The default for everything the product sends. Reports what it noticed and stops.
                                    Never congratulates, never scolds, never manufactures urgency to earn a tap.
                                </p>
                                <Voice who="steady">
                                    Your grocery spend has crept up about $90 a month since September. Worth a look
                                    when you have a moment.
                                </Voice>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h4 className="text-white font-semibold text-sm mb-2">The Spotter</h4>
                                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                    Activates when the user leans in and wants the pattern behind a tip. Leads with
                                    the answer, shows the trade-off, and hands back once the decision is made.
                                </p>
                                <Voice who="spotter">
                                    Yes, you can afford it. On a $4,500 estimate you&apos;d need to set aside about
                                    $640 a month starting in November.
                                </Voice>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-xl p-5 max-w-3xl">
                            <p className="text-gray-600 text-xs uppercase tracking-widest mb-2 font-mono">The test every line had to pass</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Does this sound like someone who has seen everything and is surprised by none of it
                                &mdash; or does it sound like an app?
                            </p>
                        </div>

                    </Decision>

                    {/* 3 — Permission ladder */}
                    <Decision
                        n={3}
                        icon={<Route size={20} className="text-[#d6f928]" />}
                        tone="bg-[#d6f928]/10 border-[#d6f928]/20"
                        title="Every permission is downstream of desire, never upstream of it."
                    >
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-5">
                            The first onboarding was a wizard: step one, step two, step three. Each step asked for
                            something before demonstrating why it was worth giving &mdash; email before the user had
                            seen a single bill, bank before they had any reason to trust the product. The result was
                            a funnel rather than a conversation, and people who declined a step were left with a
                            visibly broken experience.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-8">
                            The rebuild inverted it. Nothing is asked until the product has earned the right to ask,
                            and every permission is motivated by something the user has already said they want to
                            see. The consequence is that{" "}
                            <span className="text-white font-medium">onboarding stops being setup and becomes the
                                first real session</span> &mdash; by the time it ends, the person has already experienced
                            the core value.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full min-w-[560px] text-sm border border-white/10 rounded-2xl overflow-hidden">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Model</th>
                                        <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Structure</th>
                                        <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Effect</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-white/5">
                                        <td className="p-4 text-gray-500 font-medium">v1 &mdash; wizard</td>
                                        <td className="p-4 text-gray-400">Step-based, linear, permission-first</td>
                                        <td className="p-4 text-gray-400">Logical but cold. Drop-off concentrated at step 2. No first value moment.</td>
                                    </tr>
                                    <tr className="border-t border-white/5 bg-emerald-500/5">
                                        <td className="p-4 text-emerald-300 font-medium">v2 &mdash; conversation</td>
                                        <td className="p-4 text-gray-300">Desire-first. Chat opens immediately; every ask follows a real answer</td>
                                        <td className="p-4 text-gray-300">Trust built before anything is requested. Permission follows desire.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-6">
                            That produced a six-rung ladder, each rung paid for by the one before it:
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-8">
                            {["Phone number", "Free Q&A", "Email → bills", "Reminders", "Bank", "Vault"].map((step, i, arr) => (
                                <span key={step} className="flex items-center gap-2">
                                    <span className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{step}</span>
                                    {i < arr.length - 1 && <ArrowRight size={13} className="text-gray-600" />}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
                            The ordering is not arbitrary. The vault is deliberately held back to day three or four
                            &mdash; introducing it in the first session tips the experience from{" "}
                            <em>this is useful</em> to <em>this is a lot</em>. And the calendar is never offered
                            before bill reminders have actually landed, because the calendar is the visual layer on
                            top of reminders, not a feature that stands on its own.
                        </p>

                        <FigureWide
                            src={ShotOnboardingVersions}
                            alt="Two rows of onboarding screens: the original step-based flow above, and the rebuilt conversation-led flow below"
                            caption="Both passes, stacked. Above: the original flow, front-loading account setup and permissions. Below: the rebuild — value propositions sequenced into distinct moments, and open questions replaced with selectable options so the first reply costs nothing."
                        />

                        <FigureWide
                            src={ShotFork}
                            alt="Onboarding flow diagram showing a shared core funnel with no signup wall, branching at the bank ask into automated connection, manual ledger, and interactive sandbox paths"
                            caption="The fork, drawn out. A shared funnel with no signup wall, then three legitimate continuations at the bank ask — connect, enter it manually, or tour a sandbox. No branch is a dead end, and none is treated as a penalty."
                        />
                    </Decision>

                    {/* 4 — Five bank asks */}
                    <Decision
                        n={4}
                        icon={<Landmark size={20} className="text-violet-300" />}
                        tone="bg-violet-500/10 border-violet-400/20"
                        title="Five different bank asks — one per worry the user arrived with."
                    >
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-5">
                            Every product like this dies at the same screen: <em>connect your bank</em>. The usual
                            approach is to write one persuasive version and A/B test the button. We took a different
                            view: the user has already told us what they&apos;re worried about, so the ask should be
                            <span className="text-white font-medium"> the natural way to answer that specific
                                worry</span> &mdash; and each version leans on a different, named psychological lever.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { t: "The One Number Promise", w: "Never saving enough", p: "Curiosity gap", d: "Introduces Safe to Spend as the single number that answers everything — then explains that calculating it needs read-only access." },
                                { t: "The Gap You Can Feel", w: "Bills piling up", p: "Incompleteness aversion", d: "Names precisely what's missing from the general picture, with no pressure language." },
                                { t: "The Free Snapshot", w: "Cautious or typed reply", p: "Low-commitment framing", d: "\"About 30 seconds\", \"one quick look\", disconnect any time. The default fallback." },
                                { t: "The Guess and Reveal", w: "Where does my money go?", p: "Prediction instinct", d: "Makes a specific guess from city and context — a phone bill, a forgotten subscription — then offers to check if it's right." },
                                { t: "The Worry Remover", w: "Debt costing me", p: "Relief seeking", d: "Leads with the cost of doing nothing, then frames connection as the fastest route out." },
                            ].map((s) => (
                                <div key={s.t} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <p className="text-white font-semibold text-sm">{s.t}</p>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-violet-300 border border-violet-400/25 bg-violet-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">{s.p}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-2">Triggered by: <span className="text-gray-400">{s.w}</span></p>
                                    <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                                </div>
                            ))}
                        </div>

                        <SplitFigure
                            src={ShotBankAsk}
                            alt="Poppins bank connection screen leading with read-only limits, encryption details, and a skip option"
                            caption="Read-only stated before any benefit, the security specifics visible rather than buried in a policy link, and 'Skip for now' given real weight."
                        >
                            <p className="text-gray-400 text-base leading-relaxed mb-5">
                                All five share one line, and it&apos;s the most important sentence in the product:
                            </p>
                            <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-5 mb-6">
                                <p className="text-gray-200 text-sm leading-relaxed italic">
                                    I connect read-only through Plaid &mdash; the same technology used by Venmo,
                                    Robinhood and most major financial apps. I can see your balance and transactions.
                                    <span className="text-white font-medium not-italic"> I can never move money or make
                                        changes. Ever.</span>
                                </p>
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The limit of the permission leads, not the benefit. Borrowing recognisable names does the
                                trust work that an unknown brand can&apos;t do on its own, and{" "}
                                <span className="text-white font-medium">&ldquo;Ever.&rdquo;</span> as a one-word sentence
                                was a deliberate rhythm choice &mdash; a decline that feels punished is a decline you
                                only get once.
                            </p>
                        </SplitFigure>
                    </Decision>

                    {/* 5 — Micro-interaction craft */}
                    <Decision
                        n={5}
                        icon={<Smartphone size={20} className="text-orange-400" />}
                        tone="bg-orange-500/10 border-orange-400/20"
                        title="The first screen is won or lost in details most specs don't mention."
                    >
                        <SplitFigure
                            src={ShotChatOpening}
                            alt="Poppins opening chat screen with suggestion chips offered below the assistant's first question"
                            caption="Poppins speaks first, and the chips arrive before the input bar asks anything of you."
                        >
                            <p className="text-gray-400 text-base leading-relaxed mb-5">
                                The opening moment is a chat with four suggestion chips. Nothing about that is
                                remarkable &mdash; and yet almost all of its performance lives in decisions at the
                                hundred-millisecond scale. These were specified deliberately, because on mobile they
                                are the difference between a conversation and a form.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Everything on this screen is arranged so that{" "}
                                <span className="text-white font-medium">the cheapest possible action is also the most
                                    useful one</span> &mdash; which is the entire job of a first screen.
                            </p>
                        </SplitFigure>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <IconCard icon={<PenTool size={18} className="text-orange-400" />} title="The cursor does not blink">
                                A blinking cursor tells people they&apos;re expected to compose something formal, like
                                a search query. Chips load first; the input bar is there for those who want it, not as
                                the primary call to action. It removes the &ldquo;what am I supposed to
                                say?&rdquo; freeze.
                            </IconCard>
                            <IconCard icon={<Clock size={18} className="text-orange-400" />} title="Chips stagger in at ~50ms">
                                Each option appears just after the last. Fast enough not to feel slow, slow enough
                                that the product reads as <em>presenting options thoughtfully</em> rather than
                                rendering a form.
                            </IconCard>
                            <IconCard icon={<MessageSquare size={18} className="text-orange-400" />} title="&ldquo;Let me type it&rdquo; is always last">
                                Position signals hierarchy. Typed answers are welcome, but the chips are the easier
                                path. The people who do type write things like <em>&ldquo;I just got laid
                                    off&rdquo;</em> &mdash; the highest-intent input in the whole flow.
                            </IconCard>
                            <IconCard icon={<Ban size={18} className="text-orange-400" />} title="No skip button here">
                                The question is easy enough that nobody needs to skip it. Offering a skip is an
                                invitation to disengage before any value has been delivered.
                            </IconCard>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mb-8">
                            <p className="text-white font-medium text-sm mb-3">The expected behaviour distribution &mdash; and a design response for each</p>
                            <div className="space-y-3 text-sm">
                                <div className="flex gap-4">
                                    <span className="font-heading text-lg font-bold text-emerald-300 w-14 shrink-0 tabular-nums">~70%</span>
                                    <p className="text-gray-400 text-xs leading-relaxed pt-1">Tap a chip immediately. The chips are the primary path, so they get the visual weight.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-heading text-lg font-bold text-blue-400 w-14 shrink-0 tabular-nums">~20%</span>
                                    <p className="text-gray-400 text-xs leading-relaxed pt-1">Type their own answer. Highest-intent group &mdash; every typed reply is treated as a gift and produces the most personalised second message.</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="font-heading text-lg font-bold text-gray-500 w-14 shrink-0 tabular-nums">~10%</span>
                                    <p className="text-gray-400 text-xs leading-relaxed pt-1">Pause and do nothing. One nudge after eight seconds: <em>&ldquo;No rush — or just tap whichever feels closest.&rdquo;</em> Then silence.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
                            One further decision came out of this: chip selection is worth instrumenting on its own,
                            because <span className="text-white font-medium">what people say is bothering them is
                                also the answer to what the marketing should lead with</span>. The first screen doubles
                            as continuous positioning research.
                        </p>
                    </Decision>

                    {/* 6 — Constraints */}
                    <Decision
                        n={6}
                        icon={<Ban size={20} className="text-red-400" />}
                        tone="bg-red-500/10 border-red-400/20"
                        title="The rules were written as prohibitions, because that's what holds under pressure."
                    >
                        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-8">
                            Positive principles bend when a deadline arrives. Prohibitions don&apos;t. So the flow
                            was governed by an explicit list of things never to do &mdash; each one a real temptation
                            with a real reason it was refused.
                        </p>
                        <ul className="space-y-4 max-w-3xl mb-8">
                            <Rule><span className="text-white">Never show a progress bar.</span> This is a conversation, not a wizard. &ldquo;Step 3 of 5&rdquo; breaks the illusion instantly.</Rule>
                            <Rule><span className="text-white">Never ask two permissions at once.</span> One moment, one ask, one answer. Sequential asks build trust; parallel asks destroy it.</Rule>
                            <Rule><span className="text-white">Never repeat a declined ask in the same session.</span> If someone declines the bank, offer email instead &mdash; and if they decline that too, let the empty Safe to Spend card do the asking. Trust the absent number to motivate, not repeated copy.</Rule>
                            <Rule><span className="text-white">Never say &ldquo;connect your account to find out more.&rdquo;</span> That&apos;s a deflection dressed as a next step. The second message must deliver real value with zero calls to action.</Rule>
                            <Rule><span className="text-white">Never use the words &ldquo;setup&rdquo; or &ldquo;onboarding.&rdquo;</span> Both remind the user they&apos;re configuring software rather than talking to someone.</Rule>
                            <Rule><span className="text-white">Never frame a decline as a loss.</span> The product works at every level of connection; it just works better with more. No &ldquo;you&apos;re missing out&rdquo; language, ever.</Rule>
                        </ul>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl">
                            <p className="text-white font-medium text-sm mb-2">One small rule that mattered more than it looks</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every decline option in the product uses the same three words:{" "}
                                <span className="text-white font-medium">&ldquo;Not right now.&rdquo;</span> No
                                &ldquo;maybe later&rdquo;, no &ldquo;I&apos;ll think about it&rdquo;, no
                                &ldquo;not yet&rdquo;. Standardising to a single phrase makes declining feel like a
                                normal, expected action rather than a decision the product is quietly grading.
                            </p>
                        </div>
                    </Decision>

                    {/* 7 — Failure states */}
                    <Decision
                        n={7}
                        icon={<AlertTriangle size={20} className="text-red-400" />}
                        tone="bg-red-500/10 border-red-400/20"
                        title="Design the empty and broken states first — that's where trust is won."
                    >
                        <SplitFigure
                            src={ShotEmpty}
                            alt="Poppins empty state reading 'Not enough data yet' with two next steps offered rather than a zero balance"
                            caption="It doesn't show a confident zero — it says what it doesn't have, and offers exactly two ways forward."
                        >
                            <p className="text-gray-400 text-base leading-relaxed mb-5">
                                In a finance product, the degraded state <em>is</em> the product for a large share of
                                users: no bank linked, one account of four connected, a login expired, a document the
                                parser couldn&apos;t read confidently. So failure states were specified alongside each
                                feature rather than after it.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                This is the screen most users meet first, and getting it wrong costs more than any
                                polished happy path can earn back.
                            </p>
                        </SplitFigure>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl">
                            <IconCard icon={<AlertTriangle size={18} className="text-red-400" />} title="Missing data is never zero">
                                If debts can&apos;t be read, net worth shows them as <span className="text-white font-medium">unknown</span>,
                                clearly flagged. Silently treating missing data as zero would produce a confident,
                                wrong, and actively harmful number.
                            </IconCard>
                            <IconCard icon={<Sparkles size={18} className="text-blue-400" />} title="Low confidence asks, never guesses">
                                When document extraction or a free-text answer is ambiguous, the interface surfaces
                                the field for confirmation instead of saving a guess.
                            </IconCard>
                            <IconCard icon={<CalendarDays size={18} className="text-emerald-300" />} title="No permission is a dead end">
                                Calendar declined? Goals still work in-app and reminders fall back to messaging.
                                A refused permission degrades a feature; it never blocks one.
                            </IconCard>
                            <IconCard icon={<FileText size={18} className="text-orange-400" />} title="Empty says what to do next">
                                With nothing linked, the app doesn&apos;t show a zero &mdash; it says it doesn&apos;t
                                have enough yet, states what it can still do with what you&apos;ve told it, and offers
                                the two next steps.
                            </IconCard>
                        </div>
                    </Decision>
                </div>
            </section>

            {/* ================= INSTRUMENTATION ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-10">
                        <Badge>[ How We&apos;d Know It Worked ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Every target came with{" "}
                            <span className="text-gray-400">a diagnosis for missing it.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            A metric without a threshold is decoration, and a threshold without a diagnosis is
                            just a number to feel bad about. So each measure was specified with a target{" "}
                            <span className="text-white font-medium">and the design conclusion to draw if it came in
                                low</span> &mdash; which is what makes it instrumentation rather than reporting.
                        </p>
                    </div>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full min-w-[720px] text-sm border border-white/10 rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Signal</th>
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">Target</th>
                                    <th className="text-left p-4 text-xs font-mono uppercase tracking-widest text-gray-500 font-medium">If it came in low, the design conclusion</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-400">
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Opening question answered</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;90%</td>
                                    <td className="p-4">The question is wrong, or the chips aren&apos;t landing.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Bank connected, session 1</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;45%</td>
                                    <td className="p-4">The second message isn&apos;t specific enough, or the ask is routed to the wrong worry.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Email connected after bank decline</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;55%</td>
                                    <td className="p-4">The pivot reads as a consolation prize rather than a smaller step.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Bank re-offer after bills found</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;70%</td>
                                    <td className="p-4">The bills list isn&apos;t creating the &ldquo;am I covered?&rdquo; question.</td>
                                </tr>
                                <tr className="border-t border-white/5">
                                    <td className="p-4 text-white font-medium">Reminder opt-in</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;65%</td>
                                    <td className="p-4">The offer is arriving at the wrong moment in the session.</td>
                                </tr>
                                <tr className="border-t border-white/10 bg-emerald-500/5">
                                    <td className="p-4 text-emerald-300 font-medium">Reached Safe to Spend in session 1</td>
                                    <td className="p-4 font-mono text-emerald-300">&gt;45%</td>
                                    <td className="p-4 text-gray-300">The north star. Reaching the payoff in the first session was expected to be worth roughly triple the 60-day retention.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                        <IconCard icon={<Gauge size={18} className="text-emerald-300" />} title="The canary was chosen deliberately">
                            Total bank connection at seven days &mdash; not day one &mdash; because it captures both
                            the people who connect immediately and the people who come back through the email
                            bridge. Measuring only session one would have made a working two-path architecture look
                            broken.
                        </IconCard>
                        <IconCard icon={<Target size={18} className="text-blue-400" />} title="Two paths, measured separately">
                            Because a decline was designed as a route rather than a failure, each path needed its
                            own funnel. A blended number would have hidden which of the two was actually weak.
                        </IconCard>
                    </div>

                    <p className="text-gray-600 text-xs mt-8 max-w-3xl">
                        These were design targets, not results. The product was never released, so none of them were
                        ever measured &mdash; they are included because the thresholds and diagnoses shaped what got
                        designed, not because they were achieved.
                    </p>
                </div>
            </section>

            {/* ================= SITE ================= */}
            <section className="bg-black py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-4">
                        <Badge>[ Marketing Site ]</Badge>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            Same promise, different room.
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            The site had one job the app didn&apos;t: earn enough trust for a stranger to consider
                            connecting a bank account. So it leads with the product&apos;s limits &mdash; read-only
                            access, no data selling &mdash; and states the pricing plainly, because in this category
                            a hidden price is itself a trust problem.
                        </p>
                    </div>
                    <ScrollFrame
                        src={ShotSite}
                        url="poppins.app"
                        alt="Poppins marketing landing page showing the problem framing, three-step model, feature set, pricing and a data-ownership section"
                        caption="The data-ownership section carries the same weight as the features, and the price is stated plainly — in this category a hidden price is itself a trust problem."
                    />
                </div>
            </section>

            {/* ================= THE KILL ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <Badge>[ The Decision to Stop ]</Badge>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            We had a product.{" "}
                            <span className="text-gray-400">We didn&apos;t have a wedge.</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            We knew the category was crowded from the first week &mdash; the teardown was the first
                            piece of work we did, and the entire strategy was built around finding one defensible
                            thing the incumbents didn&apos;t do. We believed it was proactive delivery: money
                            surfacing in the messaging thread people already read, backed by a document layer nobody
                            else had.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-5">
                            Under scrutiny that wedge didn&apos;t hold. A delivery channel is a feature, not a moat
                            &mdash; cheap for a funded incumbent to copy once it&apos;s proven, and not on its own a
                            reason to move your financial life. Everything genuinely differentiated about Poppins
                            lived in <span className="text-white font-medium">voice, sequencing and interaction
                                quality</span>, which is real design value but a fragile business defence. Meanwhile the
                            thing we&apos;d compete on hardest &mdash; breadth and reliability of account coverage
                            &mdash; was the part we controlled least.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-10">
                            So we stopped at the end of v1 scope, before engineering investment. That was the right
                            call, and I&apos;d make it faster next time.
                        </p>

                        <div className="bg-[#d6f928]/5 border border-[#d6f928]/20 rounded-2xl p-8 mb-10">
                            <p className="text-[#d6f928] text-xs uppercase tracking-widest mb-3 font-mono font-semibold">What I&apos;d do differently</p>
                            <p className="text-white text-base leading-relaxed">
                                We validated the <em>experience</em> exhaustively and the <em>wedge</em> late. Testing
                                the differentiator in two weeks &mdash; before three months of design &mdash; would
                                have reached the same answer far cheaper. Now I try to identify the single assumption
                                that kills the project, and go at that one first.
                            </p>
                        </div>

                        <h3 className="font-heading text-2xl font-bold text-white mb-5">What carried forward</h3>
                        <ul className="space-y-3 text-gray-400 text-sm leading-relaxed mb-6">
                            <li>&bull; <span className="text-white">Never show a number you can&apos;t explain.</span> Now a default in anything I design that surfaces a computed figure.</li>
                            <li>&bull; <span className="text-white">Write the prohibitions, not just the principles.</span> &ldquo;Never show a progress bar&rdquo; survived deadline pressure in a way &ldquo;keep it conversational&rdquo; would not have.</li>
                            <li>&bull; <span className="text-white">Put a permission downstream of a desire.</span> Anything I ask a user for now has to follow something they&apos;ve already said they want.</li>
                            <li>&bull; <span className="text-white">Pair every target with its diagnosis.</span> A metric that can&apos;t tell you what to change isn&apos;t worth instrumenting.</li>
                            <li>&bull; <span className="text-white">Specify failure alongside the feature.</span> The degraded state is the real product for more users than the happy path is.</li>
                        </ul>
                        <p className="text-gray-600 text-xs">
                            No outcome metrics appear in this case study: the product was never released, so there
                            are none to report. All figures shown in screens are sample data.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= NEXT ================= */}
            <section className="bg-[#050505] py-16 px-4 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Next Case Study</p>
                        <p className="font-heading text-2xl font-bold text-white">Atlas: CMS Architecture Across 130+ Locations</p>
                    </div>
                    <Link to="/Projects/atlas" className="text-[#d6f928] font-medium text-sm border border-[#d6f928]/20 bg-[#d6f928]/5 px-6 py-3 rounded-full hover:bg-[#d6f928]/10 transition-colors whitespace-nowrap flex items-center gap-2">
                        View Case Study <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Poppins;
