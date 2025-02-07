import { FC } from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section className="py-24 container mx-auto px-14">
      <h2 className="text-5xl font-serif mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/logo.png"
              alt="ISS Logo"
              width={420}
              height={300}
              className="mb-8"
            />
            <blockquote className="text-3xl">
            &quot;Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit&quot;
            </blockquote>
          </div>
          <div>
            <h3 className="text-2xl text-[#2C1810] mb-4 font-semibold">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="text-[#23120b] font-medium mb-8 ">
              Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus
              at. Quisque eros bibendum faucibus morbi velit. Porta morbi tellus cras ac pulvinar aliquam. Consequat
              quis arcu mattis nisi consectetur. Sed ut et nibh magna scelerisque cras.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/i3.jpg" alt="Student Activity 1" width={300} height={200} className="rounded-lg" />
              <Image src="/i7.jpg" alt="Student Activity 2" width={300} height={200} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection