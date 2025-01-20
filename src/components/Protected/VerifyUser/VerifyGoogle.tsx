import { auth } from "@/utils/auth";
import SignInPage from "@/app/Auth/signin/page";
import KittyAi from "@/app/(Protected)/kittyAi/page";

export default async function VerifyGoogle() {
  const session = await auth();

  if (!session) {
    return <SignInPage />;
  }
  return <KittyAi />;
}
