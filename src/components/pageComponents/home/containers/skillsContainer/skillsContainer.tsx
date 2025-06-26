"use client";

import "./skillsContainer.css";
import Image from "next/image";
import { useEffect } from "react";

export default function SkillsContainer(skills: { id: string }) {

  const skill: Array<Element> = [];
  const image: Array<Element> = [];
  const description: Array<Element> = [];
  
  const scrollId = "scroller";
  const imgClass = "photograph";
  const textClass = "description";
  const presImg = "presentationImage";
  const presText = "presentationText";
  const imgSrc = "/assets/presentation/"
  const imgType = ".avif";
  
  let title: HTMLElement;
  let container: HTMLElement;
  let cHeight: number;
  let cTop: number;

  // I'm very certain IntersectionObserver doesn't provide what I need for this.

  function classAppend(section: number) {

    for (let i = 0; i < skill.length; i++) { skill[i].classList.remove("selected"); }
    for (let i = 0; i < image.length; i++) { image[i].classList.remove("selected"); }
    for (let i = 0; i < description.length; i++) { description[i].classList.remove("selected"); }

    skill[section].classList.add("selected");
    image[section].classList.add("selected");
    description[section].classList.add("selected");

    title.style.transform = `translateY(-${section}00%)`;

    return console.info(`Showcasing section ${section}.`);
  }

  function scroller() {
    cHeight = container.clientHeight;
    cTop = container.getBoundingClientRect().top;

    let result = cTop / cHeight;

    if ((result <= 0) && (result > -.2)) return classAppend(0);
    if ((result <= -.2) && (result > -.4)) return classAppend(1);
    if ((result <= -.4) && (result > -.6)) return classAppend(2);
    if ((result <= -.6) && (result > -1)) return classAppend(3);
  }
    
  useEffect(() => {
    title = document.getElementById(scrollId)!;
    container = document.getElementById(skills.id)!;

    let elements;

    elements = document.querySelectorAll(".skillsList .skill");
    for (let i = 0; i < elements.length; i++) { skill.push(elements[i]); }

    elements = document.querySelectorAll(`.${presImg} .${imgClass}`);
    for (let i = 0; i < elements.length; i++) { image.push(elements[i]); }

    elements = document.querySelectorAll(".description");
    for (let i = 0; i < elements.length; i++) { description.push(elements[i]); }

    document.addEventListener("scroll", scroller);
    scroller();

  }, [scroller, classAppend]);

  return (
    <div className={skills.id} id={skills.id}>
      <div className="title">
        <h3>My Skills</h3>
      </div>
      <div className="fullContent">
        <div className="container">
          <div className="text">
            <div className="skillType">
              <div className={scrollId} id={scrollId}>
                <h4>Attention to Detail</h4>
                <h4>Time Management</h4>
                <h4>Communication</h4>
                <h4>Software Literacy</h4>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="skillsList">
              <div className="skill">
                <p>Attention to De&shy;tail</p>
              </div>
              <div className="skill">
                <p>Time Manage&shy;ment</p>
              </div>
              <div className="skill">
                <p>Communi&shy;cation</p>
              </div>
              <div className="skill">
                <p>Software Literacy</p>
              </div>
            </div>
            <div className="skillsPresentation">
              <div className={presImg}>
                <Image
                  src={imgSrc + 0 + imgType}
                  alt="Presentation Image"
                  height={420}
                  width={420}
                  className={`${imgClass} image1 selected`}
                  priority={false}
                />
                <Image
                  src={imgSrc + 1 + imgType}
                  alt="Presentation Image"
                  height={420}
                  width={420}
                  className={`${imgClass} image2`}
                  priority={false}
                />
                <Image
                  src={imgSrc + 2 + imgType}
                  alt="Presentation Image"
                  height={420}
                  width={420}
                  className={`${imgClass} image3`}
                  priority={false}
                />
                <Image
                  src={imgSrc + 3 + imgType}
                  alt="Presentation Image"
                  height={420}
                  width={420}
                  className={`${imgClass} image4`}
                  priority={false}
                />
              </div>
              <div className={presText}>
                <p className={`${textClass} text1 selected`}>I possess a sharp eye for detail, which I use to find even the smallest errors in text.</p>
                <p className={`${textClass} text2`}>I work well under pressure and can produce high-quality work in short periods of time.</p>
                <p className={`${textClass} text3`}>I have strong interpersonal skills and work with a wide variety of people.</p>
                <p className={`${textClass} text4`}>I am skilled with Microsoft Office, Adobe Premiere Pro, Photoshop, and Audition. I am also Hootesuite Certified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}