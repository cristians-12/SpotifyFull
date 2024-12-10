import { Track } from "./track.type";

export interface Album {
    _id: string;
    image: string;
    album_title: string;
    tracks: Track[];
  }