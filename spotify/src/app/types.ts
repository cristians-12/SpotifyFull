export interface Artist{
    id: string;
    name: string;
    image: string;
}

export interface ArtistCard extends Artist{
    key: string;
}