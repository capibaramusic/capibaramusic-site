import type { ProjectsContent } from "../types";

const projects = {
  label: "Proyectos",
  heading: ["Proyectos e", "iniciativas."],
  selectionLabel: "Selección de proyectos",
  closeLabel: "Cerrar los detalles de",
  titles: {
    "la-ruidosa-podcast": "La Ruidosa",
  },
  details: {
    "la-ruidosa-podcast": {
      description:
        "La Ruidosa es un podcast sobre músicas populares y comunitarias impulsado por la Cooperativa La Raíz. Un espacio de conversación y reflexión en torno a experiencias, proyectos y personas vinculadas a la música, la cultura y la transformación social.",
      ctaLabel: "Escucha el podcast",
    },
  },
} satisfies ProjectsContent;

export default projects;
