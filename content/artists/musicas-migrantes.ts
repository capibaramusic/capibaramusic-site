import type { Artist } from "./types";

// DATOS DEL ARTISTA
// Editar este archivo para actualizar textos, imagen o enlaces.
// No es necesario modificar Roster.tsx.

export const musicasMigrantes: Artist = {
  slug: "musicas-migrantes",
  name: "MÚSICAS MIGRANTES",
  image: "/assets/artists/musicas-migrantes/cover.png",
  content: {
    es: {
      headline:
        "UN DÚO CONTEMPORÁNEO QUE REIMAGINA EL CANCIONERO LATINOAMERICANO",
      genres: ["CANCIÓN LATINOAMERICANA", "ACÚSTICO", "FOLK"],
      imageAlt: "Músicas Migrantes en directo",
      description:
        "Músicas Migrantes es un dúo que reimagina el cancionero tradicional de Argentina y América Latina desde una perspectiva artística contemporánea. Con una sólida formación musical y profundas raíces en las tradiciones orales de Santiago del Estero y La Rioja, su repertorio entrelaza zambas, chacareras, canciones propias y nuevas composiciones, donde el folclore dialoga con el jazz, el rock y letras que exploran la profundidad de la experiencia humana.",
    },
    en: {
      headline: "A CONTEMPORARY DUO REIMAGINING THE LATIN AMERICAN SONGBOOK",
      genres: ["LATIN AMERICAN SONGWRITING", "ACOUSTIC", "FOLK"],
      imageAlt: "Músicas Migrantes performing live",
      description:
        "Músicas Migrantes is a duo that reimagines the traditional songbook of Argentina and Latin America through a contemporary artistic perspective. With a strong musical background and deep roots in the oral traditions of Santiago del Estero and La Rioja, their repertoire weaves together zambas, chacareras, original songs and new compositions, where folk music engages in a dialogue with jazz, rock and lyrics that explore the depth of the human experience.",
    },
  },

  // ==================================================
  // LINKS
  // Para actualizar un recurso, sustituir únicamente la URL.
  // Eliminar el elemento si ese enlace no debe mostrarse.
  // ==================================================
  links: [
    {
      label: "VIDEO",
      url: "https://drive.google.com/file/d/1DcoAXbwQ3vSrPXbWYelXcirYbtz09_1q/view?usp=drive_link",
    },
    { label: "VIDEO", url: "https://www.youtube.com/watch?v=OTR5PwJ5-bU" },
    {
      label: "MUSIC",
      url: "https://open.spotify.com/intl-es/album/6rUwrXUIgqiAXUTUgqQlq2?si=9gTGCNjFRfKSN1ddeTPUhg",
    },
  ],
};
