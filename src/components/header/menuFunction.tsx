"use client"
import "./menuFunction.css"
import { useState } from "react";

export default function MenuFunction() {
  const [isOpen, clicked] = useState(false);
  
  function buttonClickEvent() {
    if (isOpen == true) {
      clicked(false);
      document.documentElement.style.overflowY = "";
    }

    else if (isOpen == false) {
      clicked(true);
      document.documentElement.style.overflowY = "hidden";
    }
  }

  return (
    <>
      <div className="menuButtonContainer">
        <div role="button" tabIndex={2} aria-expanded={isOpen} onClick={buttonClickEvent} className={`menuButton ${isOpen ? "open" : "closed"}`}>
          <div className="bun"></div>
          <div className="meat"></div>
          <div className="bun"></div>
          <div className="meat"></div>
        </div>
        <div className={`menuModal ${isOpen ? "open" : "closed"}`}>
          <h2>This is some testing.</h2>
          <p>This is a test of how long the essay is going to be for this specific project. I didn't know that I could write this long, just that my fingers are getting moren tired than a buffalo at sunset. By the way, the aforementioned joke does not make any sense at all in the slightest.</p>
        </div>
        <div className="menuButtonWrapper">
          <div className={`menuButtonBackground ${isOpen ? "open" : "closed"}`}/>
        </div>
      </div>
    </>
  )

}