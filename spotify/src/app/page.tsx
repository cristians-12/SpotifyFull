'use client'

import { useEffect } from "react";
import useFetchs from "./hooks/useFetchs";
import ArtistCard from "./includes/ArtistCard";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  const { data } = useFetchs(`${process.env.NEXT_PUBLIC_API_URI}/artists`);

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <>
      <h2 className="font-bold">Artistas:</h2>
      <ul className="mt-5 flex lg:w overflow-x-scroll w-screen lg:w-auto lg:overflow-auto">
        {data && data.length > 0 ? (
          data.map((artist) => (
            <ArtistCard key={artist._id} artist={artist} />
          ))
        ) : (
          <>
            <h1>Cargando..</h1>
          </>
        )}
      </ul>
    </>
  )
}
