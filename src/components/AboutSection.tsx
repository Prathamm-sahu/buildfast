import { FC } from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-8">About Us</h2>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MW6IOFGVIWc925IgSCwirWUVJLUKY8.png"
              alt="ISS Logo"
              width={300}
              height={300}
              className="mb-8"
            />
            <blockquote className="text-xl">
            Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi
            velit
            </blockquote>
          </div>
          <div>
            <h3 className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus
              at. Quisque eros bibendum faucibus morbi velit. Porta morbi tellus cras ac pulvinar aliquam. Consequat
              quis arcu mattis nisi consectetur. Sed ut et nibh magna scelerisque cras.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/placeholder.svg" alt="Student Activity 1" width={300} height={200} className="rounded-lg" />
              <Image src="/placeholder.svg" alt="Student Activity 2" width={300} height={200} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection