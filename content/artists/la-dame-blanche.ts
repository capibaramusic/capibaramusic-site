import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const laDameBlanche: Artist = {
  slug: "la-dame-blanche",
  name: "LA DAME BLANCHE",
  image: "/assets/artists/la-dame-blanche/cover.jpg",
  content: {
    es: {
      headline: "LA DAME BLANCHE",
      genres: ["AFROCUBANO", "HIP HOP", "CUMBIA", "DANCEHALL"],
      imageAlt: "La Dame Blanche en directo",
      description:
        "La Dame Blanche fusiona raíces afrocubanas con hip hop, trap, reggae, dancehall y cumbia para crear un sonido audaz e inconfundible. Liderado por la cantante y flautista cubana Yaite Ramos Rodríguez, su explosivo directo combina letras poderosas, ritmos urbanos y una presencia escénica magnética en una vibrante celebración de la fuerza, la identidad y la libertad.",
    },
    en: {
      headline: "LA DAME BLANCHE",
      genres: ["AFRO-CUBAN", "HIP HOP", "CUMBIA", "DANCEHALL"],
      imageAlt: "La Dame Blanche performing live",
      description:
        "La Dame Blanche blends Afro-Cuban roots with hip hop, trap, reggae, dancehall and cumbia to create a bold and unmistakable sound. Led by Cuban singer and flautist Yaite Ramos Rodríguez, her explosive live show combines powerful lyrics, urban beats and magnetic stage presence into a vibrant celebration of strength, identity and freedom.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=eDvSQo2ghwY" },
    { label: "LIVE", url: "https://www.youtube.com/watch?v=gKIwLgXPR_M" },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/artist/6u4VjE5cKZRnY451pcfhbG?si=4BTOKOLZSdy0E_wiITNTcA",
    },
    { label: "WEB", url: "https://ladameblanche.net/" },
  ],
};
