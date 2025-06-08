import Image from "next/image";

export default function Img(source: {src: string, txt: string}) {

  const metrics = {
    width: 128,
    height: 72
  }
  
  return (
    <Image
      src={source.src}
      alt={source.txt}
      height={metrics.height}
      width={metrics.width}
      className="img"
      priority={false}
    />
  )
}