"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { HeroImage } from "../content/hero-images";

const slideDuration = 7000;
const fadeDuration = 900;
const subscribeToHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

type HeroSlideshowProps = {
  images: readonly HeroImage[];
};

export default function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientSnapshot,
    getServerSnapshot,
  );
  const hasSlideshow = images.length > 1;
  const nextIndex = hasSlideshow ? (currentIndex + 1) % images.length : 0;

  useEffect(() => {
    if (!isHydrated || !hasSlideshow || isCrossfading) {
      return;
    }

    const visibilityTimer = window.setTimeout(
      () => setIsCrossfading(true),
      slideDuration,
    );

    return () => window.clearTimeout(visibilityTimer);
  }, [currentIndex, hasSlideshow, isCrossfading, isHydrated]);

  useEffect(() => {
    if (!isCrossfading) {
      return;
    }

    const transitionTimer = window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsCrossfading(false);
    }, fadeDuration);

    return () => window.clearTimeout(transitionTimer);
  }, [isCrossfading, nextIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Image
        key={images[currentIndex].image}
        src={images[currentIndex].image}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className="object-cover opacity-100"
        style={{
          filter: "none",
          objectPosition: images[currentIndex].position,
        }}
      />

      {isHydrated && hasSlideshow && (
        <Image
          key={images[nextIndex].image}
          src={images[nextIndex].image}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className={`object-cover transition-opacity duration-[900ms] ease-in-out ${
            isCrossfading ? "opacity-100" : "opacity-0"
          }`}
          style={{
            filter: "none",
            objectPosition: images[nextIndex].position,
          }}
        />
      )}
    </div>
  );
}
