import Navbar from "../../Navbar";
import Footer from "../../Footer";
import SEO from "../../SEO";

// Phase 1 Assets
import Banner from "../../../assets/uvc/Banner.png";
import Charcount from "../../../assets/uvc/charcount.png";
import Alltemplate from "../../../assets/uvc/Alltemplate.png";
// Placeholder Phase 2 & 3 Assets (Update paths as needed)
// import MultiLocation from "../../../assets/uvc/multilocation.png";
import Sitebuilder from "../../../assets/uvc/Sitebuilder.png";
import Templatemanager from "../../../assets/uvc/Templatemanager.png";
import UvcTaxonomy from "./UvcTaxonomy";
import UvcTemplates from "./UvcTemplates";
// import SiteBuilder from "../../../assets/uvc/sitebuilder.png";

const Section = ({ title, children, className = "" }) => (
  <section className={`bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl space-y-6 ${className}`}>
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <div className="text-gray-300 text-base leading-relaxed space-y-4">{children}</div>
  </section>
);
const UvcEcosystem = () => {
  return (
    <div className="font-sans text-white bg-black">
      <SEO
        title="United Veterinary Care Ecosystem - Case Study"
        description="Comprehensive case study covering the UVC redesign, multi-location architecture, and custom no-code site builder."
        keywords="case study, uvc, veterinary, cms, redesign, seo, site builder, multi-location"
        url="https://www.sumansourabh.com/Projects/uvc-ecosystem"
      />
      <Navbar />

      <div className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ================= HEADER & OVERVIEW ================= */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
              ◎ Digital Ecosystem & CMS Architecture
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              United Veterinary Care
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              A complete digital transformation for UVC&apos;s 130+ clinics. This case study details the evolution from standardizing the clinical web experience, to managing complex multi-location brand hierarchies, and finally empowering teams with a custom no-code site builder.
            </p>
          </div>
          <img src={Banner} alt="Old UVC Website" className="rounded-2xl w-full border border-white/10" />


          <Section title="Ecosystem Overview">
            <p>
              United Veterinary Care (UVC) operates an expansive network of clinics across the U.S. spanning General Practice (GP), Specialty, and Emergency (ER) services. The legacy digital footprint was fragmented, leading to poor SEO, high booking drop-offs, and zero content governance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/10 mt-6">
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Company:</p>
                <p className="text-white font-medium">UVC</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Role:</p>
                <p className="text-white font-medium">Product Designer</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Platform:</p>
                <p className="text-white font-medium">Web, CMS, SaaS Builder</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-xs text-gray-500 font-semibold mb-1">Scope:</p>
                <p className="text-white font-medium">UX/UI, CMS Logic, 0-1 Builder</p>
              </div>
            </div>
          </Section>

          {/* ================= PHASE 1 ================= */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-semibold text-white">Phase 1: Standardization of Websites and Data Flow</h2>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <img src={Alltemplate} alt="Old UVC Website" className="rounded-2xl w-full border border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Section title="Audience & Accessibility First">
                <p className="mb-3">Our initial discovery phase highlighted a critical constraint: while the target audience spanned all demographics, a significant and highly engaged portion of pet owners were elderly. In emergency scenarios, cognitive load is severely compromised, meaning the UI had to be exceptionally intuitive and heavily resilient to user error.</p>
                <p>To solve this, we rooted the design language in strict <strong>WCAG 2.1 AA accessibility guidelines</strong>. This meant enforcing high-contrast color palettes (abandoning low-contrast pastels common in the industry), utilizing highly legible, large-scale typography (Inter &amp; Roboto), and engineering deeply obvious, universally recognized iconography for high-stress triage navigation.</p>
              </Section>

              <Section title="Information Architecture & Taxonomy">
                <p className="mb-3">The legacy data model was a flat, unsearchable mess. We completely restructured how clinical data is stored, linked, and displayed by building a robust relational taxonomy.</p>
                <p>Instead of static pages, data became interconnected nodes. We mapped out a clear architectural tiering system to intelligently link specific veterinary services (e.g., &quot;Orthopedic Surgery&quot;) directly to approved physical locations, available specialists, and relevant post-op care content. This meant users could naturally traverse complex healthcare data horizontally, drastically reducing time-to-conversion.</p>
              </Section>
            </div>

            <UvcTaxonomy />

            <img src={Charcount} alt="Template Designs" className="rounded-2xl w-full border border-white/10" />

            <UvcTemplates />

            <Section title="Phase 1 Impact">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-2xl text-green-400 font-semibold mb-1">↑ 41%</p>
                  <p className="text-sm text-gray-400">Increase in organic traffic</p>
                </div>
                <div>
                  <p className="text-2xl text-green-400 font-semibold mb-1">↑ 29%</p>
                  <p className="text-sm text-gray-400">Booking conversions</p>
                </div>
                <div>
                  <p className="text-2xl text-green-400 font-semibold mb-1">↑ 74%</p>
                  <p className="text-sm text-gray-400">Pages successfully indexed</p>
                </div>
                <div>
                  <p className="text-2xl text-white font-semibold mb-1">100+</p>
                  <p className="text-sm text-gray-400">Clinics launched under new CMS</p>
                </div>
              </div>
            </Section>
          </div>

          {/* ================= PHASE 2 ================= */}
          <div className="space-y-12 pt-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-semibold text-white">Phase 2: Building CMS for Clinics and Multi-Location Clinic Flow</h2>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <img src={Templatemanager} alt="Multi Location Architecture" className="rounded-2xl w-full border border-white/10" />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Section title="A Custom Webflow-Like CMS">
                <p className="mb-3">
                  Off-the-shelf CMS platforms simply couldn&apos;t handle the relational complexity required by UVC&apos;s multi-tenant architecture. We engineered a robust, proprietary headless CMS from the ground up, closely mirroring the flexibility, componentized logic, and visual hierarchy of <strong>Webflow</strong>—but tailored specifically for clinical operations.
                </p>
                <p>
                  This wasn&apos;t just a data-entry tool; it was a platform for empathy. By shifting away from rigid, form-based templates to a block-level content architecture, we enabled rich storytelling capabilities. Clinics could now showcase their local community involvement, feature detailed doctor biographies, and connect emotionally with pet owners, rather than just acting as a sterile directory of medical services.
                </p>
              </Section>

              <Section title="Unified Content Linking">
                <p className="mb-3">
                  The CMS became the &quot;central brain&quot; orchestrating the frontend. We eliminated redundant data entry by establishing singular sources of truth. If a specialist works at three different hospitals, their profile is managed centrally but dynamically mapped and rendered across all three local websites automatically.
                </p>
                <p>
                  This unified linking extended across all 5 core template types. It dynamically cross-referenced veterinarians to the specialized services they offered, and bound those services to the clinics equipped to handle them. This created a seamless, infallible, and interconnected flow of information deeply optimized for Google&apos;s semantic schema mapping.
                </p>
              </Section>
            </div>

            <Section title="Phase 2 Impact">
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <p className="flex-1">By organizing data into logical hierarchies, we reduced user navigational friction by <strong>45%</strong> and solved duplicate content penalties from Google by canonicalizing location data under the parent brand.</p>
              </div>
            </Section>
          </div>

          {/* ================= PHASE 3 ================= */}
          <div className="space-y-12 pt-10">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-semibold text-white">Phase 3: The UVC Site Builder</h2>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>



            <Section title="The 0-to-1 Site Builder">
              <p>
                To provide ultimate flexibility, we built a custom drag-and-drop site builder—giving regional managers a true &quot;Webflow-like&quot; experience right within the UVC ecosystem.
              </p>
            </Section>
            <img src={Sitebuilder} alt="UVC Custom Site Builder UI" className="rounded-2xl w-full border border-white/10" />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Section title="Building from Scratch">
                <p className="mb-3">Recognizing that the 5 base templates couldn&apos;t satisfy agile, localized marketing demands, we developed the ultimate feature: a fully functional, zero-code drag-and-drop site builder natively integrated into the UVC ecosystem.</p>
                <p>Regional managers and clinic directors were no longer constrained by engineering capacity or sprint cycles. Using an interface designed to mimic the intuitive fluidity of <strong>Framer or Webflow</strong> layer panels, they could create completely custom operational sites, community event pages, and high-conversion landing campaigns from a blank canvas. They simply drag in interactive layout blocks, edit copy inline, map assets, and publish instantly.</p>
              </Section>

              <Section title="Removing Bottlenecks Safely">
                <p className="mb-3">While we handed over complete layout control, we fiercely protected the brand. The builder operated on a principle of <em>freedom within constraints</em>. Every single drag-and-drop component available in the sidebar was pre-audited, thoroughly tested, and rigidly governed by the global UVC atomic design system.</p>
                <p>This zero-code environment completely eliminated IT bottlenecks, empowering local clinics to execute rapid, storytelling-driven marketing strategies within hours—all while inherently guaranteeing perfect WCAG 2.1 AA compliance, responsive behavior, and unified brand aesthetics on every single page they built.</p>
              </Section>
            </div>
            <img src={Templatemanager} alt="Multi Location Architecture" className="rounded-2xl w-full border border-white/10" />


            <Section title="Phase 3 Impact">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl text-white font-semibold mb-1">100%</p>
                  <p className="text-sm text-gray-400">Reduction in dev tickets for page creation.</p>
                </div>
                <div>
                  <p className="text-2xl text-white font-semibold mb-1">From Days to Hours</p>
                  <p className="text-sm text-gray-400">Time to launch a new marketing campaign page.</p>
                </div>
                <div>
                  <p className="text-2xl text-white font-semibold mb-1">Zero Breakage</p>
                  <p className="text-sm text-gray-400">Design consistency maintained across 50+ custom pages.</p>
                </div>
              </div>
            </Section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UvcEcosystem;