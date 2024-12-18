import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import { MdVerified } from "react-icons/md";
import { Album } from "@/types/music/album.type";
import { AlbumCard } from "@/components";

const getArtist = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/artists/id/${id}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const artist = await getArtist(params.id);

  if (!artist) {
    return {
      title: "Artista no encontrado | Spotify clone",
      description: "No se encontró información del artista.",
    };
  }

  return {
    title: `${artist.name} | Spotify clone`,
    description: `Explora la discografía y detalles del artista ${artist.name} en este clon de Spotify.`,
  };
}

export default async function ArtistPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const artist = await getArtist(id);

  if (!artist) {
    return <div>No se encontró información del artista.</div>;
  }

  const { poster, albums, name } = artist;

  return (
    <>
      <div className="lg:h-[20vw] w-full overflow-hidden relative">
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
      <ul className="flex gap-5 overflow-x-scroll lg:overflow-hidden">
        {albums.map((album: Album) => (
          <AlbumCard key={album._id} album={album} />
        ))}
      </ul>
    </>
  );
}
