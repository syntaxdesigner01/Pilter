import SignupPage from "@/app/Auth/signup/page"
import { auth } from "@/auth"
import Image from "next/image"


export default async function HomePage() {
    const session = await auth()

    let firstname= ""
    let lastname = ""

    if(session?.user?.name){
       [firstname, lastname] = session?.user?.name.split(" ");
    }

    if (!session) {
        return <SignupPage/>
    }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p>{session.user?.name}</p>
      <Image
        src={session.user?.image as string}
        alt=""
        width={50}
        height={50}
        className="rounded-full"
      />
      <p>
        Welcome,{" "}
        <span className="h-10 w-10 rounded-full border-2 bg-black  text-white p-2 ">
          {firstname[0]}
          {lastname[0]}
        </span>
      </p>
    </div>
  );
}
