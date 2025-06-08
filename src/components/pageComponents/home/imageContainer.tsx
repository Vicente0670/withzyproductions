"use client";

import "./imageContainer.css";
import Img from "./imageComponent";
import { useEffect } from "react";

export default function ImageContainer() {

  const imgTop = "imgTop";
  const imgBottom = "imgBottom";
  const imgBase1 = "/assets/topRow/";
  const imgBase2 = "/assets/bottomRow/";
  const imgType = ".webp";
  
  const imgSrc: any = [
    [
      [imgBase1 + "1" + imgType, ""],
      [imgBase1 + "2" + imgType, ""],
      [imgBase1 + "3" + imgType, ""],
      [imgBase1 + "4" + imgType, ""],
      [imgBase1 + "5" + imgType, ""],
      [imgBase1 + "6" + imgType, ""],
      [imgBase1 + "7" + imgType, ""],
      [imgBase1 + "8" + imgType, ""],
      [imgBase1 + "9" + imgType, ""],
      [imgBase1 + "10" + imgType, ""],
      [imgBase1 + "11" + imgType, ""],
      [imgBase1 + "12" + imgType, ""],
    ],
    [
      [imgBase2 + "13" + imgType, ""],
      [imgBase2 + "14" + imgType, ""],
      [imgBase2 + "15" + imgType, ""],
      [imgBase2 + "16" + imgType, ""],
      [imgBase2 + "17" + imgType, ""],
      [imgBase2 + "18" + imgType, ""],
      [imgBase2 + "19" + imgType, ""],
      [imgBase2 + "20" + imgType, ""],
      [imgBase2 + "21" + imgType, ""],
      [imgBase2 + "22" + imgType, ""],
      [imgBase2 + "23" + imgType, ""],
      [imgBase2 + "24" + imgType, ""],
    ]
  ];
  
  const firstImageArray: any = [], secondImageArray: any = [];
  let firstHalf = [], secondHalf = [], n = 0;
  let firstList = imgSrc[0], secondList = imgSrc[1];


  function imageSourceAppend() {

    const firstListLength = firstList.length,
    secondListLength = secondList.length;

    for (let i = 0; i < firstListLength; i++) {

      n = Math.floor(Math.random() * firstList.length);
      firstImageArray.push(firstList[n]);

      firstHalf = firstList.slice(0, n);
      secondHalf = firstList.slice(-(firstList.length - (n + 1)));

      if ((n + 1) === firstList.length) firstList = firstHalf;
      else firstList = firstHalf.concat(secondHalf);
    }

    for (let i = 0; i < secondListLength; i++) {

      n = Math.floor(Math.random() * secondList.length);
      secondImageArray.push(secondList[n]);

      firstHalf = secondList.slice(0, n);
      secondHalf = secondList.slice(-(secondList.length - (n + 1)));

      if ((n + 1) === secondList.length) secondList = firstHalf;
      else secondList = firstHalf.concat(secondHalf);
    }
  
  }
  
  useEffect(() => imageSourceAppend());

  return (
    <div className="imageContainerRoot">
      <div className="imageContainerTop">
        <div className="strip" id={imgTop}>
          <Img src={firstImageArray[0][0]} txt={firstImageArray[0][1]} />
          <Img src={firstImageArray[1][0]} txt={firstImageArray[1][1]} />
          <Img src={firstImageArray[2][0]} txt={firstImageArray[2][1]} />
          <Img src={firstImageArray[3][0]} txt={firstImageArray[3][1]} />
          <Img src={firstImageArray[4][0]} txt={firstImageArray[4][1]} />
          <Img src={firstImageArray[5][0]} txt={firstImageArray[5][1]} />
          <Img src={firstImageArray[6][0]} txt={firstImageArray[6][1]} />
          <Img src={firstImageArray[7][0]} txt={firstImageArray[7][1]} />
          <Img src={firstImageArray[8][0]} txt={firstImageArray[8][1]} />
          <Img src={firstImageArray[9][0]} txt={firstImageArray[9][1]} />
          <Img src={firstImageArray[10][0]} txt={firstImageArray[10][1]} />
          <Img src={firstImageArray[11][0]} txt={firstImageArray[11][1]} />

          <Img src={firstImageArray[0][0]} txt={firstImageArray[0][1]} />
          <Img src={firstImageArray[1][0]} txt={firstImageArray[1][1]} />
          <Img src={firstImageArray[2][0]} txt={firstImageArray[2][1]} />
          <Img src={firstImageArray[3][0]} txt={firstImageArray[3][1]} />
          <Img src={firstImageArray[4][0]} txt={firstImageArray[4][1]} />
          <Img src={firstImageArray[5][0]} txt={firstImageArray[5][1]} />
          <Img src={firstImageArray[6][0]} txt={firstImageArray[6][1]} />
          <Img src={firstImageArray[7][0]} txt={firstImageArray[7][1]} />
          <Img src={firstImageArray[8][0]} txt={firstImageArray[8][1]} />
          <Img src={firstImageArray[9][0]} txt={firstImageArray[9][1]} />
          <Img src={firstImageArray[10][0]} txt={firstImageArray[10][1]} />
          <Img src={firstImageArray[11][0]} txt={firstImageArray[11][1]} />
        </div>
      </div>
      <div className="imageContainerBottom">
        <div className="strip" id={imgBottom}>
          <Img src={secondImageArray[0][0]} txt={secondImageArray[0][1]} />
          <Img src={secondImageArray[1][0]} txt={secondImageArray[1][1]} />
          <Img src={secondImageArray[2][0]} txt={secondImageArray[2][1]} />
          <Img src={secondImageArray[3][0]} txt={secondImageArray[3][1]} />
          <Img src={secondImageArray[4][0]} txt={secondImageArray[4][1]} />
          <Img src={secondImageArray[5][0]} txt={secondImageArray[5][1]} />
          <Img src={secondImageArray[6][0]} txt={secondImageArray[6][1]} />
          <Img src={secondImageArray[7][0]} txt={secondImageArray[7][1]} />
          <Img src={secondImageArray[8][0]} txt={secondImageArray[8][1]} />
          <Img src={secondImageArray[9][0]} txt={secondImageArray[9][1]} />
          <Img src={secondImageArray[10][0]} txt={secondImageArray[10][1]} />
          <Img src={secondImageArray[11][0]} txt={secondImageArray[11][1]} />

          <Img src={secondImageArray[0][0]} txt={secondImageArray[0][1]} />
          <Img src={secondImageArray[1][0]} txt={secondImageArray[1][1]} />
          <Img src={secondImageArray[2][0]} txt={secondImageArray[2][1]} />
          <Img src={secondImageArray[3][0]} txt={secondImageArray[3][1]} />
          <Img src={secondImageArray[4][0]} txt={secondImageArray[4][1]} />
          <Img src={secondImageArray[5][0]} txt={secondImageArray[5][1]} />
          <Img src={secondImageArray[6][0]} txt={secondImageArray[6][1]} />
          <Img src={secondImageArray[7][0]} txt={secondImageArray[7][1]} />
          <Img src={secondImageArray[8][0]} txt={secondImageArray[8][1]} />
          <Img src={secondImageArray[9][0]} txt={secondImageArray[9][1]} />
          <Img src={secondImageArray[10][0]} txt={secondImageArray[10][1]} />
          <Img src={secondImageArray[11][0]} txt={secondImageArray[11][1]} />
        </div>
      </div>
    </div>
  )
}