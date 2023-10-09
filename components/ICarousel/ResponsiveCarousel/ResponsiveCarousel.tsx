'use client';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// import Swiper core and required modules
import { A11y, Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import { BaseTitle, ProductCard } from '@/components';
import { SwiperButtonNext } from "../SwiperButtonNext";
import { SwiperButtonPrev } from "../SwiperButtonPrev";
import { FC } from 'react';

interface ResponsiveCarouselProps {
    title: string;
}

const ResponsiveCarousel: FC<ResponsiveCarouselProps> = ({ title }) => {


    return (
        <section className='px-3 py-5'>
            <BaseTitle className='pb-0 text-my-red'>{title}</BaseTitle>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                autoplay
                loop
                grabCursor
                breakpoints={{
                    480: { slidesPerView: 2 },
                    740: { slidesPerView: 3 },
                    1275: { slidesPerView: 5 }
                }}
                pagination={{ clickable: true }}
            >
                <SwiperButtonPrev className="adswiper__btn group">
                    <BsChevronLeft className=" adswiper__btn-icon" />
                </SwiperButtonPrev>

                <SwiperButtonNext className="adswiper__btn right-0 group">
                    <BsChevronRight className="adswiper__btn-icon" />
                </SwiperButtonNext>

                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper >
        </section>
    )
}

export default ResponsiveCarousel