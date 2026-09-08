"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  TrendingDown,
} from "lucide-react";

type SlotTime = "13:00" | "14:00" | "15:00" | "16:30";
type SlotStatus = "Open" | "Selected" | "Booked by Others";

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function getTerARate(grossSalary: number) {
  if (grossSalary <= 5_400_000) return 0;
  if (grossSalary <= 5_650_000) return 0.0025;
  if (grossSalary <= 5_950_000) return 0.005;
  if (grossSalary <= 10_000_000) return 0.015;
  return 0.03;
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
  const normalizedGrossSalary = Math.max(0, grossSalary);
  const terARate = getTerARate(normalizedGrossSalary);
  const taxDeduction = normalizedGrossSalary * terARate;

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="h-5 w-5 text-emerald-400" />
          <div>
          <p className="text-sm font-semibold text-white">PPh 21 TER Engine</p>
            <p className="text-xs text-slate-500">PP 58/2023 client-side demo</p>
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
            min={0}
            max={50_000_000}
            step={500_000}
            value={grossSalary}
            onChange={(event) =>
              setGrossSalary(Math.max(0, Number(event.target.value) || 0))
            }
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-500"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span className="sr-only">Gross salary range</span>
          <input
            aria-label="Range gaji bruto bulanan"
            type="range"
            min={0}
            max={50_000_000}
            step={500_000}
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
            The calculator maps monthly gross salary to the Category A TER
            bracket and updates the tax cut without a page refresh.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function BookingSandbox() {
  const [selectedSlot, setSelectedSlot] = useState<SlotTime | null>("15:00");
  const slots: { time: SlotTime; available: boolean }[] = [
    { time: "13:00", available: true },
    { time: "14:00", available: false },
    { time: "15:00", available: true },
    { time: "16:30", available: true },
  ];

  function handleSelect(time: SlotTime) {
    setSelectedSlot(time);
  }

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
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
          Select an available slot to demonstrate a client-side booking lock.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((time) => {
            const status: SlotStatus = time.available
              ? selectedSlot === time.time
                ? "Selected"
                : "Open"
              : "Booked by Others";

            return (
              <button
                key={time.time}
                type="button"
                onClick={() => handleSelect(time.time)}
                aria-label={`Select slot ${time.time}`}
                disabled={!time.available}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left transition hover:border-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{time.time}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {time.available ? "Tap to reserve" : "Booked"}
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
            Slot yang tersedia langsung berpindah ke status{" "}
            <span className="text-slate-200">lock acquired</span>, sedangkan
            slot booked tetap non-interactive.
          </p>
          <p className="mt-3 border-t border-slate-800 pt-3 font-mono text-xs text-emerald-300">
            Status: {selectedSlot ? `Slot ${selectedSlot} lock acquired` : "Select a slot"}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function BudgetSandbox() {
  const [currentSpend, setCurrentSpend] = useState(3_200_000);
  const budgetLimit = 5_000_000;
  const ratio = currentSpend / budgetLimit;
  const isSafe = currentSpend <= budgetLimit * 0.75;
  const isWarning = currentSpend > budgetLimit * 0.75 && currentSpend <= budgetLimit;
  const isDanger = currentSpend > budgetLimit;
  const progressColor = isSafe
    ? "bg-emerald-500"
    : isWarning
      ? "bg-amber-400"
      : "bg-rose-500";

  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
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
            max={6_000_000}
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
            <p className="font-semibold">Overbudget alert</p>
            <p className="mt-2 leading-7">
              Spending is {currency.format(currentSpend - budgetLimit)} above the
              monthly limit.
            </p>
          </div>
        ) : isWarning ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
            <p className="font-semibold">Warning threshold</p>
            <p className="mt-2 leading-7">
              Allocation has crossed 75% of the available budget.
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
