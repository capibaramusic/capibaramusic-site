export type HeroImage = {
  image: string;
  position: string;
};

export const heroImages = [
  { image: "/assets/home/home-1.jpg", position: "54% 18%" },
  { image: "/assets/home/home-2.jpg", position: "52% 24%" },
  { image: "/assets/home/home-3.jpg", position: "62% 44%" },
  { image: "/assets/home/home-4.jpg", position: "72% 46%" },
  { image: "/assets/home/home-5.jpg", position: "58% 45%" },
  { image: "/assets/home/home-6.jpg", position: "70% 42%" },
  { image: "/assets/home/home-7.jpg", position: "48% 54%" },
  { image: "/assets/home/home-8.jpg", position: "64% 52%" },
  { image: "/assets/home/home-9.jpg", position: "56% 40%" },
  { image: "/assets/home/home-10.jpg", position: "66% 38%" },
  { image: "/assets/home/home-11.jpg", position: "61% 34%" },
  { image: "/assets/home/home-12.jpg", position: "68% 43%" },
  { image: "/assets/home/home-14.jpg", position: "63% 47%" },
  { image: "/assets/home/home-15.jpg", position: "57% 36%" },
  { image: "/assets/home/home-18.jpg", position: "71% 45%" },
  { image: "/assets/home/home-19.jpg", position: "76% 48%" },
  { image: "/assets/home/home-20.jpg", position: "60% 41%" },
] as const satisfies readonly HeroImage[];
