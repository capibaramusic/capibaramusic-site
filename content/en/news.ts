import type { NewsContent } from "../types";

const news = {
  label: "News",
  heading: "What's happening",
  items: [
    {
      id: "01",
      date: "Date",
      title: "Cholo Chicha performs at the Festival de Pardiñas",
      href: null,
    },
    {
      id: "02",
      date: "Date",
      title: "Cholo Chicha takes its live show to Bulgaria",
      href: null,
    },
    {
      id: "03",
      date: "Date",
      title:
        "We are looking for associations for our cultural programming application",
      href: null,
    },
    {
      id: "04",
      date: "Date",
      title: "Fede Rocha Project joins our roster",
      href: null,
    },
    {
      id: "05",
      date: "Date",
      title: "Calle Mambo stays on the road",
      href: null,
    },
  ],
  allNewsCta: {
    label: "View all news",
    href: null,
  },
} satisfies NewsContent;

export default news;
