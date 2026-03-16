import Hero from '@/components/sections/hero'

export default function Page() {
  return (
    <main>
      <div className="container px-5 md:px-0 py-10">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective date: January 1, 2026
        </p>

        <p className="mb-6">
          <strong>Spentify</strong> is operated by App Peppers (Rothana Choun)
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
          An account is required to access Spentify. Cloud synchronization is
          optional. When disabled, your financial data — including transactions,
          wallets, and budgets — is stored only on your device and is not
          transmitted to our cloud servers.
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
          We may share information with trusted service providers who assist
          us in operating the app, when required by law, or to protect the
          security, rights, and integrity of Spentify and its users.
          Aggregated and anonymized data may be used for analytics and
          improvement.
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
          7. Security of Your Information
        </h2>

        <p className="mb-6">
          We use encryption and industry-standard technical and organizational
          safeguards to protect your personal data. This includes measures
          designed to prevent unauthorized access, disclosure, alteration,
          or destruction of your information.
        </p>

        <p className="mb-8">
          However, no method of transmission over the Internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. International Data Transfers
        </h2>

        <p className="mb-8">
          Your information may be processed or stored on servers located
          outside your country of residence. By using Spentify, you consent
          to such transfers, subject to appropriate safeguards.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Analytics
        </h2>

        <p className="mb-6">
          We may use third-party analytics services to understand how users
          interact with Spentify and to improve performance, reliability,
          and features.
        </p>

        <p className="mb-6">
          These services may collect limited technical information such as
          device type, operating system, app version, crash reports, and
          general usage statistics.
        </p>

        <p className="mb-8">
          We do not use analytics tools to access, track, or analyze your
          financial data, including transactions, wallets, or budgets.
          Services such as Google Analytics or Firebase Analytics are used
          solely for anonymized usage insights.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          10. Advertising
        </h2>

        <p className="mb-6">
          Spentify may display limited advertisements to support the
          maintenance and development of the app.
        </p>

        <p className="mb-8">
          We do not share your financial data (such as transactions, wallets,
          or budgets) with advertisers. Advertising partners may collect
          limited technical data such as device information or usage statistics
          in accordance with their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          11. Children’s Privacy
        </h2>

        <p className="mb-8">
          Spentify is not intended for children under the age of 13.
          We do not knowingly collect personal information from children.
          If we become aware that such data has been collected,
          we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          12. Changes to This Privacy Policy
        </h2>

        <p className="mb-8">
          We may update this Privacy Policy from time to time.
          Significant changes will be communicated within the app or via email.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          13. Contact Us
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
          Operator: AppPeppers
        </p>
      </div>
    </main>
  )
}
