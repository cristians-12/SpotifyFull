"use client";
import useUserMusic from "@/store/userMusicStore";
import { MutableRefObject, useState, useEffect } from "react";

const useAudioPlayer = ({
  audio,
}: {
  audio: MutableRefObject<HTMLAudioElement | null>;
}) => {
  const [play, setPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");
  const [duracionn, setDuracionn] = useState<number>(0);
  const [actualTime, setActualTime] = useState<number>(0);

  const { track } = useUserMusic();

  const handlePlay = () => {
    if (audio.current) {
      audio.current.play().catch((error) => {
        console.error("Error reproduciendo audio:", error);
      });
      setPlay(true);
    }
  };

  const handlePause = () => {
    if (audio.current) {
      audio.current.pause();
      setPlay(false);
    }
  };

  const handlePosition = (position: number) => {
    if (audio.current) {
      audio.current.currentTime = position;
      setActualTime(position);
      const currentMinutes = Math.floor(position / 60);
      const currentSeconds = Math.floor(position % 60)
        .toString()
        .padStart(2, "0");
      setCurrentTime(`${currentMinutes}:${currentSeconds}`);
    }
  };

  useEffect(() => {
    const audioElement = audio.current;

    if (audioElement) {
      audioElement.onloadedmetadata = () => {
        setDuracionn(audioElement.duration);
        const minutes = Math.floor(audioElement.duration / 60);
        const seconds = Math.floor(audioElement.duration % 60)
          .toString()
          .padStart(2, "0");
        setDuration(`${minutes}:${seconds}`);
      };

      audioElement.ontimeupdate = () => {
        setActualTime(audioElement.currentTime);
        const currentMinutes = Math.floor(audioElement.currentTime / 60);
        const currentSeconds = Math.floor(audioElement.currentTime % 60)
          .toString()
          .padStart(2, "0");
        setCurrentTime(`${currentMinutes}:${currentSeconds}`);
      };

      audioElement.onplay = () => setPlay(true);
      audioElement.onpause = () => setPlay(false);
    }

    return () => {
      if (audioElement) {
        audioElement.ontimeupdate = null;
        audioElement.onloadedmetadata = null;
        audioElement.onplay = null;
        audioElement.onpause = null;
      }
    };
  }, [audio, track]);

  //use effect para cambiar el src del elemento de acuerdo al track y audio
  useEffect(() => {
    if (audio.current && track.url) {
      audio.current.src = track.url;
      audio.current.load();
    }
  }, [track, audio]);

  return {
    handlePlay,
    play,
    handlePause,
    currentTime,
    duration,
    duracionn,
    actualTime,
    handlePosition,
  };
};

export default useAudioPlayer;
