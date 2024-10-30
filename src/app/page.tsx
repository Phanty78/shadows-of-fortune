'use client'

import RoadmapSection from '@/components/section/roadmap-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Blocks, Code, Gamepad, Menu, Skull, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import FeaturesSection from '../components/section/features-section'
import LoreSection from '../components/section/lore-section'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMenuOpen) {
      toggleMenu()
    }
  }

  const headerClass = `fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center justify-between z-50 transition-all duration-300 ${
    scrollPosition > 50 ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
  }`

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className={headerClass}>
        <Link className="flex items-center justify-center" href="#">
          <Skull className="h-6 w-6 text-red-500 mr-2" />
          <span className="text-lg font-bold">Shadows of Fortune</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
            onClick={(e) => handleLinkClick(e, '#features')}
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#lore"
            onClick={(e) => handleLinkClick(e, '#lore')}
          >
            Lore
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#characters"
            onClick={(e) => handleLinkClick(e, '#characters')}
          >
            Characters
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#blockchain"
            onClick={(e) => handleLinkClick(e, '#blockchain')}
          >
            Blockchain
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#roadmap"
            onClick={(e) => handleLinkClick(e, '#roadmap')}
          >
            Roadmap
          </a>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://docs.shadowsoffortune.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </Link>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#studio"
            onClick={(e) => handleLinkClick(e, '#studio')}
          >
            Studio
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <a
              className="text-xl font-medium py-2"
              href="#features"
              onClick={(e) => handleLinkClick(e, '#features')}
            >
              Features
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#lore"
              onClick={(e) => handleLinkClick(e, '#lore')}
            >
              Lore
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#characters"
              onClick={(e) => handleLinkClick(e, '#characters')}
            >
              Characters
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#blockchain"
              onClick={(e) => handleLinkClick(e, '#blockchain')}
            >
              Blockchain
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#roadmap"
              onClick={(e) => handleLinkClick(e, '#roadmap')}
            >
              Roadmap
            </a>
            <Link
              className="text-xl font-medium py-2"
              href="https://docs.shadowsoffortune.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <a
              className="text-xl font-medium py-2"
              href="#studio"
              onClick={(e) => handleLinkClick(e, '#studio')}
            >
              Studio
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
            >
              About
            </a>
            <a
              className="text-xl font-medium py-2"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contact
            </a>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full h-screen relative flex items-center justify-center">
          <Image
            src="/images/splash.webp"
            alt="Shadows of Fortune Hero Image"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 md:px-6">
            <div className="max-w-[600px] sd:max-w-[700px] md:max-w-[800px] h-auto mb-8">
              <Image
                src="/images/title.webp"
                alt="Shadows of Fortune Title"
                width={800}
                height={267}
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mb-8 text-center">
              A hardcore, competitive web3 survival horror / RPG powered by the
              Sonic Blockchain.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 p-8 text-2xl font-bold"
              size="lg"
              onClick={() =>
                (window.location.href = 'https://testnet.shadowsoffortune.com/')
              }
            >
              Access the Closed Beta
            </Button>
            <br />
            <p id="avaible-text">
              Follow us to make sure you don&apos;t miss the Open Beta!
            </p>
          </div>
        </section>

        <FeaturesSection />

        <LoreSection />

        <section
          id="characters"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Which survivor would you be?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gray-700 border-gray-600 text-gray-300">
                <CardHeader>
                  <div className="relative w-full h-auto">
                    {' '}
                    <Image
                      src="/images/survivalist.webp"
                      alt="Survivalist"
                      width={300}
                      height={400}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="mt-4">The Survivalist</CardTitle>
                </CardHeader>
                <CardContent>
                  A resourceful fighter, adept at scavenging and combat in the
                  post-apocalyptic world of Shadows Falls.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600 text-gray-300">
                <CardHeader>
                  <div className="relative w-full h-auto">
                    {' '}
                    <Image
                      src="/images/ghost.webp"
                      alt="Shadow Walker"
                      width={300}
                      height={400}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  <CardTitle className="mt-4">The Shadow Walker</CardTitle>
                </CardHeader>
                <CardContent>
                  A mysterious figure skilled in stealth and subterfuge,
                  navigating the dangers of the city&apos;s underworld.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600 text-gray-300">
                <CardHeader>
                  <div className="relative w-full h-auto">
                    {' '}
                    <Image
                      src="/images/veteran.webp"
                      alt="Veteran"
                      width={300}
                      height={400}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="mt-4">The Veteran</CardTitle>
                </CardHeader>
                <CardContent>
                  A hardened survivor with a wealth of combat experience,
                  bringing grit and determination to every encounter.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600 text-gray-300">
                <CardHeader>
                  <Image
                    src="/images/cop.webp"
                    alt="Enforcer"
                    width={300}
                    height={400}
                    sizes="(100vw - 2rem) 100vw"
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <CardTitle className="mt-4">The Enforcer</CardTitle>
                </CardHeader>
                <CardContent>
                  A former law enforcement officer now fighting to maintain
                  order in the chaos of Shadows Falls.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="blockchain" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="Sonic Blockchain"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/images/sonic.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Powered by Sonic Blockchain
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Experience the future of gaming with Sonic blockchain
                    technology. Secure your in-game assets, trade with
                    confidence, and participate in a truly decentralized gaming
                    economy.
                  </p>
                </div>
                <Link
                  href={'https://x.com/0xSonicLabs'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 w-fit">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RoadmapSection />

        <section id="studio" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Meet Akanbe Studio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Young, Passionate, Innovative
                </h3>
                <p className="text-gray-300">
                  Akanbe Studio is a young game development company founded by
                  two passionate individuals who share a love for coding, video
                  games, and blockchain technology. Our mission is to create
                  immersive gaming experiences that push the boundaries of
                  traditional gameplay.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-red-500" />
                    <span>Coding Experts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gamepad className="w-5 h-5 text-red-500" />
                    <span>Game Enthusiasts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Blocks className="w-5 h-5 text-red-500" />
                    <span>Blockchain Innovators</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                <p className="text-gray-300 mb-4">
                  At Akanbe Studio, we believe in the power of combining
                  cutting-edge technology with creative storytelling. Our goal
                  is to create games that not only entertain but also introduce
                  players to the exciting possibilities of blockchain
                  integration in gaming.
                </p>
                {/*<Button className="bg-red-600 hover:bg-red-700">
                  Join Our Journey
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Shadows of Fortune
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Set in the eerie town of Shadows Falls, Colorado, this MMO
                  survival-horror RPG challenges players to uncover the dark
                  secrets lurking beneath the surface of this seemingly quiet
                  mountain town. Will you survive the horrors that await, or
                  succumb to the shadows?
                </p>
              </div>
              <Link
                href={'https://x.com/ShadowsOFortune'}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-red-600 hover:bg-red-700">
                  Join the Community
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto">
              <form
                className="space-y-6"
                action="https://formspree.io/f/mpwabwbe"
                method="POST"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="bg-gray-700 border-gray-600 text-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    className="bg-gray-700 border-gray-600 text-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    className="min-h-[100px] bg-gray-700 border-gray-600 text-gray-100"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
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
        </nav>
      </footer>
    </div>
  )
}
