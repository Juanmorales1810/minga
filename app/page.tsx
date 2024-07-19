import GallerySwiper from "@/components/gallerySwiper";
import { FlipWords } from "@/components/flip-words";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { fontMono } from "@/config/fonts";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { LinkedIn, WhatsAppLogo } from "@/components/icons";

export default function Home() {
  const words = ["mejores", "lindas", "hermosas", "rápidas", "seguras"];
  return (
    <section className="flex flex-col items-center w-full justify-center min-h-[calc(100vh-100px)] gap-4">
      <p className="text-2xl">&#128679;Esta pagina esta en proceso&#128679;</p>
      {/* <section className="relative h-auto min-h-screen w-full">
        <div className="flex justify-center items-center w-full h-screen">
          <Image radius="none" src="/img/Fotos Minga 2/trenzaestudio-20.webp" alt="logo" width={1920} height={1080} fallbackSrc="https://via.placeholder.com/1920x1080" className="w-screen h-screen object-cover object-center brightness-[.20]" />
        </div>
        <div className="flex flex-col justify-center items-center z-20 absolute bottom-10 inset-0">
          <Image src="/img/logo/Minga PNG.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
          <h2 className={title({ class: fontMono.className + " z-20 pt-8 text-center", size: "sm" })}>Descubre tu hogar ideal en la naturaleza con Minga</h2>
          <Button variant="shadow" endContent={<WhatsAppLogo className="w-6 h-6 fill-white" />} size="md" as={Link} href="https://wa.me/+56940006843" className="mt-4 font-bold">Contactanos</Button>
        </div>
      </section>
      <section className="py-8 px-2">
        <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-4">
          <h1 className={title({ class: fontMono.className + " text-center", size: "md" })}>Bienvenido a Minga</h1>
          <p className="text-center text-2xl text-pretty">En <strong className={fontMono.className}>Minga</strong>, nos especializamos en el diseño y la construcción de casas únicas en entornos naturales impresionantes. Nuestro compromiso es brindarte un hogar que no solo sea estético y funcional sino que también armonice con el paisaje, respetando la belleza y la integridad del medio ambiente. Desde La Serena, Chile, hasta cualquier rincón del país, estamos aquí para construir el hogar de tus sueños.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-4 py-8 px-2">
        <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-4">
          <h2 className={title({ class: fontMono.className + " text-center", size: "md" })}>Diseño y Sostenibilidad</h2>
          <p className="text-center text-2xl text-pretty">Explora cómo cada hogar <strong className={fontMono.className}>Minga</strong> combina innovación arquitectónica con sostenibilidad ambiental</p>
        </div>
        <div className="flex flex-wrap justify-center items-start w-full max-w-5xl gap-6 pt-4 md:justify-between">
          <article className="flex flex-col justify-center items-center gap-2 w-72">
            <header>
              <h3 className={clsx(
                fontMono.className,
                "text-center text-2xl text-pretty drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)] pb-[30px]"
              )}>Diseño Personalizado</h3>
            </header>
            <main>
              <Image isBlurred src="/img/Fotos Minga 2/trenzaestudio-3.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text-md pt-4">
              <p>Cada hogar <strong className={fontMono.className}>Minga</strong> es un reflejo de los sueños y necesidades del propietario. Ofrecemos soluciones personalizadas que se adaptan a diferentes estilos de vida y preferencias personales. Ya sea que busques un diseño moderno o rústico, en entornos urbanos o naturales, tenemos la experiencia para hacerlo realidad.</p>
            </footer>
          </article>
          <article className="flex flex-col justify-center items-center gap-2 w-72">
            <header>
              <h3 className={clsx(
                fontMono.className,
                "text-center text-2xl drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)]"
              )}>Construcción Sostenible</h3>
            </header>
            <main>
              <Image isBlurred src="/img/Fotos Minga 2/trenzaestudio-15.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text-md pt-4">
              <p>Comprometidos con el cuidado del planeta, utilizamos materiales ecológicos y técnicas de construcción que minimizan el impacto ambiental de nuestras edificaciones. Nuestras casas pre fabricadas son un testimonio de eficiencia y calidad.</p>
            </footer>
          </article>
          <article className="flex flex-col justify-center items-center gap-2 w-72">
            <header>
              <h3 className={clsx(
                fontMono.className,
                "text-center text-2xl text-pretty drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)]"
              )}>Integración con la Naturaleza</h3>
            </header>
            <main>
              <Image isBlurred src="/img/Fotos Minga 2/trenzaestudio-9.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text- pt-4">
              <p>Diseñamos casas que complementan su entorno, maximizando las vistas naturales y fomentando un vínculo único entre tu hogar y la naturaleza circundante.</p>
            </footer>
          </article>
        </div>
      </section>
      <section className="flex justify-center items-center py-8 w-full px-2">
        <div className={clsx("font-medium z-20 text-center text-2xl md:text-5xl", fontMono.className)}>
          Hacemos casas
          <FlipWords className={clsx("drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)]", fontMono.className)} words={words} /> <br />
          para tu estilo de vida.
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto px-2">
        <GallerySwiper />
      </section>
      <section className="flex flex-col justify-center items-center w-full max-w-5xl py-8 px-2">
        <h2 className={title({ class: fontMono.className + " text-center", size: "md" })}>Lo que dicen nuestros clientes</h2>
        <p className="text-2xl text-center w-full max-w-2xl pt-6">Escucha directamente a aquellos que han convertido su visión en realidad con nosotros y ahora disfrutan de la vida en sus hogares <strong className={fontMono.className}>Minga</strong>.</p>
        <div className="relative flex justify-center items-center w-full max-w-5xl h-96">
          <div className="absolute left-0 bottom-5">
            <Image src="/img/Fotos Minga/Fotografías Oficiales_-15.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
          <q className="z-20 text-2xl w-96 text-center font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam non aperiam cumque suscipit porro molestias dolorum vitae a ducimus.</q>
          <div className="absolute right-0 top-5">
            <Image src="/img/home/istockphoto.jpg" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full max-w-5xl h-96">
          <div className="absolute left-0 top-5">
            <Image src="/img/Fotos Minga/Fotografías Oficiales_-3.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
          <q className="z-20 text-2xl w-96 text-center font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam non aperiam cumque suscipit porro molestias dolorum vitae a ducimus.</q>
          <div className="absolute right-0 bottom-5">
            <Image src="/img/home/istockphoto.jpg" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full max-w-5xl h-96">
          <div className="absolute left-0 bottom-5">
            <Image src="/img/Fotos Minga/Fotografías Oficiales_-23.webp" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
          <q className="z-20 text-2xl w-96 text-center font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam non aperiam cumque suscipit porro molestias dolorum vitae a ducimus.</q>
          <div className="absolute right-0 top-5">
            <Image src="/img/home/istockphoto.jpg" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px] brightness-[.25] md:brightness-100" />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 py-8 px-2">
        <h2 className={title({ class: fontMono.className + " text-center pb-6", size: "md" })}>Tu casa en tres pasos</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-center items-center w-full max-w-4xl">
            <p className="basis-16 text-9xl font-bold text-zinc-50/50">1</p>
            <div className="basis-2/3">
              <h3 className="text-2xl pb-4">Consulta Inicial</h3>
              <p className="text-md text-pretty">Comienza tu viaje hacia el hogar perfecto poniéndote en contacto con nosotros a través de WhatsApp o nuestro formulario en línea. Cuéntanos qué buscas en tu casa ideal y dónde te gustaría construirla. Desde La Serena hasta cualquier lugar de Chile, estamos listos para ayudarte.</p>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-center items-center w-full max-w-4xl">
            <p className="basis-16 text-9xl font-bold text-zinc-50/50">2</p>
            <div className="basis-2/3">
              <h3 className="text-2xl pb-4">Diseño Personalizado</h3>
              <p className="text-md text-pretty">Trabaja junto a nuestros expertos diseñadores para esbozar y luego perfeccionar el diseño de tu nueva casa, asegurando que cada detalle cumpla con tus expectativas. Nos especializamos en casas pre fabricadas que son tanto estéticas como funcionales.</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full max-w-4xl">
            <p className="basis-16 text-9xl font-bold text-zinc-50/50">3</p>
            <div className="basis-2/3">
              <h3 className="text-2xl pb-4">Construcción y Entrega</h3>
              <p className="text-md text-pretty">Deja en nuestras manos la construcción de tu hogar. Nos encargamos de todo el proceso hasta que te entregamos las llaves de tu nueva casa, lista para ser habitada. La calidad de construcción y el diseño están garantizados.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-2">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-black/30 backdrop-blur-sm dark:border-zinc-700/30">
          <h4 className={clsx(fontMono.className, "mb-2 text-3xl font-bold text-gray-900 dark:text-white")}>Diseña tu hogar con Minga hoy</h4>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Detalles claros sobre cómo contactar a Minga por WhatsApp, correo electrónico y a través de un formulario de contacto en línea.
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
      </section> */}
    </section>
  );
}
