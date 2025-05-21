import "./footer.css";
import Link from "next/link";

export default function Footer() {

  const quote = [
    "Where Moments Become Memories.",
    "This is something I said. Believe me please.",
    "Your bread and butter are the shutter speed, aperture, and ISO.",
    "What is this?",
    "That ain't me.",
  ];

  const key = Math.floor(Math.random() * quote.length);

  return (
    <footer className="footer" role="contentinfo">
      <div className="logoContainer">
        <div className="logo"/>
        <Link href="/">With <span>Zy</span> Productions</Link>
      </div>
      <div className="quoteContainer">
        <p className="quote">"{quote[key]}"</p>
        <p className="author">- Zyshonne Harris</p>
      </div>
      <div className="authorContainer">
        <div className="">

        </div>
      </div>
      <div className="socialsContainer">

      </div>
    </footer>
  )
}