import NavBar from "@/components/NavBar";
import { Artist } from "./types";
import { ArtistContainer } from "@/components/container/ArtistContainer";

const getInitialArtists = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/artists`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  // const { data } = useFetchs(`${process.env.NEXT_PUBLIC_API_URI}/artists`);
  const data: Artist[] = await getInitialArtists();

  return (
    <>
      <NavBar />
      <ArtistContainer data={data} />
    </>
  );
}
