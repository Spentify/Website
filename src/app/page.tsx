import type { Metadata } from "next";
import Hero from '@/components/sections/hero'
import DownloadButtons from '@/components/download-buttons'
import ScrollReveal from '@/components/scroll-reveal'
import { ArrowUpRight, Wallet, ChartNoAxesCombined, Target, Moon, Palette, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: "Spentify — Simple Expense Tracker & Budget App",
  description: "See where your money goes and what you have left with Spentify, a simple expense tracker for managing spending, budgets, and savings.",
  alternates: {
    canonical: "https://spentify.app/",
  },
  openGraph: {
    title: "Spentify — Simple Expense Tracker & Budget App",
    description: "See where your money goes and what you have left. Track spending, manage budgets, and build savings with Spentify.",
    url: "https://spentify.app/",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spentify — Simple expense tracking and budgeting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spentify — Simple Expense Tracker & Budget App",
    description: "See where your money goes and what you have left with Spentify.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <section id="features" className="container scroll-mt-8 px-5 py-20 sm:px-8 lg:py-28">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">LESS GUESSWORK. MORE CLARITY.</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Small habits. A better picture<br className="hidden sm:block" /> of your money.</h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">From your morning coffee to your monthly budget, make everyday money easier to follow.</p>
          </div>
          <div className="feature-grid mt-10 grid gap-5 lg:grid-cols-3">
            <article data-reveal className="feature-card benefit-card bg-[#f0f7ff]">
              <Wallet className="text-blue-600" size={26} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">Keep up with everyday spending.</h3>
              <p className="mt-3 leading-7 text-slate-600">Record income and expenses in seconds. Keep the little things from getting lost.</p>
              <div className="mt-8 min-h-[168px] rounded-2xl bg-white p-4 shadow-sm">
                <p className="mb-3 text-xs font-medium text-slate-400">Example transactions</p>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm"><span>☕ Coffee</span><span className="font-semibold text-slate-700">−$2.00</span></div>
                <div className="flex items-center justify-between pt-3 text-sm"><span>🥬 Groceries</span><span className="font-semibold text-slate-700">−$15.00</span></div>
              </div>
            </article>
            <article data-reveal className="feature-card benefit-card bg-[#eef7fd]">
              <ChartNoAxesCombined className="text-[#2385d7]" size={26} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">See where your money goes.</h3>
              <p className="mt-3 leading-7 text-slate-600">Understand your spending patterns with simple insights that help you see the bigger picture.</p>
              <div className="mt-8 min-h-[168px] rounded-2xl border border-blue-100/80 bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-slate-500">Example spending breakdown</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#2385d7 0% 54%, #5aa5e5 54% 77%, #70c8e2 77% 98%, #ffb65c 98% 100%)' }} aria-hidden="true">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white"><span className="text-[9px] text-slate-500">Total</span><span className="text-base font-semibold tracking-tight text-slate-900">$100</span></div>
                  </div>
                  <p className="sr-only">Total example spending: $100.</p>
                  <ul className="min-w-0 flex-1 space-y-2">
                    {[
                      { label: 'Bills', percent: 54, color: '#2385d7' },
                      { label: 'Food', percent: 23, color: '#5aa5e5' },
                      { label: 'Transport', percent: 21, color: '#70c8e2' },
                      { label: 'Coffee', percent: 2, color: '#ffb65c' },
                    ].map(({ label, percent, color }) => (
                      <li key={label} className="flex items-center gap-1.5 text-xs">
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                        <span className="flex-1 text-slate-600">{label}</span>
                        <span className="font-semibold tabular-nums text-slate-800">{percent}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            <article data-reveal className="feature-card benefit-card bg-[#eff9f5]">
              <Target className="text-emerald-600" size={26} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">Give your budget a little direction.</h3>
              <p className="mt-3 leading-7 text-slate-600">Set budgets and keep track of your spending. Know where you stand as the month goes on.</p>
              <div className="mt-8 min-h-[168px] rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-slate-400">Example monthly budget</p>
                <div className="mt-3 flex justify-between text-sm"><span className="font-medium">Groceries</span><span className="text-slate-500">$120 / $200</span></div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-emerald-50" aria-hidden="true"><div className="h-full w-[60%] rounded-full bg-emerald-500" /></div>
                <p className="mt-3 text-xs font-medium text-emerald-700">$80 left in your budget</p>
              </div>
            </article>
          </div>
        </section>
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div data-reveal className="container grid gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div><p className="text-sm font-semibold text-blue-600">MAKE IT YOURS</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Your money. Your rhythm.</h2><p className="mt-4 max-w-md leading-7 text-slate-600">Choose a look you love and make tracking part of your day. A little consistency goes a long way.</p></div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div><Palette size={22} className="text-blue-600" /><h3 className="mt-3 font-semibold text-slate-900">Your colors</h3><p className="mt-2 text-sm leading-6 text-slate-600">Themes that match your style.</p></div>
              <div><Moon size={22} className="text-blue-600" /><h3 className="mt-3 font-semibold text-slate-900">Day or night</h3><p className="mt-2 text-sm leading-6 text-slate-600">Dark mode for a softer view.</p></div>
              <div><Check size={22} className="text-blue-600" /><h3 className="mt-3 font-semibold text-slate-900">Every day</h3><p className="mt-2 text-sm leading-6 text-slate-600">Simple tracking. Better habits.</p></div>
            </div>
          </div>
        </section>
        <section className="container px-5 py-20 sm:px-8">
          <div data-reveal className="relative overflow-hidden rounded-[2rem] bg-[#0b2644] px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-500/15" aria-hidden="true" />
            <ArrowUpRight className="relative mb-6 text-blue-300" size={32} />
            <h2 className="relative max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Make room for better<br /> money habits.</h2>
            <p className="relative mt-4 max-w-lg leading-7 text-blue-100/80">Start with your next expense. Let Spentify help you build a clearer picture, one day at a time.</p>
            <div className="relative mt-8"><DownloadButtons /></div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
