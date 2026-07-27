export type HelpStep =
  | string
  | {
      text: string;
      image?: string;
      imageAlt?: string;
      imageWidth?: number;
      imageHeight?: number;
    };

export type HelpArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  paragraphs: string[];
  steps?: HelpStep[];
  note?: string;
};

type ArticleSource = [category: string, title: string, answer: string];

const articleSources: ArticleSource[] = [
  ["Getting started", "How do I create an account?", "On the sign-in screen, tap Continue with Google or Continue with Apple. After your account is created, Spentify automatically adds a default wallet with a default currency and a default budget linked to that wallet. You can rename them or change the wallet currency later."],
  ["Getting started", "Can I use the same account on multiple devices?", "Yes. Sign in with the same account on each device. To check for updates, pull down on the Home screen."],
  ["Getting started", "How do I sign out?", "Tap More → My Account → Sign out."],
  ["Getting started", "How do I change my nickname?", "Tap More → My Account, tap your profile name, enter a new nickname, then tap Save."],
  ["Getting started", "How do I change my password?", "Password changes are only available for older accounts created with an email address and password. Accounts using Google or Apple do not have a separate Spentify password."],

  ["Transactions", "How do I add a transaction?", "Tap the create button and enter the amount. Use the Expense, Income, or Saving category tab to set the transaction type. The wallet selector on the Home screen controls which transactions are shown and which wallet is used for a new transaction."],
  ["Transactions", "Can I record a transaction for a previous date?", "Yes. While creating or editing a transaction, tap the date field and choose the required date and time."],
  ["Transactions", "How do I edit a transaction?", "On the Home screen, tap the transaction you want to change. Update its amount, category, wallet, note, or date, then tap Save."],
  ["Transactions", "How do I delete a transaction?", "Tap the transaction, tap Delete, then confirm the deletion."],
  ["Transactions", "How do I view transactions from a specific period?", "Use the period selector on the Home screen. The app supports daily, weekly, monthly, preset, and custom date ranges."],
  ["Transactions", "How do I view transactions from one wallet?", "Tap the wallet selector at the top of the Home screen and choose a wallet. Choose All wallets to combine transactions from every wallet."],
  ["Transactions", "What information is shown in the Home overview?", "It shows your income, expenses, savings, and balance for the selected period and wallet."],

  ["Wallets and currencies", "What is a wallet?", "A wallet helps you organize your money and transactions in Spentify. Every transaction belongs to a wallet."],
  ["Wallets and currencies", "How do I create a wallet?", "Tap More → Wallets, tap the add button, then enter a name and choose a currency, icon, and color."],
  ["Wallets and currencies", "Can different wallets use different currencies?", "Yes. Each wallet can have its own currency."],
  ["Wallets and currencies", "What is the main currency?", "Spentify uses your main currency for totals across multiple wallets. Other currencies are converted using available exchange rates."],
  ["Wallets and currencies", "How do I change the main currency?", "Tap More → Settings → Main Currency, then choose a currency."],
  ["Wallets and currencies", "Can I change a wallet’s currency?", "Yes. Tap More → Wallets, tap the wallet, then choose a currency. Check existing transaction amounts carefully before saving."],
  ["Wallets and currencies", "Can I delete every wallet?", "No. The app requires at least one wallet, so your last remaining wallet cannot be deleted."],

  ["Categories", "How do I create a custom category?", "Tap More → Categories → Add category. Enter a name, then choose a type, icon, and color."],
  ["Categories", "What category types are available?", "Categories can be for expenses, income, or savings. A transaction uses the type of its selected category."],
  ["Categories", "Can I edit a default category?", "Some parts of default categories cannot be edited. You can remove a default category from your active list and restore it later."],
  ["Categories", "How do I restore a removed default category?", "Removed default categories can be restored from Removed Categories. Custom categories are permanently deleted and cannot be restored."],
  ["Savings", "How are savings calculated?", "Spentify totals transactions that use a savings category. When needed, amounts are converted to your main currency."],
  ["Savings", "Where can I find Savings?", "Savings is now on the More screen instead of the bottom navigation. Tap More → Savings to open it."],
  ["Savings", "How do I mark a saving as completed?", "Tap More → Savings, tap the saving, then tap Mark as Complete."],
  ["Savings", "Can I reopen a completed saving?", "Yes. Tap the saving in the completed list, then tap Reopen."],

  ["Budgets", "How do budgets work?", "A budget helps you plan your monthly spending and avoid overspending. Each budget is linked to a wallet. Set limits for expense categories, and Spentify shows how much you have spent, how much remains, or how much you are over budget."],
  ["Budgets", "How do I create a budget?", "Tap Budgets, tap the budget selector, then tap Create budget. Enter a name, choose a wallet, icon, and color, then tap Save."],
  ["Budgets", "How do I set a budget for a category?", "Tap a budget, tap Budget a category, choose an expense category, enter the monthly limit, then tap Save."],
  ["Budgets", "How can I tell whether I am over budget?", "Each category budget compares its limit with spending for the selected month. It displays the amount left or the amount over budget."],
  ["Budgets", "Can I review budgets from previous months?", "Yes. Use the month selector on the Budgets screen to navigate between months."],
  ["Budgets", "Can I create weekly or yearly budgets?", "Not currently. Spentify supports monthly budgets."],

  ["Reports", "What reports are available?", "Spentify provides reports for expenses, income, and savings."],
  ["Reports", "Can I see which categories account for most of my spending?", "Yes. Tap Reports → Expenses to view spending grouped by category, including totals and chart-based breakdowns."],
  ["Reports", "Can I open the transactions behind a report?", "Yes. Tap a category in the report details to view the transactions included in that category’s total."],
  ["Reports", "Can reports combine multiple currencies?", "Yes. When viewing all wallets, values are converted into your main currency using the available exchange rates."],
  ["Reports", "Can I filter reports by wallet and date?", "Yes. Reports support wallet selection and multiple time ranges, including daily, weekly, monthly, presets, and custom ranges."],
  ["Reports", "Can I download a report as a PDF?", "Not currently. PDF report downloads are planned for a future release."],

  ["Exporting data", "How do I export my transactions?", "Tap More → Export, choose the transaction type, wallet, period, and export format, then generate the file."],
  ["Exporting data", "Which export formats are supported?", "You can export CSV and Excel files. PDF export is not currently available."],
  ["Exporting data", "Can I export only expenses or income?", "Yes. You can filter the export by transaction type, wallet, and date period. You can also export all transaction types or all wallets."],
  ["Exporting data", "How do I save or share an exported file?", "After the file is generated, the device’s share menu opens. You can save it to a supported storage app or share it through another application."],
  ["Exporting data", "Do free users need to watch an advertisement to export?", "A rewarded advertisement may be shown before export for free users. Pro users can export directly without that step."],

  ["Notifications and security", "Can Spentify remind me to record expenses?", "Yes. Tap More → Settings → Notifications, then enable the new-transaction reminder."],
  ["Notifications and security", "Can I choose the reminder time?", "Yes. The reminder runs every day at the time you select. The default time is 8:00 PM."],
  ["Notifications and security", "How do I protect the app with a passcode?", "Tap More → Settings → Passcode, then enable passcode protection. After setup, Spentify asks for your passcode or enabled biometric authentication when the app opens."],
  ["Notifications and security", "What should I do if I forget my passcode?", "After two incorrect passcode attempts, tap Forgot passcode. Spentify sends a temporary passcode to your email so you can unlock the app and create a new passcode."],
  ["Notifications and security", "Can I use Face ID, Touch ID, or fingerprint authentication?", "Yes, if biometric authentication is supported and configured on your device. You must enable passcode protection before enabling the biometric option."],

  ["Appearance and language", "Can I use dark mode?", "Yes. Tap More → Settings → Themes, then choose Light, Dark, or System."],
  ["Appearance and language", "Can I customize the app’s colors?", "Yes. The Themes screen includes selectable visual styles and theme colors."],
  ["Appearance and language", "Can I change the app icon?", "Yes. Tap More → Settings → Change app icon, then choose an icon. The new icon may appear the next time you open the app."],
  ["Appearance and language", "Can I customize the Home header image?", "Yes. Tap More → Settings → Header images, then choose an image. To remove the current header image, tap the selected image again."],
  ["Appearance and language", "Which languages are supported?", "The current selectable languages are English, Khmer, Malay, Thai, Vietnamese, Filipino, Indonesian, Spanish, French, Japanese, Korean, and Simplified Chinese."],
  ["Appearance and language", "Can I change which day starts the week?", "Yes. Tap More → Settings → Start of week, then choose Sunday or Monday."],

  ["Account data and subscriptions", "What are the free-plan limits?", "Free accounts can create 1 budget, 2 wallets, 100 categories, and 5 category budget limits. Pro removes these limits."],
  ["Account data and subscriptions", "What does upgrading to Pro provide?", "Pro removes creation limits and lets you export without watching a rewarded ad. An active Pro plan also includes new Pro features added in future releases."],
  ["Account data and subscriptions", "How do I manage my subscription?", "Tap More → My Account → Manage Subscription. Your device then opens the relevant app store to manage the subscription."],
  ["Account data and subscriptions", "What is the difference between resetting transactions and resetting all data?", "Reset transactions deletes only your transactions. Reset all data deletes your financial data and creates a new default wallet and budget. Neither action can be undone."],
  ["Account data and subscriptions", "How do I permanently delete my account?", "Tap More → My Account → Delete account, then confirm. This is different from signing out or resetting data."],
  ["Account data and subscriptions", "How do I contact support?", "Contact support through the in-app chat or email spentify.app@gmail.com."],
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const stepGuides: Record<
  string,
  { intro: string; steps: HelpStep[]; note?: string }
> = {
  "create-an-account": {
    intro: "New users can create an account with Google or Apple. New email-and-password accounts are no longer supported, but existing users can still sign in with their email and password.",
    steps: [
      "Open Spentify to see the sign-in screen.",
      "Tap Continue with Google or Continue with Apple.",
      "Follow the prompts to finish creating your account.",
      "After your account is created, Spentify adds a default wallet with a default currency and a default budget linked to that wallet. You can rename the wallet and budget or change the wallet currency later.",
    ],
  },
  "sign-out": {
    intro: "You can safely sign out from your account settings.",
    steps: ["Tap More.", "Tap My Account.", "Tap Sign out."],
  },
  "change-my-nickname": {
    intro: "Update the name displayed on your Spentify profile.",
    steps: [
      "Tap More, then tap My Account.",
      "Tap your current profile name.",
      "Enter your new nickname.",
      "Save the change.",
    ],
  },
  "change-my-password": {
    intro: "This feature is only for older accounts created with an email address and password. If you use Google or Apple to sign in, you do not have a separate Spentify password to change.",
    steps: [
      "Tap More, then tap My Account.",
      "Tap Change password.",
      "Enter your current password.",
      "Enter and confirm your new password, then tap Save.",
    ],
  },
  "add-a-transaction": {
    intro: "Use the create button to record an expense, income, or saving.",
    steps: [
      "Tap the create button in the main navigation.",
      "Enter the transaction amount.",
      "Tap Choose category.",
      "Choose the Expense, Income, or Saving tab. The tab you choose sets the transaction type.",
      "Tap a category from the selected tab.",
      "Confirm the Wallet. If a specific wallet was selected on the Home screen, no action is needed. If All wallets was selected, tap Wallet and choose one.",
      "Optionally add a note or change the date.",
      "Tap Save.",
    ],
  },
  "record-a-transaction-for-a-previous-date": {
    intro: "You can record past activity by changing the transaction date before saving.",
    steps: [
      "Create a new transaction or open one to edit it.",
      "Tap the date field.",
      "Choose the required date and time.",
      "Save the transaction.",
    ],
  },
  "edit-a-transaction": {
    intro: "Edit a transaction when its amount or other details need correcting.",
    steps: [
      "Go to the Home screen.",
      "Tap the transaction you want to change.",
      "Update its amount, category, wallet, note, or date.",
      "Save your changes.",
    ],
  },
  "delete-a-transaction": {
    intro: "Deleting a transaction removes it from your totals and cannot be undone.",
    steps: [
      "Tap the transaction you want to remove.",
      "Tap Delete.",
      "Review the confirmation and confirm the deletion.",
    ],
  },
  "view-transactions-from-a-specific-period": {
    intro: "Filter the Home screen to focus on the dates you need.",
    steps: [
      "Go to the Home screen.",
      "Tap the period selector.",
      "Choose Daily, Weekly, Monthly, a preset, or a custom date range.",
    ],
  },
  "view-transactions-from-one-wallet": {
    intro: "Use the wallet filter to show activity from one wallet.",
    steps: [
      "Go to the Home screen.",
      "Tap the wallet selector at the top.",
      "Choose a wallet, or choose All wallets to combine every wallet.",
    ],
  },
  "create-a-wallet": {
    intro: "Create a wallet to organize a separate group of transactions.",
    steps: [
      "Tap More, then tap Wallets.",
      "Tap the add button.",
      "Enter a wallet name and choose its currency.",
      "Choose an icon and color.",
      "Tap Save.",
    ],
    note: "Free accounts can have up to 2 wallets. To create more, upgrade to Pro.",
  },
  "change-the-main-currency": {
    intro: "Your main currency is used for totals that combine multiple wallets.",
    steps: [
      "Tap More, then tap Settings.",
      "Tap Main Currency.",
      "Choose the currency you want to use.",
    ],
  },
  "change-a-wallets-currency": {
    intro: "You can change a wallet’s currency, but review existing transaction values carefully first.",
    steps: [
      "Tap More, then tap Wallets.",
      "Tap the wallet you want to update.",
      "Choose the new currency.",
      "Review the change, then save.",
    ],
  },
  "create-a-custom-category": {
    intro: "Custom categories help organize transactions in a way that matches your needs.",
    steps: [
      "Tap More, then tap Categories.",
      "Tap Add category.",
      "Enter a name and choose its group and transaction type.",
      "Choose an icon and color.",
      "Tap Save.",
    ],
    note: "Free accounts can have up to 100 categories. To create more, upgrade to Pro.",
  },
  "restore-a-removed-default-category": {
    intro: "A removed default category can be added back to your active categories.",
    steps: [
      "Tap More, then tap Categories.",
      "Tap Removed Categories.",
      "Find the category you want to bring back.",
      "Tap Restore.",
    ],
    note: "Deleted custom categories cannot be restored.",
  },
  "mark-a-saving-as-completed": {
    intro: "Mark a saving as complete when you have reached or finished it.",
    steps: [
      "Tap More, then tap Savings.",
      "Tap the saving you completed.",
      "Tap Mark as Complete.",
    ],
  },
  "where-can-i-find-savings": {
    intro: "Savings is now on the More screen and no longer appears in the bottom navigation.",
    steps: [
      "In the bottom navigation, tap More.",
      "Tap Savings.",
    ],
  },
  "reopen-a-completed-saving": {
    intro: "A completed saving can be returned to your active list.",
    steps: [
      "Tap More, then tap Savings.",
      "Tap the completed savings list.",
      "Tap the saving, then tap Reopen.",
    ],
  },
  "create-a-budget": {
    intro: "Create a separate monthly budget for the wallet you want to manage.",
    steps: [
      "Tap Budgets in the main navigation.",
      "Tap the budget selector.",
      "Tap Create budget.",
      "Enter a name and choose a wallet.",
      "Choose an icon and color, then tap Save.",
    ],
    note: "Free accounts can have 1 budget. To create more, upgrade to Pro.",
  },
  "set-a-budget-for-a-category": {
    intro: "Category limits let you control how much you plan to spend each month.",
    steps: [
      "Tap the budget you want to update.",
      "Tap Budget a category.",
      "Choose an expense category.",
      "Enter its monthly spending limit.",
      "Save the category budget.",
    ],
  },
  "tell-whether-i-am-over-budget": {
    intro: "Spentify compares each category limit with your spending for the selected month.",
    steps: [
      "Tap Budgets, then tap a budget.",
      "Choose the month you want to review.",
      "Check each category for the amount left or the amount over budget.",
    ],
  },
  "review-budgets-from-previous-months": {
    intro: "Use the month selector to review an earlier budget period.",
    steps: [
      "Tap Budgets in the main navigation.",
      "Tap the month selector.",
      "Move to the month you want to review.",
    ],
  },
  "see-which-categories-account-for-most-of-my-spending": {
    intro: "The expense report groups spending by category and shows which categories account for the largest totals.",
    steps: [
      "Tap Reports in the main navigation.",
      "Tap Expenses.",
      "Review the category totals and chart breakdown.",
      "Tap a category to inspect its transactions.",
    ],
  },
  "open-the-transactions-behind-a-report": {
    intro: "You can move from a report total to the transactions included in it.",
    steps: [
      "Open the relevant report.",
      "Find the category in the report details.",
      "Tap the category to view its transactions.",
    ],
  },
  "filter-reports-by-wallet-and-date": {
    intro: "Narrow a report by both wallet and time period.",
    steps: [
      "Open the report you want to review.",
      "Use the wallet selector to choose one wallet or all wallets.",
      "Choose a daily, weekly, monthly, preset, or custom date range.",
    ],
  },
  "export-my-transactions": {
    intro: "Export selected transaction data from Spentify as a file.",
    steps: [
      "Tap More, then tap Export.",
      "Choose the transaction type.",
      "Choose a wallet and date period.",
      "Choose CSV or Excel.",
      "Generate the export.",
    ],
  },
  "save-or-share-an-exported-file": {
    intro: "After an export is generated, your device opens its standard share menu.",
    steps: [
      "Wait for Spentify to finish generating the file.",
      "Choose a storage app to save it, or choose another app to share it.",
      "Complete the action in the selected app.",
    ],
  },
  "protect-the-app-with-a-passcode": {
    intro: "Add a passcode to prevent other people from opening your financial information.",
    steps: [
      "Tap More, then tap Settings.",
      "Tap Passcode.",
      "Enable passcode protection.",
      "Create and confirm your passcode.",
    ],
  },
  "should-i-do-if-i-forget-my-passcode": {
    intro: "You can request a temporary passcode after two incorrect attempts.",
    steps: [
      "After entering an incorrect passcode twice, tap Forgot passcode.",
      "Check your email for a temporary passcode from Spentify.",
      "Enter the temporary passcode to unlock the app.",
      "In the bottom navigation, tap More, then tap Settings.",
      "Tap Passcode and create a new passcode.",
    ],
  },
  "use-face-id-touch-id-or-fingerprint-authentication": {
    intro: "Biometric unlock is available when it is supported and already configured on your device.",
    steps: [
      "Enable Spentify passcode protection first.",
      "Return to the Passcode settings.",
      "Enable the available Face ID, Touch ID, or fingerprint option.",
      "Complete the device authentication prompt.",
    ],
  },
  "change-the-app-icon": {
    intro: "Choose another available icon for Spentify on your Home screen.",
    steps: [
      "Tap More, then tap Settings.",
      "Tap Change app icon.",
      "Choose an available icon.",
      "Reopen the app if the new icon does not appear immediately.",
    ],
  },
  "customize-the-home-header-image": {
    intro: "Choose an available image to personalize the Home screen header.",
    steps: [
      "Tap More, then tap Settings.",
      "Tap Header images.",
      "Choose the image you want to use.",
    ],
    note: "To remove the current header image, tap the selected image again to deselect it.",
  },
  "change-which-day-starts-the-week": {
    intro: "Set weekly views to begin on Sunday or Monday.",
    steps: [
      "Tap More, then tap Settings.",
      "Tap Start of week.",
      "Choose Sunday or Monday.",
    ],
  },
  "manage-my-subscription": {
    intro: "Subscription billing and cancellation are managed through the app store connected to your device.",
    steps: [
      "Tap More, then tap My Account.",
      "Tap Manage Subscription.",
      "Review or update the subscription in your app-store account.",
    ],
  },
  "permanently-delete-my-account": {
    intro: "Account deletion is permanent and is different from signing out or resetting app data.",
    steps: [
      "Tap More, then tap My Account.",
      "Tap Delete account.",
      "Review the warning carefully.",
      "Confirm that you want to permanently delete the account.",
    ],
  },
  "contact-support": {
    intro: "Contact the Spentify support team through the app or by email.",
    steps: [
      "Tap More.",
      "Tap Support.",
      "Describe your issue and send the conversation.",
    ],
    note: "You can also email spentify.app@gmail.com.",
  },
};

function clarifyNavigation(text: string) {
  return text
    .replace(
      "Record income, an expense, or a saving from the main navigation.",
      "Use the create button in the bottom navigation to record income, an expense, or a saving.",
    )
    .replace(/^Tap More →/, "In the bottom navigation, tap More →")
    .replace(/^Tap More, then tap /, "In the bottom navigation, tap More, then tap ")
    .replace(/^Tap More\./, "In the bottom navigation, tap More.")
    .replace(/^Tap Budgets in the main navigation\./, "In the bottom navigation, tap Budgets.")
    .replace(/^Tap Budgets, then tap /, "In the bottom navigation, tap Budgets, then tap ")
    .replace(/^Tap Budgets,/, "In the bottom navigation, tap Budgets,")
    .replace(/^Tap Reports in the main navigation\./, "In the bottom navigation, tap Reports.")
    .replace(/^Tap Reports →/, "In the bottom navigation, tap Reports →")
    .replace(
      /^Tap the create button in the main navigation\./,
      "In the bottom navigation, tap the create button.",
    );
}

function clarifyStep(step: HelpStep): HelpStep {
  if (typeof step === "string") {
    return clarifyNavigation(step);
  }

  return {
    ...step,
    text: clarifyNavigation(step.text),
  };
}

const topicGroups: Record<string, string> = {
  "Getting started": "Getting started",
  Transactions: "Transactions",
  "Wallets and currencies": "Wallets",
  Categories: "Categories",
  Savings: "Savings",
  Budgets: "Budgets",
  Reports: "Reports",
  "Exporting data": "Export",
  "Notifications and security": "Settings",
  "Appearance and language": "Settings",
  "Account data and subscriptions": "Account",
};

export const helpArticles: HelpArticle[] = articleSources.map(
  ([category, title, answer]) => {
    const slug = slugify(title);
    const guideKey = slug.replace(
      /^(how-do-i-|how-can-i-|can-i-|how-do-|what-is-|what-)/,
      "",
    );
    const guide = stepGuides[guideKey];

    return {
      slug,
      category: topicGroups[category] ?? category,
      title,
      description: clarifyNavigation(answer),
      paragraphs: [clarifyNavigation(guide?.intro ?? answer)],
      steps: guide?.steps.map(clarifyStep),
      note: guide?.note,
    };
  },
);

export const helpTopics = [
  { name: "Getting started", slug: "getting-started", description: "Set up Spentify and your account.", iconPath: "M5 12h14M12 5v14" },
  { name: "Transactions", slug: "transactions", description: "Record and manage your activity.", iconPath: "M6 8h12M6 12h8M6 16h10" },
  { name: "Wallets", slug: "wallets", description: "Manage wallets and their currencies.", iconPath: "M4 7h16v12H4zM7 11h10" },
  { name: "Categories", slug: "categories", description: "Create, edit and restore categories.", iconPath: "M6 6h5v5H6zm7 7h5v5h-5z" },
  { name: "Savings", slug: "savings", description: "Track and complete your savings.", iconPath: "M19 5c-1.5 0-2.8.4-3.8 1.1A7 7 0 0 0 3 12v3a2 2 0 0 0 2 2h1l1 3h4l1-2h3l1 2h4l1.7-5.1A2 2 0 0 0 23 13v-1a2 2 0 0 0-2-2h-1a7 7 0 0 0-1-2V5ZM14 5V3h-4v2m6 7h.01" },
  { name: "Budgets", slug: "budgets", description: "Create and manage monthly budgets.", iconPath: "M4 18V8m5 10V5m5 13v-7m5 7V3" },
  { name: "Reports", slug: "reports", description: "Understand your income, spending and savings.", iconPath: "M5 19V9m5 10V5m5 14v-6m4 6V3" },
  { name: "Export", slug: "export", description: "Export and share transaction files.", iconPath: "M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" },
  { name: "Settings", slug: "settings", description: "Personalize Spentify and protect your information.", iconPath: "M12 3 5 6v5c0 4.4 3 8.5 7 10 4-1.5 7-5.6 7-10V6l-7-3Z" },
  { name: "Account", slug: "account-and-pro", description: "Manage your plan, account data and support.", iconPath: "M7 20v-2a5 5 0 0 1 10 0v2M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" },
] as const;

export function getHelpArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}

export function getHelpTopic(slug: string) {
  return helpTopics.find((topic) => topic.slug === slug);
}
