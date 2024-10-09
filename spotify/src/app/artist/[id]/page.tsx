'use client';

import { useEffect, useState } from "react";
import AudioPlayer from "@/app/components/AudioPlayer";
import { Album, Artist } from "@/app/types";
import Image from "next/image";

export default function ArtistPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const [artist, setArtist] = useState<Artist | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/artists/id/${id}`);
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
        return <div>Cargando...</div>;
    }

    if (!artist) {
        return <div>No se encontró información del artista.</div>;
    }

    const { poster, albums, name } = artist;

    return (
        <>
            <div>
                <h6>Artista verificado:</h6>
                <Image src={poster} width={100} height={100} alt={`${name}`} className="w-full" />
            </div>
            <h4 className="font-bold my-5">Discografía:</h4>
            <ul>
                {albums && albums.map((album: Album) =>
                    <li className="w-36 flex flex-col items-center" key={album._id}>
                        <Image src={album.image} width={100} height={100} alt={`${album.title}`} className="w-full" />
                        <span>{album.title}</span>
                    </li>
                )}
            </ul>
            <AudioPlayer />
        </>
    );
}
