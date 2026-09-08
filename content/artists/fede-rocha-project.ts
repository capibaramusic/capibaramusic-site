import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const fedeRochaProject: Artist = {
  slug: "fede-rocha-project",
  bookingTerritory: { es: "Todo el mundo", en: "Worldwide" },
  name: "FEDE ROCHA PROJECT",
  image: "/assets/artists/fede-rocha-project/cover.png",
  content: {
    es: {
      headline: "JAZZ CONTEMPORÁNEO DESDE LA DIÁSPORA LATINOAMERICANA",
      genres: ["JAZZ CONTEMPORÁNEO", "HIP-HOP", "FUSIÓN"],
      imageAlt: "Fede Rocha Project en directo",
      description:
        "Fede Rocha Project explora el punto de encuentro entre el jazz contemporáneo, el hip hop y las tradiciones musicales sudamericanas. Liderado por el pianista y compositor chileno Federico Rocha, el conjunto presenta música original marcada por la migración, el groove y la improvisación, creando una voz fresca y singular dentro de la escena jazzística europea actual.",
    },
    en: {
      headline: "CONTEMPORARY JAZZ FROM THE LATIN AMERICAN DIASPORA",
      genres: ["CONTEMPORARY JAZZ", "HIP-HOP", "FUSION"],
      imageAlt: "Fede Rocha Project performing live",
      description:
        "Fede Rocha Project explores the meeting point between contemporary jazz, hip hop and South American musical traditions. Led by Chilean pianist and composer Federico Rocha, the ensemble presents original music shaped by migration, groove and improvisation, creating a fresh and distinctive voice within today's European jazz scene.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=QNYX8fxSGn8" },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/album/3r6B3Dw6tP0ppzUR7LOHkr?si=7yYf4BShQECZWHDIemd3OA",
    },
    {
      label: "EPK",
      url: "https://drive.google.com/file/d/1DcoAXbwQ3vSrPXbWYelXcirYbtz09_1q/view?usp=drive_link",
    },
  ],
};
