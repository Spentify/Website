"use client";

import {
  Check,
  Home,
  PiggyBank,
  ReceiptText,
  Sparkles,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Frequency = "monthly" | "semi-monthly" | "bi-weekly" | "weekly";
type BucketKey = "needs" | "wants" | "savings";

const frequencies: { value: Frequency; label: string; periods: number }[] = [
  { value: "monthly", label: "Monthly", periods: 12 },
  { value: "semi-monthly", label: "Semi-Monthly", periods: 24 },
  { value: "bi-weekly", label: "Bi-Weekly", periods: 26 },
  { value: "weekly", label: "Weekly", periods: 52 },
];

const bucketDetails = {
  needs: {
    title: "Needs",
    description: "The essentials that keep life running.",
    categories: ["Rent or mortgage", "Utilities & bills", "Groceries", "Transportation"],
    icon: Home,
    color: "bg-blue-500",
    softColor: "bg-blue-50 text-blue-700",
  },
  wants: {
    title: "Wants",
    description: "The things that make life more enjoyable.",
    categories: ["Dining out", "Subscriptions", "Shopping", "Entertainment"],
    icon: Sparkles,
    color: "bg-violet-500",
    softColor: "bg-violet-50 text-violet-700",
  },
  savings: {
    title: "Savings & debt",
    description: "The money that builds your future.",
    categories: ["Emergency fund", "Retirement", "Investments", "Extra debt payments"],
    icon: PiggyBank,
    color: "bg-emerald-500",
    softColor: "bg-emerald-50 text-emerald-700",
  },
} as const;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatCents(cents: number) {
  return currency.format(cents / 100);
}

function dollarsToCents(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  return digits ? Number.parseInt(digits, 10) * 100 : 0;
}

function rebalanceRatios(current: Record<BucketKey, number>, changed: BucketKey, next: number) {
  const keys = (Object.keys(current) as BucketKey[]).filter((key) => key !== changed);
  const remaining = 100 - next;
  const otherTotal = current[keys[0]] + current[keys[1]];
  const first = otherTotal === 0 ? Math.round(remaining / 2) : Math.round((remaining * current[keys[0]]) / otherTotal);

  return { ...current, [changed]: next, [keys[0]]: first, [keys[1]]: remaining - first };
}

export default function FiftyThirtyTwentyCalculator() {
  const [incomeCents, setIncomeCents] = useState(500_000);
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [isCustom, setIsCustom] = useState(false);
  const [ratios, setRatios] = useState<Record<BucketKey, number>>({ needs: 50, wants: 30, savings: 20 });

  const selectedFrequency = frequencies.find((item) => item.value === frequency)!;
  const results = useMemo(() => {
    const yearlyIncome = incomeCents * 12;
    const paycheck = Math.round(yearlyIncome / selectedFrequency.periods);

    return (Object.keys(ratios) as BucketKey[]).reduce(
      (output, key) => {
        output[key] = {
          monthly: Math.round((incomeCents * ratios[key]) / 100),
          paycheck: Math.round((paycheck * ratios[key]) / 100),
        };
        return output;
      },
      {} as Record<BucketKey, { monthly: number; paycheck: number }>,
    );
  }, [incomeCents, ratios, selectedFrequency.periods]);

  function setCustom(enabled: boolean) {
    setIsCustom(enabled);
    if (!enabled) setRatios({ needs: 50, wants: 30, savings: 20 });
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="overflow-hidden rounded-[1.75rem] border border-white/90 bg-white/90 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.28),0_1px_2px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-slate-200/80 bg-gradient-to-br from-slate-50/90 to-blue-50/40 p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-blue-700">
              <span className="grid size-8 place-items-center rounded-lg bg-blue-100"><WalletCards className="size-4" /></span>
              Your income
            </div>

            <label htmlFor="income" className="text-sm font-medium text-slate-700">Monthly after-tax income</label>
            <div className="relative mt-2">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-2xl font-semibold text-slate-400">$</span>
              <input
                id="income"
                aria-label="Monthly after-tax income"
                inputMode="numeric"
                value={incomeCents ? (incomeCents / 100).toLocaleString("en-US") : ""}
                onChange={(event) => setIncomeCents(dollarsToCents(event.target.value))}
                placeholder="0"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white pl-10 pr-4 text-3xl font-bold tracking-tight text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
              />
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">What lands in your account each month after taxes and deductions.</p>

            <fieldset className="mt-8">
              <legend className="text-sm font-medium text-slate-700">How often are you paid?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {frequencies.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    aria-label={`Set pay schedule to ${item.label}`}
                    aria-pressed={frequency === item.value}
                    onClick={() => setFrequency(item.value)}
                    className={`min-h-11 rounded-xl border px-3 text-sm font-semibold transition-all ${frequency === item.value ? "border-blue-600 bg-blue-600 text-white shadow-sm" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">Custom split</p>
                <p className="mt-0.5 text-xs text-slate-500">Adjust the rule to fit your life.</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-label="Use a custom budget ratio"
                aria-checked={isCustom}
                onClick={() => setCustom(!isCustom)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${isCustom ? "bg-blue-600" : "bg-slate-300"}`}
              >
                <span className={`absolute top-1 size-5 rounded-full bg-white shadow transition-transform ${isCustom ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>

            <div className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${isCustom ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-4">
                  {(Object.keys(ratios) as BucketKey[]).map((key) => (
                    <label key={key} className="block">
                      <span className="flex justify-between text-sm font-medium text-slate-700">
                        <span>{bucketDetails[key].title}</span><span>{ratios[key]}%</span>
                      </span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={ratios[key]}
                        aria-label={`${bucketDetails[key].title} percentage`}
                        onChange={(event) => setRatios((current) => rebalanceRatios(current, key, Number(event.target.value)))}
                        className="mt-2 h-2 w-full cursor-pointer accent-blue-600"
                      />
                    </label>
                  ))}
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700"><Check className="size-4" /> Always adds up to 100%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-blue-700">Your monthly plan</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Every dollar has a job.</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">Based on {formatCents(incomeCents)}/mo</span>
            </div>

            <div className="mt-7 flex h-4 w-full overflow-hidden rounded-full bg-slate-100" aria-label="Budget allocation chart">
              {(Object.keys(ratios) as BucketKey[]).map((key) => <div key={key} title={`${bucketDetails[key].title}: ${ratios[key]}%`} className={`${bucketDetails[key].color} transition-[width] duration-500 ease-out`} style={{ width: `${ratios[key]}%` }} />)}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {(Object.keys(ratios) as BucketKey[]).map((key) => <span key={key} className="flex items-center gap-1.5 text-xs font-medium text-slate-600"><span className={`size-2 rounded-full ${bucketDetails[key].color}`} />{bucketDetails[key].title} {ratios[key]}%</span>)}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {(Object.keys(ratios) as BucketKey[]).map((key) => {
                const detail = bucketDetails[key];
                const Icon = detail.icon;
                return (
                  <article key={key} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_30px_-20px_rgba(15,23,42,0.35)]">
                    <div className={`grid size-9 place-items-center rounded-xl ${detail.softColor}`}><Icon className="size-4" /></div>
                    <p className="mt-4 text-sm font-semibold text-slate-600">{detail.title} <span className="text-slate-400">· {ratios[key]}%</span></p>
                    <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">{formatCents(results[key].monthly)}</p>
                    <p className="mt-1 text-xs text-slate-500">{formatCents(results[key].paycheck)} per paycheck</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5">
              <div className="flex items-center gap-2"><ReceiptText className="size-4 text-slate-500" /><h3 className="text-sm font-semibold text-slate-900">What goes where</h3></div>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                {(Object.keys(ratios) as BucketKey[]).map((key) => (
                  <div key={key}>
                    <p className="text-sm font-semibold text-slate-800">{bucketDetails[key].title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{bucketDetails[key].description}</p>
                    <ul className="mt-3 space-y-2">
                      {bucketDetails[key].categories.map((category) => <li key={category} className="flex items-center gap-2 text-xs text-slate-600"><span className={`size-1.5 rounded-full ${bucketDetails[key].color}`} />{category}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50/70 p-6 sm:p-9">
        <div aria-hidden="true" className="absolute right-0 top-0 size-48 -translate-y-1/2 translate-x-1/3 rounded-full border-[32px] border-blue-100/60" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700"><span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-white"><Sparkles className="size-3.5" /></span> Simple money tracking</div>
            <h2 className="mt-5 max-w-xl text-2xl font-bold tracking-[-0.025em] text-slate-950 sm:text-3xl">See where your money goes and what you have left.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Take control of your money with Spentify—a simple, clean expense tracker to manage spending, budgets, and savings.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {["Easy expense tracking", "Smart budgeting", "Simple spending insights"].map((benefit) => (
                <span key={benefit} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600"><span className="grid size-5 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-3" strokeWidth={3} /></span>{benefit}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:min-w-52">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Get Spentify</p>
            <a href="https://apps.apple.com/kh/app/spentify-expense-tracker/id1439556350" aria-label="Download Spentify on the App Store" className="group inline-flex rounded-xl outline-none transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-blue-500/25 focus-visible:ring-offset-4">
              <Image src="/appstore.svg" alt="Download on the App Store" width={155} height={52} className="h-[52px] w-auto" />
            </a>
            <p className="mt-3 max-w-52 text-center text-xs leading-5 text-slate-500">Build better money habits with simple daily tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
