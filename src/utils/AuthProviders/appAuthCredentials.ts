"use server";

import { signIn, signOut } from '@/auth';
import generateId from '../../../lib/generateId';
import User from '../../../lib/models/dbSchema';
import connectdb from '../../../lib/db';

interface userData {
    id: string;
    name: string;
    email: string;
    password: string
}

// const users = [
//     {
//         id: '1',
//         name: 'Joseph Akpan',
//         email: 'akpanjoseph2021@gmail.com',
//         password: '1111'
//     }
// ];

export async function signInWithGoogle() {
    await signIn("google");
}

export async function signOutWithGoogle() {
    await signOut();
    console.log("Signed out");
}

export async function signUpWithCredential({ email, password }: { email: string, password: string }) {

    try {
        await connectdb();
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            console.log({ body: existingUser, message: 'User already exists' })
            return JSON.stringify({ message: 'User already exists!.Try Signing-In with your email address', status: 401 });
        } else {
            let id;
            let existingUserId;
            do {
                id = generateId();
                existingUserId = await User.findOne({ id: id });
            } while (existingUserId);

            const userData = {
                id: id,
                name: email.split('@')[0],
                email,
                password
            } as userData

            const newUser = new User(userData)
            await newUser.save()

            console.log('New user created');
            console.log(newUser)

            return JSON.stringify({ user: newUser, message: 'Account created successfully', status: 200 });
        }
    } catch (error) {
        console.log("Error in creating data: " + error, { status: 500 });

        return JSON.stringify({
            message:
                "Error in Signing-up user. Please check your Internet connection and try again.",
            error: error,
        }),
            { status: 500 }
    }
}


export async function signInWithCredential({ email, password }: { email: string, password: string }) {
    try {
        await connectdb();
        const existingUser = await User.findOne({ email })

        if (existingUser && existingUser.password === password) {

            console.log({ body: existingUser, message: 'Welcome Back!' })
            return { user: existingUser, message: 'Welcome Back!', status: 200 };
        } else {
            return { message: 'Invalid username or password', status: 404 }
        }
    } catch (error) {
        return (
            JSON.stringify({
                message:
                    "Error in Signing-up user. Please check your Internet connection and try again.",
                error: error,
            }),
            { status: 500 }
        );
    }
}
