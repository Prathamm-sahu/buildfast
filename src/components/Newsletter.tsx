import { FC } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface NewsletterProps {
  
}

const Newsletter: FC<NewsletterProps> = ({}) => {
  return (
    <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4DYMmrtDSBQY5hVKnwxLqISE92wZqU.png"
          alt="Newsletter Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-serif mb-2">Newsletter</h2>
          <h3 className="text-3xl font-serif mb-4">Stay Updated with ISS</h3>
          <p className="mb-8 text-white/90">Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate.</p>
          <div className="flex w-full max-w-md gap-4 px-4">
            <Input type="email" placeholder="Email" className="bg-white" />
            <Button className="bg-[#4A321D] text-white hover:bg-[#4A321D]/90">Subscribe</Button>
          </div>
        </div>
      </section>
  )
}

export default Newsletter