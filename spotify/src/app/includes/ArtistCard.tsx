import Image from "next/image";
import React from "react";
import { Artist } from "../types";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

interface ArtistCardProps {
    artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            className="flex relative flex-col justify-center hover:bg-[#1E1E1E] p-3 lg:pb-10 rounded-xl hover:cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className={`bg-[#3AE175] w-fit px-4 py-4 absolute right-5 bottom-24 rounded-full hover:scale-110`}
            >
                <FaPlay size={30} />
            </motion.div>
            <div className="lg:rounded-full rounded-xl w-48 h-48 overflow-hidden">
                <Image src={artist.image} width={200} height={200} alt={artist.name} className="" />
            </div>
            <h2 className="text-start mt-5 hover:underline hover:cursor-pointer font-bold">{artist.name}</h2>
            <p className="text-[#606060]">Artist</p>
        </div>
    );
}

export default ArtistCard;
