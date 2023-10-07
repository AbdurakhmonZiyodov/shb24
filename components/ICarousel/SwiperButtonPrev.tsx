import { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";


interface SwiperButtonPrevProps {
  children:ReactNode;
  className?:string;
}

export const SwiperButtonPrev:FC<SwiperButtonPrevProps> = ({ children, className }) => {
  const swiper = useSwiper();
  return <button className={className} onClick={() => swiper.slidePrev()}>{children}</button>;
};
