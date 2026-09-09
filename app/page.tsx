"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ExternalLink,
  Link2,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  BudgetSandbox,
  BookingSandbox,
  TaxSandbox,
} from "./components/portfolio-sandboxes";
import { RippleButton } from "./components/ripple-button";
import { ProjectCarousel } from "./components/project-carousel";
import { ExpertiseOrbit } from "./components/ui/expertise-orbit";

const projects = [
  {
    id: "work",
    badge: "Production / Live",
    badgeSecondary: "Enterprise Logic",
    stack: ["Next.js", "TypeScript", "PP 58/2023", "Supabase"],
    linkLabel: "View repository",
    linkHref: "https://github.com/thendy18",
    title: "Payroll & Coretax-Aligned PPh 21 Engine",
    description:
      "A practical tax workflow engine for PP 58/2023 TER handling, monthly reconciliation, and XML-ready export logic. Built to reduce spreadsheet drift and make compliance review visible in the UI.",
    bullets: [
      "TER A lookup demo with deterministic bracket mapping and instant tax deduction output.",
      "Designed to translate business rules into a server-friendly transformation pipeline.",
    ],
  },
  {
    id: "expertise",
    badge: "Operational Systems",
    badgeSecondary: "Concurrency Demo",
    stack: ["Next.js", "React State", "Supabase", "Edge Functions"],
    linkLabel: "View operational proof",
    linkHref: "https://github.com/thendy18",
    title: "Thendy Hair Garage - Operational Scheduling Engine",
    description:
      "A self-booking flow that models double-booking risk on the client side and demonstrates how optimistic UI should react when a slot is taken by someone else.",
    bullets: [
      "Slot state updates move through Open, Selected, and Booked by Others.",
      "The race-condition demo uses delayed state mutation to mimic real-world contention.",
    ],
  },
  {
    id: "contact",
    badge: "Interactive Analytics",
    badgeSecondary: "Adaptive Budget",
    stack: ["Flutter", "Dart", "Offline-first", "Local Storage"],
    linkLabel: "View repository",
    linkHref: "https://github.com/thendy18",
    title: "MoneyNote - Financial Tracker Application",
    description:
      "A responsive ledger UI with adaptive budget feedback, clear threshold states, and a touch-friendly slider for monitoring spend pressure in real time.",
    bullets: [
      "Visual budget progress shifts from emerald to warning yellow to red.",
      "Optimized for recruiter-friendly scanning on mobile and desktop.",
    ],
  },
] as const;

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <header className="navbar-floating sticky top-3 z-50 bg-transparent px-4">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-2xl border-2 border-black bg-[#fffdf5] p-1.5 text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[4px_4px_0_#111] sm:gap-2 sm:p-2 sm:text-sm"
        >
          <a
            href="#work"
            className="rounded-xl px-3 py-2.5 transition hover:bg-yellow-300 sm:px-6"
          >
            Projects
          </a>
          <a
            href="#expertise"
            className="rounded-xl px-3 py-2.5 transition hover:bg-yellow-300 sm:px-6"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="rounded-xl px-3 py-2.5 transition hover:bg-yellow-300 sm:px-6"
          >
            Contact
          </a>
        </nav>
      </header>

      <div
        id="top"
        className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border-2 border-black bg-[#a8d8ff] p-4 text-black shadow-[6px_6px_0_#111] sm:p-6">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-black bg-[#f7f1e3]">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-black bg-yellow-300 text-4xl font-black shadow-[4px_4px_0_#111]">
                  TH
                </div>
                <p className="text-xs font-black uppercase tracking-[0.28em]">
                  Photo Placeholder
                </p>
              </div>
            </div>
            <div className="mt-5 border-t-2 border-black pt-4">
              <p className="text-2xl font-black tracking-tight">Thendy Hose</p>
              <p className="mt-2 max-w-sm text-sm font-medium leading-6">
                Practical systems builder turning everyday business friction
                into reliable digital tools.
              </p>
            </div>
          </div>

          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-xs font-bold text-black shadow-[3px_3px_0_#111]">
              <Sparkles className="h-4 w-4" />
              Practical Systems Builder & Software Engineer
            </div>

            <div className="space-y-5">
              <p className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                I don&apos;t just build software. I build tools for problems I
                actually see.
              </p>
              <p className="max-w-3xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                From running a live booking system for Thendy Hair Garage to
                replacing clunky tax spreadsheets with automated web engines. I
                turn messy manual workflows into clean, reliable apps.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/thendy18"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thendy-hose-8356262ba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50 hover:text-white"
              >
                <Link2 className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="flex shrink-0 items-center gap-3">
                
                <RippleButton
                  type="button"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  rippleColor="#a8d8ff"
                  className="whitespace-nowrap rounded-full border-2 border-black bg-yellow-300 px-4 py-2 text-sm font-semibold text-black shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Contact
                  
                </RippleButton>
              </div>
            </div>
          </div>

        </section>

        <section id="work" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400">
              Projects
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Three interactive proof-of-work systems
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              Each project pair combines business context, architecture notes,
              and a client-side sandbox to show how I translate messy workflows
              into concrete systems.
            </p>
          </div>

          <div className="space-y-6">
            <article className="grid gap-8 rounded-3xl border border-slate-800 bg-[#090d16]/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:p-8">
              <div className="min-w-0 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {projects[0].badge}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                    {projects[0].badgeSecondary}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {projects[0].title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {projects[0].description}
                </p>
                <ul className="space-y-3">
                  {projects[0].bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="leading-7">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {projects[0].stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[0].linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  {projects[0].linkLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="min-w-0">
                <TaxSandbox />
              </div>
              <div className="min-w-0 lg:col-span-2">
                <ProjectCarousel project="Coretax Engine" />
              </div>
            </article>

            <article className="grid gap-8 rounded-3xl border border-slate-800 bg-[#090d16]/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:p-8">
              <div className="min-w-0 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {projects[1].badge}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                    {projects[1].badgeSecondary}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {projects[1].title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {projects[1].description}
                </p>
                <ul className="space-y-3">
                  {projects[1].bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="leading-7">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {projects[1].stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[1].linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  {projects[1].linkLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="min-w-0">
                <BookingSandbox />
              </div>
              <div className="min-w-0 lg:col-span-2">
                <ProjectCarousel project="Hair Garage" />
              </div>
            </article>

            <article className="grid gap-8 rounded-3xl border border-slate-800 bg-[#090d16]/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:p-8">
              <div className="min-w-0 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {projects[2].badge}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300">
                    {projects[2].badgeSecondary}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {projects[2].title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {projects[2].description}
                </p>
                <ul className="space-y-3">
                  {projects[2].bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="leading-7">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {projects[2].stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[2].linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  {projects[2].linkLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="min-w-0">
                <BudgetSandbox />
              </div>
              <div className="min-w-0 lg:col-span-2">
                <ProjectCarousel project="MoneyNote" />
              </div>
            </article>
          </div>
        </section>

        <ExpertiseOrbit />

        <footer
          id="contact"
          className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 lg:grid-cols-[1fr_auto]"
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-400">
              Contact
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Ready for recruiter screening or technical review.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Email, GitHub, and LinkedIn links are kept visible so a reviewer
              can move from proof-of-work to direct verification without extra
              clicks.
            </p>
            <p className="pt-4 text-xs text-slate-500">
              © 2026 Thendy Hose. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <RippleButton
              type="button"
              onClick={() => {
                window.location.href = "mailto:thendyhose@gmail.com";
              }}
              rippleColor="#ffffff"
              className="justify-center rounded-full border-2 border-black bg-yellow-300 px-4 py-2.5 text-sm font-semibold text-black shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <Mail className="h-4 w-4" />
              thendyhose@gmail.com
            </RippleButton>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://github.com/thendy18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/thendy-hose-8356262ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-500/50"
              >
                <Link2 className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
