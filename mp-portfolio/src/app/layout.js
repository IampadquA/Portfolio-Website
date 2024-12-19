import { Urbanist , Onest } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({subsets : ["latin"]});

const onest = Onest({subsets : ["latin"]});

export const metadata = {
  title: "Hello! I'm Tarık",
  description: "Tarık Efe Gulmez's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
