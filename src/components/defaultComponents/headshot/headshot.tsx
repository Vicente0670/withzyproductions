"use client";

import "./headshot.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const metrics = {
  width: 384,
  height: 384
};

// This used to be an array of arrays.
// Y'know, up until TS screamed at me again.
const punc = [
  ".",
  ",",
  ";",
  "~",
  "?",
  "!"
];

const timing = [
  500, // .
  175, // ,
  250, // ;
  600, // ~
  750, // ?
  600  // !
];

const textOptions = {
  main: [
    "Welcome to my website! This dialog will be made to react to the content of the webpage! Click one of these buttons to get started!",
    "bbb",
    "cccs?",
    "Testing the limits. Using the software, right now! No, but also yes. Brilliant; is it not? Well, I wondered, too.",
    "Welcome to my website! This dialog will be made to react to the content of the webpage, and provide context to the user based on what is currently in view. Click here to hide this dialog.",
    "g"
  ]
};

const openButton = "openButton";
const closeButton = "closeButton";
const dialogBox = "dialogBox";
const footerId = "footer";
const elem: Array<HTMLElement | null> = [];
const observedList: Array<Element | null> = [];

let footerDiv: HTMLElement;
let footerObserver: IntersectionObserver;

let elemObserver: IntersectionObserver;

export default function Headshot({ container, schema }: any) {
  
  const [hasEnabled, enabled] = useState(false);
  const [isOpen, clicked] = useState(true);
  const [intersectingFooter, isFooterInView] = useState(false);

  
  const writerSpeed = 17; // in milliseconds
  const deletionSpeed = 10;
  const currentDialog = schema.page;
  const textContainerId = "textContainer";
  let currentText = "";
  let currentIndex = 0;
  let textContainer: HTMLElement;
  let timeoutFunction: any;
  let unspellingTimeoutFunction: any;

  function handleFooterIntersect(elem: IntersectionObserverEntry[]) {
    if (elem[0].isIntersecting) isFooterInView(true); else isFooterInView(false);
  }

  function handleElementIntersect(elem: IntersectionObserverEntry[]) {
    elem.forEach((e) => {
      if (e.isIntersecting) {
        observedList.push(e.target);
        
        if (observedList.length > 3) observedList.shift();

        console.log(observedList);
      }
    });
  }

  function intersectionAppend() {

    const footerIntersectionSettings = { root: null, threshold: .33 };
    footerObserver = new IntersectionObserver(handleFooterIntersect, footerIntersectionSettings);
    footerObserver.observe(footerDiv);

    const elemIntersectionSettings = { root: null, threshold: .4 };
    elemObserver = new IntersectionObserver(handleElementIntersect, elemIntersectionSettings);
    
    for (let i = 0; i < elem.length; i++) elemObserver.observe(elem[i]!);

  }

  function dialogSpell() {
    if ((currentIndex < currentText.length) && isOpen === true) {
      
      textContainer.textContent += currentText[currentIndex];
      currentIndex++;
      
      for (let i = 0; i < punc.length; i++) {
        if (currentText[currentIndex - 1] === punc[i]) {
          return timeoutFunction = setTimeout(dialogSpell, timing[i]);
        }
      }

      return timeoutFunction = setTimeout(dialogSpell, writerSpeed);
    }
    else if (isOpen === false) {
      clearTimeout(timeoutFunction);
    }
    else {
      currentIndex = 0;
    }
  }
  
  function dialogUnspell() {

    if (!textContainer.textContent) return console.info('No more "unspelling", if you know what I mean.');

    if (textContainer.textContent) {
      textContainer.textContent = textContainer.textContent.slice(0, (textContainer.textContent.length - 1));
      unspellingTimeoutFunction = setTimeout(dialogUnspell, deletionSpeed);
    }
  }

  function dialogAppend() {

    textContainer = document.getElementById(textContainerId)!;
    textContainer.textContent = "";

    if (currentDialog === "main") {
      elem.push(document.getElementById(container.title));
      elem.push(document.getElementById(container.experience));

      // Hardcoded for now.
      currentText = textOptions.main[4];
      dialogSpell();

    }

    intersectionAppend();

  }

  function dialogView() { if (isOpen === true) clicked(false); else clicked(true); }

  useEffect(() => {
    if (hasEnabled === false) {

      footerDiv = document.getElementById(footerId)!;

      intersectionAppend();

      document.getElementById(openButton)?.addEventListener("click", dialogView);
      document.getElementById(closeButton)?.addEventListener("click", dialogView);
      setTimeout(dialogAppend, 1200);
      enabled(true);
    }
  }, [hasEnabled, intersectionAppend, dialogView, dialogAppend]);

  return (
    <>
      <section id={dialogBox} className={`dialogBox ${isOpen ? "" : "closed"} ${intersectingFooter ? "footerInView" : ""}`} aria-label="Harris's Headshot">
        <svg height={0} width={0}>
          <defs>
            <clipPath id="dialogPath" clipPathUnits="objectBoundingBox">
              <path d="m 0 0 v 1 c 0 -0.1 0.5 -0.1 0.5 -0.1 c 0 0 0.5 0 0.5 -0.1 v -0.6 c 0 -0.1 -0.5 -0.1 -0.5 -0.1 c 0 0 -0.5 0 -0.5 -0.1"/>
            </clipPath>
          </defs>
        </svg>
        <div className="portraitBox box">
          <div className="portrait">
            <Image
              src="/assets/headshots/20.jpg"
              alt="Mr. Harris's Headshot"
              height={metrics.height}
              width={metrics.width}
              className="image"
            />
          </div>
          <button className="portraitClose" onClick={dialogView} aria-label="Close Harris's Dialog">
            <div className="stub" />
            <div className="stub" />
          </button>
        </div>
        <div className="textBox box">
          <div className="textWrapper">
            <p className="text" id={textContainerId}/>
          </div>
          <div className="speechAttachment"/>
        </div>
        <div className="revealBox">
          <button className="revealButton" onClick={dialogView} aria-label="Open Harris's Dialog">
            <div className="stub" />
            <div className="stub" />
          </button>
        </div>
      </section>
    </>
  )
}