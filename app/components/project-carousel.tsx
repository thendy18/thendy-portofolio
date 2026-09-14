"use client";

import { CoverflowCarousel } from "./ui/coverflow-carousel";

const placeholderSlides = [
  { title: "Screen 01", subtitle: "Replace with your photo", alt: "Project photo placeholder one" },
  { title: "Screen 02", subtitle: "Replace with your photo", alt: "Project photo placeholder two" },
  { title: "Screen 03", subtitle: "Replace with your photo", alt: "Project photo placeholder three" },
  { title: "Screen 04", subtitle: "Replace with your photo", alt: "Project photo placeholder four" },
  { title: "Screen 05", subtitle: "Replace with your photo", alt: "Project photo placeholder five" },
].map((slide) => ({ ...slide, src: "/project-placeholder.svg" }));

const hairGarageSlides = [
  { title: "Screen 01", subtitle: "Hair Garage booking flow", alt: "Hair Garage booking screen one", src: "/projects/hair-garage/hair1.png" },
  { title: "Screen 02", subtitle: "Hair Garage booking flow", alt: "Hair Garage booking screen two", src: "/projects/hair-garage/hair2.png" },
  { title: "Screen 03", subtitle: "Hair Garage booking flow", alt: "Hair Garage booking screen three", src: "/projects/hair-garage/hair3.png" },
  { title: "Screen 04", subtitle: "Hair Garage booking flow", alt: "Hair Garage booking screen four", src: "/projects/hair-garage/hair4.png" },
  { title: "Screen 05", subtitle: "Hair Garage booking flow", alt: "Hair Garage booking screen five", src: "/projects/hair-garage/hair5.png" },
];

const moneyNoteSlides = [1, 2, 3, 4, 5].map((number) => ({
  title: `Screen 0${number}`,
  subtitle: "MoneyNote financial tracker",
  alt: `MoneyNote financial tracker screen ${number}`,
  src: `/projects/moneynote/note${number}.jpg`,
}));

const pph21Slides = [1, 2, 3, 4, 5].map((number) => ({
  title: `Screen 0${number}`,
  subtitle: "PPh 21 Coretax workflow",
  alt: `PPh 21 Coretax screen ${number}`,
  src: `/projects/pph21/tax${number}.png`,
}));

export function ProjectCarousel({ project }: { project: string }) {
  const isPhone = project === "Hair Garage" || project === "MoneyNote";
  const slides =
    project === "Hair Garage"
      ? hairGarageSlides
      : project === "MoneyNote"
        ? moneyNoteSlides
        : project === "Coretax Engine"
          ? pph21Slides
          : placeholderSlides;

  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
        {project} gallery
      </p>
      <CoverflowCarousel
        slides={slides}
        label={`${project} project photo carousel`}
        cardWidth={isPhone ? "clamp(150px, 20vw, 240px)" : "clamp(260px, 42vw, 560px)"}
        cardRatio={isPhone ? "phone" : "landscape"}
      />
    </div>
  );
}
