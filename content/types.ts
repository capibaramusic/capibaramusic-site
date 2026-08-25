export type HeroContent = {
  brand: string;
  association: string;
  regions: string;
  languageLabels: Record<string, string>;
};

export type NavigationContent = {
  label: string;
  openLabel: string;
  closeLabel: string;
  items: ReadonlyArray<{
    label: string;
    target: string;
  }>;
};

export type AboutContent = {
  label: string;
  heading: string;
  paragraphs: readonly [string, string];
  ctas: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  capabilities: ReadonlyArray<{
    title: string;
    description: string;
  }>;
};

export type AreasContent = {
  label: string;
  heading: readonly [string, string];
  items: ReadonlyArray<{
    title: string;
    status?: string;
    activities: readonly string[];
    cta: {
      label: string;
      href?: string;
    };
  }>;
};

export type ProjectsContent = {
  label: string;
  heading: readonly [string, string];
  selectionLabel: string;
  closeLabel: string;
  titles: Record<string, string>;
  details: Record<
    string,
    {
      description: string;
      ctaLabel: string;
    }
  >;
};

export type RosterContent = {
  heading: string;
  openLabel: string;
  closeLabel: string;
};

export type NewsContent = {
  label: string;
  heading: string;
  items: ReadonlyArray<{
    id: string;
    date: string;
    title: string;
    href: string | null;
  }>;
  allNewsCta: {
    label: string;
    href: string | null;
  };
};

export type ContactContent = {
  label: string;
  heading: readonly [string, string];
  emails: ReadonlyArray<{
    area: string;
    label: string;
    href: string;
  }>;
};

export type FooterContent = {
  brand: string;
  association: string;
  socialLinks: ReadonlyArray<{
    label: string;
    href: string;
  }>;
  navigationLabel: string;
  navigationItems: readonly string[];
  copyright: string;
  location: string;
};

export type MetadataContent = {
  title: string;
  description: string;
};

export type SiteContent = {
  metadata: MetadataContent;
  hero: HeroContent;
  navigation: NavigationContent;
  about: AboutContent;
  areas: AreasContent;
  projects: ProjectsContent;
  roster: RosterContent;
  news: NewsContent;
  contact: ContactContent;
  footer: FooterContent;
};
