import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#f5e6d3] py-16 text-[#2C1810]">
        <div className="container mx-auto px-14">
          <div className="flex justify-between mb-6">
            <div className='flex justify-center items-center text-5xl font-semibold'>
              <Image src="/logo.png" alt="ISS Club" width={125} height={60} />
              <h1>ISS Club</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-48'>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <h4 className="font-bold mb-4">Title</h4>
                <ul className="space-y-2">
                  <li>Sublink</li>
                  <li>Sublink</li>
                  <li>Sublink</li>
                </ul>
              </div>
            ))}
            </div>
          </div>
          <div className='w-full h-0 border border-amber-950'/>
          <div className="flex flex-wrap justify-between items-center pt-8">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-600  underline">
                Instagram
              </Link>
              <Link href="#" className="hover:text-gray-600 underline">
                Youtube
              </Link>
              <Link href="#" className="hover:text-gray-600 underline">
                X
              </Link>
              <Link href="#" className="hover:text-gray-600 underline">
                Tiktok
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-600 underline">
                Privacy & Policy
              </Link>
              <Link href="#" className="hover:text-gray-600 underline">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer