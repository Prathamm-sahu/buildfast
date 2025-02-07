import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Globe, Search } from "lucide-react";

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <nav className="fixed top-0 w-[1400px] rounded-lg z-50 bg-[#f5e6d3] backdrop-blur-sm mt-5 shadow-3xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} className="bg-transparent" />
          <h2 className="text-lg font-semibold">ISS Club</h2>
        </Link>

        <div className="flex items-center gap-8">
          <Link href={"/"} className="hover:text-black/80">HOME</Link>
          <Link href={"/events"} className="hover:text-black/80">EVENTS</Link>
          <Link href={"/gallery"} className="hover:text-black/80">GALLERY</Link>
          <Link href={"/games"} className="hover:text-black/80">GAMES</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-black/80">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-13 hover:bg-transparent hover:text-black/80">
            <span className="p-2">EN</span>
          </Button>
          <Button variant={"ghost"}  className="text-black hover:text-black/80 hover:bg-transparent ">APPLY NOW</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
