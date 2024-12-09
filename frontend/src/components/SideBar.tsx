"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoAlbumsOutline } from "react-icons/io5";

export default function SideBar() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div
      className={`bg-[#121212] hidden lg:flex ${
        click ? "w-[25vw]" : "w-fit"
      } rounded-lg h-screen left-0 p-5 flex-col items-center gap-3`}
    >
      <div
        onClick={() => setClick(!click)}
        className="text-gray-500 font-bold  flex items-center gap-5 hover:scale-105 cursor-pointer"
      >
        <div>
          <IoAlbumsOutline size={25} />
        </div>
        {click ? "Tu biblioteca" : null}
      </div>
      <div className="like-gradient p-4 cursor-pointer rounded-lg">
        <FaHeart />
      </div>
    </div>
  );
}
