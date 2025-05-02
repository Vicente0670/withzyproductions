import page from "./page.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "With Zy Productions",
  description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, helping many people's cinematic vision come to life. Where moments become memories.",

  openGraph: {
    title: "With Zy Productions",
    description: "Hello, I'm Zyshonne Harris! I'm a professional photographer, videographer, and editor, helping many people's cinematic vision come to life. Where moments become memories.",
    images: "/harris.png",
  },
}
  
export default function Page() {
  return (
    <>
      <div className={page.frontLander}>
        <div className={page.foregroundContent}>
          <div className={page.titleContainer}>
            <h5 className={page.subTitle}>Hello, I&apos;m</h5>
            <h1 className={page.nameTitle}>Zyshonne Harris</h1>
          </div>
          <div className={page.buttonContainer}>
            <div className={page.primaryButton}>
              <button className={page.button} id="button-walkthrough" tabIndex={0}>Learn more about me!</button>
            </div>
            <div className={page.buttonArray}>
              <button className={page.subButton} id="button-portfolio">Portfolio</button>
              <button className={page.subButton} id="button-contact">Contact</button>
              <button className={page.subButton} id="button-rates">Rates</button>
            </div>
          </div>
        </div>
        <div className={page.backgroundContent}/>
      </div>
      <div className={page.introSection}>
        <div className={page.introduction}>
          <h1>Test.</h1>
          <p>This is a test. Lorem ipsum would go here but I&apos;m lazy</p>
        </div>
      </div>
      <div className={page.introSection}>
        <div className={page.introduction}>
          <h1>Test.</h1>
          <p>oops</p>
        </div>
      </div>
    </>
  )
}