import "./footer.css";
import Link from "next/link";

export default function Footer() {

  const quote = [
    "Where Moments Become Memories.",
    "One like no other.",
    "Focus, detail, and production are my specialty.",
  ];

  const key = Math.floor(Math.random() * quote.length);

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="beforeAndAfterContainer">
        <div className="before" />
        <div className="after" />
      </div>
      <div className="logoContainer">
        <div className="logoWrapper">
          <div className="logo"/>
          <Link href="/">With <span>ZY</span> Productions</Link>
        </div>
      </div>
      <div className="sitemapContainer">
        <div className="sitemapWrapper">
          <div className="mainMap">
            <p>Site Map</p>
            <Link href="/">Main Page</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Rates</Link>
          </div>
          <div className="portfolioMap">
            <p>Portfolio Map</p>
            <Link href="/">Highlights</Link>
            <Link href="/">Modeling/Acting</Link>
            <Link href="/">On Set With Zy</Link>
            <Link href="/">Shoots With Zy</Link>
          </div>
        </div>
      </div>
      <div className="quoteContainer">
        <p className="quote">"{quote[key]}"</p>
        <p className="author">- Zyshonne Harris</p>
      </div>
      <div className="authorContainer">
        <div className="message">
          <p>WithZyProductions.com</p>
          <p>Made with care by <Link href="https://vicente0670.com/" title="Vicente0670's website."><span>Vicente0670</span></Link></p>
        </div>
      </div>
      <div className="socialsContainer">
        <Link href="/" id="link" className="instagram" title="Instagram"></Link>
        <Link href="/" id="link" className="github" title="GitHub"></Link>
        <Link href="/" id="link" className="spotify" title="Spotify"></Link>
        <Link href="/" id="link" className="email" title="Email"></Link>
        <Link href="/" id="link" className="phone" title="Phone Number"></Link>
      </div>
    </footer>
  )
}