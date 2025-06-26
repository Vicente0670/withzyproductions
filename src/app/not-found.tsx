import page from "./page.module.css";
import { Metadata } from "next";

const schema = {
  title: "With ZY Productions",
  page: "404",
  description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, tailoring my skills to bring your vision and memories to life! Where moments become memories.",
  favicon: "/favicon.ico"
}

export const metadata: Metadata = {
  title: schema.title,
  description: schema.description,

  openGraph: {
    title: schema.title,
    description: schema.description,
    images: schema.favicon,
  },
}


export default function Error() {
  return (
    <>
      <h1>???</h1>
      <h2>404</h2>
      <p>wow</p>
    </>
  )
}