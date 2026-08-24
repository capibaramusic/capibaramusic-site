import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const calleMambo: Artist = {
  slug: "calle-mambo",
  name: "CALLE MAMBO",
  image: "/assets/artists/calle-mambo/cover.jpg",
  content: {
    es: {
      headline: "CALLE MAMBO",
      genres: ["FOLKLOR ELECTRO URBANO", "WORLD MUSIC"],
      imageAlt: "Calle Mambo en directo",
      description:
        "Calle Mambo ha creado su propio lenguaje musical —Folklor Electro Urbano—, fusionando instrumentos tradicionales latinoamericanos con sonidos electrónicos, influencias urbanas y ritmos ancestrales. Su potente directo propone un viaje enérgico, emotivo y bailable donde tradición e innovación se encuentran sobre el escenario.",
    },
    en: {
      headline: "CALLE MAMBO",
      genres: ["FOLKLOR ELECTRO URBANO", "WORLD MUSIC"],
      imageAlt: "Calle Mambo performing live",
      description:
        "Calle Mambo has created its own musical language — Folklor Electro Urbano — blending traditional Latin American instruments with electronic sounds, urban influences and ancestral rhythms. Their powerful live show is an energetic, heartfelt and danceable journey where tradition and innovation meet on stage.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=icJrVKrts-c" },
    { label: "LIVE", url: "https://www.youtube.com/watch?v=yWR627FpwoI" },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/artist/4Lp86mLjZ9OehWXVPEQtlN?si=wr32ooQVRCmPe75OtVjfGA",
    },
    { label: "WEB", url: "https://www.callemambooficial.com/" },
  ],
};
