import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SkipNavigation from "@/components/skipNavigation/skipNavigation";
import { Noto_Serif } from "next/font/google"; 
import type { Metadata, Viewport } from "next";

const noto = Noto_Serif({ subsets: ["latin"] });

const schema = {
  title: "With Zy Productions",
  description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, tailoring my skills to bring your vision and memories to life! Where moments become memories.",
  favicon: "/favicon.ico",
  keywords: "with zy productions, zy productions, withzyproductions, photography, videography, editor, business, professional",
}

const schema2 = [schema.title, schema.description];

export const viewport: Viewport = {
  themeColor: "#f2c12e",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://withzyproductions.com/"),
  title: schema.title,
  description: schema.description,
  authors: [{ name: "Vicente0670", url: "https://vicente0670.com" }],
  icons: {
    icon: schema.favicon,
    apple: schema.favicon,
  },

  openGraph: {
    title: schema.title,
    description: schema.description,
    images: schema.favicon,
    authors: "Vicente0670",
  },

  robots: "all",
  keywords: schema.keywords,
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
        <SkipNavigation/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}