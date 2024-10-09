// import React from 'react'

import { MutableRefObject, useState } from "react"

const useAudioPlayer = ({ audio }: { audio: MutableRefObject<HTMLAudioElement | null> }) => {
    // const useAudioPlayer = (audio: MutableRefObject<HTMLAudioElement | null>) => {

    const [play, setPlay] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string | undefined>('');

    const handlePlay = () => {
        if (audio.current) {
            audio.current.play()
            const minutes = Math.floor(audio.current?.duration / 60);
            const seconds = Math.floor(audio.current?.duration % 60);
            setCurrentTime(`${minutes}:${seconds}`)
        }
        setPlay(!play);



    }
    const handlePause = () => {
        if (audio.current) {
            audio.current.pause()
        }
        setPlay(!play);
    }

    return (
        {
            handlePlay,
            play,
            handlePause,
            currentTime
        }
    )
}

export default useAudioPlayer