import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface EventsProps {}

const Events: FC<EventsProps> = ({}) => {
  return (
    <section className="py-24 bg-[#f5e6d3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#f5e6d3] rounded-lg overflow-hidden shadow"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H7AFf0eTpN4aoyPgz96veiwKD6R3x5.png"
                alt="Event"
                width={400}
                height={250}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2">Et viverra odio vulputate.</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Et viverra ut odio
                  vulputate.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold">28</div>
                  <div className="text-gray-600">
                    <div>Sept</div>
                    <div>2025</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Conference Room, Berkley
                  <br />
                  8:00 AM - 12:00 PM
                </div>
                <Button variant="outline" className="w-full">
                  RSVP
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="link">SEE ALL EVENTS →</Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
