import type { FooterContent } from "../types";

const footer = {
  brand: "CAPIBARA MUSIC",
  association: "Asociación Cultural",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  navigationLabel: "Navegación",
  navigationItems: ["Asociación", "Áreas", "Artistas", "Contacto"],
  copyright: "© 2026 Capibara Music",
  location: "Barcelona, España",
} satisfies FooterContent;

export default footer;
