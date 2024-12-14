import { Album } from "@/types/music/album.type";

export interface Artist {
  _id: string;
  name: string;
  image: string;
  poster: string;
  albums: Album[];
}

// export interface ArtistCard extends Artist {
//   key: string;
// }
