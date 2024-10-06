import Image from "next/image";
import { Artist } from "../types";

interface ArtistCardProps {
    artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
    return (
        <div className="flex flex-col justify-center hover:bg-[#1E1E1E] p-3 pb-10 rounded-xl hover:cursor-pointer">
            <div className="rounded-full w-48 h-48 overflow-hidden">
                <Image src={artist.image} width={200} height={200} alt={artist.name} className="" />
            </div>
            <h2 className="text-start mt-5 hover:underline hover:cursor-pointer font-bold">{artist.name}</h2>
            <p className="text-[#606060]">Artist</p>
        </div>
    );
}

export default ArtistCard;
