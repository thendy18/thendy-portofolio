"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  TrendingDown,
} from "lucide-react";

type SlotTime = "10:00" | "11:00" | "12:00";
type SlotStatus = "Open" | "Selected" | "Booked by Others";

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const terBands = [
  { max: 5_400_000, rate: 0 },
  { max: 5_650_000, rate: 0.0025 },
  { max: 5_950_000, rate: 0.005 },
  { max: 6_300_000, rate: 0.0075 },
  { max: 6_950_000, rate: 0.01 },
  { max: 7_400_000, rate: 0.0125 },
  { max: 10_000_000, rate: 0.015 },
  { max: 15_000_000, rate: 0.0175 },
  { max: 20_000_000, rate: 0.02 },
  { max: 30_000_000, rate: 0.0225 },
  { max: 50_000_000, rate: 0.025 },
] as const;

function getTerARate(grossSalary: number) {
  return terBands.find((band) => grossSalary <= band.max)?.rate ?? 0.025;
}

function formatPercent(rate: number) {
  return `${(rate * 100).toFixed(rate === 0 ? 0 : 2)}%`;
}

function StatusPill({ status }: { status: SlotStatus }) {
  const styles: Record<SlotStatus, string> = {
    Open: "border-slate-700 bg-slate-950/60 text-slate-300",
    Selected: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    "Booked by Others": "border-slate-700 bg-slate-900/80 text-slate-500",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export function TaxSandbox() {
  const [grossSalary, setGrossSalary] = useState(8_500_000);
  const terARate = getTerARate(grossSalary);
  const taxDeduction = grossSalary * terARate;

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="h-5 w-5 text-emerald-400" />
          <div>
            <p className="text-sm font-semibold text-white">TER A Live Calculator</p>
            <p className="text-xs text-slate-500">Client-side compliance demo</p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
          Production logic
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <label className="space-y-2 text-sm text-slate-300">
          <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
            Gaji Bruto Bulanan
          </span>
          <input
            aria-label="Gaji Bruto Bulanan"
            type="number"
            min={5_000_000}
            max={50_000_000}
            step={250_000}
            value={grossSalary}
            onChange={(event) => setGrossSalary(Number(event.target.value) || 0)}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-500"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span className="sr-only">Gross salary range</span>
          <input
            aria-label="Range gaji bruto bulanan"
            type="range"
            min={5_000_000}
            max={50_000_000}
            step={250_000}
            value={grossSalary}
            onChange={(event) => setGrossSalary(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-emerald-500"
          />
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              TER A Rate
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {formatPercent(terARate)}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Potongan Pajak
            </p>
            <p className="mt-2 text-2xl font-semibold text-emerald-300">
              {currency.format(taxDeduction)}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Real-time summary
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            The calculator uses a static TER A lookup to show how gross salary
            flows into a tax deduction outcome without a page refresh.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function BookingSandbox() {
  const [slotStates, setSlotStates] = useState<Record<SlotTime, SlotStatus>>({
    "10:00": "Open",
    "11:00": "Open",
    "12:00": "Open",
  });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function handleSelect(time: SlotTime) {
    setSlotStates((current) => ({
      ...current,
      [time]: "Selected",
    }));

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    if (time === "10:00") {
      timerRef.current = window.setTimeout(() => {
        setSlotStates((current) => ({
          ...current,
          "11:00": "Booked by Others",
        }));
      }, 3000);
    }
  }

  const slots: SlotTime[] = ["10:00", "11:00", "12:00"];

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <CalendarClock className="h-5 w-5 text-emerald-400" />
          <div>
            <p className="text-sm font-semibold text-white">
              Slot Concurrency Simulator
            </p>
            <p className="text-xs text-slate-500">Race-condition demo</p>
          </div>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-300">
          Client state
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <p className="text-sm leading-7 text-slate-400">
          Select a slot to demonstrate optimistic booking, then watch one slot
          flip to a conflict state after a delay.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {slots.map((time) => {
            const status = slotStates[time];
            const isBooked = status === "Booked by Others";

            return (
              <button
                key={time}
                type="button"
                onClick={() => handleSelect(time)}
                aria-label={`Select slot ${time}`}
                disabled={isBooked}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left transition hover:border-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{time}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {isBooked ? "Locked elsewhere" : "Tap to reserve"}
                    </p>
                  </div>
                  <Clock3 className="h-4 w-4 text-slate-400" />
                </div>

                <div className="mt-4">
                  <StatusPill status={status} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
          <p className="flex items-center gap-2 font-semibold text-white">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            Real-time conflict marker
          </p>
          <p className="mt-2 leading-7 text-slate-400">
            If you start with 10:00, the 11:00 slot will flip to{" "}
            <span className="text-slate-200">Booked by Others</span> after 3
            seconds to illustrate a race condition.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function BudgetSandbox() {
  const [currentSpend, setCurrentSpend] = useState(3_200_000);
  const budgetLimit = 10_000_000;
  const ratio = currentSpend / budgetLimit;
  const isSafe = ratio < 0.5;
  const isWarning = ratio >= 0.5 && ratio < 0.8;
  const isDanger = ratio >= 0.8;
  const progressColor = isSafe
    ? "bg-emerald-500"
    : isWarning
      ? "bg-amber-400"
      : "bg-rose-500";

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-emerald-400" />
          <div>
            <p className="text-sm font-semibold text-white">
              Adaptive Budget Slider
            </p>
            <p className="text-xs text-slate-500">Responsive UI feedback</p>
          </div>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-300">
          Touch-friendly
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Pengeluaran Bulan Ini
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {currency.format(currentSpend)}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Budget Limit
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {currency.format(budgetLimit)}
            </p>
          </div>
        </div>

        <label className="space-y-2 text-sm text-slate-300">
          <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
            Slider pengeluaran
          </span>
          <input
            aria-label="Pengeluaran bulan ini"
            type="range"
            min={0}
            max={budgetLimit}
            step={100_000}
            value={currentSpend}
            onChange={(event) => setCurrentSpend(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-emerald-500"
          />
        </label>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Progress</span>
            <span>{Math.round(ratio * 100)}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className={`h-full rounded-full transition-all duration-300 ${progressColor}`}
              style={{ width: `${Math.min(ratio * 100, 100)}%` }}
            />
          </div>
        </div>

        {isDanger ? (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-100">
            <p className="font-semibold">Budget is in the danger zone.</p>
            <p className="mt-2 leading-7">
              This state is meant to show an immediate visual warning when spend
              pressure gets close to the ceiling.
            </p>
          </div>
        ) : isWarning ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
            <p className="font-semibold">Budget is approaching the limit.</p>
            <p className="mt-2 leading-7">
              Recruiters can see the threshold logic react without page reloads
              or external state.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-slate-300">
            <p className="flex items-center gap-2 font-semibold text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              Budget remains healthy
            </p>
            <p className="mt-2 leading-7 text-slate-400">
              Spend is still below the caution threshold.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
