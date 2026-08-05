import type { Metadata } from "next";
import { Plus } from "lucide-react";
import FiftyThirtyTwentyCalculator from "@/components/calculators/fifty-thirty-twenty-calculator";

const title = "Free 50/30/20 Budget Calculator | Spentify";
const description = "Use our free 50/30/20 budget calculator to split your after-tax income into needs, wants, and savings. Get monthly and per-paycheck amounts instantly.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "50/30/20 budget calculator",
    "50 30 20 rule calculator",
    "budget calculator",
    "paycheck budget calculator",
    "monthly budget planner",
  ],
  alternates: { canonical: "/calculators/50-30-20" },
  openGraph: {
    title,
    description,
    url: "/calculators/50-30-20",
    type: "website",
    images: [{ url: "/calculators/50-30-20/opengraph-image", width: 1200, height: 630, alt: "Spentify 50/30/20 Budget Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/calculators/50-30-20/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "50/30/20 Budget Calculator",
    url: "https://spentify.app/calculators/50-30-20",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: ["Custom budget ratios", "Per-paycheck budget breakdown", "Monthly needs, wants, and savings allocations"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the 50/30/20 budget rule?",
        acceptedAnswer: { "@type": "Answer", text: "The 50/30/20 rule suggests putting 50% of after-tax income toward needs, 30% toward wants, and 20% toward savings and debt repayment." },
      },
      {
        "@type": "Question",
        name: "Should I use gross or after-tax income?",
        acceptedAnswer: { "@type": "Answer", text: "Use the after-tax income that reaches your bank account. This gives you a practical budget based on money available to spend and save." },
      },
      {
        "@type": "Question",
        name: "Can I change the 50/30/20 percentages?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. The calculator lets you create a custom split while automatically keeping the three categories at a total of 100%." },
      },
    ],
  },
];

export default function FiftyThirtyTwentyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <div className="relative">
        <div className="container px-5 pb-12 pt-14 text-center sm:pb-16 sm:pt-20">
          <p className="mx-auto inline-flex rounded-full border border-blue-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur">Free budget calculator</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.035em] text-slate-950 sm:text-6xl"><span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">50/30/20 Budget Calculator</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Split your after-tax income into needs, wants, and savings in seconds. Adjust your percentages, compare pay schedules, and build a budget that fits your life.</p>
        </div>
      </div>

      <div className="container relative px-4 pb-20 sm:px-5">
        <FiftyThirtyTwentyCalculator />

        <section className="mx-auto mt-16 max-w-3xl sm:mt-24">
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Understand the rule</p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight sm:text-3xl">How the 50/30/20 budget works</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600">Clear answers to help you divide your income confidently and adapt the rule to your finances.</p>
          <div className="mt-8 space-y-3">
            {structuredData[1].mainEntity?.map((item) => (
              <details key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-slate-300 open:border-blue-200 open:bg-blue-50/30">
                <summary className="grid min-h-8 cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4 font-semibold leading-6 text-slate-900 marker:hidden">
                  <span>{item.name}</span>
                  <span aria-hidden="true" className="grid size-8 place-items-center self-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-45">
                    <Plus className="size-4" strokeWidth={2.25} />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
