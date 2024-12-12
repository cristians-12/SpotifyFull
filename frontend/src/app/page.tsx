import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";
import { ArtistCard } from "@/components";
import { Artist } from "./types";

const getInitialArtists = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/artists`);
  const data = await res.json();
  return data;
};

export default async function Home() {
  // const { data } = useFetchs(`${process.env.NEXT_PUBLIC_API_URI}/artists`);
  const data: Artist[] = await getInitialArtists();

  return (
    <>
      <NavBar />
      <main className="flex lg:pt-16">
        <SideBar />
        <div className="bg-gradient-to-b from-purple-950 to-transparent w-full lg:p-5 rounded-xl min-h-[60vh]">
          <h2 className="font-bold text-[1.5em]">Artistas populares</h2>
          <div className="mt-5 flex lg:w overflow-x-scroll w-screen lg:w-auto lg:overflow-auto">
            {/* {data && data.length > 0 ? (
              data.map((artist) => (
                <ArtistCard key={artist._id} artist={artist} />
              ))
            ) : (
              <>
                <Loader />
              </>
            )} */}
            <Suspense fallback={<Loader />}>
              {data.map((artist: Artist) => (
                <ArtistCard key={artist._id} artist={artist} />
              ))}
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
