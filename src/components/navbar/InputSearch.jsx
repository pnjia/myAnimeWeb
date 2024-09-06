"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="flex relative">
      <input id="inputSearch" onKeyDown={handleSearch} placeholder="cari anime" className="outline-none  px-3 h-8 w-fit rounded-md mt-2" ref={searchRef} />
      <button className="absolute right-1 top-3" onClick={handleSearch}>
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};
export default InputSearch;
