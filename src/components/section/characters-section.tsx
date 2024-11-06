import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

{
  /* Characters Section */
}

export default function CharactersSection() {
  return (
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
                  alt=""
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
                  alt=""
                  width={300}
                  height={400}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>

              <CardTitle className="mt-4">The Vagabond</CardTitle>
            </CardHeader>
            <CardContent>
              A mysterious figure skilled in stealth and subterfuge, navigating
              the dangers of the city&apos;s underworld.
            </CardContent>
          </Card>
          <Card className="bg-gray-700 border-gray-600 text-gray-300">
            <CardHeader>
              <div className="relative w-full h-auto">
                {' '}
                <Image
                  src="/images/veteran.webp"
                  alt=""
                  width={300}
                  height={400}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
              <CardTitle className="mt-4">The Veteran</CardTitle>
            </CardHeader>
            <CardContent>
              A hardened survivor with a wealth of combat experience, bringing
              grit and determination to every encounter.
            </CardContent>
          </Card>
          <Card className="bg-gray-700 border-gray-600 text-gray-300">
            <CardHeader>
              <Image
                src="/images/cop.webp"
                alt=""
                width={300}
                height={400}
                sizes="(100vw - 2rem) 100vw"
                className="rounded-lg"
                loading="lazy"
              />
              <CardTitle className="mt-4">The Enforcer</CardTitle>
            </CardHeader>
            <CardContent>
              A former law enforcement officer now fighting to maintain order in
              the chaos of Shadows Falls.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
