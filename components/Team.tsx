"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainers = [
  {
    image: "/assets/img/trainers/nabeel.png",
    name: "NABEEL",
    role: "Developer",
    description: "",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/syukron.jpeg",
    name: "SYUKRON",
    role: "Engineer",
    description: "",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/steven.png",
    name: "DR. STEVEN",
    role: "Content Creator",
    description: " ",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/syahrul.jpeg",
    name: "SYAHRUL",
    role: "Content Creator",
    description: " ",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <motion.h2
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center h2 mb-6"
        >
          CEO
        </motion.h2>

        {/* Trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainers.map((trainer, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="relative w-[278px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} alt="" fill />
                </div>
                {/* Name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* Role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* Description */}
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* Social */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
