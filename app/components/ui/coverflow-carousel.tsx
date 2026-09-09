"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  label?: string;
  cardWidth?: string;
}

export function CoverflowCarousel({
  slides,
  label = "Project image carousel",
  cardWidth = "clamp(150px, 24vw, 230px)",
}: CoverflowCarouselProps) {
  const [selected, setSelected] = React.useState(0);
  const [dragStart, setDragStart] = React.useState<number | null>(null);

  const move = React.useCallback(
    (offset: number) => {
      setSelected((current) => (current + offset + slides.length) % slides.length);
    },
    [slides.length],
  );

  const select = React.useCallback(
    (index: number) => setSelected((index + slides.length) % slides.length),
    [slides.length],
  );

  if (slides.length === 0) return null;

  return (
    <div
      className="w-full"
      style={{ ["--carousel-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        className="relative min-h-[310px] touch-pan-y select-none overflow-hidden rounded-[5px] border-2 border-black bg-[#a8d8ff] py-5 shadow-[4px_4px_0_#111]"
        style={{ height: "clamp(310px, 36vw, 430px)" }}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onPointerDown={(event) => {
          setDragStart(event.clientX);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (dragStart === null) return;
          const distance = event.clientX - dragStart;
          if (Math.abs(distance) > 35) move(distance > 0 ? -1 : 1);
          setDragStart(null);
        }}
        onPointerCancel={() => setDragStart(null)}
      >
        <div className="relative h-full [perspective:900px]">
          {slides.map((slide, index) => {
            let distance = index - selected;
            const half = slides.length / 2;
            if (distance > half) distance -= slides.length;
            if (distance < -half) distance += slides.length;

            const absoluteDistance = Math.abs(distance);
            const isActive = distance === 0;
            const translateX = distance * 72;
            const rotateY = distance * -34;
            const scale = isActive ? 1 : Math.max(0.72, 1 - absoluteDistance * 0.08);

            return (
              <div
                key={`${slide.title}-${index}`}
                className="absolute left-1/2 top-1/2 aspect-square overflow-hidden rounded-[5px] border-2 border-black bg-white transition-[transform,opacity] duration-300"
                style={{
                  width: "var(--carousel-card)",
                  transform: `translate(-50%, -50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: absoluteDistance > 2 ? 0 : 1 - absoluteDistance * 0.18,
                  zIndex: 20 - absoluteDistance,
                  boxShadow: isActive ? "5px 5px 0 #111" : "3px 3px 0 #111",
                }}
                aria-hidden={!isActive}
              >
                {/* Placeholder sources will be replaced by project screenshots later. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="h-full w-full select-none object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 border-t-2 border-black bg-white/95 px-3 py-2">
                  <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-black">
                    {slide.title}
                  </p>
                  {slide.subtitle && (
                    <p className="truncate text-[11px] text-slate-700">{slide.subtitle}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Previous placeholder image"
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            move(-1);
          }}
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 border-black bg-yellow-300 p-2 text-black shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next placeholder image"
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            move(1);
          }}
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border-2 border-black bg-yellow-300 p-2 text-black shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2" aria-label="Choose placeholder image">
        {slides.map((slide, index) => (
          <button
            key={`${slide.title}-pagination`}
            type="button"
            aria-label={`Show placeholder image ${index + 1}`}
            aria-current={index === selected}
            onClick={() => select(index)}
            className={`h-3 w-3 rounded-full border-2 border-black transition ${index === selected ? "bg-yellow-300 shadow-[2px_2px_0_#111]" : "bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
