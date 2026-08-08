/* global process */
import localFont from "next/font/local";
import "../src/index.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const proximaNova = localFont({
  src: "../public/fonts/ProximaNova-Regular.otf",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://uphomes.in"),
  title: {
    default: "UpHomes | Verified Rentals, Flatmates, Contact Unlock, and AI Home Search",
    template: "%s | UpHomes",
  },
  description:
    "Find verified rentals and flatmates in Pune, Bengaluru, Mumbai, Gurugram, and Hyderabad. Compare clear property details, unlock contacts, and search smarter with UpHomes.",
  keywords: [
    "verified rentals",
    "rental homes India",
    "flatmates India",
    "contact unlock",
    "owner direct rentals",
    "flats for rent",
    "AI property search",
    "rentals in Pune",
    "rentals in Bengaluru",
    "rentals in Mumbai",
    "rentals in Gurugram",
    "rentals in Hyderabad",
    "UpHomes",
  ],
  applicationName: "UpHomes",
  authors: [{ name: "UpHomes", url: "https://uphomes.in" }],
  creator: "UpHomes",
  publisher: "UpHomes",
  category: "real estate",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "UpHomes",
    title: "UpHomes | Verified Rentals, Flatmates, Contact Unlock, and AI Home Search",
    description:
      "Find verified rentals and flatmates across Pune, Bengaluru, Mumbai, Gurugram, and Hyderabad, then unlock the contacts you choose.",
    images: [
      {
        url: "/uphomes/properties/gurugram.jpg",
        width: 1280,
        height: 960,
        alt: "Verified UpHomes rental property in Gurugram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UpHomes | Verified Rentals and Contact Unlock",
    description:
      "Search verified rentals and flatmates across five UpHomes cities.",
    images: ["/uphomes/properties/gurugram.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: `${basePath}/uphomes.ico`,
    shortcut: `${basePath}/uphomes.ico`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d2429",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={proximaNova.className}>{children}</body>
    </html>
  );
}
