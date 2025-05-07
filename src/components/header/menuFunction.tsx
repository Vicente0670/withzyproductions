"use client";
import "./menuFunction.css";
import { useState } from "react";
import Link from "next/link";

export default function MenuFunction() {
  const [isOpen, clicked] = useState(false);
  
  function abortMenu() {
    clicked(false);
    document.documentElement.style.overflowY = "";
  }

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
            <Link href="/">Home</Link>
            <details>
              <summary><p>Portfolio</p></summary>
              <Link href="/">Resume</Link>
              <Link href="/">On Set With ZY</Link>
              <Link href="/">Shoots With ZY</Link>
              <Link href="/">Talks With ZY</Link>
            </details>
            <Link href="/">Contact</Link>
            <Link href="/">Rates</Link>
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