import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow mx-auto my-2 dark:bg-black/70 backdrop-blur-sm z-10 absolute bottom-0 left-2 w-[calc(100%-16px)]">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col justify-center items-end gap-2 md:flex-row md:items-center md:justify-between md:px-32">
                <span className="text-sm text-zinc-50 sm:text-center mt-3">© {new Date().getFullYear()} <a href="/" className="hover:underline">Minga™</a>. All Rights Reserved.
                </span>
                <Image src="/img/logo/MINGA LOGO NEGRO PNG.png" alt="logo" width={150} height={100} className="object-cover object-center invert" />
            </div>
        </footer>
    )
}