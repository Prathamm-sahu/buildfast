import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface EventsProps {}

const Events: FC<EventsProps> = ({}) => {
  return (
    <div className="container mx-auto ">
      <section className="py-24 bg-[#eecc9e]">
        <div className="container mx-auto px-14">
          <h2 className="text-5xl font-serif mb-12 text-[#392615]">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#f5e6d3] rounded-lg overflow-hidden shadow"
              >
                <Image
                  src="/i6.jpg"
                  alt="Event"
                  width={400}
                  height={250}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#4A321D] font-medium">Et viverra odio vulputate.</h3>
                  <p className="text-[#4A321D] mb-4">
                    Lorem ipsum dolor sit amet consectetur. Et viverra ut odio
                    vulputate.
                  </p>
                  <div className="flex gap-10 items-center">
                    <div className="flex items-center gap-1 mb-4">
                      <div className="text-6xl font-">28</div>
                      <div className="text-[#4A321D]">
                        <div className="h-4">Sept</div>
                        <div className="h-4">emb</div>
                        <div className="h-4">er</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-[#4A321D]  mb-4 flex gap-2">
                        <MapPin  />
                        <span>Conference Room, Berkley</span>
                      </div>
                      <div className="flex gap-2 text-[#4A321D]">
                        <Clock  />
                        <span className="text-sm">8:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-md w-full bg-transparent hover:bg-transparent border-[#4A321D] text-[#4A321D]"
                  >
                    RSVP
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="rounded-full bg-transparent hover:bg-transparent border-[#4A321D] h-8"
              
            >
              <Link href={"/events"}>
              SEE ALL EVENTS →
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
