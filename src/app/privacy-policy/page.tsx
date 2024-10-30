import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-red-500">
            Shadows of Fortune - Privacy Policy
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            At Shadows of Fortune, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our blockchain-based game
            and related services involving non-fungible tokens (NFTs). Please
            read this policy carefully.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">
            a. Information You Provide Directly
          </h3>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create or modify your account</li>
            <li>Contact us for support or inquiries</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p>This information may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">
            b. Information Collected Automatically
          </h3>
          <p>When you access or use our game, we may automatically collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Device Information: Hardware model, operating system, unique
              device identifiers
            </li>
            <li>
              Log Data: IP address, access times, pages viewed, and other system
              activity
            </li>
            <li>
              Usage Data: Gameplay statistics, in-game actions, interactions
              with other players
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-3">
            c. Blockchain Data
          </h3>
          <p>
            Due to the nature of blockchain technology, certain information is
            recorded on public blockchain networks, which may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Public Wallet Address: When you connect your digital wallet to our
              game
            </li>
            <li>
              Transaction Data: Purchase history, transfers, and other
              transactions involving NFTs
            </li>
          </ul>
          <p className="text-gray-300 italic">
            Please note that blockchain networks are decentralized and operated
            by third parties, and we do not control the storage or security of
            data stored on the blockchain.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              To Provide and Maintain Our Services: Ensuring the game functions
              correctly and providing you with requested services
            </li>
            <li>
              Transaction Processing: Facilitating purchases, transfers, and
              sales of NFTs
            </li>
            <li>
              Communication: Sending technical notices, updates, security
              alerts, and support messages
            </li>
            <li>
              Improvement and Development: Analyzing usage to enhance user
              experience and develop new features
            </li>
            <li>
              Legal Compliance: Complying with legal obligations and enforcing
              our terms and policies
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            3. Sharing of Information
          </h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              With Service Providers: Third-party vendors who assist with data
              analysis, payment processing, customer service, and marketing
            </li>
            <li>
              For Legal Reasons: To comply with legal obligations, respond to
              legal processes, or protect the rights and safety of our users and
              others
            </li>
            <li>
              In Business Transfers: In connection with any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business
            </li>
          </ul>
          <p>
            We do not sell or rent your personal information to third parties
            for their marketing purposes without your explicit consent.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            4. Public Information and Blockchain
          </h2>
          <p>
            Transactions involving NFTs are conducted on public blockchain
            networks. Information about these transactions may be accessible to
            anyone due to the transparent nature of the blockchain. This may
            include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your Public Wallet Address</li>
            <li>
              Details of NFT Transactions: Purchases, transfers, and ownership
              history
            </li>
          </ul>
          <p>
            We have no control over, and are not responsible for, the privacy
            practices of blockchain networks.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            5. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, please be aware that no method of electronic
            transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            6. International Data Transfers
          </h2>
          <p>
            Your information may be transferred to and processed in countries
            other than your country of residence. These countries may have data
            protection laws that are different from the laws of your country.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            7. Your Choices and Rights
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Access and Update: You may access, correct, or update your account
              information at any time through the game settings
            </li>
            <li>
              Opt-Out: You may opt out of receiving promotional communications
              by following the instructions in those communications
            </li>
            <li>
              Data Deletion: You may request the deletion of your personal
              information, subject to certain legal exceptions
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our game is not intended for individuals under the age of 13 (or the
            minimum legal age in your country). We do not knowingly collect
            personal information from children under this age. If we become
            aware that we have collected personal information from a child under
            the applicable age, we will take steps to delete such information
            promptly.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            9. Third-Party Services
          </h2>
          <p>
            Our services may contain links to third-party websites or services,
            including blockchain networks and digital wallets. We are not
            responsible for the privacy practices of these third parties. We
            encourage you to review the privacy policies of any third-party
            services you use.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting the new Privacy Policy on this
            page and updating the &quot;Last Updated&quot; date at the bottom.
            Your continued use of the game after any changes indicates your
            acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
            11. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at contact@shadowsoffortune.com.
          </p>

          <p className="mt-8 italic text-gray-400">
            Last Updated: October 30, 2024
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2024 Shadows of Fortune. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
