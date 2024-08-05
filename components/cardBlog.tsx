import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

interface propsInterface {
    srcImg: string,
    title: string,
    description?: string,
    slug: string
}

export default function CardBlog(props: propsInterface) {
    const { srcImg, title, slug, description } = props
    return (
        <article className="flex flex-col mb-12 overflow-hidden cursor-pointer max-w-sm">
            <Link href={`/blog/${slug}`}>
                <header className="flex-shrink-0">
                    <Image className="object-cover w-full h-48 rounded-lg" src={srcImg} alt="Imagen de blog" width={385} height={192} />
                </header>
            </Link>
            <div className="flex flex-col justify-between flex-1">
                <Link href={`/blog/${slug}`}></Link>
                <main className="flex-1">
                    <Link href={`/blog/${slug}`}>
                        <div className="flex pt-6 space-x-1 text-sm text-zinc-500">
                            <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                        </div>
                    </Link>
                    <Link href={`/blog/${slug}`} className="block mt-2 space-y-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tighter text-zinc-50 ">{title}</h3>
                        <p className="text-lg font-normal text-gray-500 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">{description}</p>
                    </Link>
                </main>
            </div>
        </article>
    )
}