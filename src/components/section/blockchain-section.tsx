import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function BlockchainSection() {
  return (
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
                technology. Secure your in-game assets, trade with confidence,
                and participate in a truly decentralized gaming economy.
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
  )
}
