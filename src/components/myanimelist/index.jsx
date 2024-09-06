import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4 gap-4">
      {api.data?.map((anime) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={anime.mal_id}>
            <div className=" flex flex-col items-center" id={anime.mal_id}>
              <Image src={anime.images.webp.image_url} width={350} height={350} title={anime.title} alt="gambar anime" className="min-h-64 max-h-64 object-cover rounded" />
              <h1 className="font-bold p-2 text-center">{anime.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AnimeList;
