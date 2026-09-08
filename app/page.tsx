"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ExternalLink, 
  Link2, 
  CheckCircle2, 
  Calculator, 
  Calendar, 
  PieChart 
} from "lucide-react";

export default function PortfolioPage() {
  // 1. Sandbox: PPh 21 TER Engine
  const [bruto, setBruto] = useState<number>(8500000);
  const getTER = (val: number) => {
    if (val <= 5400000) return { rate: 0, tax: 0 };
    if (val <= 5650000) return { rate: 0.25, tax: val * 0.0025 };
    if (val <= 5950000) return { rate: 0.5, tax: val * 0.005 };
    if (val <= 10000000) return { rate: 1.5, tax: val * 0.015 };
    return { rate: 3.0, tax: val * 0.03 };
  };
  const terResult = getTER(bruto);

  // 2. Sandbox: Thendy Hair Garage Anti-Double Booking
  const [selectedSlot, setSelectedSlot] = useState<string | null>("15:00");
  const slots = [
    { time: "13:00", available: true },
    { time: "14:00", available: false },
    { time: "15:00", available: true },
    { time: "16:30", available: true },
  ];

  // 3. Sandbox: MoneyNote Budget Allocation
  const [budgetLimit] = useState<number>(5000000);
  const [spent, setSpent] = useState<number>(3200000);
  const spentPct = Math.min(Math.round((spent / budgetLimit) * 100), 100);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg tracking-tight">Thendy Hose</span>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open for IT Advisory Internship
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <Link href="https://github.com/thendy18" target="_blank" className="hover:text-white flex items-center gap-1 transition">
              <ExternalLink className="w-4 h-4" /> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/thendy-hose-8356262ba" target="_blank" className="hover:text-white flex items-center gap-1 transition">
              <Link2 className="w-4 h-4" /> LinkedIn
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-md text-xs font-mono bg-slate-800/60 border border-slate-700 text-emerald-400">
            Practical Systems Builder & Software Engineer
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            "I don't just build software. I build tools for problems I actually see."
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            From running a live booking system for Thendy Hair Garage to replacing clunky tax spreadsheets with automated web engines. I turn messy manual workflows into clean, reliable apps.
          </p>
        </section>

        {/* Featured Case Studies */}
        <section className="space-y-16">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Case Studies</h2>
            <p className="text-slate-400 text-sm">Real problem-solving architectures with interactive logic sandboxes.</p>
          </div>

          {/* Project 1: PPh 21 Coretax */}
          <div className="grid md:grid-cols-12 gap-8 items-start bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>Next.js 16</span> • <span>Supabase</span> • <span>React-PDF</span> • <span>ExcelJS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Payroll & Coretax-Aligned PPh 21 Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built to solve the headache of individual tax consultants and small finance teams relying on rigid, paid Excel templates. Automates monthly TER rates, December reconciliations, and direct proof-of-withholding generation.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automatic Category A, B, and C Effective Rate calculation according to latest PP 58 regulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Integrated batch spreadsheet parsing and automated client-side PDF proof generation.</span>
                </li>
              </ul>
              <div className="pt-2 flex gap-3">
                <Link href="https://github.com/thendy18/payroll-coretax" target="_blank" className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> View Repo
                </Link>
              </div>
            </div>

            {/* Sandbox 1 */}
            <div className="md:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 font-medium text-slate-200">
                  <Calculator className="w-4 h-4 text-emerald-400" /> Live TER Calculation Logic
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Interactive Sandbox</span>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400">Monthly Gross Salary (Rp)</label>
                <input 
                  type="number" 
                  step="500000"
                  value={bruto} 
                  onChange={(e) => setBruto(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2 text-sm focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500 text-[10px]">Effective Rate (TER A)</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">{terResult.rate}%</div>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-slate-500 text-[10px]">Monthly Tax Cut</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">Rp {terResult.tax.toLocaleString("id-ID")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Thendy Hair Garage */}
          <div className="grid md:grid-cols-12 gap-8 items-start bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>Next.js</span> • <span>Supabase SSR</span> • <span>Tailwind CSS</span> • <span>Live Production</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Thendy Hair Garage – Operational Scheduling Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Created to eliminate customer wait-time and build operational trust for my own barbershop. Replaces walk-in uncertainty with real-time slot bookings and an owner dashboard to configure dynamic working hours.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deterministic slot availability preventing conflicting overlapping bookings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Private admin portal with authenticated access to dynamically manage slot capacities.</span>
                </li>
              </ul>
              <div className="pt-2 flex gap-3">
                <Link href="https://hairgarage.vercel.app/" target="_blank" className="text-xs bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> Launch Live App
                </Link>
                <Link href="https://github.com/thendy18/thendy-hair-garage" target="_blank" className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> View Repo
                </Link>
              </div>
            </div>

            {/* Sandbox 2 */}
            <div className="md:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 font-medium text-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-400" /> Slot Concurrency Simulator
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Interactive Sandbox</span>
              </div>
              <p className="text-[11px] text-slate-400">Simulating real-time slot conflict resolution:</p>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot.time)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition border flex items-center justify-between ${
                      !slot.available 
                        ? "bg-slate-900/40 text-slate-600 border-slate-800/50 cursor-not-allowed line-through"
                        : selectedSlot === slot.time
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-300"
                        : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    <span>{slot.time}</span>
                    <span className="text-[9px] uppercase">{!slot.available ? "Booked" : selectedSlot === slot.time ? "Selected" : "Open"}</span>
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 font-mono">
                Status: <span className="text-emerald-400 font-semibold">{selectedSlot ? `Slot ${selectedSlot} lock acquired` : "Select a slot"}</span>
              </div>
            </div>
          </div>

          {/* Project 3: MoneyNote */}
          <div className="grid md:grid-cols-12 gap-8 items-start bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>Flutter</span> • <span>Dart</span> • <span>Mobile Client</span> • <span>Offline-First</span>
              </div>
              <h3 className="text-2xl font-bold text-white">MoneyNote – Financial Tracker Application</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mobile personal ledger engineered to keep track of daily cashflows with clean categorization, budget threshold visual alerts, and zero navigation friction.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Structured relational ledger tracking expenses and incomes with instant aggregation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Visual budget exhaustion model warning users before overspending occurs.</span>
                </li>
              </ul>
              <div className="pt-2 flex gap-3">
                <Link href="https://github.com/thendy18" target="_blank" className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> View Repo / APK
                </Link>
              </div>
            </div>

            {/* Sandbox 3 */}
            <div className="md:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5 font-medium text-slate-200">
                  <PieChart className="w-4 h-4 text-emerald-400" /> Budget Utilization Visualizer
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Interactive Sandbox</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Simulated Spend: Rp {spent.toLocaleString("id-ID")}</span>
                  <span>Budget: Rp 5.000.000</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="6000000" 
                  step="200000"
                  value={spent} 
                  onChange={(e) => setSpent(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 cursor-pointer"
                />
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${spent > budgetLimit ? "bg-rose-500" : spentPct > 75 ? "bg-amber-400" : "bg-emerald-500"}`}
                    style={{ width: `${Math.min((spent / budgetLimit) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Usage: {Math.round((spent / budgetLimit) * 100)}%</span>
                  <span className={spent > budgetLimit ? "text-rose-400 font-bold" : "text-slate-400"}>
                    {spent > budgetLimit ? "OVERBUDGET" : `Remaining: Rp ${(budgetLimit - spent).toLocaleString("id-ID")}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competencies Matrix */}
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white tracking-tight">Technical & Systems Competencies</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="font-semibold text-slate-200 block">Languages & Frameworks</span>
              <p className="text-slate-400 leading-relaxed">TypeScript, JavaScript, Dart, React, Next.js, Flutter, Node.js.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="font-semibold text-slate-200 block">Data, State & Storage</span>
              <p className="text-slate-400 leading-relaxed">Supabase, PostgreSQL, Zustand, Local Storage.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="font-semibold text-slate-200 block">Compliance & Tools</span>
              <p className="text-slate-400 leading-relaxed">Coretax/TER Logic, ExcelJS, React-PDF, Git, Vercel.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© Thendy Hose. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
