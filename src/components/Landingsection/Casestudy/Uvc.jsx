import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";

// Assets
import Banner from "../../../assets/uvc/Banner.png";
import Charcount from "../../../assets/uvc/charcount.png";
import Alltemplate from "../../../assets/uvc/Alltemplate.png";
import Sitebuilder from "../../../assets/uvc/Sitebuilder.png";
import Templatemanager from "../../../assets/uvc/Templatemanager.png";
import UvcTaxonomy from "./UvcTaxonomy";
import UvcTemplates from "./UvcTemplates";

const SectionLabel = ({ children }) => (
    <p className="text-xs uppercase text-gray-500 tracking-widest font-semibold">{children}</p>
);

const StatCard = ({ value, label }) => (
    <div className="space-y-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 leading-snug">{label}</p>
    </div>
);

const UvcEcosystem = () => {
    return (
        <div className="font-sans text-white bg-black">
            <SEO
                title="United Veterinary Care Ecosystem - Case Study"
                description="Comprehensive case study covering the UVC digital transformation: standardizing 130+ clinic websites, building a relational CMS, and launching a 0-to-1 no-code site builder."
                keywords="case study, uvc, veterinary, cms, redesign, seo, site builder, multi-location, design system"
                url="https://www.sumansourabh.com/Projects/uvc-ecosystem"
            />
            <Navbar />

            <div className="px-6 pt-32 pb-20">
                <div className="max-w-6xl mx-auto space-y-20">

                    {/* ================= HEADER ================= */}
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full text-gray-300">
                            ◎ Digital Ecosystem &middot; CMS Architecture &middot; 0-to-1 Builder
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            United Veterinary <span className="text-gray-500 font-light">Care</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            How we transformed 130+ disconnected clinic websites into a single, intelligent digital ecosystem — from standardizing chaos, to building a custom CMS, to shipping a no-code site builder.
                        </p>
                    </div>

                    <img src={Banner} alt="UVC Digital Ecosystem" className="rounded-3xl w-full border border-white/10 object-cover" />

                    {/* ================= PROJECT SNAPSHOT ================= */}
                    <section className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 space-y-10">
                        <div className="flex flex-wrap gap-3">
                            {["Healthcare", "Multi-Location", "CMS Architecture", "Design System", "No-Code Builder", "SEO", "0 to 1"].map((tag, i) => (
                                <span key={i} className="text-xs font-medium bg-white/10 border border-white/20 text-gray-300 px-4 py-1.5 rounded-full tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 text-sm">
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Company</p><p className="text-white font-medium">United Veterinary Care</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">My Role</p><p className="text-white font-medium">Product Designer</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Platform</p><p className="text-white font-medium">Web, CMS, SaaS Builder</p></div>
                            <div><p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Scope</p><p className="text-white font-medium">UX/UI, CMS Logic, 0-to-1 Builder</p></div>
                        </div>
                    </section>

                    {/* ================= THE CONTEXT ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>Context & Background</SectionLabel>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            130 clinics.<br />
                            <span className="text-gray-500 font-light">130 different websites. Zero consistency.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                United Veterinary Care (UVC) is one of the largest veterinary network operators in the United States, managing over 130 clinics across three distinct service types: General Practice (GP), Specialty Medicine, and Emergency (ER) care.
                            </p>
                            <p>
                                Their growth model was acquisition-driven — every few months, UVC would buy an independent clinic and absorb it into the network. The problem was digital. Each acquired clinic came with its own website, its own structure, its own CMS (or no CMS at all), its own brand voice, and its own SEO footprint. After years of this, UVC&apos;s digital presence was a patchwork — 130 disconnected digital identities with no shared architecture, no content governance, and no unified data layer.
                            </p>
                            <p>
                                The consequences were severe and measurable. Google couldn&apos;t correctly index clinic pages — leading to massive missed organic traffic. Pet owners searching for &ldquo;emergency vets near me&rdquo; would land on pages that hadn&apos;t been updated in years. Clinic staff had no way to update their own information without emailing IT. Every new acquisition added debt, not velocity.
                            </p>
                            <p className="text-white border-l-4 border-white/30 pl-5 italic font-light text-base">
                                &ldquo;We&apos;re acquiring clinics faster than we can bring them into the network properly. Our digital infrastructure is a bottleneck to growth.&rdquo;
                                — UVC Leadership, Discovery Session
                            </p>
                        </div>
                    </div>

                    {/* ================= PHASE DIVIDER 1 ================= */}
                    <div className="flex items-center gap-6">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 01</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Standardization</div>
                    </div>

                    {/* ================= PHASE 1: SETUP ================= */}
                    <div className="space-y-6 max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Before unifying 130 clinics,<br />
                            <span className="text-gray-400 font-light">we had to understand what made each one different.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                The instinct was to move fast — pick a template, deploy it everywhere, call it done. We pushed back. A General Practice clinic in rural Montana and a Specialty oncology center in Chicago are fundamentally different digital entities. They serve different users under different emotional states, and they need to surface entirely different information hierarchies. Forcing them into the same design mould would serve nobody.
                            </p>
                            <p>
                                So before we touched a single pixel, we spent weeks auditing the network — categorizing clinic types, mapping user journeys, running heuristic evaluations on the worst-performing sites, and identifying what was actually universal versus what was genuinely unique to each service type.
                            </p>
                        </div>
                    </div>

                    {/* Problem audit cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">Zero SEO Governance</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Duplicate content across sister clinics. Missing schema markup. Canonicalization errors. Google was penalizing UVC for having the same doctor bios repeated across 40+ clinic pages verbatim.</p>
                        </div>
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">High Abandonment in Emergency Flows</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Pet owners in crisis couldn&apos;t find clinic hours, an address, or a phone number quickly. Low-contrast text, cluttered layouts, and no mobile optimization made emergency situations worse.</p>
                        </div>
                        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6 space-y-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-lg font-bold">!</div>
                            <h4 className="text-white font-semibold">IT as the Only Gatekeeper</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Updating a clinic&apos;s hours, adding a new staff member, or changing service offerings required filing an IT ticket and waiting days. Local teams had zero autonomy over their own digital presence.</p>
                        </div>
                    </div>

                    {/* Accessibility — A critical discovery */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>Critical Discovery — The Audience</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">Designing for the hardest user: someone in an emergency.</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Our discovery work surfaced a constraint that reshaped the entire design language: UVC&apos;s most engaged users — particularly on ER clinic pages — were elderly pet owners. A 70-year-old whose dog just collapsed at 2am has severely compromised cognitive load. They cannot parse cluttered navigation, decode small grey text, or puzzle out which link leads to the phone number. In those moments, a UI is not a neutral tool — it is either an obstacle or a lifeline.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                This grounded every subsequent design decision in WCAG 2.1 AA accessibility standards as a non-negotiable baseline, not an afterthought. High-contrast color palettes replaced industry-standard pastels. Inter and Roboto at generous scales replaced decorative fonts. Navigation hierarchies were flattened. The most time-critical information — hours, location, phone — was surfaced above the fold on every template type without exception.
                            </p>
                        </div>
                    </div>

                    <img src={Alltemplate} alt="UVC All Template Types" className="rounded-2xl w-full border border-white/10" />

                    {/* Taxonomy */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>The Hardest Problem — Information Architecture</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">
                                Building the taxonomy that connects<br />
                                <span className="text-gray-400 font-light">services, specialists, and locations.</span>
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Static pages were dead. The moment a doctor joined or left a clinic, or a service was added or discontinued, a static page became wrong. And with 130+ clinics, wrong pages at scale meant hundreds of broken user journeys and Google penalties.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed">
                                We redesigned the data model from the ground up — turning every service, specialist, and location into a relational node rather than a static page. The taxonomy we built had four levels: Service Category → Service Type → Detailed Offering → Metadata Attributes. This meant a search for &ldquo;Oncology&rdquo; could automatically surface the right specialists, their certifications, and the specific clinics equipped to handle chemotherapy — without any manual linking per clinic.
                            </p>
                        </div>
                        <UvcTaxonomy />
                    </div>

                    {/* Templates */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>The Solution — Template Architecture</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">
                                Not one template.<br />
                                <span className="text-gray-400 font-light">Five — each built for a specific clinical reality.</span>
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                After mapping every clinic type in the network, we landed on five strategic templates that could cover the entire UVC universe. Every newly acquired clinic could be mapped to one of these archetypes within the first week — no custom design work, no IT bottleneck. Just configuration and content entry. The templates weren&apos;t rigid boxes; they were a shared structural skeleton with intentional flex points at the local level.
                            </p>
                        </div>
                        <UvcTemplates />
                    </div>

                    <img src={Charcount} alt="UVC Template Character Count Limits" className="rounded-2xl w-full border border-white/10" />

                    {/* Phase 1 Outcomes */}
                    <section className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 backdrop-blur-md p-10 rounded-3xl">
                        <SectionLabel>Phase 1 — Outcomes</SectionLabel>
                        <p className="text-gray-400 text-sm mt-2 mb-10 max-w-2xl">
                            Standardization wasn&apos;t glamorous. But the compounding returns were immediate. Better structure meant better crawlability, better UX, and a data model that could actually scale to support Phase 2.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCard value="↑ 41%" label="Increase in organic search traffic within 6 months of relaunch." />
                            <StatCard value="↑ 29%" label="Improvement in booking conversion rates across all clinic types." />
                            <StatCard value="↑ 74%" label="Of clinic pages successfully indexed by Google — up from under 40%." />
                            <StatCard value="100+" label="Clinics successfully launched under the new architecture." />
                        </div>
                    </section>

                    {/* ================= PHASE DIVIDER 2 ================= */}
                    <div className="flex items-center gap-6 pt-4">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 02</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Relational CMS</div>
                    </div>

                    {/* ================= PHASE 2: CONTEXT ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>The Next Challenge</SectionLabel>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Templates were live.<br />
                            <span className="text-gray-400 font-light">But keeping them accurate at scale was impossible.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Phase 1 created the structure. Phase 2 tackled the hardest operational problem: how do you manage a living, breathing content ecosystem spread across 130+ clinics with accuracy, without hiring 130 content managers?
                            </p>
                            <p>
                                The biggest issue was data duplication. Dr. Sarah Chen is a cardiologist who operates at three UVC clinics in the Boston region. Under the old system, her biography, photo, credentials, and service list existed as three separate, manually maintained copy-paste entries on three different pages. The moment her contact email changed, someone had to remember to update all three — and they usually forgot at least one.
                            </p>
                            <p>
                                Multiplied across 130 clinics and hundreds of specialists, this wasn&apos;t just an operational annoyance. It was an SEO crisis — Google was detecting near-duplicate content at scale and penalizing the entire UVC domain for it.
                            </p>
                            <p className="text-white border-l-4 border-white/30 pl-5 italic font-light text-base">
                                &ldquo;We have the same doctor listed on four clinic pages. Three of them have the right phone number. One doesn&apos;t. And we have no way of knowing which.&rdquo;
                                — UVC Operations Manager, Stakeholder Interview
                            </p>
                        </div>
                    </div>

                    <img src={Templatemanager} alt="UVC Relational CMS Architecture" className="rounded-2xl w-full border border-white/10" />

                    {/* CMS Solution */}
                    <div className="space-y-8">
                        <div className="space-y-3 max-w-3xl">
                            <SectionLabel>The Solution — A Custom Headless CMS</SectionLabel>
                            <h3 className="text-3xl font-bold text-white">One source of truth.<br /><span className="text-gray-400 font-light">Everywhere at once.</span></h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Off-the-shelf CMS platforms — WordPress, Contentful, even Webflow — simply could not handle the relational complexity of a multi-tenant, multi-location healthcare network. We built a proprietary headless CMS specifically engineered for UVC&apos;s operational model.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Singular Sources of Truth</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Every specialist, every service, and every location existed as a single managed entity — not a page, but a data record. When Dr. Chen&apos;s profile was updated centrally, it cascaded instantly and automatically to every clinic page she was linked to. Zero manual propagation. Zero risk of stale data.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Relational Content Linking</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    The CMS didn&apos;t just store content — it mapped relationships. A specialist was linked to their certifications, their service offerings, and the clinic locations they operated from. A service was linked to the specialist qualified to perform it and the equipment required. Google&apos;s semantic schema could finally understand UVC&apos;s network as an interconnected clinical ecosystem rather than isolated pages.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Block-Level Architecture</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Instead of rigid page forms, content was built using a modular block system. Clinics could assemble pages from pre-approved content blocks — doctor spotlights, service cards, local community sections, patient testimonials — without touching code or filing tickets. Storytelling at the local level, within a globally consistent framework.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                                <h4 className="text-white font-semibold">Multi-Location Parent Architecture</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    For clinic groups operating multiple physical locations under a single brand, we built a parent-child hierarchy. A parent clinic page presented the unified brand narrative; child location pages inherited brand elements automatically while surfacing location-specific details. Google canonicalization was handled at the architecture level — no manual meta tag management required.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 Outcomes */}
                    <section className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 backdrop-blur-md p-10 rounded-3xl">
                        <SectionLabel>Phase 2 — Outcomes</SectionLabel>
                        <p className="text-gray-400 text-sm mt-2 mb-10 max-w-2xl">
                            The relational CMS solved two problems at once: it collapsed an operational nightmare into a manageable workflow, and it handed Google the structured data it needed to understand and reward UVC&apos;s network properly.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <StatCard value="45%" label="Reduction in user navigational friction — measured via session path analysis." />
                            <StatCard value="Zero" label="Duplicate content penalties from Google after canonicalization was implemented." />
                            <StatCard value="Days → Hours" label="Time to integrate a newly acquired clinic into the live digital ecosystem." />
                        </div>
                    </section>

                    {/* ================= PHASE DIVIDER 3 ================= */}
                    <div className="flex items-center gap-6 pt-4">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">Phase 03</div>
                        <div className="h-px bg-white/10 flex-grow"></div>
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest whitespace-nowrap">0-to-1 Site Builder</div>
                    </div>

                    {/* ================= PHASE 3: CONTEXT ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>The Final Frontier</SectionLabel>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            The 5 templates handled 90% of cases.<br />
                            <span className="text-gray-400 font-light">The remaining 10% was killing the team.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Phase 2 gave clinic teams content independence within a structured framework. But as UVC grew, so did the requests that fell outside the framework. A community vaccination drive. A new specialist&apos;s introductory landing page. A holiday hours notification. A local pet adoption partnership announcement. These weren&apos;t standard content blocks — they were one-off marketing needs that required custom pages.
                            </p>
                            <p>
                                Every one of these requests landed in the engineering sprint queue. The turnaround was days — sometimes weeks. By the time the page was live, the event had passed. Regional marketing managers were frustrated. Engineers were drowning in low-stakes tickets. And UVC&apos;s ability to move at the speed of local marketing was constrained by a centralized technical bottleneck.
                            </p>
                            <p className="text-white border-l-4 border-white/30 pl-5 italic font-light text-base">
                                &ldquo;I have a vaccination event this Saturday. I submitted the page request eight days ago. It still hasn&apos;t been built.&rdquo;
                                — Regional Marketing Manager, User Research
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <SectionLabel>The Solution — The UVC Site Builder</SectionLabel>
                        <h3 className="text-3xl font-bold text-white">Freedom within constraints.<br /><span className="text-gray-400 font-light">Publish in hours, not weeks.</span></h3>
                    </div>

                    <img src={Sitebuilder} alt="UVC No-Code Site Builder Interface" className="rounded-2xl w-full border border-white/10" />

                    <div className="space-y-6">
                        <p className="text-gray-400 text-base leading-relaxed max-w-4xl">
                            We built a 0-to-1 drag-and-drop site builder natively integrated within the UVC CMS ecosystem. The interaction model was deliberately designed to feel like Framer or Webflow — familiar to anyone who had seen a modern no-code tool — but with a critically important constraint: every component in the sidebar had been pre-audited by the UVC design system team. There were no &ldquo;unsafe&rdquo; options. Every color, every font, every layout block was already compliant with WCAG 2.1 AA, responsive by default, and on-brand.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed max-w-4xl">
                            Regional managers could build from a blank canvas — drag in a hero section, a doctor spotlilight, a service grid, a CTA — and publish without a single IT approval required. But they couldn&apos;t accidentally choose an inaccessible contrast ratio or publish something that broke the grid. The design system enforced the rules invisibly. The team experienced only freedom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                            <h4 className="text-white font-semibold">The Design Philosophy: Freedom Within Constraints</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Every block in the sidebar was pre-governed by the atomic design system. Managers chose layout and content — not colors, not typography, not spacing. That meant creative freedom at the content layer, with zero risk of brand or accessibility violations at the design layer. Brand integrity held automatically. No policing required.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
                            <h4 className="text-white font-semibold">Relational Components</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Even in the custom builder, components could pull live data from the CMS. Drop in a &ldquo;Doctor Card&rdquo; block and select a specialist from the dropdown — their photo, bio, and credentials populated automatically from the central record. No re-entering data. No risk of inconsistency. The builder was connected to the same relational layer that powered the rest of the ecosystem.
                            </p>
                        </div>
                    </div>

                    <img src={Templatemanager} alt="UVC Template Manager Interface" className="rounded-2xl w-full border border-white/10" />

                    {/* Phase 3 Outcomes */}
                    <section className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 backdrop-blur-md p-10 rounded-3xl">
                        <SectionLabel>Phase 3 — Outcomes</SectionLabel>
                        <p className="text-gray-400 text-sm mt-2 mb-10 max-w-2xl">
                            The site builder didn&apos;t just solve the bottleneck — it fundamentally changed the power dynamic between central IT and local clinic teams. Marketing finally moved at the speed of marketing.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <StatCard value="100%" label="Reduction in engineering tickets for custom page creation." />
                            <StatCard value="Days → Hours" label="Time to launch a custom marketing campaign or event page." />
                            <StatCard value="Zero Breakage" label="Brand, accessibility, and responsiveness compliance maintained across 50+ custom-built pages." />
                        </div>
                    </section>

                    {/* ================= REFLECTION ================= */}
                    <div className="space-y-8 max-w-4xl">
                        <SectionLabel>What I learned</SectionLabel>
                        <h2 className="text-3xl font-bold text-white leading-tight">
                            The most important design work<br />
                            <span className="text-gray-400 font-light">happens before you open Figma.</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                            <p>
                                The UVC project reinforced something I now hold as a core principle: the most impactful design decisions are structural, not visual. The taxonomy we built in Phase 1 determined the quality of every page on the platform. Getting the data model right — making each specialist, service, and location a relational node rather than a static text block — is what made the CMS in Phase 2 possible, and what gave the site builder in Phase 3 its relational superpowers.
                            </p>
                            <p>
                                The emergency UX constraint was also a lasting lesson. Designing for the hardest user scenario — an elderly pet owner in a crisis at 2am — made the product better for every other user segment simultaneously. Accessibility isn&apos;t a compliance checkbox. It&apos;s a design lens that sharpens everything it touches.
                            </p>
                            <p>
                                Finally, Phase 3 taught me the power of designing for trust. The site builder worked because users trusted that the system had their back — that it was impossible to accidentally publish something off-brand or inaccessible. When a tool carries the cognitive overhead of &ldquo;I might break something&rdquo;, people don&apos;t use it. When it feels safe, they are unstoppable.
                            </p>
                        </div>
                    </div>

                    {/* ================= FOOTER CTA ================= */}
                    <div className="text-center space-y-4 py-16 border-t border-white/10">
                        <h3 className="text-2xl font-semibold text-white">Let&apos;s build something impactful.</h3>
                        <p className="text-sm text-gray-400">Available for product design collaborations, consulting, and full-time opportunities.</p>
                        <a
                            href="/contact"
                            className="inline-block mt-4 px-8 py-3 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Get in Touch →
                        </a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UvcEcosystem;