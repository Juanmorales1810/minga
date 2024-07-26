import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { LinkedIn, WhatsAppLogo } from "@/components/icons";
import GallerySwiper from "@/components/gallerySwiper";
import BackgroundSwipe from "@/components/backgroundswipe";
import { TextGenerateEffect } from "@/components/text-generate-effect";

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
          <BackgroundSwipe />
        </div>
        <div className="flex flex-col justify-around items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0 md:pr-44">
          <Image radius="none" src="/img/logo/MINGA LOGO NEGRO PNG.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[150px] h-[100px]" />
          <div className="flex flex-col items-end md:w-1/3">
            <h2 className="z-20 pt-8 pl-6 text-xl font-bold text-right md:text-4xl">Viviendas diseñadas para ofrecer confort y estilo en cada rincón</h2>
            <Button variant="shadow" endContent={<WhatsAppLogo className="w-6 h-6 fill-white" />} size="md" as={Link} href="https://wa.me/+56940006843" className="mt-4 font-bold w-44 bg-zinc-950">Contactanos</Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-8 h-screen">
        <div className="flex flex-col justify-center items-end w-full max-w-3xl pl-16 gap-4 text-zinc-950">
          <h1 className="text-xl text-right">Bienvenido a Minga</h1>
          <TextGenerateEffect className="text-right text-xl text-pretty font-bold pb-6 sm:text-2xl md:text-4xl" words="En Minga, nos especializamos en el diseño y la construcción de casas únicas en entornos naturales impresionantes." />
          <TextGenerateEffect delay={3000} className="text-right text-lg text-pretty font-medium text-zinc-700 sm:text-xl md:text-2xl" words="Nuestro compromiso es brindarte un hogar que no solo sea estético y funcional sino que también armonice con el paisaje, respetando la belleza y la integridad del medio ambiente. Desde La Serena, Chile, hasta cualquier rincón del país, estamos aquí para construir el hogar de tus sueños" />
        </div>
      </section>
      <section className="relative flex items-end w-full h-screen">
        <Image radius="none" src="/img/Fotos Minga 2/trenzaestudio-19.webp" alt="logo" fallbackSrc="https://via.placeholder.com/1920x1080" className="w-screen h-screen object-cover object-center" />
        <div className="flex flex-col justify-around items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0 md:pr-44">
          <div className="flex flex-col items-end md:w-1/3">
            <p className="z-20 pt-8 text-right text-xl font-bold sm:text-2xl md:text-4xl">Construcción y diseño de casas desde la región de Coquimbo a todo Chile</p>
          </div>
          <div className="flex flex-col items-end md:w-1/3">
            <p className="z-20 pt-8 text-right text-lg text-zinc-50 sm:text-xl md:text-2xl">Explora cómo cada hogar Minga combina innovación arquitectónica con sostenibilidad ambiental.
            </p>
            <Button variant="shadow" endContent={<WhatsAppLogo className="w-6 h-6 fill-white" />} size="md" as={Link} href="https://wa.me/+56940006843" className="mt-4 font-bold w-44 bg-zinc-950">Contactanos</Button>
          </div>
        </div>

      </section>
      <section className="flex flex-col justify-center items-center w-full text-zinc-950">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-col justify-center items-center w-full px-8 h-screen">
            <Image className="w-36 h-36 mb-8" src="/img/icons/ICONO PREGUNTAS.svg" />
            <div className="z-10 max-w-4xl">
              <p className="text-xl text-center font-semibold text-pretty sm:text-2xl">Comienza tu viaje hacia el hogar perfecto poniéndote en contacto con nosotros a través de WhatsApp o nuestro formulario en línea. Cuéntanos qué buscas en tu casa ideal y dónde te gustaría construirla. Desde La Serena hasta cualquier lugar de Chile, estamos listos para ayudarte.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full px-8 h-screen bg-zinc-950">
            <Image className="w-36 h-36 mb-8" src="/img/icons/ICONO DISEÑO.svg" />
            <div className="z-10 max-w-4xl">
              <p className="text-xl text-center font-semibold text-pretty text-zinc-50 sm:text-2xl">Trabaja junto a nuestros expertos diseñadores para esbozar y luego perfeccionar el diseño de tu nueva casa, asegurando que cada detalle cumpla con tus expectativas. Nos especializamos en casas pre fabricadas que son tanto estéticas como funcionales.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full px-8 h-screen">
            <Image className="w-36 h-36 mb-8" src="/img/icons/ICONO 3.svg" />
            <div className="z-10 max-w-4xl">
              <p className="text-xl text-center font-semibold text-pretty sm:text-2xl">Deja en nuestras manos la construcción de tu hogar. Nos encargamos de todo el proceso hasta que te entregamos las llaves de tu nueva casa, lista para ser habitada. La calidad de construcción y el diseño están garantizados.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:h-screen mx-auto">
        <GallerySwiper />
      </section>
      <section className="relative flex items-start w-full h-screen">
        <Image radius="none" src="/img/Fotos Minga/Fotografías Oficiales_-24.webp" alt="logo" fallbackSrc="https://via.placeholder.com/1920x1080" className="w-screen h-screen object-cover object-center  block md:hidden" />
        <Image radius="none" src="/img/Fotos Minga/Fotografías Oficiales_-23.webp" alt="logo" fallbackSrc="https://via.placeholder.com/1920x1080" className="w-screen h-screen object-cover object-center hidden md:block" />
        <div className="flex flex-col justify-around items-end z-20 w-full h-screen px-6 absolute bottom-10 inset-0">
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
        </div>
      </section>
    </section>
  );
}
