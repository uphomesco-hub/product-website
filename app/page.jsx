import App from "../src/App";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UpHomes",
  url: "https://uphomes.in",
  logo: "https://uphomes.in/logo.png",
  email: "contact@uphomes.in",
  sameAs: [
    "https://www.instagram.com/uphomes.in/",
    "https://www.facebook.com/profile.php?id=61572085060403",
    "https://www.linkedin.com/company/uphomes/",
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UpHomes",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android, iOS",
  description:
    "Find verified rental homes, unlock direct owner contacts, and get smarter rental recommendations.",
  url: "https://uphomes.in",
  downloadUrl: [
    "https://apps.apple.com/in/app/uphomes/id6737268880",
    "https://play.google.com/store/apps/details?id=com.flutterflow.homeU742786",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UpHomes",
  url: "https://uphomes.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://uphomes.in/search?term={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does UpHomes help me find verified rental homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search cleaner rental details, compare important information, unlock owner contacts, and get recommendations based on your requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is Contact Unlock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Unlock gives you owner contacts in the UpHomes app. You choose which owners you want to call or message.",
      },
    },
    {
      "@type": "Question",
      name: "Will UpHomes share my phone number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. UpHomes does not sell your phone number or send it to random owners. You control whom you contact.",
      },
    },
    {
      "@type": "Question",
      name: "Does UpHomes handle rent, deposits, or agreements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UpHomes supports discovery and owner contact. Final rent, deposit, agreement, token, and move-in terms remain between renter and owner.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            appSchema,
            websiteSchema,
            faqSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <App />
    </>
  );
}
