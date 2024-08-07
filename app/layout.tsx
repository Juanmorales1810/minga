import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cc-minga.cl/'),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  keywords: [
    "Casas", "Construccion", "Minga", "Minga.cl", "Casas Minga", "Casas Minga.cl", "Casas Minga Chile", "Casas Minga.cl Chile", "Casas Minga", "Casas Minga.cl", "Casas Minga Chile", "Casas Minga.cl Chile"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  creator: "Juan Morales",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://www.cc-minga.cl/',
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://www.cc-minga.cl/meta/metaimg.jpg',
        width: 1200,
        height: 630,
      },

    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://www.cc-minga.cl/meta/metaimg.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body
        className="min-h-screen bg-background antialiased font-Avenir"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col bg-[#3f3f41]">
            <Navbar />
            <main className="mx-auto flex-grow z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
