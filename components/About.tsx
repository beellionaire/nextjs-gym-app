"use client";

import { IoIosPricetag } from "react-icons/io";
import { MdNetworkCheck } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import Achievements from "./Achievements";

const featured = [
  {
    icon: <RiCustomerService2Line />,
    title: "Layanan Responsif",
    subtitle:
      "Tim kami siap membantu Anda dengan proses pemasangan yang cepat.",
  },
  {
    icon: <IoIosPricetag />,
    title: "Harga terjangkau",
    subtitle:
      "Dapatkan layanan berkualitas tinggi dengan biaya yang ramah di kantong.",
  },
  {
    icon: <MdNetworkCheck />,
    title: "Koneksi terbaik",
    subtitle:
      "Nikmati pengalaman internet tanpa hambatan, baik untuk streaming, gaming, atau bekerja dari rumah",
  },
];

const About = () => {
  return (
    <section className="bg-slate-100 pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h2 text-center"
          >
            Tentang SAML-Fi
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-center"
          >
            SAML-Fi hadir untuk memberikan pengalaman internet tanpa hambatan
            bagi rumah dan bisnis Anda. Dengan teknologi modern dan jaringan
            mesh yang cerdas, kami memastikan setiap sudut ruangan Anda tetap
            terhubung tanpa lag.
          </motion.p>
        </div>
        {/* Featured Items */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className="text-4xl bg-primary-300 text-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Achievement */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
