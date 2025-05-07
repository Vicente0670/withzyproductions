"use client";

import header from "./header.module.css";
import MenuFunction from "./menuFunction";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
  const navBarId = "navigationBar";
  useState(() => {
    let topDistance = 0, navBarElement: HTMLElement | null;
    function navBarScroll() {
      if (!navBarElement) {
        navBarElement = document.getElementById(navBarId);
      }
      if (window.scrollY >= (window.screen.height / 2)) {
        navBarElement!.style.top = "0";
      }
      else {
        navBarElement!.style.top = "-6rem";
      }
    }
    // let navBarElement = document.getElementById(navBarId);
    // this apparently just doesn't work even though useEffect is MEANT to attach after
    window.addEventListener("scroll", navBarScroll);
  })
  return (
    <nav id={navBarId} className={header.headerBase}>
      <Link href="/" className={header.logo}/>
      <MenuFunction/>
      <div className={header.linkContainer}>
        <Link href="/">Home</Link>
        <ul className={header.menuTitle}>
          <li><p>Portfolio</p></li>
          <ul className={header.menuItems}>
            <li><Link href="/">Resume</Link></li>
            <li><Link href="/">On Set With Zy</Link></li>
            <li><Link href="/">Shoots With Zy</Link></li>
            <li><Link href="/">Talks With Zy</Link></li>
          </ul>
        </ul>
        <Link href="/">Contact</Link>
        <Link href="/">Rates</Link>
      </div>
      <div className={header.headerBackground}/>
    </nav>
  )
}