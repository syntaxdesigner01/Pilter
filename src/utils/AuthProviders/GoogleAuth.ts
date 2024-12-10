// src/auth/authActions.ts
"use server";

import { signIn,signOut,auth} from '@/auth';

export async function signInWithGoogle() {
    await signIn("google");
    const session = await auth()

   
    console.log(session?.user);

}
export async function signOutWithGoogle() {
    await signOut();
    console.log("Signed out");
}