import Link from "next/link";
import AnimeList from "../components/myanimelist";
import Header from "@/components/myanimelist/Header";
import { getAnimeResponse, getRecommendedResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getRecommendedResponse("recommendations/anime", "entry");
  console.log({ recommendedAnime });
  recommendedAnime = reproduce(recommendedAnime, 8);
  return (
    <>
      <Header title="Paling populer" linkHref="populer" linkTitle="Lihat semua" />
      <AnimeList api={topAnime} />
      <Header title="Rekomendasi anime" />
      <AnimeList api={recommendedAnime} />
    </>
  );
};
export default Page;
