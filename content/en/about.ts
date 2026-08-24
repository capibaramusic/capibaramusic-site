import type { AboutContent } from "../types";

const about = {
  label: "About us",
  heading: "Connecting Latin American roots music across Europe",
  paragraphs: [
    "Capibara Music is a Barcelona-based cultural association specialising in artistic circulation.",
    "We work with professional artists and projects by migrant musicians in Europe. We connect with festivals, venues and promoters. We provide booking and tour support, while managing contracts, artist registrations and invoicing efficiently.",
  ],
  ctas: [
    { label: "Meet the artists", href: "#roster" },
    { label: "Tell us about your project", href: "#contacto" },
  ],
  capabilities: [
    {
      title: "BOOKING",
      description: "Representation of projects in defined territories.",
    },
    {
      title: "PROFESSIONAL MANAGEMENT",
      description:
        "Contracts, artist registrations, invoicing and coordination of tours and concerts.",
    },
    {
      title: "PROJECTS & PARTNERSHIPS",
      description:
        "We explore tours, co-productions and collaborations in Spain and Europe.",
    },
  ],
} satisfies AboutContent;

export default about;
