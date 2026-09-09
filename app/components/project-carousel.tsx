"use client";

import { CoverflowCarousel } from "./ui/coverflow-carousel";

const placeholderSlides = [
  { title: "Screen 01", subtitle: "Replace with your photo", alt: "Project photo placeholder one" },
  { title: "Screen 02", subtitle: "Replace with your photo", alt: "Project photo placeholder two" },
  { title: "Screen 03", subtitle: "Replace with your photo", alt: "Project photo placeholder three" },
  { title: "Screen 04", subtitle: "Replace with your photo", alt: "Project photo placeholder four" },
  { title: "Screen 05", subtitle: "Replace with your photo", alt: "Project photo placeholder five" },
].map((slide) => ({ ...slide, src: "/project-placeholder.svg" }));

export function ProjectCarousel({ project }: { project: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">
        {project} gallery
      </p>
      <CoverflowCarousel
        slides={placeholderSlides}
        label={`${project} project photo carousel`}
        cardWidth="clamp(180px, 24vw, 300px)"
      />
    </div>
  );
}
