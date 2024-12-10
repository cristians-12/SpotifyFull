import { Track } from "@/types/music/track.type";
import { create } from "zustand";

interface UserMusic {
  track: Track;
  changeTrack: (newTrack: Track) => void;
}

const useUserMusic = create<UserMusic>((set) => ({
  track: {
    id: "",
    name: "",
    artist: "",
    album_cover_url: "",
    album_title: "",
    url: "",
  },
  changeTrack: (newTrack: Track) => set(() => ({ track: newTrack })),
}));

export default useUserMusic;
