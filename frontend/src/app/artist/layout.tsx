import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function ArtistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className="flex lg:pt-16 pt-14">
        <SideBar />
        <div className="lg:w-full w-screen">{children}</div>
      </div>
    </>
  );
}
