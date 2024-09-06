import Link from "next/link";
import AnimeList from "@/components/myanimelist";
import Header from "@/components/myanimelist/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);
  const decodedKeyword = decodeURI(keyword);
  return (
    <>
      <Header title={`Pencarian untuk ${decodedKeyword}...`} />
      <AnimeList api={searchAnime} />
    </>
  );
};
export default Page;
