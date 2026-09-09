"use client";

import type { IconType } from "react-icons";
import {
  SiDart,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type OrbitNode = {
  label: string;
  icon: IconType;
  left: string;
  top: string;
  delay: string;
};

const orbitNodes: OrbitNode[] = [
  { label: "Supabase", icon: SiSupabase, left: "6%", top: "58%", delay: "0ms" },
  { label: "PostgreSQL", icon: SiPostgresql, left: "18%", top: "32%", delay: "180ms" },
  { label: "TypeScript", icon: SiTypescript, left: "33%", top: "14%", delay: "360ms" },
  { label: "React", icon: SiReact, left: "50%", top: "10%", delay: "540ms" },
  { label: "Next.js", icon: SiNextdotjs, left: "67%", top: "14%", delay: "720ms" },
  { label: "JavaScript", icon: SiJavascript, left: "82%", top: "32%", delay: "900ms" },
  { label: "Tailwind CSS", icon: SiTailwindcss, left: "94%", top: "58%", delay: "1080ms" },
  { label: "Dart", icon: SiDart, left: "18%", top: "57%", delay: "1260ms" },
  { label: "Flutter", icon: SiFlutter, left: "32%", top: "39%", delay: "1440ms" },
  { label: "Git", icon: SiGit, left: "68%", top: "39%", delay: "1620ms" },
  { label: "Vercel", icon: SiVercel, left: "82%", top: "57%", delay: "1800ms" },
];

function OrbitCard({ node }: { node: OrbitNode }) {
  const Icon = node.icon;

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: node.left, top: node.top }}
    >
      <div
        className="expertise-orbit-node group flex size-12 items-center justify-center rounded-[5px] border-2 border-black bg-white text-black shadow-[4px_4px_0_#111] sm:size-16"
        style={{ animationDelay: node.delay }}
      >
        <Icon className="size-6 sm:size-8" aria-hidden="true" />
        <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-black bg-white px-2 py-0.5 text-[9px] font-bold text-black shadow-[2px_2px_0_#111] sm:text-[11px]">
          {node.label}
        </span>
      </div>
    </div>
  );
}

export function ExpertiseOrbit() {
  return (
    <section id="expertise" className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-700">
          Expertise
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Systems built around a practical stack
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
          Frameworks, data platforms, and delivery tools orbit the same goal:
          turning real operational friction into useful software.
        </p>
      </div>

      <div className="relative h-[430px] w-full overflow-hidden rounded-[5px] border-2 border-black bg-[#a8d8ff] shadow-[6px_6px_0_#111] sm:h-[500px] lg:h-[560px]">
        <svg
          aria-hidden="true"
          className="expertise-orbit-lines absolute inset-x-0 top-0 h-[78%] w-full"
          viewBox="0 0 100 70"
          preserveAspectRatio="none"
          fill="none"
        >
          <path className="expertise-orbit-ring" d="M 5 60 A 45 53 0 0 1 95 60" />
          <path className="expertise-orbit-ring expertise-orbit-ring-inner" d="M 18 60 A 32 38 0 0 1 82 60" />
        </svg>

        {orbitNodes.map((node) => (
          <OrbitCard key={node.label} node={node} />
        ))}

        <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-black bg-white px-3 py-1 text-center text-[9px] font-bold uppercase tracking-[0.16em] text-black shadow-[3px_3px_0_#111] sm:text-xs">
          Languages · Platforms · Delivery
        </div>
      </div>
    </section>
  );
}
