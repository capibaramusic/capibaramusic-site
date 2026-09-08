import type { Locale } from "..";

export type ArticleTextSegment = {
  text: string;
  linkId?: string;
};

export type NewsArticleBlock =
  | { type: "paragraph"; content: readonly ArticleTextSegment[] }
  | { type: "heading"; text: string }
  | { type: "image"; imageId: string }
  | { type: "link"; linkId: string; label: string }
  | { type: "video" };

type LocalizedArticle = {
  title: string;
  excerpt: string;
  body: readonly NewsArticleBlock[];
  videoTitle?: string;
};

export type NewsArticle = {
  slug: string;
  date: string;
  publishedAt: string;
  translations: Record<Locale, LocalizedArticle>;
  coverImage: { src?: string; width: number; height: number; label?: string };
  internalImages: Readonly<
    Record<
      string,
      { src?: string; width: number; height: number; label?: string }
    >
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
  {
    slug: "capibara-music-mapamundi-musica-interview",
    date: "15 JUL 2026",
    publishedAt: "2026-07-15",
    coverImage: { width: 2504, height: 1500, label: "COVER" },
    internalImages: {
      "01": { width: 2000, height: 1333, label: "01" },
      "02": { width: 2000, height: 1333, label: "02" },
      "03": { width: 2000, height: 1333, label: "03" },
      "04": { width: 2000, height: 1333, label: "04" },
    },
    links: {
      interview: {
        href: "https://www.mapamundimusica.com/en/newsletter/july-26-identity-displacement-and-endangered-languages-conversacion-with-cesar-olivares-capibara-music-and-97/",
      },
    },
    translations: {
      es: {
        title: "Capibara Music en entrevista con Mapamundi Música: hacer visible una escena que ya existe",
        excerpt: "La plataforma especializada en Músicas del Mundo conversó con César Olivares en su paso por el A to Jazz Festival en Bulgaria, sobre las barreras que enfrentan los músicos migrantes y la necesidad de crear nuevas estructuras de circulación para las músicas latinoamericanas en Europa.",
        body: [
          { type: "paragraph", content: [{ text: "La música migrante no comienza a existir cuando una institución decide incluirla en su programación. Ya está presente en las ciudades, circulando entre salas pequeñas, celebraciones comunitarias, ruedas, peñas, asociaciones y redes informales. El problema es que muchas veces permanece fuera del campo de visión de la industria musical." }] },
          { type: "paragraph", content: [{ text: "Esa realidad atraviesa la " }, { text: "entrevista realizada a César Olivares, de Capibara Music, publicada por Mapamundi Música", linkId: "interview" }, { text: ", una plataforma vinculada al management internacional, la comunicación musical, Mundofonías y la Transglobal World Music Chart. La conversación, realizada por Araceli Tzigane después de los encuentros profesionales de A to JazZ Festival, aborda el nacimiento de la asociación y plantea una pregunta de fondo: ¿qué herramientas necesitan los músicos migrantes para transformar su actividad artística en un proyecto profesional sostenible?" }] },
          { type: "paragraph", content: [{ text: "El encuentro tuvo lugar el 3 de julio de 2026 en Sofía, donde Cholo Chicha había sido seleccionado para participar en el World Music Showcase de A to JazZ, proyecto con el que Capibara Music realiza un trabajo de acompañamiento profesional y circulación internacional. Araceli, directora de Mapamundi Música y miembro del jurado del showcase, ya conocía el proyecto y había asistido a la presentación de la banda. Después de la ronda de speed meetings, ambos se reunieron para conversar sobre el trabajo que Capibara Music comenzaba a desarrollar desde Barcelona." }] },
          { type: "image", imageId: "01" },
          { type: "heading", text: "Una asociación nacida desde la experiencia migratoria" },
          { type: "paragraph", content: [{ text: "Capibara Music surgió de una experiencia personal. César Olivares, gestor cultural chileno, vive en España desde 2020. Durante su proceso migratorio, las dificultades relacionadas con los permisos y la documentación le impidieron trabajar con normalidad. En las conversaciones con otros músicos que se encontraban en esa situación aparecía una preocupación recurrente: en España existía una enorme cantidad de músicos latinoamericanos con proyectos de gran calidad, pero faltaban estructuras capaces de acompañarlos, conectarlos y facilitar su acceso a los circuitos profesionales." }] },
          { type: "paragraph", content: [{ text: "La dispersión no significaba ausencia de actividad. Las escenas estaban vivas, pero frecuentemente separadas entre comunidades, celebraciones y espacios conocidos solamente por quienes formaban parte de ellas. Fuera de esos círculos, numerosos programadores y profesionales del sector desconocían dónde encontrar esos proyectos o cómo relacionarse con ellos." }] },
          { type: "paragraph", content: [{ text: "Capibara Music nació para intervenir precisamente en ese vacío: construir un marco organizativo y legal que permita a los artistas facturar, relacionarse profesionalmente con salas e instituciones, acceder a oportunidades y desarrollar carreras sostenibles. La elección de constituirse como asociación cultural responde también a esa vocación colectiva. El objetivo no es limitarse a generar beneficios económicos, sino levantar una estructura útil para una comunidad artística que ya existe." }] },
          { type: "image", imageId: "02" },
          { type: "heading", text: "Mucha calidad, poca visibilidad" },
          { type: "paragraph", content: [{ text: "Uno de los diagnósticos centrales de la conversación es la distancia que existe entre la calidad musical presente en las comunidades migrantes y su nivel de visibilidad dentro del sector cultural." }] },
          { type: "paragraph", content: [{ text: "Los músicos que llegan a un nuevo país deben afrontar simultáneamente la adaptación profesional, la burocracia, la búsqueda de vivienda, el acceso al trabajo y, en algunos territorios, nuevas barreras lingüísticas. En ese contexto, organizar un proyecto artístico, preparar materiales profesionales o establecer relaciones con la industria puede quedar relegado." }] },
          { type: "paragraph", content: [{ text: "A ello se suma la fragmentación. Las comunidades latinoamericanas comparten lenguas, experiencias y ciertos espacios de encuentro, pero no necesariamente funcionan como una escena organizada. Cada comunidad mantiene sus propias celebraciones, repertorios y formas de relacionarse. Las peñas, las ruedas, las reuniones familiares y los encuentros alrededor de la comida y la música actúan como lugares de preservación cultural, aunque no siempre conectan con los circuitos profesionales." }] },
          { type: "paragraph", content: [{ text: "El desafío no consiste en reemplazar esos espacios, sino en tender puentes entre ellos y las estructuras donde se toman decisiones sobre programación, financiación y circulación." }] },
          { type: "image", imageId: "03" },
          { type: "heading", text: "Evitar que otros hablen por nuestras culturas" },
          { type: "paragraph", content: [{ text: "La entrevista también sitúa el trabajo de Capibara Music dentro de una discusión política más amplia. Abrir espacios no significa únicamente conseguir conciertos. Significa evitar que las músicas procedentes de otros territorios sean reducidas a elementos folclóricos, decorativos o exóticos." }] },
          { type: "paragraph", content: [{ text: "Para Olivares, la inclusión solo es real cuando las personas representadas pueden participar en las decisiones, proponer contenidos y tener voz dentro de las instituciones. Capibara Music asume que gran parte de su trabajo continuará desarrollándose desde los márgenes, pero no entiende ese lugar como una posición pasiva." }] },
          { type: "paragraph", content: [{ text: "“No nos molesta estar en los márgenes”, explica durante la conversación. El propósito es crear espacios propios y hacer visible una realidad musical que lleva años formando parte de España y Europa, aunque todavía no aparezca con suficiente claridad en sus programaciones y estructuras culturales." }] },
          { type: "paragraph", content: [{ text: "La escena ya existe. Los músicos están aquí, las canciones circulan y las comunidades continúan creando sus propios espacios. El trabajo que comienza ahora es lograr que esa realidad también sea reconocida, escuchada y tomada en cuenta allí donde se decide qué músicas consiguen cruzar fronteras." }] },
          { type: "image", imageId: "04" },
          { type: "link", linkId: "interview", label: "Leer la entrevista completa en Mapamundi Música" },
        ],
      },
      en: {
        title: "Capibara Music in conversation with Mapamundi Música: making an existing scene visible",
        excerpt: "The platform specialising in World Music spoke with César Olivares during A to Jazz Festival in Bulgaria about the barriers faced by migrant musicians and the need to create new circulation structures for Latin American music in Europe.",
        body: [
          { type: "paragraph", content: [{ text: "Migrant music does not begin to exist when an institution decides to include it in its programme. It is already present in cities, circulating through small venues, community celebrations, rodas, peñas, associations and informal networks. The problem is that it often remains outside the music industry’s field of vision." }] },
          { type: "paragraph", content: [{ text: "That reality runs through the " }, { text: "interview with César Olivares of Capibara Music, published by Mapamundi Música", linkId: "interview" }, { text: ", a platform connected to international management, music communication, Mundofonías and the Transglobal World Music Chart. Conducted by Araceli Tzigane after the professional meetings at A to JazZ Festival, the conversation explores the association’s beginnings and raises a fundamental question: what tools do migrant musicians need to turn their artistic activity into a sustainable professional project?" }] },
          { type: "paragraph", content: [{ text: "The meeting took place in Sofia on July 3, 2026, where Cholo Chicha had been selected to take part in the World Music Showcase at A to JazZ, a project for which Capibara Music provides professional support and international circulation. Araceli, director of Mapamundi Música and a member of the showcase jury, was already familiar with the project and had attended the band’s performance. After the round of speed meetings, they met to discuss the work Capibara Music was beginning to develop from Barcelona." }] },
          { type: "image", imageId: "01" },
          { type: "heading", text: "An association born from the migrant experience" },
          { type: "paragraph", content: [{ text: "Capibara Music emerged from a personal experience. César Olivares, a Chilean cultural manager, has lived in Spain since 2020. During his migration process, difficulties related to permits and documentation prevented him from working normally. In conversations with other musicians in the same situation, a recurring concern emerged: Spain had an enormous number of Latin American musicians with high-quality projects, but lacked structures capable of supporting them, connecting them and facilitating their access to professional circuits." }] },
          { type: "paragraph", content: [{ text: "Dispersion did not mean an absence of activity. The scenes were alive, but often separated into communities, celebrations and spaces known only to those who were part of them. Outside those circles, many programmers and industry professionals did not know where to find these projects or how to engage with them." }] },
          { type: "paragraph", content: [{ text: "Capibara Music was created to intervene precisely in that gap: to build an organisational and legal framework that enables artists to invoice, engage professionally with venues and institutions, access opportunities and develop sustainable careers. The decision to establish itself as a cultural association also reflects that collective vocation. The aim is not merely to generate economic benefits, but to build a useful structure for an artistic community that already exists." }] },
          { type: "image", imageId: "02" },
          { type: "heading", text: "A wealth of quality, little visibility" },
          { type: "paragraph", content: [{ text: "One of the central diagnoses of the conversation is the distance between the musical quality present in migrant communities and its level of visibility within the cultural sector." }] },
          { type: "paragraph", content: [{ text: "Musicians arriving in a new country must simultaneously deal with professional adaptation, bureaucracy, finding housing, access to work and, in some territories, new language barriers. In that context, organising an artistic project, preparing professional materials or establishing relationships with the industry can be pushed aside." }] },
          { type: "paragraph", content: [{ text: "Fragmentation adds to this. Latin American communities share languages, experiences and certain meeting spaces, but they do not necessarily function as an organised scene. Each community maintains its own celebrations, repertoires and ways of relating. Peñas, rodas, family gatherings and encounters around food and music act as places of cultural preservation, although they do not always connect with professional circuits." }] },
          { type: "paragraph", content: [{ text: "The challenge is not to replace those spaces, but to build bridges between them and the structures where decisions about programming, funding and circulation are made." }] },
          { type: "image", imageId: "03" },
          { type: "heading", text: "Preventing others from speaking for our cultures" },
          { type: "paragraph", content: [{ text: "The interview also places Capibara Music’s work within a broader political discussion. Opening spaces does not only mean securing concerts. It means preventing music from other territories from being reduced to folkloric, decorative or exotic elements." }] },
          { type: "paragraph", content: [{ text: "For Olivares, inclusion is only real when the people represented can take part in decisions, propose content and have a voice within institutions. Capibara Music recognises that much of its work will continue to take place from the margins, but it does not understand that position as a passive one." }] },
          { type: "paragraph", content: [{ text: "“We don’t mind being on the margins,” he explains during the conversation. The purpose is to create spaces of their own and make visible a musical reality that has been part of Spain and Europe for years, although it still does not appear with sufficient clarity in their programming and cultural structures." }] },
          { type: "paragraph", content: [{ text: "The scene already exists. The musicians are here, the songs circulate and the communities continue to create their own spaces. The work beginning now is to ensure that this reality is also recognised, heard and taken into account wherever decisions are made about which music gets to cross borders." }] },
          { type: "image", imageId: "04" },
          { type: "link", linkId: "interview", label: "Read the full interview on Mapamundi Música" },
        ],
      },
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
