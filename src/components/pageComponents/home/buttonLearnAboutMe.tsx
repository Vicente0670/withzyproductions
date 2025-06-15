"use client";

import page from "@/app/page.module.css";
import { useEffect } from "react";

const mainButton = "mainButton";
let introduction: HTMLElement | null;

export default function LearnAboutMe({ elementIds }: any) {
  
  function scrollPage() {
    introduction?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  useEffect(() => { introduction = document.getElementById(elementIds.title); });

  return <button className={page.button} id={mainButton} onClick={scrollPage}>Learn more about me!</button>
}