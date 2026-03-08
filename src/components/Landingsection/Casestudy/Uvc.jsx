import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Newuvc from "../../../assets/uvc/newuvc.png";
import Cms from "../../../assets/uvc/cms.png";
import Old from "../../../assets/uvc/old.png";
import Text from "../../../assets/uvc/text.png";
import Template from "../../../assets/uvc/template.png";
import SEO from "../../SEO";

const Section = ({ title, children }) => (
  <section className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl space-y-6">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <div className="text-gray-300 text-base">{children}</div>
  </section>
);

const Uvc = () => {
  return (
    <div className="font-sans text-white bg-black">
      <SEO
        title="United Veterinary Care - Case Study"
        description="CMS and website redesign for United Veterinary Care, improving SEO, booking UX, and content governance for 130+ clinics."
        keywords="case study, uvc, veterinary, cms, redesign, seo"
        url="https://www.sumansourabh.com/Projects/uvc"
      />
      <Navbar />
      <div className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-14">

          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 backdrop-blur px-4 py-1 rounded-full">
              ◎ Clinical Website & CMS Redesign
            </div>
            <h1 className="text-5xl font-semibold">
              United Veterinary Care{" "}
              <span className="text-gray-300 font-medium">Case Study</span>
            </h1>
            <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
              A modular CMS and scalable design system to support 130+ clinics with improved SEO, booking UX, and content governance.
            </p>
          </div>

          {/* Overview */}
          <Section title="Overview">
            <p>United Veterinary Care (UVC) operates 130+ clinics in the U.S. with services spanning General Practice, Specialty, and Emergency. The redesign modernized UVC&apos;s digital footprint with a future-proof CMS and UX strategy.</p>
            <ul className="list-disc ml-5 mt-4 space-y-1">
              <li>Designed scalable, reusable website templates</li>
              <li>Planned CMS flows aligning with business and clinic autonomy</li>
              <li>Enabled flexible localization and SEO optimization</li>
              <li>Collaborated with dev teams for seamless implementation</li>
            </ul>
          </Section>

          <img src={Old} alt="" />



          {/* Problem Statement */}
          <Section title="Problem Statement">
            <p>Legacy clinic websites were disconnected with:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Fragmented structures and UX inconsistencies</li>
              <li>No CMS governance or auditability</li>
              <li>High booking drop-offs and poor CTA visibility</li>
              <li>Minimal SEO reach due to content duplication</li>
            </ul>
          </Section>

          {/* Goals */}
          <img src={Template} alt="" />

          <Section title="Goals">
            <ul className="list-disc ml-5 space-y-1">
              <li>Unify design under consistent, scalable templates</li>
              <li>Improve performance, discoverability, and conversion</li>
              <li>Empower regional teams via CMS control</li>
              <li>Enable service-level and location-specific logic</li>
            </ul>
          </Section>

          {/* Research & Analysis */}
          <img src={Cms} alt="" />
          <Section title="Research & Competitive Analysis">
            <p><strong>CMS Tools Analyzed:</strong> Payload, Strapi, Directus, Drupal, Webflow</p>
            <p><strong>Final Stack:</strong> CMS modeled on Payload + Strapi for flexibility</p>
            <p><strong>Consent Solution:</strong> OneTrust chosen for GDPR/CCPA compliance across 112+ domains</p>
            <p><strong>SEO Audit Stats:</strong> 68% bounce rate, only 35% schema indexation, 70% CTA drop-off</p>
            <p><strong>Booking Friction:</strong> Average 3+ clicks to booking with no local fallback</p>
          </Section>

          {/* Template Strategy */}
          <img src={Text} alt="" />
          <Section title="Template Design Strategy">
            <ul className="list-disc ml-5 space-y-1">
              <li>UVC Corporate Landing Page</li>
              <li>General Practice Template</li>
              <li>Specialty Clinic Template</li>
              <li>Emergency Clinic Template</li>
              <li>Specialty + Emergency Hybrid Template</li>
            </ul>
            <p className="mt-4"><strong>Design System:</strong> Glassmorphism UI, CTA-first layout, WCAG 2.1 compliance</p>
            <p className="text-green-400 mt-2">🚀 Avg. load time ↓ 32%, Lighthouse ↑ 61 → 92, CTA rate ↑ 47%</p>
          </Section>

          {/* CMS Flow */}
          <img src={Newuvc} alt="" />
          <Section title="CMS Flow & Planning">
            <ul className="list-disc ml-5 space-y-1">
              <li>Modular page builder with drag-and-drop elements</li>
              <li>Role-based access: Admin, Regional Manager, Content Editor</li>
              <li>Service toggles per location from a master service list</li>
              <li>Built-in SEO fields, versioning, and publishing schedule</li>
              <li>Localization tools (tone, promotions, schema)</li>
            </ul>
          </Section>

          {/* Booking Optimization */}
          <Section title="Booking UX Optimization">
            <p>VetStoria integration supported by smart CTA fallback logic, embedded modals, and group location filtering to reduce drop-off.</p>
            <p className="text-green-400 mt-2">📈 Booking conversion ↑ 29%, modal-based flows 2.1× more effective</p>
          </Section>

          {/* SEO Strategy */}
          <Section title="SEO & Performance Strategy">
            <ul className="list-disc ml-5 space-y-1">
              <li>Schema markup: VetService, Article, LocalBusiness</li>
              <li>CDN + Lazy load + responsive image delivery</li>
              <li>GA4, GTM + Event tracking (scroll, sessions, bookings)</li>
            </ul>
            <p className="text-green-400 mt-2">📊 Indexed pages ↑ 74%, Organic traffic ↑ 41%</p>
          </Section>

          {/* Outcome */}
          <Section title="Outcome & Impact">
            <ul className="list-disc ml-5 space-y-1">
              <li>100+ clinics launched under CMS control</li>
              <li>47% boost in interaction and conversion metrics</li>
              <li>Admin update time ↓ 38% due to streamlined workflows</li>
              <li>CMS structure supports scalable expansion</li>
            </ul>
          </Section>

          {/* Reflection */}
          <Section title="Reflection">
            <p>This case study combined high-volume UX challenges, centralized CMS planning, and legal/operational compliance. The success lies in delivering a consistent yet flexible experience for both local clinics and national stakeholders.</p>
          </Section>


          {/* CTA */}
          <div className="text-center space-y-4 pt-10">
            <h3 className="text-2xl font-semibold">Let’s design your next scalable product</h3>
            <p className="text-sm text-gray-400">Now open to collaborative design & product strategy roles</p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:opacity-90 transition"
            >
              Connect with Me →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Uvc;