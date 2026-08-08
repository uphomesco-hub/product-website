export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();

  return [
    ["https://uphomes.in", "weekly", 1],
    ["https://uphomes.in/search", "daily", 0.95],
    ["https://uphomes.in/list-property", "monthly", 0.8],
    ["https://uphomes.in/faq", "monthly", 0.7],
    ["https://uphomes.in/blogs", "weekly", 0.8],
  ].map(([url, changeFrequency, priority]) => ({
    url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
