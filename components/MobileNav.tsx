"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "beranda", target: "home", offset: -100 },
  { name: "tentang kami", target: "about", offset: -80 },
  { name: "panduan", target: "class", offset: -80 },
  { name: "ceo", target: "team", offset: 0 },
  { name: "harga paket", target: "prices", offset: -40 },
  { name: "testimoni", target: "testimonial", offset: 0 },
  { name: "artikel", target: "blog", offset: 0 },
  { name: "hubungi kami", target: "contact", offset: 0 },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={`${!isMobile && "active"}`}
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
