import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";

// ================= ASSETS =================

// Phase 1: Core Redesign & Design System Assets
import Carterimg from "../../../assets/CarterRedesign/carter.png";
import DSL from "../../../assets/CarterRedesign/dsl.png";

// Phase 1: Campaign & Ad Item Workflow Assets
import Aditem from "../../../assets/cartercampigh/aditem.png";
import Oldaditem from "../../../assets/cartercampigh/oldaditem.png";
import CampaignCreationImg from "../../../assets/cartercampigh/campaign.png";

// Phase 2: DSP Assets
import dsp from "../../../assets/dsp/dsp.png";
import CampaignDSP from "../../../assets/dsp/campaign.png";
import mediaplan from "../../../assets/dsp/mediaplan.png";
import campaigndetail from "../../../assets/dsp/campaigndetail.png";
import v1 from "../../../assets/dsp/1.mp4";
import v3 from "../../../assets/dsp/3.mp4";

const StatCard = ({ value, label }) => (
    <div className="space-y-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 leading-snug">{label}</p>
    </div>
);

const SectionLabel = ({ children }) => (
    <p className="text-xs uppercase text-gray-500 tracking-widest font-semibold">{children}</p>
);

const CarterEcosystem = () => {
    return (
        <div className="font-sans text-white bg-black">
            <SEO
                title="Carter Ecosystem: Redesign & DSP - Case Study"
                description="A comprehensive case study on the Carter Retail Media Network: redesigning the core platform workflows, building a scalable design system, and launching a 0-1 DSP for cross-network campaign management."
                keywords="case study, carter, redesign, campaign creation, dsp, retail media network, ad tech, design system"
                url="https://www.sumansourabh.com/Projects/CarterEcosystem"
            />
            <Navbar />

            <div className="px-6 pt-32 pb-16">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* ================= HEADER ================= */}
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full text-gray-300">
                            ◎ Retail Media Network &middot; B2B SaaS &middot; Ad Tech
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            Carter <span className="text-gray-500 font-light">Ecosystem</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            How we turned a broken ad-tech platform into a retail media powerhouse — from fixing the foundation, to launching a 0-to-1 Demand-Side Platform.
                        </p>
                    </div>

                    <img src={Carterimg} alt="Carter Platform Overview" className="rounded-3xl w-full object-cover border border-white/10" />

                    {/* ================= PROJECT SNAPSHOT ================= */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 space-y-10">
                        <div className="flex flex-wrap gap-3">
                            {["B2B SaaS", "Ad Tech", "Design System", "Workflow Redesign", "0 to 1 DSP", "Retail Media"].map((tag, i) => (
                                <span key={i} className="text-xs font-medium bg-white/10 border border-white/20 text-gray-300 px-4 py-1.5 rounded-full tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 text-sm">
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Company</p><p className="text-white font-medium">Shyftlabs</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">My Role</p><p className="text-white font-medium">Lead Product Designer</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Platform</p><p className="text-white font-medium">Desktop Web (Responsive)</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Duration</p><p className="text-white font-medium">12 Months, 2 Phases</p></div>
                        </div>
                    </section>

                    {/* ================= THE CONTEXT ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>Context & Background</SectionLabel>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            A product people had to use.<br />
                            <span className="text-gray-500 font-light">Not one they wanted to.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Carter is a Retail Media Network (RMN) platform — a system that allows retailers
                                to sell ad space within their digital properties to brands who want to reach
                                shoppers at their most decisive moment: right before purchase.
                            </p>
                            <p>
                                Think of it like Google Ads, but exclusively for retail ecosystems — where a
                                Walmart or Target becomes the publisher and a consumer brand pays to appear
                                in front of high-intent shoppers directly on that retailer&apos;s platform.
                            </p>
                            <p>
                                When I joined, Carter had found product-market-fit. Retailers were adopting it.
                                But behind the sales momentum was a product that was quietly breaking people.
                                Clients were churning. Onboarding calls were running hours over schedule.
                                Campaign abandonment was at 27%. Nobody was using the platform without
                                hand-holding.
                            </p>
                            <p className="text-white border-l-4 border-white/30 pl-5 italic font-light text-base">
                                &ldquo;The platform works, but nobody outside the team knows how to use it confidently.&rdquo;
                                — Internal Stakeholder Interview
                            </p>
                        </div>
                    </div>

                    {/* ================= PHASE DIVIDER ================= */}
                    <div className="flex items-center gap-6">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 01</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Foundation</div>
                    </div>

                    {/* ================= PHASE 1: SETUP ================= */}
                    <div className="space-y-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Before we could build,<br /><span className="text-gray-400 font-light">we had to fix.</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            The team wanted to add new features. My instinct said the opposite — slow down,
                            audit deeply, and fix the core before it compounds. The platform&apos;s biggest
                            problem wasn&apos;t missing features. It was that the features it had were unusable.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Two workflows were particularly broken. Campaign Creation — how advertisers
                            build and launch ads — had a 27% abandonment rate. Ad Item Management —
                            where they monitor and optimize running ads — was an outdated data table with
                            no forecasting, no guidance, and no actionability. Clients were flying blind.
                        </p>
                    </div>

                    {/* The Audit Callouts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">27% Campaign Abandonment</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">A linear, form-heavy campaign builder with no progress feedback. Users dropped off after Step 2, confused about what they were even setting up.</p>
                        </div>
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">Static Data, Zero Insight</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Ad item management was a legacy table — rows of numbers, no visual context. CTR down? The platform didn&apos;t tell you what to do about it.</p>
                        </div>
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">No Design Language</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">12 teams. 12 different UI patterns. Buttons, modals, inputs — none matched. The product looked and felt like it was built by different companies.</p>
                        </div>
                    </div>

                    {/* ——— SOLUTION: DESIGN SYSTEM ——— */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>Step 1 of 3 — The Language</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">Building the Carter Design System 2.0</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                You cannot fix a house with different tools in every room. Before touching any
                                workflow, we standardized the visual and interaction language of the entire
                                platform. Every component — buttons, inputs, modals, tables, tooltips — was
                                rebuilt from scratch using atomic design principles, Material Design 3 tokens,
                                an 8pt spatial grid, and rigorous WCAG 2.1 AA testing. This became the single
                                source of truth for every team building on top of Carter going forward.
                            </p>
                        </div>
                        <img src={DSL} alt="Carter Design System 2.0" className="rounded-2xl w-full border border-white/10" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                                <h4 className="text-white font-semibold">Tokenized Theming</h4>
                                <p className="text-gray-400">Color, typography, and spacing defined as tokens — meaning a brand theme change cascades instantly instead of requiring manual updates across 200+ screens.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                                <h4 className="text-white font-semibold">Figma ↔ Code Parity</h4>
                                <p className="text-gray-400">Every component handoff included interaction specs, state definitions, and Storybook documentation — cutting dev-to-design back-and-forth by over 50%.</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                                <h4 className="text-white font-semibold">Scalable for Phase 2</h4>
                                <p className="text-gray-400">The system was built with extension in mind. When we later designed the DSP, every new component slotted in seamlessly — no rework of existing patterns.</p>
                            </div>
                        </div>
                    </div>

                    {/* ——— SOLUTION: CAMPAIGN CREATION ——— */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>Step 2 of 3 — Campaign Creation Redesign</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">From a form, to a guided experience.</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The old campaign builder was a single long form. Users had no sense of where
                                they were, where they were going, or whether what they set up was correct.
                                We redesigned it into a structured, five-stage modular flow: Objective →
                                Budget → Review → Creative . Each stage was independent, gave
                                live feedback, and surfaced AI-powered suggestions based on the advertiser&apos;s
                                past performance data. The final Review screen showed forecasted reach,
                                estimated spend, and projected ROI — building confidence before they hit launch.
                            </p>
                        </div>
                        <img src={CampaignCreationImg} alt="Campaign Creation Redesign" className="rounded-2xl w-full border border-white/10" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                                <h4 className="text-white font-semibold text-base">Key Design Decisions</h4>
                                <ul className="text-gray-400 text-sm space-y-3">
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Progress visibility:</strong> A persistent sticky header showed stage completion; advertisers could jump back to any step without losing data.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Inline validation:</strong> Errors surfaced per field, not as a bulk submission failure — eliminating the most common frustration point.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Contextual AI nudges:</strong> Budget recommendations based on similar historical campaigns appeared within the budget step — not as an overlay, but as part of the form.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Forecast preview:</strong> Before launch, a read-only summary with projected impressions, estimated clicks, and recommended KPIs gave clients conviction to commit.</span></li>
                                </ul>
                            </section>
                            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                                <h4 className="text-white font-semibold text-base">Before vs. After</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-400">
                                        <thead className="text-xs text-gray-500 uppercase bg-white/5">
                                            <tr>
                                                <th className="px-3 py-3">Metric</th>
                                                <th className="px-3 py-3">Before</th>
                                                <th className="px-3 py-3">After</th>
                                                <th className="px-3 py-3">Δ</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="px-3 py-3 text-white">Abandonment Rate</td>
                                                <td className="px-3 py-3">27%</td>
                                                <td className="px-3 py-3 text-green-400">8.5%</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">−68%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 text-white">Avg. Setup Time</td>
                                                <td className="px-3 py-3">7.1 min</td>
                                                <td className="px-3 py-3 text-green-400">4.1 min</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">−42%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 text-white">Campaign Launch Rate</td>
                                                <td className="px-3 py-3">61%</td>
                                                <td className="px-3 py-3 text-green-400">81%</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">+20pts</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* ——— SOLUTION: AD ITEM MANAGEMENT ——— */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>Step 3 of 3 — Ad Item Intelligence</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">Stop showing data.<br /><span className="text-gray-400 font-light">Start showing decisions.</span></h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The old ad item view was a passive table — density without insight. An advertiser
                                could see that their CTR was 0.4% but had no idea if that was good, bad, or
                                what to do next. We replaced it with an intelligence layer: card-based layouts
                                with visual status indicators, spend pacing charts, and proactive system
                                recommendations like &ldquo;this creative is underperforming — swap it for your
                                top-performing variant.&rdquo; We moved the product from a reporting tool
                                to an optimization engine.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">The old view — a dense, unactionable table</p>
                            <img src={Oldaditem} alt="Old Ad Item Interface" className="rounded-2xl w-full border border-white/10 opacity-50 grayscale" />
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">The new view — context, clarity, and one-click optimization</p>
                            <img src={Aditem} alt="New Ad Item Interface" className="rounded-2xl w-full border border-white/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                                <h4 className="text-white font-semibold text-base">What Changed</h4>
                                <ul className="text-gray-400 text-sm space-y-3">
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Visual pacing charts:</strong> Spend and impression curves made budget burn immediately readable at a glance — no mental math required.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">Smart alerts:</strong> The system surfaced proactive flags — underperforming creative, overspending bids, audience saturation — before they became costly mistakes.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">One-click actions:</strong> Pause, swap creative, adjust bid — all accessible in-context on the card, without navigating away to another screen.</span></li>
                                    <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span><strong className="text-white">ROI-backed bid suggestions:</strong> Instead of manual bid guessing, the system suggested bids based on historical first-party data for similar ad placements.</span></li>
                                </ul>
                            </section>
                            <section className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                                <h4 className="text-white font-semibold text-base">Before vs. After</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-400">
                                        <thead className="text-xs text-gray-500 uppercase bg-white/5">
                                            <tr>
                                                <th className="px-3 py-3">Metric</th>
                                                <th className="px-3 py-3">Before</th>
                                                <th className="px-3 py-3">After</th>
                                                <th className="px-3 py-3">Δ</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="px-3 py-3 text-white">Review Time / Ad Item</td>
                                                <td className="px-3 py-3">6.4 min</td>
                                                <td className="px-3 py-3 text-green-400">3.1 min</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">−52%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 text-white">Creative Swap Rate</td>
                                                <td className="px-3 py-3">14%</td>
                                                <td className="px-3 py-3 text-green-400">47%</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">+33pts</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 text-white">ROI from Bid Guidance</td>
                                                <td className="px-3 py-3">—</td>
                                                <td className="px-3 py-3 text-green-400">+24%</td>
                                                <td className="px-3 py-3 font-semibold text-green-400">New KPI</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* ——— PHASE 1 OUTCOMES ——— */}
                    <section className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 backdrop-blur-md p-10 rounded-3xl">
                        <SectionLabel>Phase 1 — Strategic Outcomes</SectionLabel>
                        <p className="text-gray-400 text-sm mt-2 mb-10 max-w-2xl">
                            Fixing the foundation delivered compounding returns. Better UX meant shorter sales cycles, faster client onboarding, and — critically — a reusable system that would let us build Phase 2 at speed.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCard value="300%" label="Growth in active enterprise clients within 12 months of relaunch." />
                            <StatCard value="50%" label="Faster engineering cycles due to reusable Design System components." />
                            <StatCard value="40%" label="Increase in platform engagement — users exploring more features independently." />
                            <StatCard value="2×" label="Faster client onboarding — from 3 hours average down to under 90 minutes." />
                        </div>
                    </section>

                    {/* ================= PHASE 2 DIVIDER ================= */}
                    <div className="flex items-center gap-6 pt-8">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 02</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">0-to-1 DSP</div>
                    </div>

                    {/* ================= PHASE 2: CONTEXT ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>The Next Frontier</SectionLabel>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            A stable platform.<br />
                            <span className="text-gray-400 font-light">Now scale it across every retailer.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                With Phase 1 validated, the business had a new ambition: don&apos;t just power one
                                retailer&apos;s ad network. Power all of them, from a single interface. The
                                vision was a Demand-Side Platform (DSP) — a unified command center where
                                marketers could plan, buy, and manage campaigns across multiple Retail Media
                                Networks simultaneously.
                            </p>
                            <p>
                                The problem we were solving for was brutal in its scale: a typical enterprise
                                advertiser managing campaigns across Walmart, Kroger, and Target wasn&apos;t just
                                dealing with different ad formats — they were doing three separate logins,
                                three separate creative uploads, three separate reporting exports, and
                                manually reconciling the results in a spreadsheet. Every week.
                            </p>
                            <p className="text-white border-l-4 border-white/30 pl-5 italic font-light text-base">
                                &ldquo;I spend 4 hours every Monday just pulling reports and combining them. I still
                                don&apos;t know which channel is actually working.&rdquo; — Enterprise Advertiser, User Research
                            </p>
                        </div>
                    </div>

                    <img src={dsp} alt="Carter DSP — Overview" className="rounded-3xl w-full border border-white/10" />

                    {/* Video + Business Goals */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-2xl border border-white/10 shadow-2xl">
                                <source src={v1} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2 space-y-10">
                                <div className="space-y-4">
                                    <SectionLabel>The Problem We Were Designing Against</SectionLabel>
                                    <h3 className="text-xl font-semibold text-white">Fragmentation at every layer</h3>
                                    <ul className="text-gray-400 text-sm space-y-3">
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>No unified view of campaign performance across networks — every RMN had its own reporting format.</span></li>
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Creative assets uploaded per-network, per-format — no shared library, massive duplication.</span></li>
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Budget splits decided manually, with no optimization recommendations or pacing visibility.</span></li>
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Zero cross-network spend efficiency — marketers overspent on saturated segments without knowing.</span></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <SectionLabel>Design KPIs</SectionLabel>
                                    <ul className="text-gray-400 text-sm space-y-3">
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Reduce campaign setup time across networks by 60–70%.</span></li>
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Achieve 95%+ asset compliance rate through guided creative specs.</span></li>
                                        <li className="flex gap-3"><span className="text-white mt-0.5">→</span><span>Unify reporting into a single KPI standard — one source of truth.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DSP Solution Architecture */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>The DSP Architecture</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">One platform. Every network. Zero switching.</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The Information Architecture was the core design challenge. The hierarchy had to
                                feel natural for someone managing 20 campaigns across 5 networks, while also
                                being accessible to a smaller brand running their first multi-channel effort.
                                We landed on a clear navigation spine: Dashboard → Campaigns → Creative Library
                                → Targeting → Channels → Reports. Each layer was designed to function
                                independently, but surface cross-channel insights automatically.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Unified Campaign Orchestration</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A campaign created once in Carter could be pushed to all connected RMNs simultaneously, with automatic reformatting for each network&apos;s creative specifications. One brief, one setup, all networks — instant.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Shared Targeting Layer</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Audience segments defined once and applied across networks. Overlap detection prevented the same shopper from being hit on Walmart and Target simultaneously — a first-of-its-kind feature in the RMN space.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Dynamic Creative Engine</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A centralized Digital Asset Manager (DAM) with spec-aware transformations. Upload one master creative and the system auto-generates compliant variants for every connected network&apos;s ad formats.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Smart Budgeting & Media Planning</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A rule-based budget allocator that distributes spend in real-time across networks based on performance signals. Pairs with a visual media planning canvas for quarterly campaign mapping.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* DSP Screen Walkthroughs */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <SectionLabel>Screens — Cross-Network Campaign View</SectionLabel>
                            <p className="text-gray-500 text-sm">Managing multiple campaigns across 5 retail networks in a single unified dashboard.</p>
                        </div>
                        <img src={CampaignDSP} alt="DSP — Campaign Management Dashboard" className="rounded-2xl w-full border border-white/10" />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <SectionLabel>Screens — Campaign Detail & Performance</SectionLabel>
                            <p className="text-gray-500 text-sm">Granular performance breakdown per network, creative, and audience segment — all in one view.</p>
                        </div>
                        <img src={campaigndetail} alt="DSP — Campaign Details View" className="rounded-2xl w-full border border-white/10" />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <SectionLabel>Screens — Media Planning Canvas</SectionLabel>
                            <p className="text-gray-500 text-sm">A drag-and-drop planning canvas for mapping quarterly spend across networks, seasons, and brand objectives.</p>
                        </div>
                        <img src={mediaplan} alt="DSP — Media Planning Tool" className="rounded-2xl w-full border border-white/10" />
                    </div>

                    {/* Phase 2 impact + video */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl">
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <video controls autoPlay loop muted className="w-full md:w-1/2 rounded-2xl border border-white/10 shadow-2xl">
                                <source src={v3} type="video/mp4" />
                            </video>
                            <div className="w-full md:w-1/2 space-y-8">
                                <div>
                                    <SectionLabel>Phase 2 — Impact at Launch</SectionLabel>
                                    <p className="text-gray-500 text-sm mt-2">Validated through internal testing and alpha client sessions prior to public release.</p>
                                </div>
                                <div className="space-y-6">
                                    <div className="border-b border-white/10 pb-4">
                                        <p className="text-2xl font-bold text-white">60–70% Faster Setup</p>
                                        <p className="text-gray-400 text-sm mt-1">Multi-network campaign creation time reduced from an average of 3.5 hours per channel to under 45 minutes total.</p>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <p className="text-2xl font-bold text-white">50% Fewer Errors</p>
                                        <p className="text-gray-400 text-sm mt-1">Creative compliance issues dropped dramatically thanks to real-time spec validation and auto-resize.</p>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <p className="text-2xl font-bold text-white">90%+ Satisfaction</p>
                                        <p className="text-gray-400 text-sm mt-1">Alpha testers rated the platform 4.6/5 on average for usability — the highest score Carter had ever recorded.</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">40% Cycle Reduction</p>
                                        <p className="text-gray-400 text-sm mt-1">The average weekly campaign management cycle shrunk from 4+ hours to under 90 minutes per user.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= REFLECTION ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>What I learned</SectionLabel>
                        <h2 className="text-3xl font-bold text-white leading-tight">Good design often means<br /><span className="text-gray-400 font-light">saying no to new features.</span></h2>
                        <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                            <p>
                                The most impactful decision on this project wasn&apos;t a design choice — it was a
                                strategic one. When leadership wanted to add new capabilities to win more clients,
                                I advocated for pausing and fixing what existed first. That tension is common
                                in fast-growing startups, and navigating it required data, trust, and the
                                willingness to say &ldquo;our highest-value feature is making the current ones legible.&rdquo;
                            </p>
                            <p>
                                The Phase 1 metrics proved it. Fixing campaign creation alone unlocked 20
                                percentage points of launch rate — meaning more campaigns were actually being
                                launched with the same number of clients. That&apos;s revenue found in the product
                                instead of the sales funnel.
                            </p>
                            <p>
                                For Phase 2, the hardest design challenge was scalable complexity — how do you
                                build a tool powerful enough for a 50-person enterprise marketing team, without
                                making it intimidating for a 2-person D2C startup? The answer was progressive
                                disclosure: every advanced feature existed but was hidden until the user
                                signalled they were ready for it. Simplicity on the surface, depth underneath.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default CarterEcosystem;