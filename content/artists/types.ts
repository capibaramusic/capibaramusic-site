export type ArtistLocale = "en" | "es";

export type ArtistLinkLabel = "VIDEO" | "LIVE" | "MUSIC" | "EPK" | "WEB";

export type ArtistLink = {
  label: ArtistLinkLabel;
  url: string;
};

export type ArtistLocalizedContent = {
  headline: string;
  genres: readonly string[];
  imageAlt: string;
  description: string;
};

export type Artist = {
  slug: string;
  name: string;
  image: string;
  content: Record<ArtistLocale, ArtistLocalizedContent>;
  links: readonly ArtistLink[];
};
