"use client";

import "./headshot.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Headshot(siteName: { page: string }) {

  const [isOpen, clicked] = useState(false);



  function dialogSet() {
    console.log(siteName.page);

    if (siteName.page == "main") {
      console.info("The current page is on Main.\nDetails: " + siteName.page);
    }

  }

  const dialogBox = "dialogBox";

  useEffect(() => dialogSet(), []);

  return (
    <>
      <dialog id={dialogBox} className={`dialogBox ${isOpen ? "open" : "closed"}`} aria-label="Harris's Headshot">
        <div className="portraitBox box">
          <div className="portrait"/>
          <Link href="#" onClick={dialogSet} aria-label="Close Harris's Dialog">
            <div/>
            <div/>
          </Link>
        </div>
        <div className="textBox box">
          <div className="textWrapper">
            <p className="text">Welcome to my website! This dialog will be made to react to whatever is on screen!</p>
          </div>
          <div className="speechAttachment"/>
        </div>
        <div className="revealBox"/>
      </dialog>
    </>
  )
}