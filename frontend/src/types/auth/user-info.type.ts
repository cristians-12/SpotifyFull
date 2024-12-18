import { Track } from "../music/track.type";

export interface User{
    name: string;
    email: string;
    favorites?: Track[];
}