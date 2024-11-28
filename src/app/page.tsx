import page from "./page.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "With Zy Productions",
  description: "This is the home page, isn't it great?",

  openGraph: {
    title: "With Zy Productions",
    description: "This is the home page, isn't this great!",
    images: "/harris.png",
  },
}
// mostly, this is just a test to see if my custom metadata works at all and i hope it does because im tired please let me stop

export default function Page() {
  return (
    <main>
      <div className={page.frontLander}>
        <div className={page.foregroundContent}>
          <div className={page.title}>
            <h5>Hi, I'm</h5>
            <h1>Zyshonne Harris</h1>
          </div>
          <div className={page.button}>
            <button id="button-trailer">Watch Trailer</button>
          </div>
        </div>
        <div className={page.backgroundContent}>
          
        </div>
      </div>
    </main>
  )
}