"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/styles/globals.css';

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
// import { Image } from '@nextui-org/image';

const slides = [
    '/img/Fotos Minga 2/trenzaestudio-4.webp',
    '/img/Fotos Minga 2/trenzaestudio-5.webp',
    '/img/Fotos Minga 2/trenzaestudio-6.webp',
    '/img/Fotos Minga 2/trenzaestudio-11.webp',
    '/img/Fotos Minga 2/trenzaestudio-15.webp',
    '/img/Fotos Minga 2/Fotos Minga 2022 Pan de Azucar-15.webp',
    '/img/Fotos Minga 2/Fotos Minga 2022 Pan de Azucar-19.webp',
    '/img/Fotos Minga 2/Fotos Minga 2022 Pan de Azucar-20.webp',
    '/img/Fotos Minga 2/Fotos Minga 2022 Pan de Azucar.webp',
    '/img/Fotos Minga/Fotografías Oficiales_-9.webp',
    '/img/Fotos Minga/Fotografías Oficiales_-14.webp',
    '/img/Fotos Minga/Fotografías Oficiales_-17.webp',
    '/img/Fotos Minga/Fotografías Oficiales_-22.webp',
];
interface GallerySwiperProps {
    effectCoverflow?: boolean;
    pagination?: boolean;
    navigation?: boolean;
    autoplay?: boolean;
    images: string[];
}

export default function GallerySwiper() {
    return (
        <>
            <Swiper
                style={{
                    //@ts-ignore
                    '--swiper-navigation-size': '30px',
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff'
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image src={slide} alt='Fotos de la galería' width={1920} height={1080} className='w-full h-[400px] md:h-screen object-fill object-center' priority={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}