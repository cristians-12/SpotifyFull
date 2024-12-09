import useAuthStore from "@/store/authStore";
import Image from "next/image";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <nav className="flex text-white items-center justify-between px-5 py-2 fixed w-screen bg-black z-30">
        <Link href={"/"} className="w-10">
          <Image
            src={
              "https://logospng.org/download/spotify/logo-spotify-icon-4096.png"
            }
            width={100}
            height={100}
            alt="logo"
          />
        </Link>

        <div className="flex w-[35%]">
          <div className=""></div>
          <div className="lg:flex hidden w-full relative">
            <div className="absolute top-1 left-3">
              <IoIosSearch size={30} />
            </div>
            <input
              type="text"
              placeholder="Let's listen something"
              className="bg-[#1F1F1F] ps-14 w-full px-3 py-2 rounded-full"
            />
          </div>
        </div>

        {isLoggedIn ? 
        (
          <div>
            <Link href={'/profile'}>
              Ir a mi perfil
            </Link>
          </div>
        ) 
        : 
        (
          <div className="lg:flex gap-5 font-bold hidden items-center">
            <Link
              href={"auth/register"}
              className=" hover:cursor-pointer hover:scale-105"
            >
              Registrate
            </Link>
            <div className="text-black bg-white px-3 py-2 hover:cursor-pointer hover:scale-105 rounded-2xl">
              Iniciar sesión
            </div>
          </div>
        )}
        <div className="lg:hidden">
          <CiSettings size={30} />
        </div>
      </nav>
    </>
  );
}
