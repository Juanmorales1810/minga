import { InstagramLogo, MailLogo, MapLogo, WhatsAppLogo } from "./icons";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow mx-auto my-2 dark:bg-black/70 backdrop-blur-sm z-10 absolute bottom-0 left-2 w-[calc(100%-16px)]">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-zinc-50 sm:text-center mt-3">© {new Date().getFullYear()} <a href="/" className="hover:underline">Minga™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 gap-3">
                    <li>
                        <a href="https://wa.me/+56940006843" className="">
                            <WhatsAppLogo className="w-6 h-6 fill-zinc-50 hover:fill-zinc-400" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ccminga?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="">
                            <InstagramLogo className="w-6 h-6 fill-zinc-50 hover:fill-zinc-400" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/maps/place/CASAS+MINGA/@-30.0271756,-71.2545806,15z/data=!4m6!3m5!1s0x96903123822d4609:0xb14719ff38359ff3!8m2!3d-30.0271756!4d-71.2545806!16s%2Fg%2F11r3djlkg_?entry=ttu" className="">
                            <MapLogo className="w-6 h-6 stroke-zinc-50 hover:stroke-zinc-400 fill-none" />
                        </a>
                    </li>
                    <li>
                        <a href="mailTo:Contacto@ccminga.cl" className="">
                            <MailLogo className="w-6 h-6 stroke-zinc-50 hover:stroke-zinc-400 fill-none" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}