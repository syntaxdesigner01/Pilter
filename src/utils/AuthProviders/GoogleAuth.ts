"use server";

import { signIn, signOut } from '@/auth';

const users = [
    {
        id: 1,
        name: 'Joseph Akpan',
        email: 'akpanjoseph2021@gmail.com',
        password: '1111'
    }
];

export async function signInWithGoogle() {
    await signIn("google");
}

export async function signOutWithGoogle() {
    await signOut();
    console.log("Signed out");
}

export async function signInWithCredential({email, password}:{email: string, password: string}) {
    const existingUser = users.find(user => user.email === email);

    if (existingUser){
        console.log('User already exists');
        console.log({ body: existingUser, message: 'User already exists' })
        return {body:existingUser, message: 'User already exists' }; 
    }else{
        const newUser = {
            id: users.length + 1,
            name: email.split('@')[0],
            email,
            password
        }

        users.push(newUser);
        console.log('New user created');
        console.log(newUser)
        return newUser;
    }

 

}
