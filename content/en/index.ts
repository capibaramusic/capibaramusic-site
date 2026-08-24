import about from "./about";
import areas from "./areas";
import contact from "./contact";
import footer from "./footer";
import hero from "./hero";
import metadata from "./meta";
import navigation from "./navigation";
import news from "./news";
import projects from "./projects";
import roster from "./roster";
import type { SiteContent } from "../types";

const en = {
  metadata,
  hero,
  navigation,
  about,
  areas,
  projects,
  roster,
  news,
  contact,
  footer,
} satisfies SiteContent;

export default en;
