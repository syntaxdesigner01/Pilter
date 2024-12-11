import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google,
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            }
        })],
})