import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SITE_URL = "https://www.sumansourabh.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suman Sourabh",
  url: SITE_URL,
  jobTitle: "SaaS Product Strategist",
  description:
    "Suman Sourabh is a SaaS Product Strategist who helps VC-backed founders reduce churn and increase retention through psychology-driven UX and rapid MVP deployment.",
  sameAs: [
    "https://www.linkedin.com/in/sumansourabh",
    "https://twitter.com/sumansourabh",
    "https://github.com/sumansourabh",
  ],
  knowsAbout: [
    "SaaS Retention",
    "Churn Reduction",
    "MVP Strategy",
    "React",
    "UX Psychology",
    "Product Management",
    "Conversion Optimization",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Suman Sourabh - SaaS Product Strategy",
  url: SITE_URL,
  description:
    "High-ticket SaaS product strategy consulting. Specializing in churn reduction, retention design, and rapid MVP deployment for VC-backed startups.",
  priceRange: "$$$-$$$$",
  areaServed: "Worldwide",
  provider: {
    "@type": "Person",
    name: "Suman Sourabh",
  },
  knowsAbout: [
    "SaaS Retention",
    "Churn Reduction",
    "MVP Strategy",
    "React",
    "UX Psychology",
    "Conversion Optimization",
    "Product Management",
    "Behavioral Psychology",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Product Audit",
      price: "2000",
      priceCurrency: "USD",
      description:
        "Comprehensive UX/UI audit with conversion & retention analysis and actionable recommendations.",
    },
    {
      "@type": "Offer",
      name: "MVP Design Sprint",
      price: "5000",
      priceCurrency: "USD",
      description:
        "Full MVP design in 2-3 weeks including user flows, wireframes, high-fidelity prototypes, and design system.",
    },
    {
      "@type": "Offer",
      name: "Monthly Retainer",
      price: "3500",
      priceCurrency: "USD",
      description:
        "Ongoing product design partnership with ~80 hours/month, feature design, A/B testing, and weekly sync calls.",
    },
  ],
};

const caseStudiesItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SaaS Product Strategy Case Studies",
  description:
    "Real case studies demonstrating measurable business outcomes through psychology-driven UX and product strategy.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Reducing Cart Abandonment by 25%",
        description:
          "E-commerce platform optimization that reduced cart abandonment through trust-building UX patterns.",
        about: "E-commerce Platform",
        offers: {
          "@type": "Offer",
          businessFunction: "Reduced cart abandonment by 25%",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Simplifying NFT Minting Experience",
        description:
          "Web3 platform UX redesign that simplified complex minting flows for mainstream users.",
        about: "Web3 Platform",
        offers: {
          "@type": "Offer",
          businessFunction: "Simplified NFT minting for mainstream adoption",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Streamlining Job Application Flow",
        description:
          "Job marketplace UX optimization that increased application completion rates.",
        about: "Job Marketplace",
        offers: {
          "@type": "Offer",
          businessFunction: "Streamlined application flow for higher completion",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Boosting Add-to-Cart Rate by 35%",
        description:
          "Fashion e-commerce product discovery redesign that increased add-to-cart conversions.",
        about: "Fashion E-commerce",
        offers: {
          "@type": "Offer",
          businessFunction: "Increased add-to-cart rate by 35%",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Improving Merchant Onboarding",
        description:
          "E-commerce platform merchant onboarding redesign reducing time-to-first-sale.",
        about: "E-commerce Platform",
        offers: {
          "@type": "Offer",
          businessFunction: "Improved merchant onboarding conversion",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "CreativeWork",
        name: "Simplifying Developer Documentation",
        description:
          "API platform documentation redesign that improved developer onboarding and integration speed.",
        about: "API Platform",
        offers: {
          "@type": "Offer",
          businessFunction: "Simplified developer onboarding",
        },
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you code what you design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I understand React, Tailwind, and component architecture. This means I design with Dev Feasibility in mind—saving your engineering team hundreds of hours in back-and-forth fixes.",
      },
    },
    {
      "@type": "Question",
      name: "My product is already live. Can you just fix the UX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is my Audit & Fix engagement. I review your current flow, identify high-churn friction points, and provide a prioritized list of fixes to improve retention immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How do you charge? Fixed price or Retainer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For defined scopes (like an Audit or MVP Sprint), I charge a fixed fee ($2k - $5k). For ongoing growth and iteration, I work on a monthly retainer ($3.5k/mo), acting as your fractional Head of Product.",
      },
    },
    {
      "@type": "Question",
      name: "What is the timeline for an MVP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical MVP Sprints take 2-3 weeks. Week 1 is Strategy & Wireframes. Week 2 is High-Fidelity & Prototyping. Week 3 is Handoff & Documentation.",
      },
    },
  ],
};

const SeoHead = ({
  title = "SaaS Product Strategist - Reducing Churn & Scaling Revenue | Suman Sourabh",
  description = "Suman Sourabh is a SaaS Product Strategist who helps VC-backed founders reduce churn and increase retention through psychology-driven UX and rapid MVP deployment.",
  canonicalUrl = SITE_URL,
  ogImage = `${SITE_URL}/android-chrome-512x512.png`,
  includeSchemas = ["person", "service", "caseStudies", "faq"],
}) => {
  const schemaMap = {
    person: personSchema,
    service: professionalServiceSchema,
    caseStudies: caseStudiesItemList,
    faq: faqSchema,
  };

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Suman Sourabh - SaaS Product Strategist" />

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
