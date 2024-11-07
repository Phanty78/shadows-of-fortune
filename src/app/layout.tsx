import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
