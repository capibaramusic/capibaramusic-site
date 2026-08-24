import type { ContactContent } from "../types";

const contact = {
  label: "Contact",
  heading: ["Let's build", "something together."],
  emails: [
    {
      area: "Artistic Circulation & Cultural Production",
      label: "booking.capibaramusic@gmail.com",
      href: "mailto:booking.capibaramusic@gmail.com",
    },
    {
      area: "Education & Tech",
      label: "capibaramusicbcn@gmail.com",
      href: "mailto:capibaramusicbcn@gmail.com",
    },
  ],
} satisfies ContactContent;

export default contact;
