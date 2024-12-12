
import SignupPage from "@/app/Auth/signup/page"
import { auth } from "@/auth"



export default async function HomePage() {
    const session = await auth()
 
    if (!session) {
        return <SignupPage/>
    }


console.log(session)


  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p>
        Welcome, {session.user?.email}
      </p>
    </div>
  );
}
