// import SignInPage from "@/app/Auth/signin/page"
// import SignupPage from "@/app/Auth/signup/page"
import { auth } from "@/utils/auth";
// import LogoutWithGooglr from "@/components/Auth/LogoutWithGooglr";
import KittyAi from "../kittyAi/page";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    // return <SignInPage/>
  }

  console.log(session);

  return (
   <KittyAi/>
  );
}
