import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import CustomHead from '@/components/shared/Head'

export default function TermsOfService() {
  return (
    <>
      <CustomHead />
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Header />
        <div className="min-h-screen bg-gray-900 text-gray-100">
          <main className="container mx-auto px-4 py-8">
            <br />
            <br />
            <br />
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                Welcome to Shadows of Fortune. By accessing our game and
                services, which incorporate blockchain technology and
                non-fungible tokens (NFTs), you agree to be bound by these Terms
                of Service. Please read them carefully.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Shadows of Fortune, you agree to be bound
                by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any part of these terms,
                you may not use our services.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                2. Use of the Game
              </h2>
              <p>
                Shadows of Fortune is intended for personal, non-commercial use.
                You may not modify, distribute, transmit, display, perform,
                reproduce, publish, license, create derivative works from,
                transfer, or sell any information, software, products, or
                services obtained from Shadows of Fortune without our prior
                written permission.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                3. User Accounts
              </h2>
              <p>
                To access certain features of Shadows of Fortune, including
                purchasing and interacting with NFTs, you may be required to
                create a user account and connect a compatible digital wallet.
                You are responsible for maintaining the confidentiality of your
                account and wallet credentials. You agree to accept
                responsibility for all activities that occur under your account
                and wallet.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                4. Non-Fungible Tokens (NFTs)
              </h2>
              <h3 className="text-xl font-semibold text-red-400 mt-8 mb-4">
                a. Ownership and Licensing
              </h3>
              <p>
                When you purchase an NFT within Shadows of Fortune, you own the
                underlying NFT completely. Ownership of the NFT is mediated
                entirely by the smart contract and the blockchain network.
                However, the associated content (artwork, designs, characters,
                etc.) is licensed to you under a limited, non-exclusive,
                non-transferable, and revocable license for personal,
                non-commercial use within the game.
              </p>

              <h3 className="text-xl font-semibold text-red-400 mt-8 mb-4">
                b. Restrictions
              </h3>
              <p>
                You may not use the associated content of any NFT for commercial
                purposes without explicit written permission from Akanbe Studio.
                This includes creating merchandise, derivatives, or any other
                commercial exploitation.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                5. Blockchain Transactions
              </h2>
              <p>
                All transactions involving NFTs are conducted through the
                blockchain network and are subject to network transaction fees
                (&quot;gas fees&quot;). Akanbe Studio has no control over these
                transactions and is not responsible for any issues or losses you
                may experience during the transaction process.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                6. Risks Associated with NFTs
              </h2>
              <p>
                You acknowledge and agree that there are risks associated with
                purchasing, holding, and using NFTs, including but not limited
                to:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Volatility:</strong> The value of NFTs can be
                  extremely volatile.
                </li>
                <li>
                  <strong>Regulatory Uncertainty:</strong> Laws and regulations
                  governing blockchain technologies and NFTs are uncertain and
                  may change.
                </li>
                <li>
                  <strong>Technology Risks: </strong> Blockchain technologies
                  are subject to malfunctions, bugs, and hacking, which could
                  result in loss of NFTs or digital assets.
                </li>
              </ul>
              <p>
                You accept all risks and agree that Akanbe Studio is not liable
                for any losses you may incur.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                Except for the limited license granted for NFTs you own, all
                content, organization, graphics, design, compilation, magnetic
                translation, digital conversion, and other matters related to
                Shadows of Fortune are protected under applicable copyrights,
                trademarks, and other proprietary rights. Any unauthorized use
                is strictly prohibited.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                8. User Conduct
              </h2>
              <p>
                You agree to use Shadows of Fortune only for lawful purposes.
                You are prohibited from posting or transmitting any unlawful,
                threatening, defamatory, obscene, or otherwise objectionable
                material that could constitute a criminal offense, give rise to
                civil liability, or violate any law.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                9. Modifications to Terms
              </h2>
              <p>
                Akanbe Studio reserves the right to modify these Terms of
                Service at any time. We will notify users of any changes by
                posting the new Terms of Service on this page. Your continued
                use of Shadows of Fortune after any such changes constitutes
                your acceptance of the new Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                10. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your account and
                access to Shadows of Fortune at our sole discretion, without
                notice, for conduct that we believe violates these Terms of
                Service or is harmful to other users, us, or third parties.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                11. Disclaimers and Limitation of Liability
              </h2>
              <p>
                Shadows of Fortune is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind. Akanbe Studio
                does not guarantee continuous, uninterrupted, or secure access
                to the game or its features. In no event shall Akanbe Studio be
                liable for any damages arising from the use or inability to use
                Shadows of Fortune or NFTs.
              </p>

              <h2 className="text-2xl font-semibold text-red-400 mt-8 mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at contact@shadowsoffortune.com.
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
        </div>
        <Footer />
      </div>
    </>
  )
}
