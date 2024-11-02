import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Montserrat, Raleway } from "next/font/google";
import Nav from "@/components/layout/Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${raleway.className} ${montserrat.variable} relative after:inset-0 after:absolute after:opacity-10 after:bg-main-black after:bg-contain antialiased bg-main-black w-full min-h-screen `}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
