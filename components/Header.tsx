"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    // detect scroll
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleScroll);

    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${
        headerActive ? "h-[100px]" : "h-[150px]"
      } w-full fixed bg-primary-200 h-[120px] transition-all max-w-[1920px] z-50 top-0`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/home">
          <Image src={`/assets/img/logo.png`} width={117} height={55} alt="" />
        </Link>

        {/* Mobile Navbar => hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} 
            ${
              openNav
                ? "max-h-max pt-9 pb-10 border-t border-white/10"
                : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
            }
            flex flex-col text-center fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium gap-8 xl:hidden text-white transition-all`}
        />

        {/* Desktop Navbar => hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex text-base capitalize font-medium transition-all" />

        {/* Hide/Open menu button */}
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base font-medium capitalize">login</button>
            <button className="hover:text-accent transition-all text-base font-medium capitalize">register</button>
          </div>
          <button
            className="text-white xl:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <MdMenu className="text-4xl " />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
