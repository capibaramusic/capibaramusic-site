import type { AreasContent } from "../types";

const areas = {
  label: "Qué hacemos",
  heading: ["Cuatro áreas", "de trabajo."],
  items: [
    {
      title: "CIRCULACIÓN ARTÍSTICA",
      activities: [
        "Asesoría y diagnóstico",
        "Booking y representación",
        "Gestión contractual",
      ],
      cta: { label: "Consultar esta área", href: "#contacto" },
    },
    {
      title: "PRODUCCIÓN CULTURAL",
      activities: ["Giras", "Coproducciones", "Coordinación local"],
      cta: { label: "Proponer un proyecto", href: "#contacto" },
    },
    {
      title: "EDUCACIÓN",
      status: "EN DESARROLLO",
      activities: [
        "Programas internacionales",
        "Música y mediación",
        "Migración y cooperación",
        "Alianzas educativas",
      ],
      cta: { label: "Explorar una alianza", href: "#contacto" },
    },
    {
      title: "TECNOLOGÍA CULTURAL",
      activities: [
        "App de gestión de booking",
        "App de Programación de salas",
        "Pilotos con organizaciones",
      ],
      cta: { label: "Prueba nuestras App (Próximamente)" },
    },
  ],
} satisfies AreasContent;

export default areas;
