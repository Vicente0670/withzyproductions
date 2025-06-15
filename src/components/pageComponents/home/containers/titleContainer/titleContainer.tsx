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
        <h5>Greetings, I'm</h5>
        <h2>Zyshonne Harris</h2>
      </div>
      <div className="content">
        <div className="container text">
          <p>I am a college graduate with a <span>Bachelor's of Arts in Communication</span>, majoring in Broadcasting. I'm a current <span>photographer</span>, <span>videographer</span>, and <span>editor</span>, and are passionate about my work and expertise.</p>
          <br/>
          <p>Currently, I'm employed full-time at [Place], working amongst a team of individuals who I stand out in, whilst sharing the dedication my team possesses towards media production.</p>
        </div>
        <div className="container gallery">
          <Image
            src="/assets/topRow/3.webp"
            alt="Carousel Image"
            height={metrics.height}
            width={metrics.width}
            className="image"
          />
          <Image
            src="/assets/bottomRow/17.webp"
            alt="Carousel Image"
            height={metrics.height}
            width={metrics.width}
            className="image"
          />
          <Image
            src="/assets/topRow/7.webp"
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