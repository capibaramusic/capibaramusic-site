import type { NewsContent } from "../types";

const news = {
  label: "Noticias",
  heading: "Qué está pasando",
  items: [
    {
      id: "01",
      date: "Fecha",
      title: "Cholo Chicha se presenta en el Festival de Pardiñas",
      href: null,
    },
    {
      id: "02",
      date: "Fecha",
      title: "Cholo Chicha lleva su directo a Bulgaria",
      href: null,
    },
    {
      id: "03",
      date: "Fecha",
      title:
        "Buscamos asociaciones para nuestra aplicación de programación cultural",
      href: null,
    },
    {
      id: "04",
      date: "Fecha",
      title: "Fede Rocha Project se incorpora a nuestro Roster",
      href: null,
    },
    {
      id: "05",
      date: "Fecha",
      title: "Calle Mambo sigue en ruta",
      href: null,
    },
  ],
  allNewsCta: {
    label: "Ver todas las noticias",
    href: null,
  },
} satisfies NewsContent;

export default news;
