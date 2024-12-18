'use client'

import { Menu, Send, Skull, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const headerClass = `fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center justify-between z-50 transition-all duration-300 ${
    scrollPosition > 50 ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
  }`

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Add smooth scrolling behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Remove smooth scrolling behavior when component unmounts
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <>
      <header className={headerClass}>
        <Link className="flex items-center justify-center" href="/landing">
          <Skull className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-lg font-bold">Shadows of Fortune</h1>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            href="/landing#mint"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Mint
          </Link>
          <Link
            href="/landing#loot"
            className="text-lg  font-medium hover:underline underline-offset-4"
          >
            Loot
          </Link>
          <Link
            href="/landing#explore"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Explore
          </Link>
          <Link
            href="/landing#leaderboard"
            className="text-lg  font-medium hover:underline underline-offset-4"
          >
            Leaderboard
          </Link>
          <Link
            href="/characters"
            className="text-lg  font-medium hover:underline underline-offset-4"
          >
            Characters
          </Link>
          <Link
            href="/roadmap"
            className="text-lg  font-medium hover:underline underline-offset-4"
          >
            Roadmap
          </Link>
          <Link
            href="/changelog"
            className="text-lg  font-medium hover:underline underline-offset-4"
          >
            Changelog
          </Link>
          <Link
            className="text-lg  font-medium hover:underline underline-offset-4"
            href="https://docs.shadowsoffortune.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-2"
            href="https://x.com/ShadowsOFortune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-"
            href="https://t.me/shadowsoffortune/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={20} />
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://discord.gg/mSkShCrAy2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/discord-brands-solid.svg"
              alt="Discord"
              width={20}
              height={20}
            />
          </Link>
        </nav>
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Open Menu"
          aria-hidden="true"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <Link href="/landing#mint" className="text-xl font-medium py-2">
              Mint
            </Link>
            <Link href="/landing#loot" className="text-xl font-medium py-2">
              Loot
            </Link>
            <Link href="/landing#explore" className="text-xl font-medium py-2">
              Explore
            </Link>
            <Link
              href="/landing#leaderboard"
              className="text-xl font-medium py-2"
            >
              Leaderboard
            </Link>
            <Link href="/characters" className="text-xl font-medium py-2">
              Characters
            </Link>
            <Link href="/changelog" className="text-xl font-medium py-2">
              Changelog
            </Link>
            <Link href="/roadmap" className="text-xl font-medium py-2">
              Roadmap
            </Link>
            <Link
              className="text-xl font-medium py-2"
              href="https://docs.shadowsoffortune.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </Link>
            <Link
              className="text-xl font-medium py-2"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
            <Link
              className="text-xl font-medium py-2"
              href="https://x.com/ShadowsOFortune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </Link>
            <Link
              className="text-xl font-medium py-2"
              href="https://t.me/shadowsoffortune/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={20} />
            </Link>
            <Link
              className="text-xl font-medium py-2"
              href="https://discord.gg/mSkShCrAy2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/discord-brands-solid.svg"
                alt="Discord"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
