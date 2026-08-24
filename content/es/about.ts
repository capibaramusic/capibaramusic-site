import type { AboutContent } from "../types";

const about = {
  label: "Quiénes somos",
  heading: "Conectamos músicas de raíz latinoamericana en Europa",
  paragraphs: [
    "Capibara Music es una asociación cultural con sede en Barcelona especializada en circulación artística.",
    "Trabajamos con artistas y proyectos profesionales de músicos migrantes en Europa. Nos conectamos con festivales, salas y promotores. Hacemos booking y acompañamiento en giras. Gestionamos contratos, altas y facturación con agilidad.",
  ],
  ctas: [
    { label: "Conoce los artistas", href: "#roster" },
    { label: "Cuéntanos tu propuesta", href: "#contacto" },
  ],
  capabilities: [
    {
      title: "BOOKING",
      description: "Representación de proyectos en territorios definidos.",
    },
    {
      title: "GESTIÓN PROFESIONAL",
      description:
        "Contratos, altas, facturación y coordinación de giras y conciertos.",
    },
    {
      title: "PROYECTOS Y ALIANZAS",
      description:
        "Estudiamos giras, coproducciones y colaboraciones en España y Europa.",
    },
  ],
} satisfies AboutContent;

export default about;
