import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/png" href="/sponsors/Hackfest Logo.png" />
        <link rel="apple-touch-icon" href="/sponsors/Hackfest Logo.png" />
        <link rel="shortcut icon" href="/sponsors/Hackfest Logo.png" />
        
        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:image" content="/sponsors/Hackfest Logo.png" />
        <meta name="twitter:image" content="/sponsors/Hackfest Logo.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Iceland&family=Orbitron:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Rampart+One&family=Chakra+Petch:wght@400;500;600;700&family=Coral+Pixels&family=Stalinist+One&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
