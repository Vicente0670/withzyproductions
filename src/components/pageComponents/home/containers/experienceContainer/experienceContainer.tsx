import "./experienceContainer.css";
import Image from "next/image";

const metrics = {
  height: 240,
  width: 240
}

export default function ExperienceContainer(experience: { id: string }) {
  return (
    <div className="experienceContainer" id={experience.id}>
      <div className="title">
        <h3>My Experience</h3>
      </div>
      <div className="content">
        <div className="container text">
          <p>I have been the <span>technical director</span>, <span>producer</span>, and <span>on-air talent</span> for <span>2 years</span> on my 2 hour weekly radio show <span>"Talks With Zy"</span>, partnered with UTA Radio.</p>
          <br/>
          <p>I have also been the <span>social media marketing specialist</span> for the <span>Office of Multicultural Affairs Office</span> at The University of Texas at Arlington as well as the videographer, photographer, and editor.</p>
        </div>
        <div className="container gallery">
          <div className="frame">
            <Image src="/assets/bottomRow/20.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
            />
            <Image src="/assets/bottomRow/19.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
            />
            <Image src="/assets/bottomRow/21.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
            />
            <Image src="/assets/bottomRow/23.webp"
              alt="Frame Image from Harris"
              height={metrics.height}
              width={metrics.width}
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
{/*<p>I have been the technical director, producer, and on-air talent for 2 years on my 2 hour weekly radio show "Talks With Zy" partnered with UTA Radio. I have also been the social media marketing specialist for the Office of Multicultural Affairs Office at The University of Texas at Arlington as well as the videographer, photographer, and editor.</p>*/}