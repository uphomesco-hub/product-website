/* global process */
export const dynamic = "force-static";

export default function manifest() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    name: "UpHomes",
    short_name: "UpHomes",
    description: "Verified rentals, direct contacts, and smarter home search.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#1d2429",
    theme_color: "#6657f4",
    icons: [
      {
        src: `${basePath}/uphomes.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
