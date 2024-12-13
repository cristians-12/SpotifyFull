"use client";
import { SetStateAction, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoAlbumsOutline } from "react-icons/io5";
import { TiPin } from "react-icons/ti";

interface SideBarProps {
  setMove?: React.Dispatch<SetStateAction<boolean>>;
  move?: boolean;
}

export const SideBar = ({ setMove, move }: SideBarProps) => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div
      className={`bg-[#121212] hidden lg:flex fixed ${
        click ? "w-[25vw]" : "w-fit items-center"
      } rounded-lg h-screen left-0 p-5 flex-col gap-3`}
    >
      <div
        onClick={() => {
          setClick(!click);
          if (setMove) {
            setMove(!move);
          }
        }}
        className="text-gray-500 font-bold flex items-center gap-5 hover:scale-105 cursor-pointer"
      >
        <div>
          <IoAlbumsOutline size={25} />
        </div>
        {click ? "Tu biblioteca" : null}
      </div>
      {click ? (
        <div className="flex justify-between">
          <div>
            <CiSearch size={20} className="cursor-pointer" />
          </div>
          <p>Recientes</p>
        </div>
      ) : null}
      <figure className={`flex items-center ${click ? "gap-3" : null} w-fit`}>
        <div className="like-gradient p-4 cursor-pointer rounded-lg">
          <FaHeart />
        </div>
        <div>
          <p>{click ? "Tus me gusta" : null}</p>
          {click ? (
            <div className="text-gray-500 text-[0.9em] flex gap-2 items-center">
              <TiPin color="green" size={20} />
              <span>Playlist</span>
            </div>
          ) : null}
        </div>
      </figure>
    </div>
  );
};
