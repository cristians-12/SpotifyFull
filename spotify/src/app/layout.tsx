import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
// import dynamic from 'next/dynamic';

// const AudioPlayer = dynamic(() => import('../app/components/AudioPlayer'), { ssr: false });


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <NavBar />
          <div className="flex pt-16 gap-5">
            <SideBar />
            <div>
              {children}
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
