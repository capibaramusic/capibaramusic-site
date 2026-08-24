import { calleMambo } from "./calle-mambo";
import { choloChicha } from "./cholo-chicha";
import { fedeRochaProject } from "./fede-rocha-project";
import { kumbiaBoruka } from "./kumbia-boruka";
import { laDameBlanche } from "./la-dame-blanche";
import { musicasMigrantes } from "./musicas-migrantes";

// Artistas activos y orden de aparición en el Roster.
// Para retirar un artista, elimina o comenta únicamente su entrada en este array.
export const artists = [
  choloChicha,
  calleMambo,
  laDameBlanche,
  kumbiaBoruka,
  fedeRochaProject,
  musicasMigrantes,
] as const;

export type {
  Artist,
  ArtistLink,
  ArtistLinkLabel,
  ArtistLocale,
} from "./types";
