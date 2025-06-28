"use client";

import "./skillsContainer.css";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";

export default function SkillsContainer(skills: { id: string }) { 

  const skillList = [
    { text: "Attention to Detail" },
    { text: "Time Management" },
    { text: "Communication" },
    { text: "Software Literacy" },
  ];

  const imageList = [
    {source: 0},
    {source: 1},
    {source: 2},
    {source: 3},
  ];

  const descriptionList = [
    {text: "I possess a sharp eye for detail, which I use to find even the smallest errors in text."},
    {text: "I work well under pressure and can produce high-quality work in short periods of time."},
    {text: "I have strong interpersonal skills and work with a wide variety of people."},
    {text: "I am skilled with Microsoft Office, Adobe Premiere Pro, Photoshop, and Audition. I am also Hootesuite Certified."}
  ];
  
  const refTitle: any = useRef(null);
  const refContainer: any = useRef(null);
  const skillElements: any = useRef([]);
  const imageElements: any = useRef([]);
  const descriptionElements: any = useRef([]);

  const image: Array<Element> = [];
  const description: Array<Element> = [];
  
  const scrollId = "scroller";
  const imgClass = "photograph";
  const textClass = "description";
  const presImg = "presentationImage";
  const presText = "presentationText";
  const imgSrc = "/assets/presentation/"
  const imgType = ".avif";

  // I'm very certain IntersectionObserver doesn't provide what I need for this.

  const classAppend = useCallback((section: number) => {

    for (let i = 0; i < skillElements.current.length; i++) { skillElements.current[i].classList.remove("selected"); }
    for (let i = 0; i < imageElements.current.length; i++) { imageElements.current[i].classList.remove("selected"); }
    for (let i = 0; i < descriptionElements.current.length; i++) { descriptionElements.current[i].classList.remove("selected"); }

    skillElements.current[section].classList.add("selected");
    imageElements.current[section].classList.add("selected");
    descriptionElements.current[section].classList.add("selected");

    refTitle.current.style.transform = `translateY(-${section}00%)`;
    
  }, [refTitle]);

  const scroller = useCallback(() => {
    const cHeight = refContainer.current.clientHeight;
    const cTop = refContainer.current.getBoundingClientRect().top;

    const result = cTop / cHeight;

    if ((result <= 0) && (result > -.2)) return classAppend(0);
    if ((result <= -.2) && (result > -.4)) return classAppend(1);
    if ((result <= -.4) && (result > -.6)) return classAppend(2);
    if ((result <= -.6) && (result > -1)) return classAppend(3);
  }, [classAppend]);
    
  useEffect(() => {
    refTitle.current = document.getElementById(scrollId)!;
    refContainer.current = document.getElementById(skills.id)!;

    document.addEventListener("scroll", scroller);
    scroller();

  }, [skills.id, classAppend, scroller]);

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
              {skillList.map((element, elementIndex) => (
                <div className="skill" key={elementIndex} ref={(e: any) => (skillElements.current[elementIndex] = e)}>
                  <p>{element.text}</p>
                </div>
              ))}
            </div>
            <div className="skillsPresentation">
              <div className={presImg}>
                {imageList.map((element, elementIndex) => (
                  <Image
                    src={imgSrc + element.source + imgType}
                    alt="Presentation Image"
                    height={420}
                    width={420}
                    className={`${imgClass} image${elementIndex + 1} ${elementIndex === 0 ? "selected" : ""}`}
                    priority={false}
                    key={elementIndex}
                    ref={(e: any) => (imageElements.current[elementIndex] = e)}
                  />
                ))}
              </div>
              <div className={presText}>
                {descriptionList.map((element, elementIndex) => (
                  <p
                    className={`${textClass} text${elementIndex + 1} ${elementIndex === 0 ? "selected" : ""}`}
                    key={elementIndex}
                    ref={(e: any) => (descriptionElements.current[elementIndex] = e)}
                  >
                    {element.text}
                  </p>
                ))}
                {/* 
                <p className={`${textClass} text2`}>I work well under pressure and can produce high-quality work in short periods of time.</p>
                <p className={`${textClass} text3`}>I have strong interpersonal skills and work with a wide variety of people.</p>
                <p className={`${textClass} text4`}>I am skilled with Microsoft Office, Adobe Premiere Pro, Photoshop, and Audition. I am also Hootesuite Certified.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}