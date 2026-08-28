import type { Locale } from "..";

export type ArticleTextSegment = {
  text: string;
  linkId?: string;
};

export type NewsArticleBlock =
  | { type: "paragraph"; content: readonly ArticleTextSegment[] }
  | { type: "image"; imageId: string }
  | { type: "link"; linkId: string; label: string }
  | { type: "video" };

type LocalizedArticle = {
  title: string;
  excerpt: string;
  body: readonly NewsArticleBlock[];
  videoTitle: string;
};

export type NewsArticle = {
  slug: string;
  date: string;
  publishedAt: string;
  translations: Record<Locale, LocalizedArticle>;
  coverImage: { src: string; width: number; height: number };
  internalImages: Readonly<
    Record<string, { src: string; width: number; height: number }>
  >;
  video?: { embedUrl: string };
  links?: Readonly<Record<string, { href: string }>>;
};

const assetRoot = "/assets/news/cholo-chicha-a-to-jazz-2026";

const sharedBlocks = {
  image01: { type: "image", imageId: "01" },
  image02: { type: "image", imageId: "02" },
  image03: { type: "image", imageId: "03" },
  image04: { type: "image", imageId: "04" },
  video: { type: "video" },
} as const satisfies Record<string, NewsArticleBlock>;

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: "cholo-chicha-a-to-jazz-2026",
    date: "5 JUL 2026",
    publishedAt: "2026-07-05",
    coverImage: {
      src: `${assetRoot}/cover.jpg`,
      width: 2504,
      height: 1500,
    },
    internalImages: {
      "01": { src: `${assetRoot}/01.jpg`, width: 2048, height: 1363 },
      "02": { src: `${assetRoot}/02.jpg`, width: 2000, height: 1331 },
      "03": { src: `${assetRoot}/03.jpg`, width: 2000, height: 1331 },
      "04": { src: `${assetRoot}/04.jpg`, width: 2000, height: 1331 },
    },
    links: {
      showcase: { href: "https://atojazz.bg/en/showcase/" },
      delegates: { href: "https://atojazz.bg/en/delegates/" },
      interview: { href: "https://www.mapamundimusica.com/en/2026/07/" },
    },
    video: {
      embedUrl: "https://www.youtube.com/embed/e-S2rrgphrU",
    },
    translations: {
      es: {
        title: "Cholo Chicha lleva el sabor de la nueva chicha hasta Sofía",
        excerpt: "La banda participó en el World Music Showcase de A to JazZ Festival y presentó su proyecto ante programadores, periodistas y profesionales de la industria musical europea.",
        videoTitle: "Cholo Chicha en A to JazZ Festival",
        body: [
          { type: "paragraph", content: [{ text: "Durante tres días, Cholo Chicha convirtió Sofía en una nueva escala de su proceso de internacionalización. Entre el 1 y el 3 de julio de 2026, la formación barcelonesa desplegó su directo en la capital búlgara, participó en el World Music Showcase de A to JazZ Festival y llevó su propuesta ante una nutrida representación de la industria europea del jazz, el folk y las músicas del mundo." }] },
          { type: "paragraph", content: [{ text: "Nacida en Barcelona y atravesada por distintas experiencias migratorias de Perú, Chile, Venezuela, Irlanda y Azerbaiyan, Cholo Chicha no entiende la tradición como una pieza de museo. Su punto de partida es la chicha peruana, pero su lenguaje se expande hacia el rap, el rock, el reggae, la salsa y otras formas de la música popular latinoamericana. No se trata de sumar géneros como etiquetas, sino de hacerlos convivir dentro de un directo pensado para el movimiento, el baile y el encuentro." }] },
          sharedBlocks.image01,
          { type: "paragraph", content: [{ text: "Ese carácter híbrido llevó al grupo hasta la " }, { text: "selección oficial del World Music Showcase de A to JazZ", linkId: "showcase" }, { text: ", una plataforma impulsada por UPBEAT y respaldada por la Unión Europea. Cholo Chicha fue una de las trece propuestas internacionales escogidas para presentarse junto a proyectos procedentes de Italia, Noruega, Turquía, Portugal, Francia, Bulgaria, Países Bajos, Hungría, Reunión, Grecia y Alemania." }] },
          sharedBlocks.image02,
          { type: "paragraph", content: [{ text: "A las 22:10 puntuales, la banda dispuso de treinta minutos para condensar su identidad escénica. Un formato breve y exigente: entrar, conectar y dejar clara una propuesta sin el tiempo de desarrollo de un concierto convencional. En ese marco, Cholo Chicha mostró la dimensión contemporánea de una música que nació del cruce entre la tradición andina y la electrificación de la cumbia peruana, pero que continúa transformándose al pasar por nuevas ciudades, generaciones y contextos migratorios." }] },
          { type: "paragraph", content: [{ text: "Frente al escenario se encontraba una delegación integrada por programadores, responsables de festivales, agentes, periodistas y representantes de plataformas internacionales. Entre los profesionales acreditados figuraban Araceli Tzigane, directora de Mapamundi Música y cofundadora de Transglobal World Music Chart; Jan Hoozee, director artístico de Trefpunt Festival; Olivier Rey, director de Babel Music XP; Petra y Matyáš Hradil, vinculados a Czech Music Crossroads; y representantes de Europe Jazz Network, jazzahead!, Puglia Sounds, Medimex y Ronnie Scott’s, entre otras organizaciones." }] },
          { type: "link", linkId: "delegates", label: "Consulta la delegación profesional de A to JazZ" },
          sharedBlocks.image03,
          { type: "paragraph", content: [{ text: "La actividad continuó el 3 de julio con una ronda de speed meetings entre artistas y profesionales. Más allá de la exposición puntual del concierto, estas reuniones permitieron presentar el recorrido de Cholo Chicha, establecer nuevos contactos y situar al grupo dentro del mapa europeo de festivales, mercados y plataformas dedicadas a las músicas de raíz contemporáneas." }] },
          sharedBlocks.image04,
          { type: "paragraph", content: [{ text: "La visita también abrió un espacio para presentar el trabajo de Capibara Music. Después de las reuniones, Araceli Tzigane entrevistó a César Olivares sobre el nacimiento de la asociación, las dificultades que enfrentan los músicos migrantes para acceder a los circuitos profesionales y la necesidad de construir nuevas herramientas de circulación para los proyectos latinoamericanos radicados en Europa. La conversación fue publicada posteriormente por Mapamundi Música, conectando la actuación de Cholo Chicha con un debate más amplio sobre migración, visibilidad y profesionalización musical." }] },
          { type: "link", linkId: "interview", label: "Leer la entrevista en Mapamundi Música" },
          { type: "paragraph", content: [{ text: "La participación en A to JazZ no fue solamente otra fecha dentro de la gira de 2026. Supuso la entrada de Cholo Chicha en un espacio donde el escenario y la industria se miran de frente: un punto de encuentro entre el jazz, el folk, las músicas del mundo y los nuevos proyectos que están revisando sus raíces desde la experiencia contemporánea." }] },
          { type: "paragraph", content: [{ text: "El concierto completo fue registrado por la organización con sonido e imagen profesionales y se encuentra disponible en el canal oficial de A to JazZ Festival." }] },
          sharedBlocks.video,
          { type: "paragraph", content: [{ text: "Un documento que captura un momento preciso en el recorrido del grupo: una banda nacida en Barcelona, con la chicha como columna vertebral, comenzando a abrir su propio camino dentro del circuito internacional europeo." }] },
        ],
      },
      en: {
        title: "Cholo Chicha brings the flavor of new chicha to Sofia",
        excerpt: "The band took part in the World Music Showcase at A to JazZ Festival and presented its project to programmers, journalists and professionals from the European music industry.",
        videoTitle: "Cholo Chicha at A to JazZ Festival",
        body: [
          { type: "paragraph", content: [{ text: "For three days, Cholo Chicha turned Sofia into a new stop in its internationalization process. Between July 1 and 3, 2026, the Barcelona-based band brought its live show to the Bulgarian capital, took part in the World Music Showcase at A to JazZ Festival and presented its work to a broad representation of the European jazz, folk and world music industry." }] },
          { type: "paragraph", content: [{ text: "Born in Barcelona and shaped by different migration experiences from Peru, Chile, Venezuela, Ireland and Azerbaijan, Cholo Chicha does not understand tradition as a museum piece. Its starting point is Peruvian chicha, but its language expands into rap, rock, reggae, salsa and other forms of Latin American popular music. It is not about adding genres as labels, but about making them coexist within a live show designed for movement, dance and encounter." }] },
          sharedBlocks.image01,
          { type: "paragraph", content: [{ text: "That hybrid character brought the group to the " }, { text: "official selection of the World Music Showcase at A to JazZ", linkId: "showcase" }, { text: ", a platform powered by UPBEAT and supported by the European Union. Cholo Chicha was one of thirteen international acts selected to perform alongside projects from Italy, Norway, Turkey, Portugal, France, Bulgaria, the Netherlands, Hungary, Réunion, Greece and Germany." }] },
          sharedBlocks.image02,
          { type: "paragraph", content: [{ text: "At exactly 10:10 p.m., the band had thirty minutes to condense its stage identity. A brief and demanding format: step in, connect and make the proposal clear without the development time of a conventional concert. In that setting, Cholo Chicha showed the contemporary dimension of a music born from the meeting of Andean tradition and the electrification of Peruvian cumbia, one that continues to transform as it passes through new cities, generations and migration contexts." }] },
          { type: "paragraph", content: [{ text: "In front of the stage was a delegation of programmers, festival directors, agents, journalists and representatives of international platforms. Accredited professionals included Araceli Tzigane, director of Mapamundi Música and co-founder of the Transglobal World Music Chart; Jan Hoozee, artistic director of Trefpunt Festival; Olivier Rey, director of Babel Music XP; Petra and Matyáš Hradil, associated with Czech Music Crossroads; and representatives of Europe Jazz Network, jazzahead!, Puglia Sounds, Medimex and Ronnie Scott’s, among other organizations." }] },
          { type: "link", linkId: "delegates", label: "View the A to JazZ professional delegation" },
          sharedBlocks.image03,
          { type: "paragraph", content: [{ text: "The activity continued on July 3 with a round of speed meetings between artists and professionals. Beyond the immediate exposure of the concert, these meetings made it possible to present Cholo Chicha’s trajectory, establish new contacts and position the group within the European map of festivals, markets and platforms devoted to contemporary roots music." }] },
          sharedBlocks.image04,
          { type: "paragraph", content: [{ text: "The visit also opened up a space to present the work of Capibara Music. After the meetings, Araceli Tzigane interviewed César Olivares about the association’s beginnings, the difficulties migrant musicians face in accessing professional circuits and the need to build new circulation tools for Latin American projects based in Europe. The conversation was later published by Mapamundi Música, connecting Cholo Chicha’s performance with a broader discussion about migration, visibility and professionalization in music." }] },
          { type: "link", linkId: "interview", label: "Read the interview in Mapamundi Música" },
          { type: "paragraph", content: [{ text: "Taking part in A to JazZ was not simply another date on the 2026 tour. It marked Cholo Chicha’s entry into a space where the stage and the industry face one another directly: a meeting point for jazz, folk, world music and new projects that are revisiting their roots through contemporary experience." }] },
          { type: "paragraph", content: [{ text: "The full concert was recorded by the organizers with professional sound and video and is available on the official A to JazZ Festival channel." }] },
          sharedBlocks.video,
          { type: "paragraph", content: [{ text: "A document that captures a precise moment in the group’s journey: a Barcelona-born band, with chicha as its backbone, beginning to open its own path within the international European circuit." }] },
        ],
      },
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
