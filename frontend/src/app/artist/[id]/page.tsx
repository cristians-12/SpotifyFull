"use client";

import { useEffect, useState } from "react";

import { Album, Artist } from "@/app/types";
import Image from "next/image";
import Loader from "@/components/Loader";
import AlbumCard from "@/components/cards/AlbumCard";
import AudioPlayer from "@/components/AudioPlayer";
import { MdVerified } from "react-icons/md";

// export const metadata: Metadata = {
//     title: `artist | Spotify clone`,
//     description: "Clon de Spotify realizado por cristians-12",
//   };

export default function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URI}/artists/id/${id}`
        );
        const result = await data.json();
        setArtist(result);
      } catch (error) {
        console.error("Error fetching artist data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtistData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!artist) {
    return <div>No se encontró información del artista.</div>;
  }

  const { poster, albums, name } = artist;

  return (
    <>
      <div className="h-[20vw] overflow-hidden relative">
        <div className="absolute z-20 bottom-3 left-5">
          <div className=" flex items-center gap-2">
            <MdVerified className="" color="#4CB3FF" />
            <h6 className=" text-white">Artista verificado</h6>
          </div>
          <h2 className="text-[5rem] font-extrabold">{name}</h2>
        </div>
        <Image
          src={poster}
          width={100}
          height={100}
          alt={`${name}`}
          className="object-contain w-full blur-lg "
        />
      </div>
      <h4 className="font-bold my-5">Discografía:</h4>
      <ul>
        {albums &&
          albums.map((album: Album) => (
            <AlbumCard key={album._id} album={album} />
          ))}
      </ul>
      <AudioPlayer />
    </>
  );
}
