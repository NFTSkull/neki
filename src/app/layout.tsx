import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Poppins, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Neki Kua - Sabores con Historia",
  description: "Productos artesanales mexicanos con alma. Moles, dulces, bebidas y utensilios de cocina tradicional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${libre.variable} ${poppins.variable} ${lato.variable} font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

