import React from "react";
import { Roboto } from "next/font/google";
import Navbar from "../ui/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-indigodye-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
