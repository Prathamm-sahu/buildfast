import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Globe, Search } from "lucide-react";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f5e6d3]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={""} alt="sdfa" />
          <span>ISS Club</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href={"/"} className="hover:text-gray-600">HOME</Link>
          <Link href={"/events"} className="hover:text-gray-600">EVENTS</Link>
          <Link href={"/gallery"} className="hover:text-gray-600">GALLERY</Link>
          <Link href={"/games"} className="hover:text-gray-600">GAMES</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-13">
            <span className="p-2">EN</span>
          </Button>
          <Button className="bg-[#1a1a1a] text-white hover:bg-[#333]">APPLY NOW</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
