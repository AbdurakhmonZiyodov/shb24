'use client';

import { AdvertisementCarouselProps } from "@/types"
import { FC } from "react"
import Image from "next/image";
import {BsChevronRight , BsChevronLeft} from 'react-icons/bs'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import { map } from "lodash";
import { SwiperButtonNext } from "../SwiperButtonNext";
import { SwiperButtonPrev } from "../SwiperButtonPrev";

const AdvertisementCarousel:FC<AdvertisementCarouselProps> = ({data}) => {
    return (
             <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                autoplay
                loop
                grabCursor
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    <SwiperButtonPrev className="adswiper__btn group">
                        <BsChevronLeft className=" adswiper__btn-icon"/>
                    </SwiperButtonPrev>

                    <SwiperButtonNext className="adswiper__btn right-0 group">
                        <BsChevronRight className="adswiper__btn-icon"/>
                    </SwiperButtonNext>
                {
                    map(data, (item) => (
                        <SwiperSlide key={item.id}>
                            <div className="adswiper__item">
                                <Image 
                                    src={item.imgUrl}
                                     fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                   className="object-contain"
                                    alt={`shb24 bg-slider image - ${item.id + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    )
}

export default AdvertisementCarousel