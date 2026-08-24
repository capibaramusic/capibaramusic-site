import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const choloChicha: Artist = {
  slug: "cholo-chicha",
  name: "CHOLO CHICHA",
  image: "/assets/artists/cholo-chicha/cover.jpg",
  content: {
    es: {
      headline: "CHOLO CHICHA",
      genres: ["RAÍCES PERUANAS", "CUMBIA CHICHA", "WORLD MUSIC"],
      imageAlt: "Cholo Chicha en directo",
      description:
        "Con raíces en la chicha peruana, Cholo Chicha reúne ritmos tropicales, guitarras hipnóticas y energía contemporánea en un potente directo que conecta la tradición latinoamericana con los públicos globales de hoy.",
    },
    en: {
      headline: "CHOLO CHICHA",
      genres: ["PERUVIAN ROOTS", "CUMBIA CHICHA", "WORLD MUSIC"],
      imageAlt: "Cholo Chicha performing live",
      description:
        "Rooted in Peruvian chicha, Cholo Chicha brings together tropical rhythms, hypnotic guitars and contemporary energy in a powerful live show that connects Latin American tradition with today's global audiences.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=ONUwplk6dMw" },
    {
      label: "LIVE",
      url: "https://youtu.be/e-S2rrgphrU?si=xHINQsUBTmKrUDZ9",
    },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/artist/32jgCLCGfREYhutcwIl9c3?si=0jw5AcwbRuyWPJ1aQ1Ss0g&nd=1&dlsi=baa828b0b1f34003",
    },
    { label: "WEB", url: "https://cholochicha.com/" },
  ],
};
