"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  const [email, setEmail] = useState("");
  return (
    <div className="container mx-auto px-14 rounded-lg">
      <section className="relative h-[500px] overflow-hidden rounded-lg">
        <Image
          src="/newsletter.jpg"
          alt="Newsletter Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-serif mb-2">Newsletter</h2>
          <h3 className="text-3xl font-serif mb-4">Stay Updated with ISS</h3>
          <p className="mb-8 text-white/90">
            Lorem ipsum dolor sit amet consectetur. Et viverra ut odio
            vulputate.
          </p>
          <div className="flex w-full max-w-md px-4">
            <Input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-[#4A321D] rounded-xl w-96 rounded-r-none"
            />
            <Button
              onClick={() => setEmail("")}
              className="bg-[#4A321D] text-white hover:bg-[#4A321D]/90 w-48 rounded-xl rounded-l-none "
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
