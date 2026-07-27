import type { Metadata } from "next";
import HelpCenter from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center | Spentify",
  description:
    "Find answers about Spentify transactions, budgets, wallets, cloud sync, and account settings.",
  alternates: {
    canonical: "/help",
  },
};

export default function HelpPage() {
  return (
    <main>
      <HelpCenter />
    </main>
  );
}
