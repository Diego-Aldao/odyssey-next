import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Montserrat, Raleway } from "next/font/google";
import Nav from "@/components/layout/Nav";
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
  title: "Odyssey: Comunidad Anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.variable} ${montserrat.variable} relative antialiased bg-main-black w-full min-h-screen `}
      >
        <div className="background w-full h-full bg-main-black opacity-15 absolute bg-contain"></div>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
