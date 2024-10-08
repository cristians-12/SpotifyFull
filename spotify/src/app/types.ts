export interface Artist{
    _id: string;
    name: string;
    image: string;
}

export interface ArtistCard extends Artist{
    key: string;
}

export interface Album{
    _id:string;
    image:string;
    title:string;
}