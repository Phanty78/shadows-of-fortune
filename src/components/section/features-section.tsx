'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Are you ready to risk everything?
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-gray-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="my-auto">
                <CardTitle className="text-4xl font-bold pb-4">
                  Play and earn
                </CardTitle>
                <CardContent className="text-xl">
                  Jump into &quot;play and earn&quot; where every moment brings
                  real rewards! Your achievements fill your digital
                  wallet—battle foes, collect rare NFTs, and earn
                  cryptocurrency. Play more, earn more, and turn your gaming
                  passion into real-world treasures!
                </CardContent>
              </div>

              <Image
                src="/images/play-and-earn.webp"
                alt="Play and earn"
                width={600}
                height={400}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-gray-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="my-auto order-1 md:order-2">
                <CardTitle className="text-4xl font-bold pb-4">
                  Blockchain integration
                </CardTitle>
                <CardContent className="text-xl  my-auto">
                  Shadows of Fortune leverages the Sonic blockchain to offer the
                  fastest and most cost-effective gaming experience. Enjoy
                  lightning-fast transactions, minimal fees, and instant in-game
                  rewards—all secured by transparent blockchain technology. Play
                  and earn real-world rewards at incredible speeds and low
                  costs.
                </CardContent>
              </div>
              <Image
                src="/images/chain.webp"
                alt="Play and earn"
                width={600}
                height={400}
                className="rounded-lg order-2 md:order-1"
                loading="lazy"
              />
            </div>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-gray-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="my-auto">
                <CardTitle className="text-4xl font-bold pb-4">
                  Explore Shadows Falls
                </CardTitle>
                <CardContent className="text-xl">
                  Explore the perilous city of Shadows Falls, a once-vibrant
                  metropolis now consumed by a zombie apocalypse after a
                  disastrous incident. Every movement you make is a high-stakes
                  gamble, with danger lurking around every corner. You&apos;ll
                  need to think strategically and plan each step meticulously to
                  survive. Navigate through treacherous streets, outsmart the
                  undead, and uncover the mysteries hidden within the shadows.
                  In this city, caution isn&apos;t just advised—it&apos;s
                  essential.
                </CardContent>
              </div>

              <Image
                src="/images/map.webp"
                alt="game map"
                width={600}
                height={400}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
