import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const niemNitai: Artist = {
  slug: "niem-nitai",
  bookingTerritory: { es: "Todo el mundo", en: "Worldwide" },
  name: "NIEM NITAI",
  image: "/assets/artists/niem-nitai/cover.jpg",
  content: {
    es: {
      headline:
        "LATIN BALKAN: CUMBIA, SKA, REGGAE Y GYPSY PUNK DESDE BARCELONA.",
      genres: ["CUMBIA", "SKA", "REGGAE", "GYPSY PUNK"],
      imageAlt: "Niem Nitai en directo",
      description:
        "Niem Nitai es una banda formada en Barcelona por músicos sudamericanos que fusiona cumbia, ska, reggae y gypsy punk bajo una expresión propia: “Latin Balkan”. Sus composiciones originales se caracterizan por un sonido potente y contagioso y una puesta en escena de atmósfera teatral y circense.",
    },
    en: {
      headline:
        "LATIN BALKAN: CUMBIA, SKA, REGGAE AND GYPSY PUNK FROM BARCELONA.",
      genres: ["CUMBIA", "SKA", "REGGAE", "GYPSY PUNK"],
      imageAlt: "Niem Nitai performing live",
      description:
        "Niem Nitai is a Barcelona-based band formed by South American musicians, blending cumbia, ska, reggae and gypsy punk into their own distinctive expression: “Latin Balkan”. Their original compositions combine a powerful, infectious sound with a live performance shaped by a theatrical and circus-like atmosphere.",
    },
  },
  links: [
    {
      label: "VIDEO",
      url: "https://www.youtube.com/watch?v=Qu83zl_FYIQ",
    },
    {
      label: "LIVE",
      url: "https://www.youtube.com/watch?v=ml1YQgHFdGc",
    },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/artist/3bTxKID66D7G9Q2loAYmZq?si=GQIR2D34TpmvcDdbGhPK2w",
    },
    {
      label: "WEB",
      url: "https://niemnitai.com",
    },
  ],
};
