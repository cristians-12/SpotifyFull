"use client";
import { Suspense, useState } from "react";
import { SideBar } from "../SideBar";
import Loader from "../Loader";
import { ArtistCard } from "../cards/ArtistCard";
import { Artist } from "@/app/types";

interface ArtistContainerProps {
  data: Artist[];
}

export const ArtistContainer = ({ data }: ArtistContainerProps) => {
  const [move, setMove] = useState<boolean>(false);

  return (
    <main className={`flex lg:pt-16 ${!move ? "lg:ps-24" : "lg:ps-[25.5%]"}`}>
      <SideBar move={move} setMove={setMove} />
      <div className="bg-gradient-to-b from-purple-950 to-transparent w-full lg:p-5 rounded-xl min-h-[60vh]">
        <h2 className="font-bold text-[1.5em]">Artistas populares</h2>
        <div className="mt-5 flex lg:w overflow-x-scroll w-screen lg:w-auto lg:overflow-auto">
          <Suspense fallback={<Loader />}>
            {data.map((artist: Artist) => (
              <ArtistCard key={artist._id} artist={artist} />
            ))}
          </Suspense>
        </div>
      </div>
    </main>
  );
};
