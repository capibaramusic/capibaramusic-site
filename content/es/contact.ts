import type { ContactContent } from "../types";

const contact = {
  label: "Contacto",
  heading: ["Construyamos", "algo juntos."],
  emails: [
    {
      area: "Circulación Artística y Producción Cultural",
      label: "booking.capibaramusic@gmail.com",
      href: "mailto:booking.capibaramusic@gmail.com",
    },
    {
      area: "Educación y Tecnología",
      label: "capibaramusicbcn@gmail.com",
      href: "mailto:capibaramusicbcn@gmail.com",
    },
  ],
} satisfies ContactContent;

export default contact;
