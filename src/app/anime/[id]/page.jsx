import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/app/utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log({ anime: anime.data.synopsis });
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <h1 className="md:text-2xl text-xl text-color-primary text-center my-3 mx-2">
        {anime.data.title} - {anime.data.year}
      </h1>
      <div className="flex flex-col md:w-4/5 bg-color-tertiary rounded shadow p-2 mx-2">
        <div className="flex md:flex-row flex-col items-center ">
          <Image src={anime.data.images.jpg.image_url} width={350} height={300} className="rounded max-w-64 max-h-64 my-4" />
          <div className="md:px-2">
            <p className="font-bold text-l text-color-primary">Judul : {anime.data.title}</p>
            <p className="font-bold text-l text-color-primary">Japanese : {anime.data.title_japanese}</p>
            <p className="font-bold text-l text-color-primary">Skor : {anime.data.score}</p>
            <p className="font-bold text-l text-color-primary">Status : {anime.data.status}</p>
            <p className="font-bold text-l text-color-primary">Tipe : {anime.data.type}</p>
            <p className="font-bold text-l text-color-primary">Total episode : {anime.data.episodes}</p>
            <p className="font-bold text-l text-color-primary">Durasi : {anime.data.duration}</p>
            <p className="font-bold text-l text-color-primary">Tahun rilis : {anime.data.year}</p>
            <p className="font-bold text-l text-color-primary">Studio : {anime.data.studios.map((studio) => studio.name)}</p>
            <p className="font-bold text-l text-color-primary">Genre : {anime.data.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <p className="text-l text-color-primary my-3">
          Sinopsis :<br />
          &emsp;{anime.data.synopsis}
        </p>
      </div>
      <VideoPlayer id={anime.data.trailer.youtube_id} />
    </div>
  );
};
export default Page;
