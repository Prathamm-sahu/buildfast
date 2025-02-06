import { FC } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

interface GalleryProps {
  
}

const Gallery: FC<GalleryProps> = ({}) => {
  return (
    <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Image
                key={i}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZkrlUmsrB4ul8PH4uF7e5BO5byHlT.png"
                alt={`Gallery Image ${i}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="link">VIEW ALL →</Button>
          </div>
        </div>
      </section>
  )
}

export default Gallery