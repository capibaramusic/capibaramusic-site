import type { NavigationContent } from "../types";

const navigation = {
  label: "Navegación principal",
  openLabel: "Abrir el menú",
  closeLabel: "Cerrar el menú",
  items: [
    { label: "Inicio", target: "inicio" },
    { label: "Quiénes Somos", target: "quienes-somos" },
    { label: "Áreas de Acción", target: "areas-de-accion" },
    { label: "Proyectos", target: "proyectos" },
    { label: "Roster", target: "roster" },
    { label: "Noticias", target: "news" },
    { label: "Contacto", target: "contacto" },
  ],
} satisfies NavigationContent;

export default navigation;
