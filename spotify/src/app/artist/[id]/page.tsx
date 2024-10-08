import { Album } from "@/app/types";
import Image from "next/image";

export default async function ArtistPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/artists/id/${id}`);
    const posts = await data.json()
    console.log(posts);
    const { poster, albums, name } = posts;

    return (
        <>
            <div>
                <h6>Artista verificado:</h6>
                <Image src={poster} width={100} height={100} alt={`${name}`} className="w-full" />
            </div>
            <h4 className="font-bold my-5">Discografia:</h4>
            <ul>
                {albums && albums.map((album: Album) =>
                    <li className="w-36 flex flex-col items-center" key={album._id}>
                        <Image src={album.image} width={100} height={100} alt={`${name}`} className="w-full" />
                        <span>{album.title}</span>
                    </li>
                )}
            </ul>
        </>
    );
}