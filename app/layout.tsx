import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./reusedcomponent/header";
import Footer from "./reusedcomponent/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fortunate Interio",
  description: "Interior Design",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
           <Header/>

        {children}
           <Footer/>
      </body>
    </html>
  );
}