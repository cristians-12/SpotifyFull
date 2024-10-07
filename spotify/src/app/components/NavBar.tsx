import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {

    return (
        <>
            <nav className="flex text-white items-center justify-between px-5 py-2 fixed w-screen bg-black">
                <figure className="w-10">
                    <Image src={"https://logospng.org/download/spotify/logo-spotify-icon-4096.png"} width={100} height={100} alt="logo" />
                </figure>

                <div className="flex w-[35%]">
                    <div className="">

                    </div>
                    <div className="flex w-full relative">
                        <div className="absolute top-1 left-3">
                            <IoIosSearch size={30} />
                        </div>
                        <input type="text" placeholder="Let's listen something" className="bg-[#1F1F1F] ps-14 w-full px-3 py-2 rounded-full" />
                    </div>
                </div>

                <div className="flex gap-5 font-bold items-center">
                    <div className=" hover:cursor-pointer hover:scale-105">
                        Registrate
                    </div>
                    <div className="text-black bg-white px-3 py-2 hover:cursor-pointer hover:scale-105 rounded-2xl">
                        Iniciar sesión
                    </div>
                </div>
            </nav>
        </>
    )
}