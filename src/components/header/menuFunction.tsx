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

  function abortMenu() {
    clicked(false);
    document.documentElement.style.overflowY = "";
  }

  return (
    <>
      <div className={`menuButtonContainer ${isOpen ? "open" : "closed"}`}>
        <div role="button" tabIndex={0} aria-expanded={isOpen} onClick={buttonClickEvent} className={`menuButton ${isOpen ? "open" : "closed"}`}>
          <div className="bun"></div>
          <div className="meat"></div>
          <div className="bun"></div>
          <div className="meat"></div>
        </div>
        <div className={`menuModalContainer ${isOpen ? "open" : "closed"}`} id="menuModalContainer">
          <div className="menuModal">
            {/* <h2>Menu</h2> */}
            <a href="/">Home</a>
            <details>
              <summary><p>Portfolio</p></summary>
              <a href="/">Resume</a>
              <a href="/">On Set With ZY</a>
              <a href="/">Shoots With ZY</a>
              <a href="/">Talks With ZY</a>
            </details>
            <a href="/">Contact</a>
            <a href="/">Rates</a>
            </div>
        </div>
        <div className={`menuModalBackground ${isOpen ? "open" : "closed"}`} onClick={abortMenu}/>
        <div className="menuButtonWrapper">
          <div className={`menuButtonBackground ${isOpen ? "open" : "closed"}`}/>
        </div>
      </div>
    </>
  )

}