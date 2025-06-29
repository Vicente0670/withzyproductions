"use client";

import "./headshot.css";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

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
  
  const textRef = useRef(null);
  const timeoutFunction = useRef<any>(); // The "Timeout" type apparently isn't a thing?
  const textContainerRef = useRef<any>(null);
  const currentIndex = useRef(0);

  const [intersectingFooter, isFooterInView] = useState(false);
  const [hasEnabled, enabled] = useState(false);
  const [isOpen, clicked] = useState(true);
  
  const writerSpeed = 17; // in milliseconds
  const deletionSpeed = 10;
  const currentDialog = schema.page;

  const currentText = useRef("");
  const textContainerId = "textContainer";

  const textContainer = useMemo(() => {
    return <p className="text" id={textContainerId} ref={textRef}></p>;
  }, []);

  let unspellingTimeoutFunction: any;

  const handleFooterIntersect = useCallback((elem: IntersectionObserverEntry[]) => {
    if (elem[0].isIntersecting) isFooterInView(true); else isFooterInView(false);
  }, [isFooterInView]);

  const handleElementIntersect = useCallback((elem: IntersectionObserverEntry[]) => {
    elem.forEach((e) => {
      if (e.isIntersecting) {
        observedList.push(e.target);
        
        if (observedList.length > 3) observedList.shift();

        console.log(observedList);
      }
    });
  }, [])

  const intersectionAppend = useCallback(() => {

    const footerIntersectionSettings = { root: null, threshold: .33 };
    footerObserver = new IntersectionObserver(handleFooterIntersect, footerIntersectionSettings);
    footerObserver.observe(footerDiv);

    const elemIntersectionSettings = { root: null, threshold: .4 };
    elemObserver = new IntersectionObserver(handleElementIntersect, elemIntersectionSettings);
    
    for (let i = 0; i < elem.length; i++) elemObserver.observe(elem[i]!);

  }, [handleFooterIntersect, handleElementIntersect]);

  const dialogSpell = useCallback(() => {
    if ((currentIndex.current < currentText.current.length) && isOpen === true) {
      
      if (currentText.current[currentIndex.current] == undefined) return console.info("Finished spelling.");
      
      else {
        textContainerRef.current.textContent += currentText.current[currentIndex.current];
        currentIndex.current++;
      }
      
      for (let i = 0; i < punc.length; i++) {
        if (currentText.current[currentIndex.current - 1] === punc[i]) {
          return timeoutFunction.current = setTimeout(dialogSpell, timing[i]);
        }
      }

      return timeoutFunction.current = setTimeout(dialogSpell, writerSpeed);
    }
    else if (isOpen === false) {
      clearTimeout(timeoutFunction.current);
    }
    else {
      currentIndex.current = 0;
    }
  }, [isOpen])
  
  function dialogUnspell() {

    if (!textContainerRef.current.textContent) return console.info('No more "unspelling", if you know what I mean.');

    if (textContainerRef.current.textContent) {
      textContainerRef.current.textContent = textContainerRef.current.textContent(0, (textContainerRef.current.textContent.length - 1));
      unspellingTimeoutFunction = setTimeout(dialogUnspell, deletionSpeed);
    }
  }

  const dialogAppend = useCallback(() => {

    if (currentDialog === "main") {
      elem.push(document.getElementById(container.title));
      elem.push(document.getElementById(container.experience));

      // Hardcoded for now.
      currentText.current = textOptions.main[4];
      dialogSpell();
    }

    intersectionAppend();

  }, [currentDialog, currentText, container, dialogSpell, intersectionAppend]);

  const dialogView = useCallback(() => { if (isOpen === true) clicked(false); else clicked(true); }, [isOpen, clicked]);

  useEffect(() => {
    if (hasEnabled === false) {

      footerDiv = document.getElementById(footerId)!;
      textContainerRef.current = document.getElementById(textContainerId)!;

      intersectionAppend();

      document.getElementById(openButton)?.addEventListener("click", dialogView);
      document.getElementById(closeButton)?.addEventListener("click", dialogView);
      setTimeout(dialogAppend, 1200);
      enabled(true);
    }
  }, [hasEnabled, dialogAppend, dialogView, intersectionAppend]);

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
            {textContainer}
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