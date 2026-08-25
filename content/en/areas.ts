import type { AreasContent } from "../types";

const areas = {
  label: "What we do",
  heading: ["Four areas", "of work."],
  items: [
    {
      title: "ARTISTIC CIRCULATION",
      activities: [
        "Advisory and diagnosis",
        "Booking and representation",
        "Contract management",
      ],
      cta: { label: "Ask about this area", href: "#contacto" },
    },
    {
      title: "CULTURAL PRODUCTION",
      activities: ["Tours", "Co-productions", "Local coordination"],
      cta: { label: "Propose a project", href: "#contacto" },
    },
    {
      title: "EDUCATION",
      status: "IN DEVELOPMENT",
      activities: [
        "International programmes",
        "Music and mediation",
        "Migration and cooperation",
        "Educational partnerships",
      ],
      cta: { label: "Explore a partnership", href: "#contacto" },
    },
    {
      title: "CULTURAL TECH",
      activities: [
        "Booking management app",
        "Venue programming app",
        "Pilots with organisations",
      ],
      cta: { label: "Try our apps (Coming soon)" },
    },
  ],
} satisfies AreasContent;

export default areas;
