import Image from "next/image";
import React, { useState } from "react";
import { Artist } from "../../app/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdPlay } from "react-icons/io";
import useUserMusic from "@/store/userMusicStore";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const [hover, setHover] = useState<boolean>(false);
  const { changeTrack } = useUserMusic();

  return (
    <Link
      href={`/artist/${artist._id}`}
      className="flex relative flex-col justify-center hover:bg-[#5a5a5a83] p-3 lg:pb-10 rounded-xl hover:cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        changeTrack({
          id: artist._id,
          artist_name: artist.name,
          name: "La plata",
          album_cover_url: artist.image,
          album_title: "la plata",
          url: "https://example.com/music.mp3",
        })
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="bg-[#3AE175] w-fit px-4 py-4 absolute right-5 bottom-24 rounded-full hover:scale-110"
      >
        <IoMdPlay color="black" size={30} />
      </motion.div>

      <div className="lg:rounded-full rounded-xl w-48 h-48 overflow-hidden">
        <Image
          src={artist.image || "/default-image.png"}
          width={200}
          height={200}
          alt={artist.name}
          className=""
        />
      </div>

      <h2 className="text-start mt-5 hover:underline hover:cursor-pointer font-bold">
        {artist.name}
      </h2>
      <p className="text-[#606060]">Artist</p>
    </Link>
  );
};

export default ArtistCard;
