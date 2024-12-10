"use server";

import { signIn, signOut } from '@/auth';

export async function signInWithGoogle() {
    await signIn("google");
    // Do not fetch the session here; handle it on the client side
}

export async function signOutWithGoogle() {
    await signOut();
    console.log("Signed out");
}