"use client";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import CustomButton from "./CustomButton";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Membership
const membershipData = [
  {
    title: "Basic",
    price: "100.000",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Gym Access",
      },
      {
        icon: MdClose,
        text: "Gym Plan",
      },
      {
        icon: MdClose,
        text: "Gym Tips",
      },
    ],
  },
  {
    title: "Standard",
    price: "300.000",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Gym Access",
      },
      {
        icon: FaCheck,
        text: "Gym Plan",
      },
      {
        icon: MdClose,
        text: "Gym Tips",
      },
    ],
  },
  {
    title: "Premium",
    price: "500.000",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes Membership",
      },
      {
        icon: FaCheck,
        text: "Gym Access",
      },
      {
        icon: FaCheck,
        text: "Gym Plan",
      },
      {
        icon: FaCheck,
        text: "Gym Tips",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border-b border-accent">
                <h4>{item.title}</h4>
              </div>
              {/* Benefits */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  {item.benefits.map((item, index) => {
                    return (
                      <li className="flex items-center gap-3" key={index}>
                        <item.icon className="text-accent text-lg" />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
                {/* Price */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <sup className="text-xl">IDR</sup>
                  <strong className="text-3xl">{item.price}</strong>
                  <em className="self-end text-xl"> / Month</em>
                </p>
                <CustomButton
                  containerStyles="w-[196px] h-[62px]"
                  text="Order Now"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MembershipSlider;
