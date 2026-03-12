import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";

// Assets
import Banner from "../../../assets/uvc/Banner.png";
import Charcount from "../../../assets/uvc/charcount.png";
import Sitebuilder from "../../../assets/uvc/Sitebuilder.png";
import Templatemanager from "../../../assets/uvc/Templatemanager.png";
import UvcTaxonomy from "./UvcTaxonomy";
import UvcTemplates from "./UvcTemplates";

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
    <p className="text-xs uppercase text-zinc-500 tracking-[0.2em] font-medium">{children}</p>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
    <p className="text-4xl font-medium text-white tracking-tight">{value}</p>
    <p className="text-sm text-zinc-400 leading-relaxed">{label}</p>
  </div>
);

const UvcEcosystem = () => {
  return (
    <div className="font-sans text-zinc-300 bg-[#050505] min-h-screen selection:bg-white selection:text-black">
      <SEO
        title="United Veterinary Care Ecosystem - Case Study"
        description="Comprehensive case study covering the UVC digital transformation: standardizing 130+ clinic websites, building a relational CMS, and launching a 0-to-1 no-code site builder."
        keywords="case study, uvc, veterinary, cms, redesign, seo, site builder, multi-location, design system"
        url="https://www.sumansourabh.com/Projects/uvc-ecosystem"
      />
      <Navbar />

      <div className="px-6 pt-32 pb-32">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* ================= HEADER ================= */}
          <div className="text-center space-y-8 max-w-4xl mx-auto mt-10">
            <div className="inline-flex items-center gap-3 text-xs font-medium border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md px-5 py-2 rounded-full text-zinc-300 tracking-wide">
              <span className="text-green-500 text-[10px]">●</span> Digital Ecosystem &middot; CMS Architecture &middot; 0-to-1 Builder
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
              United Veterinary <span className="text-zinc-500 font-normal">Care</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              How we transformed 130+ disconnected clinic websites into a single, intelligent digital ecosystem — from standardizing chaos to shipping a 0-to-1 custom builder.
            </p>
          </div>

          <img src={Banner} alt="UVC Digital Ecosystem" className="rounded-[2rem] w-full border border-zinc-800/60 object-cover shadow-2xl" />

          {/* ================= PROJECT SNAPSHOT ================= */}
          <section className="bg-zinc-900/20 border border-zinc-800/60 backdrop-blur-md rounded-[2rem] p-10 md:p-14 space-y-12">
            <div className="flex flex-wrap gap-3">
              {["Healthcare", "Multi-Location", "CMS Architecture", "Design System", "No-Code Builder", "SEO", "0 to 1"].map((tag, i) => (
                <span key={i} className="text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-2 rounded-full tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-zinc-800/80 pt-10 text-sm">
              <div><p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-semibold">Company</p><p className="text-zinc-200 font-medium text-base">United Veterinary Care</p></div>
              <div><p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-semibold">My Role</p><p className="text-zinc-200 font-medium text-base">Product Designer</p></div>
              <div><p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-semibold">Platform</p><p className="text-zinc-200 font-medium text-base">Web, CMS, SaaS Builder</p></div>
              <div><p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-2 font-semibold">Scope</p><p className="text-zinc-200 font-medium text-base">UX/UI, CMS Logic, 0-to-1 Builder</p></div>
            </div>
          </section>

          {/* ================= THE CONTEXT (SPLIT LAYOUT) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>Context & Background</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                130 clinics.<br />
                <span className="text-zinc-500">130 different websites. Zero consistency.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                United Veterinary Care (UVC) is one of the largest veterinary network operators in the United States, managing over 130 clinics across three distinct service types: General Practice (GP), Specialty Medicine, and Emergency (ER) care.
              </p>
              <p>
                Their growth model was acquisition-driven — every few months, UVC would buy an independent clinic and absorb it into the network. The problem was digital. Each acquired clinic came with its own website, its own structure, its own CMS (or no CMS at all), its own brand voice, and its own SEO footprint. After years of this, UVC&apos;s digital presence was a patchwork — 130 disconnected digital identities with no shared architecture, no content governance, and no unified data layer.
              </p>
              <p>
                The consequences were severe and measurable. Google couldn&apos;t correctly index clinic pages — leading to massive missed organic traffic. Pet owners searching for &ldquo;emergency vets near me&rdquo; would land on pages that hadn&apos;t been updated in years. Clinic staff had no way to update their own information without emailing IT.
              </p>

              <div className="mt-10 border-l-2 border-zinc-700 pl-8 py-2">
                <p className="text-zinc-300 italic font-light text-xl leading-relaxed">
                  &ldquo;We&apos;re acquiring clinics faster than we can bring them into the network properly. Our digital infrastructure is a bottleneck to growth.&rdquo;
                </p>
                <p className="text-sm text-zinc-500 mt-4 font-medium uppercase tracking-widest">— UVC Leadership</p>
              </div>
            </div>
          </div>

          {/* ================= PHASE DIVIDER 1 ================= */}
          <div className="py-10">
            <div className="flex items-center gap-8">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Phase 01</div>
              <div className="h-[1px] bg-zinc-800/80 flex-grow"></div>
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Standardization</div>
            </div>
          </div>

          {/* ================= PHASE 1: SETUP (SPLIT LAYOUT) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>The Audit</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Before unifying 130 clinics,<br />
                <span className="text-zinc-500">we had to understand the chaos.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                The instinct was to move fast — pick a template, deploy it everywhere, call it done. We pushed back. A General Practice clinic in rural Montana and a Specialty oncology center in Chicago are fundamentally different digital entities. They serve different users under different emotional states, and they need to surface entirely different information hierarchies. Forcing them into the same design mould would serve nobody.
              </p>
              <p>
                So before we touched a single pixel, we spent weeks auditing the network — categorizing clinic types, mapping user journeys, running heuristic evaluations on the worst-performing sites, and identifying what was actually universal versus what was genuinely unique.
              </p>
            </div>
          </div>

          {/* Problem audit cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-8 space-y-5 hover:bg-red-950/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-lg font-mono">01</div>
              <h4 className="text-white font-medium text-lg">Zero SEO Governance</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Duplicate content across sister clinics. Missing schema markup. Canonicalization errors. Google was penalizing UVC for having the same doctor bios repeated across 40+ clinic pages verbatim.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-8 space-y-5 hover:bg-red-950/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-lg font-mono">02</div>
              <h4 className="text-white font-medium text-lg">Emergency Abandonment</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Pet owners in crisis couldn&apos;t find clinic hours, an address, or a phone number quickly. Low-contrast text, cluttered layouts, and no mobile optimization made emergency situations worse.</p>
            </div>
            <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-8 space-y-5 hover:bg-red-950/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 text-lg font-mono">03</div>
              <h4 className="text-white font-medium text-lg">IT as the Gatekeeper</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">Updating a clinic&apos;s hours, adding a new staff member, or changing service offerings required filing an IT ticket and waiting days. Local teams had zero autonomy.</p>
            </div>
          </div>

          {/* Accessibility — Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>Critical Discovery</SectionLabel>
              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Designing for the hardest user:<br />
                <span className="text-zinc-500">Someone in an emergency.</span>
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Our discovery work surfaced a constraint that reshaped the entire design language: UVC&apos;s most engaged users — particularly on ER clinic pages — were elderly pet owners. A 70-year-old whose dog just collapsed at 2am has severely compromised cognitive load. They cannot parse cluttered navigation, decode small grey text, or puzzle out which link leads to the phone number. In those moments, a UI is not a neutral tool — it is either an obstacle or a lifeline.
              </p>
              <p>
                This grounded every subsequent design decision in WCAG 2.1 AA accessibility standards as a non-negotiable baseline. High-contrast color palettes replaced industry-standard pastels. Generous typography replaced decorative fonts. The most time-critical information — hours, location, phone — was surfaced above the fold on every template type without exception.
              </p>
            </div>
          </div>

          <UvcTaxonomy />

          {/* Templates */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>Template Architecture</SectionLabel>
              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Not one template.<br />
                <span className="text-zinc-500">Five specific clinical realities.</span>
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                After mapping every clinic type in the network, we landed on five strategic templates that could cover the entire UVC universe. Every newly acquired clinic could be mapped to one of these archetypes within the first week — no custom design work, no IT bottleneck. Just configuration and content entry. The templates weren&apos;t rigid boxes; they were a shared structural skeleton with intentional flex points at the local level.
              </p>
            </div>
          </div>

          <UvcTemplates />

          {/* Phase 1 Outcomes */}
          <section className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-16 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <SectionLabel>Phase 1 — Outcomes</SectionLabel>
              <p className="text-zinc-400 text-lg font-light mt-4 mb-12 max-w-2xl leading-relaxed">
                Standardization wasn&apos;t glamorous. But the compounding returns were immediate. Better structure meant better crawlability, better UX, and a data model that could actually scale.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard value="↑ 41%" label="Increase in organic search traffic within 6 months." />
                <StatCard value="↑ 29%" label="Improvement in booking conversion rates." />
                <StatCard value="↑ 74%" label="Pages successfully indexed by Google." />
                <StatCard value="100+" label="Clinics launched under the new architecture." />
              </div>
            </div>
          </section>

          {/* ================= PHASE DIVIDER 2 ================= */}
          <div className="py-10">
            <div className="flex items-center gap-8">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Phase 02</div>
              <div className="h-[1px] bg-zinc-800/80 flex-grow"></div>
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Relational CMS</div>
            </div>
          </div>

          {/* ================= PHASE 2: CONTEXT (SPLIT LAYOUT) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>The Next Challenge</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Templates were live.<br />
                <span className="text-zinc-500">Keeping them accurate was impossible.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Phase 1 created the structure. Phase 2 tackled the hardest operational problem: how do you manage a living, breathing content ecosystem spread across 130+ clinics with accuracy, without hiring 130 content managers?
              </p>
              <p>
                The biggest issue was data duplication. Dr. Sarah Chen is a cardiologist who operates at three UVC clinics in the Boston region. Under the old system, her biography, photo, credentials, and service list existed as three separate, manually maintained copy-paste entries on three different pages. The moment her contact email changed, someone had to remember to update all three.
              </p>
              <p>
                Multiplied across 130 clinics and hundreds of specialists, this wasn&apos;t just an operational annoyance. It was an SEO crisis — Google was detecting near-duplicate content at scale and penalizing the entire UVC domain for it.
              </p>
            </div>
          </div>

          <img src={Charcount} alt="UVC Template Character Count Limits" className="rounded-[2rem] w-full border border-zinc-800/60 shadow-xl" />

          {/* CMS Solution (SPLIT LAYOUT) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>The Solution</SectionLabel>
              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                One source of truth.<br />
                <span className="text-zinc-500">Everywhere at once.</span>
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Off-the-shelf CMS platforms — WordPress, Contentful, even Webflow — simply could not handle the relational complexity of a multi-tenant, multi-location healthcare network. We built a proprietary headless CMS specifically engineered for UVC&apos;s operational model.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/80 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Singular Sources of Truth</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Every specialist, every service, and every location existed as a single managed entity — not a page, but a data record. When a profile was updated centrally, it cascaded instantly to every linked clinic page. Zero manual propagation.
              </p>
            </div>
            <div className="bg-zinc-900/20 border border-zinc-800/80 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Relational Content Linking</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                The CMS didn&apos;t just store content — it mapped relationships. A specialist was linked to their certifications, services, and locations. Google&apos;s semantic schema could finally understand UVC&apos;s network as an interconnected clinical ecosystem.
              </p>
            </div>
            <div className="bg-zinc-900/20 border border-zinc-800/80 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Block-Level Architecture</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Instead of rigid page forms, content was built using a modular block system. Clinics could assemble pages from pre-approved content blocks — doctor spotlights, service cards, patient testimonials — without touching code.
              </p>
            </div>
            <div className="bg-zinc-900/20 border border-zinc-800/80 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Parent-Child Architecture</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                For clinic groups operating multiple locations under a single brand, we built a parent-child hierarchy. A parent clinic page presented the unified narrative; child location pages inherited brand elements automatically.
              </p>
            </div>

            {/* NEW ADDITION: Clinic-Level Branding */}
            <div className="bg-zinc-900/20 border border-zinc-800/80 hover:bg-zinc-900/40 transition-colors rounded-2xl p-8 md:p-10 space-y-5 md:col-span-2">
              <h4 className="text-white font-medium text-xl">Clinic-Level Theme Customization</h4>
              <p className="text-zinc-400 text-base leading-relaxed font-light max-w-4xl">
                To ease the transition for newly acquired clinics that wanted to retain their legacy identity, we introduced local theme customization. Clinics could adjust their primary and secondary color palettes directly within the CMS. The design system automatically mapped these choices to accessible, WCAG-compliant shades across all UI components—allowing them to keep their branding without breaking global design rules.
              </p>
              {/* Add your reference image here later. Example:
                <img src={ThemeSettingsImage} alt="CMS Theme Customization Settings" className="mt-6 rounded-xl w-full border border-zinc-800 object-cover shadow-lg" /> 
              */}
            </div>
          </div>

          {/* Phase 2 Outcomes */}
          <section className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-16 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <SectionLabel>Phase 2 — Outcomes</SectionLabel>
              <p className="text-zinc-400 text-lg font-light mt-4 mb-12 max-w-2xl leading-relaxed">
                The relational CMS collapsed an operational nightmare into a manageable workflow, handing Google the structured data it needed to reward UVC&apos;s network properly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard value="45%" label="Reduction in user navigational friction via session analysis." />
                <StatCard value="Zero" label="Duplicate content penalties after canonicalization." />
                <StatCard value="Hours" label="Time to integrate a newly acquired clinic into the ecosystem." />
              </div>
            </div>
          </section>

          {/* ================= PHASE DIVIDER 3 ================= */}
          <div className="py-10">
            <div className="flex items-center gap-8">
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">Phase 03</div>
              <div className="h-[1px] bg-zinc-800/80 flex-grow"></div>
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">0-to-1 Site Builder</div>
            </div>
          </div>

          {/* ================= PHASE 3: CONTEXT (SPLIT LAYOUT) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>The Final Frontier</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Templates handled 90%.<br />
                <span className="text-zinc-500">The 10% was killing the team.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Phase 2 gave clinic teams content independence. But as UVC grew, so did the requests that fell outside the framework. A community vaccination drive. A new specialist&apos;s landing page. A holiday hours notification. These weren&apos;t standard blocks — they were one-off marketing needs requiring custom pages.
              </p>
              <p>
                Every request landed in the engineering sprint queue. The turnaround was days — sometimes weeks. Regional marketing managers were frustrated. Engineers were drowning in low-stakes tickets. UVC&apos;s ability to move at the speed of local marketing was constrained by a centralized bottleneck.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-5  ">
              <SectionLabel>The UVC Site Builder</SectionLabel>
              <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                Freedom within constraints.<br />
                <span className="text-zinc-500">Publish in hours, not weeks.</span>
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                We built a 0-to-1 drag-and-drop site builder natively integrated within the UVC CMS ecosystem. The interaction model was deliberately designed to feel like Framer or Webflow — but with a critically important constraint: every component in the sidebar had been pre-audited. There were no &ldquo;unsafe&rdquo; options.
              </p>
              <p>
                Regional managers could build from a blank canvas — drag in a hero section, a doctor spotlight, a service grid — and publish without a single IT approval required. The design system enforced the rules invisibly.
              </p>
            </div>
          </div>

          <img src={Sitebuilder} alt="UVC No-Code Site Builder Interface" className="rounded-[2rem] w-full border border-zinc-800/60 shadow-xl" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Design Philosophy: Invisible Constraints</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Every block was pre-governed by the atomic design system. Managers chose layout and content — not colors, not typography. That meant creative freedom at the content layer, with zero risk of brand or accessibility violations.
              </p>
            </div>
            <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-8 md:p-10 space-y-4">
              <h4 className="text-white font-medium text-xl">Relational Components</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Drop in a &ldquo;Doctor Card&rdquo; block and select a specialist — their photo, bio, and credentials populated automatically from the central record. The builder was connected to the exact same relational layer powering the ecosystem.
              </p>
            </div>
          </div>

          <img src={Templatemanager} alt="UVC Template Manager Interface" className="rounded-[2rem] w-full border border-zinc-800/60 shadow-xl" />

          {/* Phase 3 Outcomes */}
          <section className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-16 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <SectionLabel>Phase 3 — Outcomes</SectionLabel>
              <p className="text-zinc-400 text-lg font-light mt-4 mb-12 max-w-2xl leading-relaxed">
                The site builder fundamentally changed the power dynamic between central IT and local clinic teams. Marketing finally moved at the speed of marketing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <StatCard value="100%" label="Reduction in engineering tickets for custom pages." />
                <StatCard value="Hours" label="Time to launch a custom marketing campaign." />
                <StatCard value="Zero" label="Brand or accessibility breakages across 50+ pages." />
              </div>
            </div>
          </section>

          {/* ================= REFLECTION (SPLIT LAYOUT) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start border-t border-zinc-800/80 pt-20">
            <div className="md:col-span-5  ">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                The most important work<br />
                <span className="text-zinc-500">happens before Figma.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                The UVC project reinforced a core principle: the most impactful design decisions are structural, not visual. Getting the data model right — making each specialist, service, and location a relational node rather than a static text block — is what made the CMS possible, and what gave the site builder its relational superpowers.
              </p>
              <p>
                Designing for the hardest user scenario — an elderly pet owner in a crisis at 2am — made the product better for every other segment simultaneously. Accessibility isn&apos;t a compliance checkbox. It&apos;s a design lens that sharpens everything it touches.
              </p>
              <p>
                Finally, Phase 3 taught me the power of designing for trust. The site builder worked because users trusted that the system had their back. When a tool carries the cognitive overhead of &ldquo;I might break something&rdquo;, people don&apos;t use it. When it feels safe, they become unstoppable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UvcEcosystem;