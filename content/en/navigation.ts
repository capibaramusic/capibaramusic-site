import type { NavigationContent } from "../types";

const navigation = {
  label: "Main navigation",
  openLabel: "Open menu",
  closeLabel: "Close menu",
  items: [
    { label: "Home", target: "inicio" },
    { label: "About Us", target: "quienes-somos" },
    { label: "Areas of Action", target: "areas-de-accion" },
    { label: "Projects", target: "proyectos" },
    { label: "Roster", target: "roster" },
    { label: "News", target: "news" },
    { label: "Contact", target: "contacto" },
  ],
} satisfies NavigationContent;

export default navigation;
