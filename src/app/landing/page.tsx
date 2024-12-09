'use client'

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import VideoPlaceholder from '@/components/shared/videoplaceholder'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Landing() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Vérifie si le code s'exécute côté client
    if (typeof window !== 'undefined') {
      // <-- Ajout de cette condition
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      // Ajoute l'écouteur de défilement
      window.addEventListener('scroll', handleScroll)

      // Nettoyage de l'écouteur pour éviter les fuites de mémoire
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          id="hero"
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/images/splash.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          <div className="relative z-20 text-center flex flex-col items-center justify-center">
            <p className="mx-auto max-w-[700px] text-2xl color-white md:text-xl mb-8 text-center font-bold">
              A hardcore, competitive web3 survival horror / RPG powered by the
              Sonic Blockchain.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 p-8 text-2xl font-bold lg:mb-8"
              size="lg"
              onClick={() =>
                (window.location.href = 'https://testnet.shadowsoffortune.com/')
              }
            >
              Access the Beta
            </Button>
            <br />
            <br />
            <p id="avaible-text" className="text-center text-xl color-white">
              Follow us to make sure you don&apos;t miss any news !
            </p>

            <VideoPlaceholder />
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* Mint Section */}
        <section className="relative min-h-screen py-24" id="mint">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/heroes-center.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="container relative z-10 mx-auto px-4 w-4/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left bg-black bg-opacity-50 p-6 rounded-lg md:w-1/2">
                <h2 className="text-4xl font-bold mb-4 animate-fade-in-left">
                  Darkness has fallen upon Shadow Falls...
                </h2>
                <p className="text-xl mb-8 animate-fade-in-left animation-delay-200">
                  … And only the strongest will survive.
                  <br />
                  <b>Mint</b> a character, level up, reveal his inner power, and
                  become the hero this city needs.
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 p-6 text-xl font-bold"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      'https://testnet.shadowsoffortune.com/')
                  }
                >
                  Mint your Hero
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-500 md:w-1/2">
                <Image
                  src="/images/heroes.webp"
                  alt="Hero battling"
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full transform hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Loot Section */}
        <section className="relative min-h-screen py-24" id="loot">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/workshop.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="container relative z-10 mx-auto px-4 w-4/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-500 md:w-1/2">
                <Image
                  src="/images/items.webp"
                  alt="Rare items and weapons"
                  width={500}
                  height={500}
                  className="transform hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
              <div className="text-center md:text-left bg-black bg-opacity-50 p-6 rounded-lg md:w-1/2">
                <h2 className="text-4xl font-bold mb-4 animate-fade-in-right">
                  Rare Loots Await!
                </h2>
                <p className="text-xl mb-8 animate-fade-in-right animation-delay-200">
                  Scavenge, trade, and craft! From weapons to life-saving
                  equipment, every piece of loot can make a difference. Trade
                  rare items with others or combine materials to create gear
                  tailored to your survival instincts.
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 p-6 text-xl font-bold"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      'https://testnet.shadowsoffortune.com/')
                  }
                >
                  Start scavenging
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exploration Section */}
        <section className="relative min-h-screen py-24" id="explore">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/sof_map.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="container relative z-10 mx-auto px-4 w-4/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left bg-black bg-opacity-50 p-6 rounded-lg md:w-1/2">
                <h2 className="text-4xl font-bold mb-4 animate-fade-in-left">
                  Explore the Mysterious City
                </h2>
                <p className="text-xl mb-8 animate-fade-in-left animation-delay-200">
                  Move your hero through a network of locations with their own
                  utilities and dangers. Choose your path wisely. Will you get
                  to the next safe zone or will you explore a dangerous area to
                  find rare loot?
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 p-6 text-xl font-bold"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      'https://testnet.shadowsoffortune.com/')
                  }
                >
                  Start Exploring
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-500 md:w-1/2">
                <Image
                  src="/images/sof_network.webp"
                  alt="Map of Shadow Falls"
                  width={500}
                  height={500}
                  className="transform hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="relative min-h-screen py-24" id="leaderboard">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/gym.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="container relative z-10 mx-auto px-4 w-4/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-500 md:w-1/2">
                <Image
                  src="/images/leaderboard.webp"
                  alt="Rare items and weapons"
                  width={500}
                  height={500}
                  className="transform hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
              <div className="text-center md:text-left bg-black bg-opacity-50 p-6 rounded-lg md:w-1/2">
                <h2 className="text-4xl font-bold mb-4 animate-fade-in-right">
                  Turn your fear into opportunity
                </h2>
                <p className="text-xl mb-8 animate-fade-in-right animation-delay-200">
                  Earn points by playing, climb the leaderboard, and claim
                  exclusive rewards.
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 p-6 text-xl font-bold"
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      'https://testnet.shadowsoffortune.com/')
                  }
                >
                  Play and earn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
