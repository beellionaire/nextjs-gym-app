"use client";

import Image from "next/image";
import Link from "next/link";

const brandData = [
  {
    src: "/assets/img/brands/brand-1.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-2.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-3.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-4.png",
    href: "",
  },
  {
    src: "/assets/img/brands/brand-5.png",
    href: "",
  },
];

import { motion } from "framer-motion";

// Variants
const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-5 py-8"
        >
          {brandData.map((item, index) => {
            return (
              <motion.div variants={brandItem} key={index}>
                <Link className="group" href={item.href}>
                  <Image
                    className="opacity-70 group-hover:opacity-100 transition-all mx-auto"
                    src={item.src}
                    alt=""
                    height={106}
                    width={204}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
