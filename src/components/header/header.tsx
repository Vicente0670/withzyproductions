import header from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <nav className={header.headerBase}>
      <a href="/" className={header.logo}/>
      <div className={header.linkContainer}>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Rates</Link>
      </div>
      <div className={header.headerBackground}></div>
    </nav>
  )
}