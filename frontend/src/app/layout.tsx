import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import dynamic from 'next/dynamic';
import AudioPlayer from "@/components/AudioPlayer";
import React from "react";

const satoshi = localFont({
  src: "./fonts/Satoshi-Medium.woff",
  variable: "--font-satoshi",
  weight: "200 400",
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Clon de Spotify realizado por cristians-12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <>
          {/* <div className="flex gap-3"> */}
          <div className="lg:w-full">{children}</div>
          {/* </div> */}
          <AudioPlayer />
        </>
      </body>
    </html>
  );
}
