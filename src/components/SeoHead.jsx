import { Helmet, HelmetProvider } from "react-helmet-async";

const SITE_URL = "https://www.sumansourabh.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suman Sourabh",
  url: SITE_URL,
  jobTitle: "Product Manager",
  description:
    "Product Manager with a CS/ML background shipping 0-to-1 products across AdTech and HealthTech, including AI features built on the Claude API.",
  sameAs: [
    "https://www.linkedin.com/in/sumansourabh9155/",
    "https://github.com/sumansourabh9155",
  ],
  knowsAbout: [
    "Product Management",
    "Product Strategy",
    "PRD Writing",
    "Roadmapping",
    "AI Product Development",
    "LLM Integration",
    "User Research",
    "A/B Testing",
    "SQL",
    "React",
  ],
};

const caseStudiesItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Product Management Case Studies",
  description:
    "Product management case studies covering the user problem, the product decisions made, and the measured outcomes.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Carter — Ad Platform Redesign & 0-to-1 DSP Launch",
        url: `${SITE_URL}/Projects/carter`,
        description:
          "Fixing a broken activation funnel on a B2B retail media platform, then launching a 0-to-1 demand-side platform.",
        about: "AdTech / Retail Media",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "UVC — CMS Architecture & 0-to-1 Site Builder",
        url: `${SITE_URL}/Projects/uvc`,
        description:
          "Unifying 130+ clinic websites under a relational CMS with a phased rollout and a no-code site builder.",
        about: "Healthcare / Enterprise CMS",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "GoDiverse — 1-Page Profile Builder with AI Assist",
        url: `${SITE_URL}/Projects/GoDiverse`,
        description:
          "Scoping a constraint-driven one-page builder with AI-assisted content for a supplier-diversity platform.",
        about: "SaaS / AI Integration",
      },
    },
  ],
};

const SeoHead = ({
  title = "Suman Sourabh | Product Manager — AI & 0-to-1 Products",
  description = "Product Manager with a CS/ML background shipping 0-to-1 products across AdTech and HealthTech — PRDs, roadmaps, cross-functional delivery, and AI features built on the Claude API.",
  keywords = "product manager, AI product manager, 0-to-1 products, product management case studies, PRD, roadmap, Claude API, technical product manager",
  canonicalUrl = SITE_URL,
  ogImage = `${SITE_URL}/android-chrome-512x512.png`,
  includeSchemas = ["person", "caseStudies"],
}) => {
  const schemaMap = {
    person: personSchema,
    caseStudies: caseStudiesItemList,
  };

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Suman Sourabh — Product Manager" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {includeSchemas.map((key) =>
        schemaMap[key] ? (
          <script key={key} type="application/ld+json">
            {JSON.stringify(schemaMap[key])}
          </script>
        ) : null
      )}
    </Helmet>
  );
};

export { SeoHead, HelmetProvider };
export default SeoHead;
