'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const loreContent = [
  {
    image: '/images/slider/game-image-1.png',
    text: 'The game is set in present-day Shadows Falls, a small town deep in the mountains of Colorado. Tucked away in a remote valley, Shadows Falls was once a thriving mining town. Since the mines closed, the local economy has turned to the chemical industry, a nearby military base and a few tourist sites, forming the economic lung of the region.',
  },
  {
    image: '/images/slider/game-image-2.png',
    text: 'On July 4, 2024, as the town celebrates its national holiday under a scorching sun, a major accident occurs at the main chemical plant. Thick toxic smoke engulfs the town, followed by strange fallout that spreads throughout the valley. The consequences are nightmarish: the health services, rapidly overwhelmed, struggle to cope with the influx of victims. The dead piled up by the hundreds, and lacking the means to deal with them, the corpses were left to lie in the hot sun, sometimes barely covered by a sheet.',
  },
  {
    image: '/images/slider/game-image-3.png',
    text: 'Desperate calls from the inhabitants to the outside world go unanswered. Even more worryingly, despite repairs by technical teams, the telephone network and internet access remain inaccessible. Only a few local radio stations continue to broadcast, relaying a single, clear message: "Don\'t try to leave town, help is on the way." In the confusion, many inhabitants chose to lock themselves in their homes with their loved ones, hoping that help would soon arrive. But on the third night after the disaster, a new hell breaks loose.',
  },
  {
    image: '/images/slider/game-image-4.png',
    text: 'Abandoned corpses begin to rise, driven by an inexplicable force. Their chemically deformed bodies are barely recognizable: some are swollen, others have melted or eaten away flesh. Despite their missing limbs and gaping wounds, these grotesque beings manage to walk. Their faces are frozen in horror, reflecting the atrocious death that has overtaken them. These creatures no longer seem human. Deprived of consciousness, they no longer recognize anyone. All that remains in them is a primitive survival instinct, driving them to blind violence. Initial contacts with the survivors quickly turn into scenes of chaos and terror.',
  },
  {
    image: '/images/slider/game-image-5.png',
    text: "From this fateful day, few will survive, and you are one of them. Welcome to Shadows Falls, it's time to fight or die.",
  },
]

export default function LoreSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleSelect = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement
      const index = parseInt(target.getAttribute('data-index') || '0', 10)
      setCurrentIndex(index)
    },
    []
  )

  return (
    <section id="lore" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Immerse yourself in the history of Shadows Falls
        </h2>
        <Card className="bg-gray-800 border-gray-700 text-gray-300">
          <CardContent className="p-6">
            <Carousel
              className="w-full max-w-4xl mx-auto relative"
              onSelect={handleSelect}
            >
              <CarouselContent>
                {loreContent.map((item, index) => (
                  <CarouselItem key={index} data-index={index}>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative w-full">
                        <Image
                          src={item.image}
                          alt={`Lore Image ${index + 1}`}
                          width={900}
                          height={600}
                          className="rounded-md"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition-transform duration-1000 ease-in-out ${
                            isAnimating
                              ? 'translate-x-full'
                              : '-translate-x-full'
                          }`}
                        />
                      </div>
                      <p className="text-center max-w-2xl text-sm md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-x-0 top-1/3 flex justify-between items-center -translate-y-1/2 px-4 md:px-8">
                <CarouselPrevious className="relative left-0 md:-left-12 transition-all duration-300 hover:scale-110 text-red-500 border-red-500 border-2" />
                <CarouselNext className="relative right-0 md:-right-12 transition-all duration-300 hover:scale-110 text-red-500 border-red-500 border-2" />
              </div>
            </Carousel>
            <div className="flex justify-center mt-4 space-x-2">
              {loreContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
