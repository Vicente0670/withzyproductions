import "./headshot.css";

export default function Headshot(siteName: { page: string }) {

  const dialogBox = "dialogBox";

  if (typeof window !== undefined) {
    console.info(siteName);
  }

  return (
    <>
      <dialog id={dialogBox} className="dialogBox" aria-label="Harris's Headshot">
        <div className="backgroundBox box"/>
        <div className="portraitBox box">

        </div>
        <div className="textBox box">
          <div className="textWrapper">
            <p className="text">i am writing to text the extent of the textbox: this is pretty cool</p>
          </div>
          <div className="speechAttachment"/>
        </div>
      </dialog>
    </>
  )

}