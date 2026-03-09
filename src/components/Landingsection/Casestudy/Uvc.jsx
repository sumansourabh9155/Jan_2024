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
              <h2 className="text-3xl font-semibold text-white">Phase 1: Standardization & CMS Foundation</h2>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <img src={Alltemplate} alt="Old UVC Website" className="rounded-2xl w-full border border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Section title="The Problem">
                <p>Legacy clinic websites were entirely disconnected. Key issues included:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Fragmented structures and deep UX inconsistencies.</li>
                  <li>No CMS governance, version control, or auditability.</li>
                  <li>High booking drop-offs with poor CTA visibility.</li>
                  <li>Minimal SEO reach due to severe content duplication.</li>
                </ul>
              </Section>

              <Section title="The Goals">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Unify the design language under scalable, flexible templates.</li>
                  <li>Improve page performance, discoverability, and conversion rates.</li>
                  <li>Empower regional marketing teams via centralized CMS control.</li>
                  <li>Enable service-level and location-specific business logic.</li>
                </ul>
              </Section>
            </div>

            <img src={Charcount} alt="Template Designs" className="rounded-2xl w-full border border-white/10" />

            <Section title="Template Strategy & Research">
              <p>After evaluating tools like Payload, Strapi, Webflow, and Drupal, we modeled the CMS on a hybrid approach for maximum flexibility, integrated with OneTrust for compliance across 112+ domains.</p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="font-semibold text-white mb-2">Developed Templates:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>General Practice (GP)</li>
                  <li>Specialty Clinic</li>
                  <li>Emergency Clinic (ER)</li>
                  <li>Specialty + Emergency Hybrid</li>
                  <li>Multi-Location Clinic</li>
                </ul>
              </div>
            </Section>

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
              <h2 className="text-3xl font-semibold text-white">Phase 2: Multi-Location Brand Hierarchy</h2>
              <div className="h-px bg-white/20 flex-grow"></div>
            </div>

            <img src={Templatemanager} alt="Multi Location Architecture" className="rounded-2xl w-full border border-white/10" />


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Section title="The Challenge">
                <p>
                  As UVC acquired larger hospital groups, the 1-to-1 template model broke down. We needed to accommodate &quot;Umbrella Brands&quot;—a single recognized hospital name that operated multiple physical locations (e.g., a North Campus and a South Campus), each offering vastly different services (GP vs. ER).
                </p>
              </Section>
              <Section title="The Solution">
                <p>
                  I architected a &quot;Parent-Child&quot; clinic template system. Users land on a unified brand portal that dynamically routes them to the correct physical location based on the service they need.
                </p>
                <ul className="list-disc ml-5 space-y-1 mt-3">
                  <li>Global service filtering at the brand level.</li>
                  <li>Location-specific booking integrations (VetStoria).</li>
                  <li>Shared team rosters with localized hours of operation.</li>
                </ul>
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



            <Section title="Empowering Customization at Scale">
              <p>
                While the templates from Phase 1 and 2 covered 80% of use cases, high-performing clinics demanded bespoke landing pages for specialized campaigns, new facility tours, and localized community events. Relying on dev resources for every new page was an unscalable bottleneck.
              </p>
            </Section>
            <img src={Sitebuilder} alt="UVC Custom Site Builder UI" className="rounded-2xl w-full border border-white/10" />


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Section title="Visual Canvas" className="md:col-span-1">
                <p>Designed a drag-and-drop interface inspired by Framer and Webflow, allowing regional managers to visually construct pages without writing code.</p>
              </Section>
              <Section title="Component Library" className="md:col-span-1">
                <p>Users build via pre-approved, WCAG-compliant blocks (Hero, Services, Testimonials) guaranteeing the brand system remains intact.</p>
              </Section>
              <Section title="Dynamic Binding" className="md:col-span-1">
                <p>Components automatically pull real-time clinic data (hours, addresses, doctors) from the central CMS, preventing outdated information.</p>
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