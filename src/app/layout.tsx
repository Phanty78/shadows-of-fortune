import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

export const viewport: Viewport = {
  themeColor: 'black',
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Shadows of Fortune - Embark on Your Blockchain Adventure',
  description:
    'Discover Shadows of Fortune, an immersive and adventurous blockchain-based game experience. Mint assets, collect loot, and explore the world of web3 gaming.',
  keywords: [
    'Shadows of Fortune',
    'blockchain',
    'game',
    'mint',
    'loot',
    'explore',
    'web3',
    'sonic',
    'ftm',
    'SoF',
    'blockchain gaming',
    'NFT',
    'crypto game',
  ],
  openGraph: {
    title: 'Shadows of Fortune',
    description:
      'Join the adventure in Shadows of Fortune, a blockchain-based gaming experience. Mint exclusive assets, collect valuable loot, and explore the Shadows Fall city.',
    url: 'https://shadowsoffortune.com',
    siteName: 'Shadows of Fortune',
    images: [
      {
        url: '/images/splash-and-title.webp',
        width: 1200,
        height: 630,
        alt: 'Shadows of Fortune logo and splash screen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadows of Fortune',
    description:
      'Join the adventure in Shadows of Fortune, a blockchain-based gaming experience. Mint exclusive assets, collect valuable loot, and explore the Shadows Fall city.',
    siteId: '@ShadowsOFortune',
    creator: '@ShadowsOFortune',
    images: ['/images/splash-and-title.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://shadowsoffortune.com/#organization',
                  name: 'Shadows of Fortune',
                  url: 'https://shadowsoffortune.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://shadowsoffortune.com/images/logo.png',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://shadowsoffortune.com/#website',
                  url: 'https://shadowsoffortune.com',
                  name: 'Shadows of Fortune',
                  publisher: {
                    '@id': 'https://shadowsoffortune.com/#organization',
                  },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://shadowsoffortune.com/#webpage',
                  url: 'https://shadowsoffortune.com',
                  name: 'Shadows of Fortune - Embark on Your Blockchain Adventure',
                  isPartOf: {
                    '@id': 'https://shadowsoffortune.com/#website',
                  },
                  about: {
                    '@id': 'https://shadowsoffortune.com/#organization',
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://shadowsoffortune.com/#breadcrumb',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      item: {
                        '@type': 'WebPage',
                        '@id': 'https://shadowsoffortune.com/',
                        url: 'https://shadowsoffortune.com/',
                        name: 'Home',
                      },
                    },
                  ],
                },
                {
                  '@type': 'VideoGame',
                  name: 'Shadows of Fortune',
                  description:
                    'An immersive and adventurous blockchain-based game experience. Mint assets, collect loot, and explore the world of web3 gaming.',
                  url: 'https://shadowsoffortune.com',
                  gamePlatform: ['Web Browser', 'Blockchain'],
                  genre: ['Adventure', 'Blockchain', 'NFT'],
                  publisher: {
                    '@id': 'https://shadowsoffortune.com/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
