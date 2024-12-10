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
      {/* <svg>
        <defs>
          <clipPath id="mySvg">
            <path path="M 0.5 0.5 m 0.3 0 a 0.25 0.25 0 1 0 -0.6 0 a 0.25 0.25 0 1 0 0.6 0 M 0.5 0 Q 1 0 1 0.5 T 0.5 1 T 0 0.5 T 0.5 0 Z"></path>
          </clipPath>
        </defs>
      </svg> */}
      <div className={page.frontLander}>
        <div className={page.foregroundContent}>
          <div className={page.titleContainer}>
            <h5 className={page.subTitle}>Hi, I&apos;m</h5>
            <h1 className={page.nameTitle}>Zyshonne Harris</h1>
          </div>
          <div className={page.buttonContainer}>
            <div className={page.primaryButton}>
              <button className={page.button} id="button-walkthrough">Learn more about me!</button>
            </div>
            <div className={page.buttonArray}>
              <button className={page.subButton} id="button-contact">Contact</button>
              <button className={page.subButton} id="button-portfolio">Portfolio</button>
              <button className={page.subButton} id="button-rates">Rates</button>
            </div>
          </div>
        </div>
        <div className={page.backgroundContent}>
          
        </div>
      </div>
      <div className={page.introSection}>
        <div className={page.introduction}>
          <h1>Test.</h1>
          <p>This is a test. Lorem ipsum would go here but I&apos;m lazy</p>
        </div>
      </div>
    </main>
  )
}