"use client"

// I wish I didn't have to do this. There was no other way...

import dynamic from "next/dynamic";
const ImageHolder = dynamic(
  () => import("./imageContainer"),
  { ssr: false }
)

export default function imageClientPassthrough() {
  return <ImageHolder/>
}