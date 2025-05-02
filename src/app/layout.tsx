import "./globals.css";
import Header from "@/components/header/header";
import { Noto_Serif } from "next/font/google"; 
import type { Metadata, Viewport } from "next";

const noto = Noto_Serif({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#77dd77",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://withzyproductions.com/"),
  title: "With Zy Productions",
  description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, here to bring your ideas and memories to life.",
  authors: [{ name: "Vicente0670", url: "https://vicente0670.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "With Zy Productions",
    description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, here to bring your ideas and memories to life.",
    images: "/harris.png",
    authors: "Vicente0670",
  },

  robots: "all",
  keywords: "with zy productions, zy productions, withzyproductions, photography, videography, editor, business, professional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add necessary scripts here */}
      </head>
      <body className={noto.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}