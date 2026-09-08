import { calleMambo } from "./calle-mambo";
import { choloChicha } from "./cholo-chicha";
import { fedeRochaProject } from "./fede-rocha-project";
import { kumbiaBoruka } from "./kumbia-boruka";
import { niemNitai } from "./niem-nitai";

// Artistas activos y orden de aparición en el Roster.
// Para retirar un artista, elimina o comenta únicamente su entrada en este array.
export const artists = [
  choloChicha,
  calleMambo,
  kumbiaBoruka,
  fedeRochaProject,
  niemNitai,
] as const;

export type {
  Artist,
  ArtistLink,
  ArtistLinkLabel,
  ArtistLocale,
} from "./types";
