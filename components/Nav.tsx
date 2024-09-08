"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -100 },
  { name: "team", target: "team", offset: 0 },
  { name: "prices", target: "prices", offset: -100 },
  { name: "testimonial", target: "testimonial", offset: -100 },
  { name: "blog", target: "blog", offset: -100 },
  { name: "contact", target: "contact", offset: 0 },
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
