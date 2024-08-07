import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { fontMono } from "@/config/fonts";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" shouldHideOnScroll classNames={{ base: "fixed w-full max-w-3xl mx-auto rounded-b-xl border-b-1 border-zinc-700" }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className={"font-medium text-inherit " + fontMono.className}>Minga</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
