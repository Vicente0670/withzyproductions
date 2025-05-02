import header from "./header.module.css";
import Link from "next/link";
import MenuFunction from "./menuFunction";

export default function Header() {
  return (
    <nav className={header.headerBase}>
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
      <div className={header.headerBackground}></div>
    </nav>
  )
}