"use client";

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

const SwiperNavButtons = ({
  containerStyles,
  iconStyles,
  btnStyles,
}: {
  containerStyles: string;
  iconStyles: string;
  btnStyles: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
