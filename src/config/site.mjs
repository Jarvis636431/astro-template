// @ts-check
import { profile } from "./profile.mjs";
import { validateSiteSettings } from "./validate.mjs";
const name = "Developer Hub";
const username = profile.githubUsername.trim();
export const siteConfig = {
  name,
  title: `${name} — Portfolio and Writing`,
  description: `Projects and writing by ${profile.name}.`,
  url: "https://example.com",
  language: "en",
  timeZone: "UTC",
  email: profile.email,
  github: {
    username,
    url: username ? `https://github.com/${username}` : undefined,
  },
  image: { src: "/logo.svg", alt: `${name} logo` },
  favicon: { src: "/logo.svg", type: "image/svg+xml" },
  navLinks: [
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resume", label: "Resume" },
    { href: "/about", label: "About Me" },
  ],
  rss: {
    title: `${name} Writing`,
    description: "Notes on software and building useful things.",
    language: "en",
  },
};
validateSiteSettings(siteConfig);
