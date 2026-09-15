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
};

const orbitNodes: OrbitNode[] = [
  { label: "Supabase", icon: SiSupabase },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Dart", icon: SiDart },
  { label: "Flutter", icon: SiFlutter },
  { label: "Git", icon: SiGit },
  { label: "Vercel", icon: SiVercel },
];

function ExpertiseCard({ node }: { node: OrbitNode }) {
  const Icon = node.icon;

  return (
    <div className="flex min-h-20 items-center gap-3 border-2 border-black bg-white px-4 py-3 text-black shadow-[3px_3px_0_#111]">
      <Icon className="size-7 shrink-0" aria-hidden="true" />
      <span className="text-sm font-bold sm:text-base">{node.label}</span>
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

      <div className="grid grid-cols-1 gap-4 rounded-[5px] border-2 border-black bg-[#a8d8ff] p-4 shadow-[6px_6px_0_#111] sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
        {orbitNodes.map((node) => (
          <ExpertiseCard key={node.label} node={node} />
        ))}
      </div>
    </section>
  );
}
