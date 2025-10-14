import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
