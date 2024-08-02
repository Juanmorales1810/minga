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

const slides = [
    '/img/gallery/Arquitectura contemporánea en casa de Coquimbo-compress.webp',
    '/img/gallery/Arquitectura moderna en vivienda de Coquimbo-compress.webp',
    '/img/gallery/Casas prefabricadas con diseño único en La Serena-compress.webp',
    '/img/gallery/Construcción de casas modernas en La Serena-compress.webp',
    '/img/gallery/Construcción de casas prefabricadas en La Serena-compress.webp',
    '/img/gallery/Detalles arquitectónicos en hogar de La Serena-compress.webp',
    '/img/gallery/Detalles arquitectónicos únicos en Matanzas Chile-compress.webp',
    '/img/gallery/Detalles elegantes en casa moderna de La Serena-compress.webp',
    '/img/gallery/Diseño de interiores en casa prefabricada-compress.webp',
    '/img/gallery/Diseño personalizado en vivienda de Matanzas Chile-compress.webp',
    '/img/gallery/Espacio exterior en vivienda prefabricada de Coquimbo-compress.webp',
    '/img/gallery/Fachada elegante de casa moderna en La Serena-compress.webp',
    '/img/gallery/Fachada ventilada en hogar de Coquimbo-compress.webp',
    '/img/gallery/Hogar acogedor en Coquimbo-compress.webp',
    '/img/gallery/Hogar acogedor y elegante en Playa Grande Tongoy-compress.webp',
    '/img/gallery/Hogar con acabados de alta calidad en La Serena-compress.webp',
    '/img/gallery/Interiores llenos de alma en hogar de Coquimbo-compress.webp',
    '/img/gallery/Interiores sofisticados en vivienda de Coquimbo-compress.webp',
    '/img/gallery/Interiores sofisticados en vivienda prefabricada-compress.webp',
    '/img/gallery/nteriores personalizados en casa de La Serena-compress.webp',
    '/img/gallery/Sala de estar con diseño y construcción moderna-compress.webp',
    '/img/gallery/Sala de estar en casa prefabricada de La Serena-compress.webp',
    '/img/gallery/Terraza con diseño funcional en hogar prefabricado-compress.webp',
    '/img/gallery/Terraza con vistas al mar en Playa Grande Tongoy-compress.webp',
];

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
                        <Image src={slide} alt='Fotos de la galería' width={1920} height={1080} className='w-full h-[300px] md:h-screen object-cover object-center' priority={true} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}