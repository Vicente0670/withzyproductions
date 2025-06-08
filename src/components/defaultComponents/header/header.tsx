"use client";

import header from "./header.module.css";
import MenuFunction from "./menuFunction";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {

  const backgroundGradient = "backgroundGradient",
  backgroundPattern = "backgroundPattern",
  backgroundElements: any = [];
  
  function navBarScroll() {
    
    if (!backgroundElements || backgroundElements < 1) {
      backgroundElements.push(document.getElementById(backgroundGradient));
      backgroundElements.push(document.getElementById(backgroundPattern));
    }
    
    if (window.scrollY > (window.screen.height / 4)) {
      for (let i = 0; i < backgroundElements.length; i++) {
        backgroundElements[i].style.opacity = "1";
      }
    }
    else {
      for (let i = 0; i < backgroundElements.length; i++) {
        backgroundElements[i].style.opacity = "0";
      }
    }
    
  }

  function eventAppend() {
    window.addEventListener("scroll", navBarScroll);
    navBarScroll();
  }

  useEffect(() => eventAppend(), []);

  return (
    <>
      <nav className={header.headerBase} role="navigation">
        <Link href="/" className={header.logo} aria-label="With ZY Productions Logo."/>
        <MenuFunction/>
        <div className={header.linkContainer}>
          <Link href="/">Home</Link>
          <ul className={header.menuTitle}>
            <li><Link href="#">Portfolio</Link></li>
            <ul className={header.menuItems}>
              <li><Link href="/">Gallery</Link></li>
              <li><Link href="/">Resume</Link></li>
              <li><Link href="/">On Set With Zy</Link></li>
              <li><Link href="/">Shoots With Zy</Link></li>
              <li><Link href="/">Talks With Zy</Link></li>
            </ul>
          </ul>
          <Link href="/">Contact</Link>
          <Link href="/">Rates</Link>
        </div>
        <div id={backgroundGradient} className={header.backgroundGradient}/>
        <div id={backgroundPattern} className={header.backgroundPattern}/>
      </nav>
    </>
  )
}