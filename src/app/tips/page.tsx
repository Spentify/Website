import type { Metadata } from "next";
import { CalendarCheck, Coffee, ListChecks, Repeat, Target, Clock, ShoppingBasket, Tags, CalendarDays, ReceiptText, NotebookPen, Wallet } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Money Tips | Spentify",
  description: "Simple tips to track everyday spending, build a realistic budget, and make money habits easier to maintain.",
  alternates: { canonical: "/tips" },
};

const tips = [
  {
    title: "Start with the small stuff",
    description: "Record coffee, snacks, and other everyday purchases. Seeing the little expenses together helps you understand where your money goes.",
    icon: Coffee,
    category: "Track spending",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Make it a one-minute habit",
    description: "Pick a regular time, like after dinner, to log your expenses. A small daily routine makes purchases easier to remember.",
    icon: CalendarCheck,
    category: "Build a routine",
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Budget from real spending",
    description: "Review your recent expenses before setting category limits. Start with a budget that fits your everyday needs and adjust as you learn.",
    icon: Target,
    category: "Plan your budget",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Check your recurring costs",
    description: "List subscriptions and regular bills, then check which ones you still use. Set a reminder before renewals so you can decide in time.",
    icon: Repeat,
    category: "Spend thoughtfully",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Give yourself a weekly check-in",
    description: "Take a few minutes each week to review your spending and what’s left. Choose one small adjustment for the week ahead.",
    icon: ListChecks,
    category: "Keep your rhythm",
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Pause before an impulse purchase",
    description: "Put a nonessential purchase on a wish list and revisit it tomorrow. A little distance gives you time to decide whether you still want it.",
    icon: Clock,
    category: "Spend thoughtfully",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Shop with a list",
    description: "Check what you already have before heading to the store. Bring a short list to keep your purchases focused on what you need.",
    icon: ShoppingBasket,
    category: "Spend thoughtfully",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Keep your categories simple",
    description: "Start with a few clear categories, like food, transport, and bills. Add more only when they help you understand your spending.",
    icon: Tags,
    category: "Track spending",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Plan for occasional expenses",
    description: "Note upcoming costs like gifts, annual renewals, and repairs. Include them in your budget before the month they arrive.",
    icon: CalendarDays,
    category: "Plan your budget",
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Check receipts while they’re fresh",
    description: "Review your receipt after a purchase and record the total. It’s easier to catch a mistake or remember a detail right away.",
    icon: ReceiptText,
    category: "Track spending",
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Add a note when it helps",
    description: "Use a short note for purchases you might not recognize later. A little context makes your next spending review easier.",
    icon: NotebookPen,
    category: "Keep your rhythm",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Leave room for the unexpected",
    description: "When planning your budget, leave some space for small unplanned costs if you can. Revisit that amount as your needs change.",
    icon: Wallet,
    category: "Plan your budget",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function TipsPage() {
  return (
    <main className="min-h-[70vh] bg-slate-50/50">
      <ScrollReveal>
        <section className="container px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="hero-enter text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Small steps, every day</p>
            <h1 className="hero-enter hero-delay-1 mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Money tips</h1>
            <p className="hero-enter hero-delay-2 mt-5 max-w-xl text-lg leading-8 text-slate-600">Simple ways to make tracking and budgeting easier. Pick one and make it part of your day.</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {tips.map(({ title, description, icon: Icon, category, color }, index) => (
              <li key={title} data-reveal className="benefit-card bg-white">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex rounded-2xl p-3 ${color}`}><Icon size={24} aria-hidden="true" /></span>
                  <span className="text-sm font-medium tabular-nums text-slate-400" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-blue-600">{category}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
          <p data-reveal className="mt-10 text-sm leading-6 text-slate-500">You don’t have to change everything at once. Start small and keep going.</p>
        </section>
      </ScrollReveal>
    </main>
  );
}
