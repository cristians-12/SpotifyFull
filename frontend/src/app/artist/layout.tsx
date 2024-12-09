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
      <div className="flex pt-16">
        <SideBar />
        <div className="lg:w-full">{children}</div>
      </div>
    </>
  );
}
