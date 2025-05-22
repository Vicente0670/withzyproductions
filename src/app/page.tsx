import page from "./page.module.css";
import { Metadata } from "next";

const schema = {
  title: "With ZY Productions",
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

export default function Page() {
  return (
    <main id="content" tabIndex={-1}>
      <svg height={0} width={0}>
        <defs>
          <clipPath id="backgroundPath" clipPathUnits="objectBoundingBox">
            <path d="m 0.0137 0.125 l 0.4232 0 l 0 0.022 l -0.2531 0.655 l 0.0291 0 q 0.0769 0 0.1356 -0.0575 a 0.2825 0.2416 90 0 0 0.0585 -0.0867 a 0.4006 0.3425 90 0 0 0.0256 -0.0768 l 0.0154 0 l -0.0102 0.244 l -0.4378 0 l 0 -0.019 l 0.2556 -0.659 l -0.035 0 q -0.0498 0 -0.0839 0.0167 a 0.1409 0.1205 90 0 0 -0.0315 0.0223 a 0.2003 0.1712 90 0 0 -0.0223 0.0275 q -0.0209 0.0303 -0.0441 0.0806 a 1.1811 1.0098 90 0 0 -0.0226 0.0519 l -0.0153 0 l 0.0128 -0.221 z m 0.666 0.016 l 0.1163 0.313 l 0.1214 -0.313 l -0.0863 0 l 0 -0.016 l 0.1684 0 l 0 0.016 l -0.0564 0 l -0.1291 0.334 l 0 0.331 l 0.0521 0 l 0 0.019 l -0.271 0 l 0 -0.019 l 0.0521 0 l 0 -0.312 l -0.1453 -0.353 l -0.0402 0 l 0 -0.016 l 0.2736 0 l 0 0.016 l -0.0556 0 z"/>
          </clipPath>
        </defs>
      </svg>
      <div className={page.frontLander}>
        <div className={page.foregroundContent}>
          <div className={page.titleContainer}>
            <h5 className={page.subTitle}>Hello, I'm</h5>
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
        <div className={page.backgroundContent}>
          <div className={page.background}/>
        </div>
      </div>
      <div className={page.introSection}>
        <div className={page.backgroundLayer1}>
          <div className={page.backgroundLayer2}>
            <div className={page.backgroundLayer3}>
              <div className={page.introduction}>
                <div className={page.titleContainer}>
                  <h1>Meet Zyshonne Harris!</h1>
                  <p>Hello, I'm Zyshonne Harris!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}