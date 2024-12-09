import { Track } from "@/types/music/track";
import { create } from "zustand";

interface UserMusic {
  track: Track;
  changeTrack: (newTrack: Track) => void;
}

const useUserMusic = create<UserMusic>((set) => ({
  track: {
    id: "",
    name: "",
    artist_name: "",
    album_cover_url: "",
    album_title: "",
    url: "",
  },
  changeTrack: (newTrack: Track) => set(() => ({ track: newTrack })),
}));

export default useUserMusic;
