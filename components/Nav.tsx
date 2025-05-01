"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "beranda", target: "home", offset: -100 },
  { name: "tentang kami", target: "about", offset: -80 },
  { name: "panduan", target: "class", offset: -100 },
  { name: "ceo", target: "team", offset: 0 },
  { name: "harga paket", target: "prices", offset: -100 },
  { name: "testimoni", target: "testimonial", offset: -100 },
  { name: "artikel", target: "blog", offset: -100 },
  { name: "hubungi kami", target: "contact", offset: 0 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            key={index}
            to={link.target}
            spy
            smooth
            activeClass="active"
            className="cursor-pointer hover:text-accent transition-all"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
