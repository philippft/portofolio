import { profile, ui } from "@/content/content";

// Set NEXT_PUBLIC_SITE_URL to the live domain (for example in .env.production or the host's settings).
// Open Graph images, the sitemap and canonical URLs are built from it.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const siteName = profile.brandName;

export const ogImage = {
  url: profile.photo,
  width: 800,
  height: 800,
  alt: ui.card.photoAlt.en,
};
