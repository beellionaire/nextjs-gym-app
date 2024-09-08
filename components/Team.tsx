"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainers = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaInstagram, href: "https://www.instagram.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia",
    role: "Body Builder Coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
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
          Our Trainers
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
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
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

        {/* Button See all trainers */}
        <motion.div variants={fadeIn("up", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once:false, amount:0.2 }}>
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
