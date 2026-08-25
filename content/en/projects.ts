import type { ProjectsContent } from "../types";

const projects = {
  label: "Projects",
  heading: ["Projects and", "initiatives."],
  selectionLabel: "Project selection",
  closeLabel: "Close details for",
  titles: {
    "la-ruidosa-podcast": "La Ruidosa",
  },
  details: {
    "la-ruidosa-podcast": {
      description:
        "La Ruidosa is a podcast about popular and community music produced by Cooperativa La Raíz. A space for conversation and reflection around experiences, projects and people connected to music, culture and social transformation.",
      ctaLabel: "Listen to the podcast",
    },
  },
} satisfies ProjectsContent;

export default projects;
