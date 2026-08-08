export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://uphomes.in/sitemap.xml",
    host: "https://uphomes.in",
  };
}
