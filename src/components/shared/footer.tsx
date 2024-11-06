import { ExternalLink, Send, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
      <p className="text-xs text-gray-400">
        © 2024 Shadows of Fortune. All rights reserved.
      </p>

      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/terms-of-service"
          className="text-xs hover:underline underline-offset-4 text-gray-400"
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy-policy"
          className="text-xs hover:underline underline-offset-4 text-gray-400"
        >
          Privacy Policy
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/your-profile"
            target="_blank"
            aria-label="X"
            className="text-gray-400 hover:text-white"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://t.me/your-telegram"
            target="_blank"
            aria-label="Telegram"
            className="text-gray-400 hover:text-white"
          >
            <Send size={20} />
          </Link>
          <Link
            href="/dapp"
            aria-label="DApp"
            className="text-gray-400 hover:text-white"
          >
            <ExternalLink size={20} />
          </Link>
        </div>
      </nav>
    </footer>
  )
}
