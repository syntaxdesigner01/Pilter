import SignupPage from "@/app/Auth/signup/page"
import { auth } from "@/auth"


export default async function HomePage() {
    const session = await auth()

    if (!session) {
        return <SignupPage/>
    }

  return (
    <div>page</div>
  )
}
