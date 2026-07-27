"use client";

import Image from "next/image";
import { useState } from "react";
import type { HelpStep } from "@/lib/help-articles";

const interfaceLabels = [
  "spentify.app@gmail.com",
  "Choose category",
  "Continue with Google",
  "Continue with Apple",
  "Forgot passcode",
  "Manage Subscription",
  "Mark as Complete",
  "Removed Categories",
  "Budget a category",
  "Change app icon",
  "Main Currency",
  "Header images",
  "Create account",
  "Create budget",
  "My Account",
  "Start of week",
  "All wallets",
  "Add category",
  "Delete account",
  "Change password",
  "Notifications",
  "Sign out",
  "Passcode",
  "Categories",
  "Settings",
  "Transactions",
  "Wallet",
  "Wallets",
  "Savings",
  "Budgets",
  "Reports",
  "Expenses",
  "Expense",
  "Income",
  "Saving",
  "Support",
  "Restore",
  "Reopen",
  "Delete",
  "Export",
  "More",
  "Home",
  "Save",
  "Google",
  "Apple",
  "Pro",
  "CSV",
  "Excel",
].sort((a, b) => b.length - a.length);

const escapedLabels = interfaceLabels.map((label) =>
  label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
);
const interfaceLabelPattern = new RegExp(`(${escapedLabels.join("|")})`, "g");
const interfaceLabelSet = new Set(interfaceLabels);

export function FormattedHelpText({ text }: { text: string }) {
  return text.split(interfaceLabelPattern).map((part, index) =>
    part === "spentify.app@gmail.com" ? (
      <a
        key={`${part}-${index}`}
        href="mailto:spentify.app@gmail.com"
        className="font-medium text-[#0e76d9] hover:underline"
      >
        {part}
      </a>
    ) : interfaceLabelSet.has(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

type HelpArticleStepProps = {
  number: number;
  step: HelpStep;
};

export default function HelpArticleStep({
  number,
  step,
}: HelpArticleStepProps) {
  const [isOpen, setIsOpen] = useState(false);
  const content = typeof step === "string" ? { text: step } : step;
  const imageWidth = content.imageWidth ?? 390;
  const imageHeight = content.imageHeight ?? 844;

  return (
    <li
      className={
        content.image
          ? "grid gap-5 md:grid-cols-[minmax(0,1fr)_240px] md:items-start"
          : "flex gap-4"
      }
    >
        <div className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-[#0e76d9]">
            {number}
          </span>
          <p className="pt-0.5 leading-7 text-gray-700">
            <FormattedHelpText text={content.text} />
          </p>
        </div>

        {content.image && content.imageAlt && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group ml-11 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md md:ml-0"
            aria-label={`Enlarge image: ${content.imageAlt}`}
          >
            <Image
              src={content.image}
              alt={content.imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="h-auto w-full"
            />
            <span className="block border-t border-gray-200 px-3 py-2 text-center text-xs font-medium text-gray-500 group-hover:text-[#0e76d9]">
              Tap to enlarge
            </span>
          </button>
        )}
      {isOpen && content.image && content.imageAlt && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={content.imageAlt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-gray-950 shadow-lg"
            aria-label="Close image"
          >
            ×
          </button>
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="max-h-[88vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </li>
  );
}
