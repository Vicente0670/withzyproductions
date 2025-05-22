import "./footer.css";
import Link from "next/link";

export default function Footer() {

  const quote = [
    "Where Moments Become Memories.",
    "This is something I said. Believe me please.",
    "Your bread and butter are the shutter speed, aperture, and ISO.",
    "What is this?",
    "That ain't me.",
    "Are you sure this is going to work?",
    "Curly fries are not my jam (I'm lying.)",
    "Look at Mr. Boliminary. So... thrilling in his existence.",
  ];

  const key = Math.floor(Math.random() * quote.length);

  return (
    <footer className="footer" role="contentinfo">
      <div className="logoContainer">
        <div className="logoWrapper">
          <div className="logo"/>
          <Link href="/">With <span>Zy</span> Productions</Link>
        </div>
      </div>
      <div className="sitemapContainer">
        <div className="sitemapWrapper">
          <div className="mainMap">
            <p>Main Site Map</p>
            <Link href="/">Main Page</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Rates</Link>
          </div>
          <div className="portfolioMap">
            <p>Portfolio Site Map</p>
            <Link href="/">Gallery</Link>
            <Link href="/">Resume</Link>
            <Link href="/">On Set With Zy</Link>
            <Link href="/">Shoots With Zy</Link>
            <Link href="/">Talks With Zy</Link>
          </div>
        </div>
      </div>
      <div className="quoteContainer">
        <div className="quoteWrapper">
          <p className="quote">"{quote[key]}"</p>
          <p className="author">- Zyshonne Harris</p>
        </div>
      </div>
      <div className="authorContainer">
        <div className="message">
          <p>WithZyProductions.com</p>
          <p>Made with care by <Link href="https://vicente0670.com/" title="Vicente0670's website."><span>Vicente0670</span></Link></p>
        </div>
      </div>
      <div className="socialsContainer">
        <Link href="/" id="link" className="instagram"></Link>
        <Link href="/" id="link" className="spotify"></Link>
        <Link href="/" id="link" className="email"></Link>
        <Link href="/" id="link" className="phone"></Link>
      </div>
    </footer>
  )
}