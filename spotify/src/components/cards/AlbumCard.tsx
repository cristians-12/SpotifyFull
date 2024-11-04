import Image from "next/image";
import React from "react";
import { useState } from "react";
// import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdPlay } from "react-icons/io";
import { Album } from "@/app/types";

interface ArtistCardProps {
  album: Album;
}

const AlbumCard: React.FC<ArtistCardProps> = ({ album }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link
      href={`/album/`}
      className="flex relative w-fit flex-col justify-center hover:bg-[#5a5a5a83] p-3 lg:pb-5 rounded-xl hover:cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={`bg-[#3AE175] w-fit px-4 py-4 absolute right-5 bottom-24 rounded-full hover:scale-110`}
      >
        <IoMdPlay color="black" size={30} />
      </motion.div>
      <div className="rounded-xl w-48 h-48 overflow-hidden">
        <Image
          src={album.image}
          width={200}
          height={200}
          alt={album.title}
          className=""
        />
      </div>
      <h2 className="text-start mt-5 hover:underline hover:cursor-pointer font-bold">
        {album.title}
      </h2>
      <p className="text-[#606060]">Album</p>
    </Link>
  );
};

export default AlbumCard;