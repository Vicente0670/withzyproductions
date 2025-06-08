import "./menuFunction.css";
import Link from "next/link";
import { useState } from "react";

export default function MenuFunction() {
  const [isOpen, clicked] = useState(false);
  const navButton = "navButton";

  const keyList = {
    space: "Space",
    enter: "Enter",
    numEnter: "NumpadEnter",
  }

  function abortMenu() {
    clicked(false);
    document.documentElement.style.overflowY = "";
    console.warn("User focused outside the menu. Menu has been hidden.");
  }

  function buttonClickEvent(e: any) {

    if (e.repeat) return;

    if ( (e.code == keyList.space || e.code == keyList.enter || e.code == keyList.numEnter) || (e.type == "click") ) {
  
      if (isOpen == true) {
        clicked(false);
        document.documentElement.style.overflowY = "";
      }
      
      else {
        document.documentElement.style.overflowY = "hidden";
        clicked(true);
      }

    }

  }

  return (
    <>
      <div className={`menuButtonContainer ${isOpen ? "open" : "closed"}`}>
        <div role="button" tabIndex={0} id={navButton} onKeyDown={buttonClickEvent} onClick={buttonClickEvent} className={`menuButton ${isOpen ? "open" : "closed"}`} aria-expanded={isOpen} aria-label="Menu Button">
          <div className="bun"></div>
          <div className="meat"></div>
          <div className="bun"></div>
          <div className="meat"></div>
        </div>
        <div className={`menuModalContainer ${isOpen ? "open" : "closed"}`} id="menuModalContainer">
          <div className="menuModal" role="menu">
            <Link href="#" role="menuitem">Home</Link>
            <details>
              <summary role="menuitem"><p>Portfolio</p></summary>
              <Link href="#" role="menuitem">Gallery</Link>
              <Link href="#" role="menuitem">Resume</Link>
              <Link href="#" role="menuitem">On Set With ZY</Link>
              <Link href="#" role="menuitem">Shoots With ZY</Link>
              <Link href="#" role="menuitem">Talks With ZY</Link>
            </details>
            <Link href="#" role="menuitem">Contact</Link>
            <Link href="#" role="menuitem">Rates</Link>
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