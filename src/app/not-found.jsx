import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <FileSearch size={44} className="text-color-accent" />
      <h1 className="text-color-accent font-bold text-2xl">Halaman tidak ditemukan</h1>
      <Link href="/" className="text-color-primary hover:text-color-accent underlined transition-all">
        Kembali
      </Link>
    </div>
  );
};
export default PageNotFound;
