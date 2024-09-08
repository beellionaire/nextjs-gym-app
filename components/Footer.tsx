"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

// vairants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                alt=""
                width={117}
                height={55}
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
              provident?
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+62 812-3456-7890</span>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>beelthygymhub@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent Blog Post</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
            {/* post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent Blog Post</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
            {/* post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Lorem ipsum dolor sit</h5>
                <em className="text-gray-400 text-[12px]">Lorem, ipsum.</em>
              </Link>
            </div>
          </motion.div>
          {/* contact */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                
                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/30 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Beelthy Gym Hub</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
