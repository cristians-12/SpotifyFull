import { MutableRefObject, useState, useEffect } from "react";

const useAudioPlayer = ({ audio }: { audio: MutableRefObject<HTMLAudioElement | null> }) => {
    const [play, setPlay] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [duration, setDuration] = useState<string>('0:00');
    const [duracionn, setDuracionn] = useState<number>(0);
    const [actualTime, setActualTime] = useState<number>(0);

    const handlePlay = () => {
        if (audio.current) {
            audio.current.play();
            setPlay(true);
        }
    };

    const handlePause = () => {
        if (audio.current) {
            audio.current.pause();
            setPlay(false);
        }
    };

    useEffect(() => {
        const audioElement = audio.current;

        if (audioElement) {
            // Actualiza la duración cuando la canción carga
            audioElement.onloadedmetadata = () => {
                setDuracionn(audioElement.duration);
                const minutes = Math.floor(audioElement.duration / 60);
                const seconds = Math.floor(audioElement.duration % 60).toString().padStart(2, '0');
                setDuration(`${minutes}:${seconds}`);
            };

            // Actualiza el tiempo actual a medida que la canción se reproduce
            audioElement.ontimeupdate = () => {
                setActualTime(audioElement.currentTime);
                const currentMinutes = Math.floor(audioElement.currentTime / 60);
                const currentSeconds = Math.floor(audioElement.currentTime % 60).toString().padStart(2, '0');
                setCurrentTime(`${currentMinutes}:${currentSeconds}`);
            };
        }

        // Limpia los listeners al desmontar
        return () => {
            if (audioElement) {
                audioElement.ontimeupdate = null;
                audioElement.onloadedmetadata = null;
            }
        };
    }, [audio]);

    return {
        handlePlay,
        play,
        handlePause,
        currentTime,
        duration,
        duracionn,
        actualTime
    };
};

export default useAudioPlayer;
