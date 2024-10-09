
'use client'
// import ReactAudioPlayer from "react-audio-player";
import { useRef } from "react";
import { CiRepeat } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";
import { IoIosPause, IoIosSkipBackward, IoIosSkipForward, IoMdPlay } from "react-icons/io";
import useAudioPlayer from "../hooks/useAudioPlayer";

export default function AudioPlayer() {

    const audio = useRef<HTMLAudioElement | null>(null)

    const { handlePlay, play, handlePause, currentTime } = useAudioPlayer({ audio });


    return (
        <div className="fixed lg:bottom-0 bottom-[0%] w-full flex py-2 px-3 items-center justify-between bg-black left-0">
            <audio className="hidden" controls ref={audio}>
                <source src="https://archive.org/download/y-2mate.com-alejo-feid-robi-pantysito_202208/y2mate.com%20-%20Alejo%20Feid%20Robi%20%20Pantysito.mp3" />
            </audio>
            <div>
                imagen

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
                        <div onClick={handlePlay} className="hover:bg-gray-800 p-2 rounded-full cursor-pointer">
                            <IoMdPlay size={25} />
                        </div>
                    ) : (
                        <div onClick={handlePause} className="hover:bg-gray-800 p-2 rounded-full cursor-pointer">
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
                <div className="flex w-full items-center gap-5 text-gray-500 font-bold">
                    <span>0:00</span>
                    <div className="h-[2px] w-full bg-gray-500 hidden lg:block">
                    </div>
                    <span>{currentTime}</span>
                </div>
            </div>
            <div className="hidden lg:flex">
                otros iconos
            </div>
        </div>
    )
}