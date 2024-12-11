"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
// import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
// import Link from "next/link";
import { IoMdPlay } from "react-icons/io";
import { Album } from "@/types/music/album.type";
import useUserMusic from "@/store/userMusicStore";

interface ArtistCardProps {
  album: Album;
}

const AlbumCard: React.FC<ArtistCardProps> = ({ album }) => {
  const [hover, setHover] = useState<boolean>(false);

  const { changeTrack } = useUserMusic();

  return (
    <div
      // href={`/album/`}
      className="flex relative w-fit flex-col justify-center hover:bg-[#5a5a5a83] p-3 lg:pb-5 rounded-xl hover:cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={`bg-[#3AE175] w-fit px-4 py-4 absolute right-5 bottom-24 rounded-full hover:scale-110`}
        onClick={() => {
          changeTrack({ ...album.tracks[0], album_cover_url: album.image });
        }}
      >
        <IoMdPlay color="black" size={30} />
      </motion.div>
      <div className="rounded-xl w-48 h-48 overflow-hidden">
        <Image
          src={album.image}
          width={200}
          height={200}
          alt={album.album_title}
          className=""
        />
      </div>
      <h2 className="text-start text-white mt-5 hover:underline hover:cursor-pointer font-bold">
        {album.album_title}
      </h2>
      <p className="text-[#606060]">Album</p>
    </div>
  );
};

export default AlbumCard;
