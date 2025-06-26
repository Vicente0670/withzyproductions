import "./experienceContainer.css";
import Image from "next/image";

const metrics = {
  height: 240,
  width: 240
}

export default function ExperienceContainer(experience: { id: string }) {
  return (
    <div className={experience.id} id={experience.id}>
      <div className="title">
        <h3>My Experience</h3>
      </div>
      <div className="content">
        <div className="container text">
          <p>As a <span>full-time model</span> and <span>actor</span> with a background in <span>vocal performance</span>, I bring a <span>creative</span>, <span>performance-driven</span> approach to photography, videography, and editing.</p>
          <br/>
          <p>My <span>on-camera experience</span> allows me to <span>guide talent</span> naturally, <span>capture genuine emotion</span>, and <span>produce visuals</span> that are both <span>polished</span> and <span>purposeful</span>—blending artistic insight with storytelling impact.</p>
        </div>
        <div className="container gallery">
          <div className="frame">
            <Image src="/assets/topRow/5.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
              priority={false}
            />
            <Image src="/assets/topRow/4.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
              priority={false}
            />
            <Image src="/assets/bottomRow/21.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
              priority={false}
            />
            <Image src="/assets/bottomRow/23.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
{/*<p>I have been the technical director, producer, and on-air talent for 2 years on my 2 hour weekly radio show "Talks With Zy" partnered with UTA Radio. I have also been the social media marketing specialist for the Office of Multicultural Affairs Office at The University of Texas at Arlington as well as the videographer, photographer, and editor.</p>*/}