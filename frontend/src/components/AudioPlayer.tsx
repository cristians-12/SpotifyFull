"use client";
import { useRef } from "react";
import { CiRepeat, CiVolumeHigh } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";
import {
  IoIosPause,
  IoIosSkipBackward,
  IoIosSkipForward,
  IoMdPlay,
} from "react-icons/io";
import useAudioPlayer from "../hooks/useAudioPlayer";
import useUserMusic from "@/store/userMusicStore";
import Image from "next/image";

export default function AudioPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);

  const {
    handlePlay,
    play,
    handlePause,
    currentTime,
    duration,
    duracionn,
    actualTime,
    handlePosition,
  } = useAudioPlayer({ audio });

  const { track } = useUserMusic();

  const progressPercentage = (actualTime / duracionn) * 100 || 0;

  return (
    <div className="fixed lg:bottom-0 bottom-[0%] w-full flex py-2 px-3 items-center justify-between bg-black left-0">
      <audio className="hidden" controls ref={audio}>
        <source src="https://archive.org/download/y-2mate.com-alejo-feid-robi-pantysito_202208/y2mate.com%20-%20Alejo%20Feid%20Robi%20%20Pantysito.mp3" />
      </audio>
      <div className="w-20 h-20 overflow-hidden text-white">
        <Image
          src={track.album_cover_url}
          width={100}
          height={100}
          alt={track.album_title}
        />
        {track.artist_name}
      </div>
      <div className="w-[30%] flex flex-col gap-1 items-center">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer hidden lg:block">
            <FaRandom size={25} />
          </div>
          <div className="cursor-pointer hidden lg:block">
            <IoIosSkipBackward size={25} />
          </div>
          {!play ? (
            <div
              onClick={handlePlay}
              className="hover:bg-gray-800 p-2 rounded-full cursor-pointer"
            >
              <IoMdPlay size={25} />
            </div>
          ) : (
            <div
              onClick={handlePause}
              className="hover:bg-gray-800 p-2 rounded-full cursor-pointer"
            >
              <IoIosPause size={25} />
            </div>
          )}
          <div className="cursor-pointer hidden lg:block">
            <IoIosSkipForward size={25} />
          </div>
          <div className="cursor-pointer lg:block hidden">
            <CiRepeat size={25} />
          </div>
        </div>
        <div className="w-full items-center hidden lg:flex gap-3 text-gray-500 font-normal">
          <span>{currentTime}</span>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect(); // Obtiene las dimensiones y posición del elemento
              const clickPosition = e.clientX - rect.left; // Posición del clic dentro de la barra
              const newTime = (clickPosition / rect.width) * duracionn; // Calcula la nueva posición en el audio
              handlePosition(newTime); // Ajusta la posición del audio
            }}
            className="h-[2.5px] w-full cursor-pointer bg-gray-500 hidden lg:block relative"
          >
            <div
              className="h-full bg-white absolute"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span>{duration}</span>
        </div>
      </div>
      <div className="hidden lg:flex">
        <CiVolumeHigh
          size={25}
          style={{
            strokeWidth: 1.2,
          }}
        />
      </div>
    </div>
  );
}
