import Hero from '@/components/sections/hero'

export default function Page() {
  return (
    <div>
      <div className="container px-5 md:px-0 py-10">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective date: January 1, 2026</p>

        <p className="mb-6">
          Spentify is operated by <strong>AppPeppers (Rothana Choun)</strong>
          ("we", "our", or "us"). This Privacy Policy explains how we collect,
          use, store, and protect your information when you use the Spentify
          mobile application and related services.
        </p>

        <p className="mb-10">
          By installing or using Spentify, you agree to this Privacy Policy.
          If you use Spentify without creating an account, we do not collect
          personal data from you.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>

        <h3 className="text-xl font-medium mt-6 mb-2">
          Personal Information
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Currency preference</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          Financial Data
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Income and expense records</li>
          <li>Budget information</li>
          <li>Transaction details</li>
        </ul>

        <p className="mb-8">
          Providing personal data is optional, but certain features such as
          cloud synchronization and backup require an account.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Enable synchronization across multiple devices</li>
          <li>Provide secure cloud backup</li>
          <li>Respond to your questions and feedback</li>
          <li>Improve features and analyze usage</li>
          <li>Maintain security and prevent misuse</li>
        </ul>

        <p className="mb-6">
          We do <strong>not sell your personal data</strong>.
        </p>

        <p className="mb-8">
          We may share information with trusted service providers,
          when required by law, or to protect the security and rights
          of Spentify and its users. Aggregated and anonymized data
          may be used for analytics and improvement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Technical & Anonymous Data
        </h2>

        <p className="mb-6">
          We may automatically collect limited technical information such as
          device type, operating system, app version, usage statistics, and
          crash reports to improve performance and reliability.
        </p>

        <p className="mb-8">
          Where possible, data is anonymized and used for statistical purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Data Retention
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>You may delete your account at any time.</li>
          <li>
            If you do not log in for 24 consecutive months, your account
            and all related data will be permanently deleted.
          </li>
        </ul>

        <p className="mb-8">
          Once deleted, data cannot be recovered.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. How to Delete Your Account
        </h2>

        <p className="mb-4">
          Inside the app:
          <span className="font-medium">
            {" "}Account → My Account → Delete Account
          </span>
        </p>

        <p className="mb-4">
          Or email us at:{" "}
          <a
            href="mailto:spentify.app@gmail.com"
            className="text-blue-600 hover:underline"
          >
            spentify.app@gmail.com
          </a>
        </p>

        <p className="mb-8">
          Deletion requests are processed within 72 hours.
          All associated data will be permanently removed.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Your Rights
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your account and data</li>
          <li>Withdraw consent by deleting your account</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Changes to This Privacy Policy
        </h2>

        <p className="mb-8">
          We may update this Privacy Policy from time to time.
          Significant changes will be communicated within the app or via email.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Contact Us
        </h2>

        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:spentify.app@gmail.com"
            className="text-blue-600 hover:underline"
          >
            spentify.app@gmail.com
          </a>
        </p>

        <p className="mb-2">
          Operator: App Peppers
        </p>
      </div>
    </div>
  )
}
