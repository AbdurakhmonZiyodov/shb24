'use client';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
  
  import Image from 'next/image';

import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperButtonNext } from './SwiperButtonNext';


export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}


interface CarouselProps {
  products:Product[]
}

const Carousel:FC<CarouselProps> = ({products = []}) =>  {

  return (
    <div>
      <p>it will be carusel here</p>
      <br />
      <br />

     <Swiper
      loop
      modules={[ Navigation, Pagination, A11y, Autoplay]}
      autoplay
      grabCursor
      breakpoints={{
        480:{slidesPerView:2},
        740:{slidesPerView:3},
        1275:{slidesPerView:4}
      }}
      className='relative'
      >
        <SwiperButtonNext>Slide</SwiperButtonNext>
        {
          products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='bg-red-200 flex flex-1 justify-center items-center'>
                <div className='border-2 border-blue-500 rounded-lg overflow-hidden w-[200px] h-[300px] flex justify-center items-center relative'>
                    <p className='text-base text-slate-600 absolute top-2'>{item.title}</p>
                    <Image 
                    src={item.image}
                    width={150}
                    height={150}
                    alt={item.title}
                  />
                </div>
                </div>
            </SwiperSlide>
          ))
        }


      </Swiper>
    </div>
  )
}

export default Carousel;