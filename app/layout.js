"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
