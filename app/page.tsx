import GallerySwiper from "@/components/gallerySwiper";
import { FlipWords } from "@/components/flip-words";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { fontMono } from "@/config/fonts";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export default function Home() {
  const words = ["mejores", "lindas", "hermosas", "rápidas", "seguras"];
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <section className="relative h-auto min-h-screen w-full">
        <div className="flex justify-center items-center w-full h-[calc(100vh-64px)]">
          <Image radius="none" src="/img/home/minga-home.webp" alt="logo" width={1920} height={1080} fallbackSrc="https://via.placeholder.com/1920x1080" className="w-[1920px] h-[calc(100vh-64px)] object-cover object-center brightness-[.20]" />
        </div>
        <div className="flex flex-col justify-center items-center z-20 absolute bottom-10 inset-0">
          <Image src="/logo.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
          <h2 className={title({ class: fontMono.className + " z-20 pt-8 text-center", size: "sm" })}>Descubre tu hogar ideal en la naturaleza con Minga</h2>
          <Button size="sm" as={Link} href="/portfolio" className="bg-[#7CA4DC] mt-4 font-semibold text-black">Contactanos</Button>
        </div>
      </section>
      <section className="py-8">
        <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-4">
          <h1 className={title({ class: fontMono.className + " text-center", size: "md" })}>Bienvenido a Minga</h1>
          <p className="text-center text-2xl text-pretty">En <strong className={fontMono.className}>Minga</strong>, nos especializamos en el diseño y la construcción de casas únicas en entornos naturales impresionantes. Nuestro compromiso es brindarte un hogar que no solo sea estético y funcional sino que también armonice con el paisaje, respetando la belleza y la integridad del medio ambiente. Desde La Serena, Chile, hasta cualquier rincón del país, estamos aquí para construir el hogar de tus sueños.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-4 py-8">
        <div className="flex flex-col justify-center items-center w-full max-w-3xl gap-4">
          <h2 className={title({ class: fontMono.className + " text-center", size: "md" })}>Diseño y Sostenibilidad</h2>
          <p className="text-center text-2xl text-pretty">Explora cómo cada hogar <strong className={fontMono.className}>Minga</strong> combina innovación arquitectónica con sostenibilidad ambiental</p>
        </div>
        <div className="flex flex-wrap justify-between items-start w-full max-w-5xl gap-6">
          <article className="flex flex-col justify-center items-center gap-2 w-72">
            <header>
              <h3 className={clsx(
                fontMono.className,
                "text-center text-2xl text-pretty drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)] pb-[30px]"
              )}>Diseño Personalizado</h3>
            </header>
            <main>
              <Image src="/logo.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text-md">
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
              <Image src="/logo.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text-md">
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
              <Image src="/logo.png" alt="logo" fallbackSrc="https://via.placeholder.com/300x200" className="w-[300px] h-[200px]" />
            </main>
            <footer className="text-pretty text-md">
              <p>Diseñamos casas que complementan su entorno, maximizando las vistas naturales y fomentando un vínculo único entre tu hogar y la naturaleza circundante.</p>
            </footer>
          </article>
        </div>
      </section>
      <section className="flex justify-center items-center py-8 w-full">
        <div className={title({ class: fontMono.className + " font-medium z-20 text-center" })}>
          Hacemos casas
          <FlipWords className={title({ class: fontMono.className + " font-bold drop-shadow-[0_0px_8px_rgba(200,255,255,0.65)]", })} words={words} /> <br />
          para tu estilo de vida.
        </div>
      </section>
      <section className="relative w-full max-w-2xl mx-auto">
        <GallerySwiper />
      </section>

    </section>
  );
}
