import "./skipNavigation.css"
import Link from "next/link";

export default function SkipNavigation() {
  return (
    <Link href="#content" className="skipToMainButton">
      Skip to Main Content
    </Link>
  )
}