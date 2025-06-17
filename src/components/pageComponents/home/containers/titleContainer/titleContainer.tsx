import "./titleContainer.css";
import Image from "next/image";

const metrics = {
  height: 360,
  width: 360
}

export default function TitleContainer(title: {id: string}) {
  return (
    <div className="titleContainer" id={title.id}>
      <div className="title">
        <p>Greetings, I'm</p>
        <h2>Zyshonne Harris</h2>
      </div>
      <div className="content">
        <div className="container text">
          <p>With a background in <span>commercial photography</span>, <span>digital design</span>, and <span>media production education</span>, I bring over <span>3 years</span> of experience teaching creative disciplines while <span>leading real-world projects</span> like student broadcasting.</p>
          <br/>
          <p>My work as a <span>technical director</span>, <span>producer</span>, and <span>on-air talent</span> for UTA Radio allows me to combine academic insight with hands-on expertise to deliver <span>compelling</span>, <span>high-quality</span> visual content with a <span>strong creative vision</span>.</p>
        </div>
        <div className="container gallery">
          <Image
            src="/assets/bottomRow/18.webp"
            alt="Carousel Image"
            height={metrics.height}
            width={metrics.width}
            className="image"
          />
          <Image
            src="/assets/bottomRow/20.webp"
            alt="Carousel Image"
            height={metrics.height}
            width={metrics.width}
            className="image"
          />
          <Image
            src="/assets/bottomRow/24.webp"
            alt="Carousel Image"
            height={metrics.height}
            width={metrics.width}
            className="image"
          />
        </div>
      </div>
    </div>
  )
}