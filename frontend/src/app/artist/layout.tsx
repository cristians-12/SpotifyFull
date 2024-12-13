import { SideBar } from "@/components";
import NavBar from "@/components/NavBar";

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex lg:pt-16 pt-14 lg:ps-24">
        <SideBar />
        <div className="lg:w-full w-screen">{children}</div>
      </div>
    </>
  );
}
