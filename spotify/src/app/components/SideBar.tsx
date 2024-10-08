'use client'
import { useState } from "react";
import { IoAlbumsOutline } from "react-icons/io5";

export default function SideBar() {

    const [click, setClick] = useState<boolean>(false)

    return (
        <div className={`bg-[#121212] hidden lg:block ${click ? 'w-[25vw]' : 'w-[3vw]'} rounded-lg h-screen  left-0`}>
            <div onClick={() => setClick(!click)} className="text-gray-500 font-bold p-5 flex items-center gap-5 hover:scale-105 cursor-pointer">
                <div>
                    <IoAlbumsOutline size={25} />
                </div>
                {click ? 'Tu biblioteca' : null}
            </div>
        </div>
    )
}