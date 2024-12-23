import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Montserrat, Raleway } from "next/font/google";
import Nav from "@/components/layout/Nav/Nav";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Odyssey — Comunidad Anime",
  description:
    "Odyssey es el mejor sitio web para la comunidad de anime en español, con informacion sobre animes, temporadas, personajes, actores de voz, y mucho mas.",
  keywords:
    "anime, Odyssey, seguimiento, calificaciones, reseñas, series, películas, recomendaciones, actores de voz, personajes de anime.",
  authors: [{ name: "Diego Aldao", url: "https://diegoaldao.vercel.app/" }],
  openGraph: {
    title: "Odyssey - Comunidad Anime",
    description:
      "Odyssey es tu red social y base de datos para animes y mangas, con rankings, reseñas y más.",
    url: "https://odysseyanime.vercel.app/",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odyssey - Comunidad Anime",
    description:
      "Descubre y organiza tus animes y mangas favoritos en Odyssey. Conoce lo mejor del anime.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${raleway.variable} ${montserrat.variable} relative antialiased bg-main-black w-full min-h-screen `}
      >
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
