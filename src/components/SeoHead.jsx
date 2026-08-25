import { Helmet, HelmetProvider } from "react-helmet-async";

const SITE_URL = "https://www.sumansourabh.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suman Sourabh",
  url: SITE_URL,
  jobTitle: "Product Designer",
  description:
    "Product Designer with a CS/ML background — designing 0-to-1 AI products end-to-end across AdTech and HealthTech, building design systems, and shipping the UI in React.",
  sameAs: [
    "https://www.linkedin.com/in/sumansourabh9155/",
    "https://github.com/sumansourabh9155",
  ],
  knowsAbout: [
    "Product Design",
    "UX Design",
    "Interaction Design",
    "Design Systems",
    "User Research",
    "Usability Testing",
    "AI-Native Design",
    "Accessibility",
    "Figma",
    "React",
  ],
};

const caseStudiesItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Product Design Case Studies",
  description:
    "Product design case studies covering the user problem, the design decisions made, and the measured outcomes.",
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
        name: "Poppins — Conversational Finance App for iOS",
        url: `${SITE_URL}/Projects/poppins`,
        description:
          "Designing an iOS conversational finance assistant around one explainable Safe to Spend figure and a two-voice system — and the decision to stop at v1 scope.",
        about: "iOS / Consumer Fintech",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Atlas — CMS Architecture & 0-to-1 Site Builder",
        url: `${SITE_URL}/Projects/atlas`,
        description:
          "Unifying 130+ clinic websites under a relational CMS with a phased rollout and a no-code site builder.",
        about: "Healthcare / Enterprise CMS",
      },
    },
  ],
};

const SeoHead = ({
  title = "Suman Sourabh | Product Designer — AI-Native UX, Design Systems, 0-to-1",
  description = "Product Designer with a CS/ML background — end-to-end design of 0-to-1 AI products across AdTech and HealthTech, design systems, and shipping the UI in React.",
  keywords = "product designer, ui/ux designer, product design portfolio, design systems, interaction design, AI-native design, UX research, usability testing, Figma, React",
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
      <meta property="og:site_name" content="Suman Sourabh — Product Designer" />

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
