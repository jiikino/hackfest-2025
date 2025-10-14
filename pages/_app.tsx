import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Orbitron, Cinzel_Decorative, Iceland, Rampart_One, Pixelify_Sans, Space_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-iceland",
});

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rampart",
});

const coralPixels = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-coral-pixels",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${orbitron.variable} ${cinzelDecorative.variable} ${iceland.variable} ${rampartOne.variable} ${coralPixels.variable} ${spaceMono.variable}`}>
      <CustomCursor />
      <Component {...pageProps} />
    </div>
  );
}
