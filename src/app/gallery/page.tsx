import { FC } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  const images = Array(24).fill({
    src: "/i1.jpg",
    alt: "Event photo showing people at a formal dining event",
  })

  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <div className="max-w-[1450px] mx-auto px-4 py-24">
        <h1 className="text-3xl font-serif border-b border-black pb-4 mb-8">Event Name</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page