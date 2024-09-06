"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "../utilities/HeaderMenu";
import Pagination from "../utilities/Pagination";
import AnimeList from "@/components/myanimelist";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </>
  );
};
export default Page;
