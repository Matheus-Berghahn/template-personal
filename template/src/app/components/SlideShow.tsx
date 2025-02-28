
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import aluno_01 from '../../../public/aluno_01.png';

type ImageType = typeof aluno_01;

const slideStyles = (isActive: boolean) => ({
  transform: isActive ? 'scale(1)' : 'scale(0.95)', 
  transition: 'transform 0.5s ease',
  opacity: isActive ? 1 : 0.9,
  filter: isActive ? 'none' : 'grayscale(100%)',
});

import { Autoplay } from 'swiper/modules';

const SlideShow = ({ images }: { images: ImageType[] }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10} 
      centeredSlides={true}
      loop={true}
      slideToClickedSlide={true}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10, 
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div className="flex justify-center items-center w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-contain rounded-lg"
                style={slideStyles(isActive)}
                layout="intrinsic" 
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
