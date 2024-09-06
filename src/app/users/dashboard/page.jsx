import AnimeList from "@/components/myanimelist";
import { authUserSession } from "@/libs/auth-libs";
import PageNotFound from "@/app/not-found";

const Page = async () => {
  const user = await authUserSession();
  console.log(user);
  const Dashboard = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="text-color-primary text-xl my-4">{user.name}</h1>
        <img src={user.image} alt="gambar" width={250} height={250} className="rounded-full" />
        <h1 className="text-color-primary text-xl my-4">{user.email}</h1>
      </div>
    );
  };
  return user ? <Dashboard /> : <PageNotFound />;
};
export default Page;
