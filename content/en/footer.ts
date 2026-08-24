import type { FooterContent } from "../types";

const footer = {
  brand: "CAPIBARA MUSIC",
  association: "Cultural Association",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  navigationLabel: "Navigation",
  navigationItems: ["About", "Areas", "Artists", "Contact"],
  copyright: "© 2026 Capibara Music",
  location: "Barcelona, Spain",
} satisfies FooterContent;

export default footer;
