import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const kumbiaBoruka: Artist = {
  slug: "kumbia-boruka",
  bookingTerritory: { es: "España", en: "Spain" },
  name: "KUMBIA BORUKA",
  image: "/assets/artists/kumbia-boruka/cover.jpg",
  content: {
    es: {
      headline:
        "LOS PRINCIPALES EMBAJADORES DE LA CUMBIA MEXICANA CONTEMPORÁNEA",
      genres: ["CUMBIA MEXICANA", "REGGAE", "DUB"],
      imageAlt: "Kumbia Boruka en directo",
      description:
        "Con raíces en Monterrey, cuna de la cumbia mexicana contemporánea, Kumbia Boruka reinventa el género mediante una poderosa fusión de cumbia clásica, reggae, dub y ritmos tropicales. Liderada por Hernán Cortés, antiguo acordeonista y percusionista junto a la leyenda de la cumbia Celso Piña, la banda ofrece un directo explosivo con grooves irresistibles, vibrantes arreglos de metales y la energía inconfundible de la América Latina contemporánea.",
    },
    en: {
      headline: "THE LEADING AMBASSADORS OF MODERN MEXICAN CUMBIA",
      genres: ["MEXICAN CUMBIA", "REGGAE", "DUB"],
      imageAlt: "Kumbia Boruka performing live",
      description:
        "Rooted in Monterrey, the birthplace of modern Mexican cumbia, Kumbia Boruka reinvents the genre through a powerful fusion of classic cumbia, reggae, dub and tropical rhythms. Led by Hernán Cortés, former accordionist and percussionist alongside cumbia legend Celso Piña, the band's explosive live show delivers irresistible grooves, vibrant brass arrangements and the unmistakable energy of contemporary Latin America.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=VB8Gd6Xr4Cc" },
    {
      label: "LIVE",
      url: "https://www.youtube.com/watch?v=jP3IzcXTSL8&t=240s",
    },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/artist/3B7XF3wKmK3NFMO4AGfzd7?si=4pSdqXQITJq7iFhULkTWdg",
    },
    { label: "WEB", url: "https://www.kumbiaboruka.com/" },
  ],
};
