import "./imageContainer.css";
import Img from "./imageComponent";

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

  return (
    <div className="imageContainerRoot">
      <div className="imageContainerTop">
        <div className="strip" id={imgTop}>
          <Img src={imgSrc[0][0][0]} txt={imgSrc[0][0][1]} />
          <Img src={imgSrc[0][1][0]} txt={imgSrc[0][1][1]} />
          <Img src={imgSrc[0][2][0]} txt={imgSrc[0][2][1]} />
          <Img src={imgSrc[0][3][0]} txt={imgSrc[0][3][1]} />
          <Img src={imgSrc[0][4][0]} txt={imgSrc[0][4][1]} />
          <Img src={imgSrc[0][5][0]} txt={imgSrc[0][5][1]} />
          <Img src={imgSrc[0][6][0]} txt={imgSrc[0][6][1]} />
          <Img src={imgSrc[0][7][0]} txt={imgSrc[0][7][1]} />
          <Img src={imgSrc[0][8][0]} txt={imgSrc[0][8][1]} />
          <Img src={imgSrc[0][9][0]} txt={imgSrc[0][9][1]} />
          <Img src={imgSrc[0][10][0]} txt={imgSrc[0][10][1]} />
          <Img src={imgSrc[0][11][0]} txt={imgSrc[0][11][1]} />

          <Img src={imgSrc[0][0][0]} txt={imgSrc[0][0][1]} />
          <Img src={imgSrc[0][1][0]} txt={imgSrc[0][1][1]} />
          <Img src={imgSrc[0][2][0]} txt={imgSrc[0][2][1]} />
          <Img src={imgSrc[0][3][0]} txt={imgSrc[0][3][1]} />
          <Img src={imgSrc[0][4][0]} txt={imgSrc[0][4][1]} />
          <Img src={imgSrc[0][5][0]} txt={imgSrc[0][5][1]} />
          <Img src={imgSrc[0][6][0]} txt={imgSrc[0][6][1]} />
          <Img src={imgSrc[0][7][0]} txt={imgSrc[0][7][1]} />
          <Img src={imgSrc[0][8][0]} txt={imgSrc[0][8][1]} />
          <Img src={imgSrc[0][9][0]} txt={imgSrc[0][9][1]} />
          <Img src={imgSrc[0][10][0]} txt={imgSrc[0][10][1]} />
          <Img src={imgSrc[0][11][0]} txt={imgSrc[0][11][1]} />
        </div>
      </div>
      <div className="imageContainerBottom">
        <div className="strip" id={imgBottom}>
          <Img src={imgSrc[1][0][0]} txt={imgSrc[1][0][1]} />
          <Img src={imgSrc[1][1][0]} txt={imgSrc[1][1][1]} />
          <Img src={imgSrc[1][2][0]} txt={imgSrc[1][2][1]} />
          <Img src={imgSrc[1][3][0]} txt={imgSrc[1][3][1]} />
          <Img src={imgSrc[1][4][0]} txt={imgSrc[1][4][1]} />
          <Img src={imgSrc[1][5][0]} txt={imgSrc[1][5][1]} />
          <Img src={imgSrc[1][6][0]} txt={imgSrc[1][6][1]} />
          <Img src={imgSrc[1][7][0]} txt={imgSrc[1][7][1]} />
          <Img src={imgSrc[1][8][0]} txt={imgSrc[1][8][1]} />
          <Img src={imgSrc[1][9][0]} txt={imgSrc[1][9][1]} />
          <Img src={imgSrc[1][10][0]} txt={imgSrc[1][10][1]} />
          <Img src={imgSrc[1][11][0]} txt={imgSrc[1][11][1]} />

          <Img src={imgSrc[1][0][0]} txt={imgSrc[1][0][1]} />
          <Img src={imgSrc[1][1][0]} txt={imgSrc[1][1][1]} />
          <Img src={imgSrc[1][2][0]} txt={imgSrc[1][2][1]} />
          <Img src={imgSrc[1][3][0]} txt={imgSrc[1][3][1]} />
          <Img src={imgSrc[1][4][0]} txt={imgSrc[1][4][1]} />
          <Img src={imgSrc[1][5][0]} txt={imgSrc[1][5][1]} />
          <Img src={imgSrc[1][6][0]} txt={imgSrc[1][6][1]} />
          <Img src={imgSrc[1][7][0]} txt={imgSrc[1][7][1]} />
          <Img src={imgSrc[1][8][0]} txt={imgSrc[1][8][1]} />
          <Img src={imgSrc[1][9][0]} txt={imgSrc[1][9][1]} />
          <Img src={imgSrc[1][10][0]} txt={imgSrc[1][10][1]} />
          <Img src={imgSrc[1][11][0]} txt={imgSrc[1][11][1]} />
        </div>
      </div>
    </div>
  )
}