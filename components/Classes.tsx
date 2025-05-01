"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "Internet",
    img: "/assets/img/classes/internet.jpg",
    description: "Koneksi yang handal adalah kunci sukses di era digital.",
  },
  {
    name: "Business",
    img: "/assets/img/classes/business.jpg",
    description:
      "Paket dengan bandwidth tinggi dan layanan customer support 24/7 untuk mendukung operasional tanpa henti. ",
  },
  {
    name: "6G Connection",
    img: "/assets/img/classes/connection.jpg",
    description: "Inilah era baru konektivitas dengan 6G.",
  },
  {
    name: "Gaming and Streaming",
    img: "/assets/img/classes/gaming.jpg",
    description:
      "Rasakan pengalaman gaming tanpa gangguan dengan koneksi cepat. Nikmati film, musik, dan konten favorit Anda dengan kualitas terbaik.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >
              {/* Overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image alt="" src={item.img} fill className="object-cover" />

              {/* Text and Button */}
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Selengkapnya"
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
