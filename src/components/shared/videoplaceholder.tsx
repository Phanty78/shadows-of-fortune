import Image from 'next/image'
import { useState } from 'react'

export default function VideoPlaceholder() {
  const [isFrameLoaded, setIsFrameLoaded] = useState(false)
  const loadiframe = () => {
    setIsFrameLoaded(true)
  }

  return (
    <div className="relative mt-6 sm:w-full md:w-3/4 aspect-video flex justify-center border border-gray-300">
      {!isFrameLoaded && (
        <Image
          src="/images/placeholder.webp"
          alt="Shadows of Fortune video placeholder"
          width={480}
          height={360}
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          objectFit="cover"
          onClick={loadiframe}
        />
      )}
      {isFrameLoaded && (
        <iframe
          src="https://www.youtube.com/embed/6-KzmZvYM_s?si=sau6_GOXRpznjQjl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      )}
    </div>
  )
}
