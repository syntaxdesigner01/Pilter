// import SignInPage from "@/app/Auth/signin/page"
// import SignupPage from "@/app/Auth/signup/page"
import { auth } from "@/utils/auth";
import LogoutWithGooglr from "@/components/Auth/LogoutWithGooglr";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    // return <SignInPage/>
  }

  console.log(session);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <p>Welcome {session && session.user?.email}</p>
      <LogoutWithGooglr />
    </div>
  );
}
