"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '@/styles/globals.css';

// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';
import Image from 'next/image';

const slides = [
    '/img/background/bg1.webp',
    '/img/background/bg2.webp',
    '/img/background/bg3.webp',
    '/img/background/bg4.webp',
    '/img/background/bg5.webp',
];


export default function BackgroundSwipe() {
    return (
        <>
            <Swiper
                // grabCursor={true}
                // centeredSlides={true}
                slidesPerView={'auto'}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCreative]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image src={slide} alt='Fotos de la galería' width={1920} height={1080} className='w-full h-screen object-cover brightness-75' priority={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}