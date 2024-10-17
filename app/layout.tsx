import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { Montserrat, Raleway } from "next/font/google";

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
        className={`${raleway.className} ${montserrat.variable} antialiased bg-main-black w-full min-h-screen px-2 sm:px-4 pt-2 sm:pt-4 lg:pt-6 lg:px-6`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
