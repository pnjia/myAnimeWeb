import Link from "next/link";
import InputSearch from "./InputSearch";
import UserSignInButton from "./UserSignInButton";
import { authUserSession } from "@/libs/auth-libs";

const Navbar = async () => {
  const user = await authUserSession();
  const Dashboard = () => {
    return (
      <div className="absolute top-7 right-20">
        <Link href="/users/dashboard" className=" mx-2 p-1 bg-color-dark text-color-accent hover:text-color-primary transition-all rounded text-center text-l">
          Dashboard
        </Link>
      </div>
    );
  };
  return (
    <header>
      <div className="flex md:justify-between md:flex-row flex-col items-center justify-center p-4 bg-color-accent relative">
        <Link href="/">
          <div className="cursor-pointer text-center">
            <h1 className="font-bold text-2xl text-color-primary ">MyAnimeWeb</h1>
            <h2 className="font-bold text-xs text-color-primary">Web animelist Indonesia : zexisto</h2>
          </div>
        </Link>
        <InputSearch />
        {user ? <Dashboard /> : null}
        <UserSignInButton />
      </div>
    </header>
  );
};
export default Navbar;
