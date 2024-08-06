import { InstagramLogo, MailLogo, MapLogo, WhatsAppLogo } from "@/components/icons";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import GallerySwiper from "@/components/gallerySwiper";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Home() {
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
  return (
    <section className="flex flex-col items-center w-full justify-center min-h-[calc(100vh-100px)]">
      <section className="relative h-auto min-h-screen w-full">
        <div className="flex justify-center items-center w-full h-screen">
          <Image src="/img/background/Portada.avif" alt="Imagen principal de Minga" width={1920} height={1080} className="w-screen h-screen object-cover object-center" priority={true} />
        </div>
        <div className="flex flex-col justify-around items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0 md:pr-40">
          <Image src="/img/logo/MINGA LOGO NEGRO PNG.png" alt="logo" width={200} height={100} className="object-cover object-center" priority={true} />
          <div className="flex flex-col items-end md:w-1/3">
            <h1 className="z-20 pt-8 pl-6 text-xl font-bold text-right md:text-4xl">Bienvenido a Minga</h1>
            <p className="text-right">
              Diseño y Construcción
              <br />
              Desde la IV Región. Chile.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-6 w-full h-screen md:px-0">
        <div className="flex flex-col justify-center items-end w-full gap-4 md:flex-row-reverse md:justify-between md:items-center md:px-40">
          <TextGenerateEffect className="text-white text-right text-xl text-pretty font-bold pb-6 sm:text-2xl md:text-4xl" words="Proyectos de alto estándar con identidad única" />
          <Button variant="shadow" endContent={<WhatsAppLogo className="w-6 h-6 fill-white" />} as={Link} href="https://wa.me/+56940006843" className="mt-4 font-bold w-72 bg-zinc-950 md:mt-0">Diseña tu hogar con Minga hoy</Button>
        </div>
      </section>
      <section className="w-full md:h-screen mx-auto">
        <GallerySwiper />
      </section>

      <section className="flex justify-center items-center w-full px-6 h-screen md:px-0">
        <div className="flex flex-col justify-center items-end w-full pl-28 md:px-40">
          <TextGenerateEffect className="text-white text-right text-xl text-pretty font-bold sm:text-2xl md:text-4xl" words="Hacemos énfasis en la selección de materiales y" />
          <TextGenerateEffect delay={1000} className="text-white text-right text-xl text-pretty font-bold sm:text-2xl md:text-4xl" words="la calidad del detalle constructivo" />
        </div>
      </section>
      <section className="relative flex items-end w-full h-screen">
        <Image src="/img/background/Foto3-compress.webp" alt="Imagen minga de llamado a la acción" width={1920} height={1080} className="w-screen h-screen object-cover object-center brightness-75" />
        <div className="flex flex-col justify-center items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0 md:pr-40">
          <div className="flex flex-col items-end md:w-1/2">
            <TextGenerateEffect className="text-white text-right text-xl font-bold text-nowrap sm:text-2xl md:text-4xl" words="Nos preocupamos de la selección" />
            <TextGenerateEffect delay={1000} className="text-white text-right text-xl text-pretty font-bold sm:text-2xl md:text-4xl" words="de materiales y de cada detalle constructivo." />
            <TextGenerateEffect delay={2400} className="text-white text-right text-base text-pretty font-bold sm:text-xl md:text-2xl" words="Nada nos inspira más  que construir un sueño juntos." />
          </div>

        </div>
      </section>
      <section className="relative flex items-start w-full h-screen">
        <Image src="/img/background/Foto4-compress.webp" alt="logo" width={1920} height={1080} className="w-screen h-screen object-cover object-center" />
        <div className="flex flex-col justify-center items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0 md:flex-row-reverse md:justify-between md:items-center md:px-40">
          <div className="flex flex-col items-end md:w-1/2">
            <TextGenerateEffect className="text-white text-right text-xl text-pretty font-bold pb-6 sm:text-2xl md:text-4xl" words="Diseña tu hogar con Minga hoy" />
            <ul className="flex flex-wrap items-center mt-3 gap-6">
              <li className="p-2 rounded-full bg-black">
                <Tooltip content="Hablanos al WhatsApp">
                  <a href="https://wa.me/+56940006843" className="">
                    <WhatsAppLogo className="w-8 h-8 fill-zinc-50 hover:fill-zinc-400" />
                  </a>
                </Tooltip>
              </li>
              <li className="p-2 rounded-full bg-black">
                <Tooltip placement="bottom" content="Conoce nuestro Instagram">
                  <a href="https://www.instagram.com/ccminga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="">
                    <InstagramLogo className="w-8 h-8 fill-zinc-50 hover:fill-zinc-400" />
                  </a>
                </Tooltip>
              </li>
              <li className="p-2 rounded-full bg-black">
                <Tooltip content="Abrir ubicación en GoogleMaps">
                  <a href="https://www.google.com/maps/place/CASAS+MINGA/@-30.0271756,-71.2545806,15z/data=!4m6!3m5!1s0x96903123822d4609:0xb14719ff38359ff3!8m2!3d-30.0271756!4d-71.2545806!16s%2Fg%2F11r3djlkg_?entry=ttu" className="">
                    <MapLogo className="w-8 h-8 stroke-zinc-50 hover:stroke-zinc-400 fill-none" />
                  </a>
                </Tooltip>
              </li>
              <li className="p-2 rounded-full bg-black">
                <Tooltip placement="bottom" content="Envíanos un correo">
                  <a href="mailTo:Contacto@ccminga.cl" className="">
                    <MailLogo className="w-8 h-8 stroke-zinc-50 hover:stroke-zinc-400 fill-none" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          <Button variant="shadow" endContent={<WhatsAppLogo className="w-6 h-6 fill-white" />} as={Link} href="https://wa.me/+56940006843" className="mt-4 font-bold w-72 bg-zinc-950 md:mt-0">Hace tu consulta con nosotros</Button>
        </div>
        {/* <div className="flex flex-col justify-around items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0">
          <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-black/70 backdrop-blur-sm dark:border-zinc-700/30">
            <h4 className="mb-2 text-2xl font-bold text-zinc-50 sm:text-3xl">Diseña tu hogar con Minga hoy</h4>
            <p className="mb-5 text-md text-zinc-50 sm:text-lg">Detalles claros sobre cómo contactar a Minga por WhatsApp, correo electrónico y a través de un formulario de contacto en línea.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Button
                as={Link}
                href="https://wa.me/+56940006843"
                className="w-full sm:w-auto bg-green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-700"
                size="lg"
                startContent={<WhatsAppLogo className="w-7 h-7 fill-white" />}
              >
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs">Contáctanos en</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">WhatsApp</div>
                </div>
              </Button>
              <Button
                as={Link}
                href="https://www.linkedin.com/company/casas-minga-spa/?originalSubdomain=cl"
                className="w-full sm:w-auto bg-green hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-700"
                size="lg"
                startContent={<LinkedIn className="w-7 h-7 fill-white" />}
              >
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs">Contáctanos en</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">LinkedIn</div>
                </div>
              </Button>
            </div>
          </div>
        </div> */}
      </section>
    </section>
  );
}
