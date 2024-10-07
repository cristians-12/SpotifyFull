import ReactAudioPlayer from "react-audio-player";
import { CiRepeat } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";
import { IoIosSkipBackward, IoIosSkipForward, IoMdPlay } from "react-icons/io";

export default function AudioPlayer() {

    return (
        <div className="fixed bottom-0 w-full flex py-3 items-center justify-between bg-black left-0">
            <ReactAudioPlayer src="a" />
            <div>
                imagen
            </div>
            <div className="w-[30%] flex flex-col gap-3 items-center">
                <div className="flex items-center gap-5">
                    <div className="cursor-pointer">
                        <FaRandom size={25} />
                    </div>
                    <div className="cursor-pointer">
                        <IoIosSkipBackward size={25} />
                    </div>
                    <div className="hover:bg-gray-800 p-2 rounded-full cursor-pointer">
                        <IoMdPlay size={25} />
                    </div>
                    <div className="cursor-pointer">
                        <IoIosSkipForward size={25} />
                    </div>
                    <div className="cursor-pointer">
                        <CiRepeat size={25} />
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gray-500">
                </div>
            </div>
            <div>
                otros iconos
            </div>
        </div>
    )
}