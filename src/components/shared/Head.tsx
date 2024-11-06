import Head from 'next/head'

export default function CustomHead() {
  return (
    <Head>
      {/* Title */}
      <title>Shadows of Fortune - Embark on Your Blockchain Adventure</title>
      <meta
        name="description"
        content="Discover Shadows of Fortune, an immersive and adventurous blockchain-based game experience. Mint assets, collect loot, and explore the world of web3 gaming."
      />
      <meta
        name="keywords"
        content="Shadows of Fortune, blockchain, game, mint, loot, explore, web3, sonic, ftm, SoF, blockchain gaming, NFT, crypto game"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Shadows of Fortune" />
      <meta
        property="og:description"
        content="Join the adventure in Shadows of Fortune, a blockchain-based gaming experience. Mint exclusive assets, collect valuable loot, and explore the Shadows Fall city."
      />
      <meta property="og:url" content="https://shadowsoffortune.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/splash-and-title.webp" />
      <meta
        property="og:image:alt"
        content="Shadows of Fortune logo and splash screen"
      />
      <meta property="og:site_name" content="Shadows of Fortune" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Shadows of Fortune" />
      <meta
        name="twitter:description"
        content="Join the adventure in Shadows of Fortune, a blockchain-based gaming experience. Mint exclusive assets, collect valuable loot, and explore the Shadows Fall city."
      />
      <meta name="twitter:image" content="/images/splash-and-title.webp" />
      <meta
        name="twitter:image:alt"
        content="Shadows of Fortune logo and splash screen"
      />
      <meta name="twitter:site" content="@ShadowsOFortune" />
      <meta name="twitter:creator" content="@ShadowsOFortune" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://shadowsoffortune.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
