import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserSignInButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign in";
  const actionURL = user ? "api/auth/signout" : "api/auth/signin";
  return (
    <div>
      <Link href={actionURL} className="p-1 text-l text-color-accent hover:text-color-primary transition-all bg-color-dark text-center rounded">
        {actionLabel}
      </Link>
    </div>
  );
};
export default UserSignInButton;
