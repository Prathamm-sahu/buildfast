import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#f5e6d3] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image src="/logo.png" alt="ISS Club" width={150} height={60} />
            </div>
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
          <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-300">
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-600">
                Instagram
              </Link>
              <Link href="#" className="hover:text-gray-600">
                Youtube
              </Link>
              <Link href="#" className="hover:text-gray-600">
                X
              </Link>
              <Link href="#" className="hover:text-gray-600">
                Tiktok
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-600">
                Privacy & Policy
              </Link>
              <Link href="#" className="hover:text-gray-600">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer