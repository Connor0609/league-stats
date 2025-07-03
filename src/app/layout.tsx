import React from "react";
import Navbar from "./ui/Navbar";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-violet">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
