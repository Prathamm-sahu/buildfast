import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface GalleryProps {}

const Gallery: FC<GalleryProps> = ({}) => {
  return (
    <div className="container mx-auto px-14">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/i2.jpg"
              alt={`Gallery Image`}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i1.jpg"
              alt={`Gallery Image`}
              width={800}
              height={150}
              className="rounded-lg col-span-2 h-56"
            />
            <Image
              src="/i5.jpg"
              alt={`Gallery Image`}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i5.jpg"
              alt={`Gallery Image`}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i2.jpg"
              alt={`Gallery Image`}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i1.jpg"
              alt={`Gallery Image`}
              width={800}
              height={300}
              className="rounded-lg col-span-2 h-56"
            />
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="rounded-full bg-transparent hover:bg-transparent border-[#4A321D] h-8"
            >
              <Link href={"/gallery"}>
                VIEW ALL →
              </Link>
             
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
