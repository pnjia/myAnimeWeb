import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex  justify-between  items-center p-4 ">
      <h1 className="font-bold text-sky-500 text-xl  md:text-2xl text-color-primary ">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={`/${linkHref}`} className="md:text-xl text-sm my-2 text-color-primary hover:text-color-accent underline hover:text-sky-500 text-gray-50 transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
