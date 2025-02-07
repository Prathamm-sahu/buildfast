import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="">
      <section className="relative h-screen px-14">
        <Image
          src="/i4.jpg"
          alt="Campus View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-14 pb-32">
          <h1 className="text-white text-6xl font-serif mb-4">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Mauris ipsum sed tincidunt
            vel.
          </p>
          <div className="flex justify-end">
            <Button className=" w-36 bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
              RSVP
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-2 mt-8">
              <button className="w-3 h-3 rounded-full bg-white" />
              <button className="w-3 h-3 rounded-full bg-white/50" />
              <button className="w-3 h-3 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
