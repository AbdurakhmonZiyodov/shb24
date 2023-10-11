import type {Metadata} from "next";

import {Footer, Header} from "@/components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
