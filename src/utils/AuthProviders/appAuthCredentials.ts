"use server";

import { signIn, signOut } from '@/utils/auth';
import generateId from '../../../lib/generateId';
import User from '../../../lib/models/dbSchema';
import connectdb from '../../../lib/db';
import bcrypt from 'bcrypt';
import { sign_Jwt_Token } from '../../../lib/tokenGenerator';
import GoogleUser from '../../../lib/models/dbSchemaGoogleAuth';
// import { NextResponse } from 'next/server';

export interface userData {
    id?: string;
    name: string;
    email: string;
    password?: string
    image: string
}

export interface googleUserData {
    name: string;
    email: string;
    image: string
}

export async function signInWithGoogle() {
    const result = await signIn("google")
    return result;
}

export async function signOutWithGoogle() {
    await signOut();
    console.log("Signed out");
}


export async function registerGoogleUser(user: googleUserData) {
    try {
        await connectdb();
        const existingUser = await GoogleUser.findOne({ email: user.email });
        if (existingUser) {
            return {
                message: 'User Signed in successfully',
                status: 200,
            };
        } else {
            let id;
            let existingUserId;
            do {
                id = generateId();
                existingUserId = await User.findOne({ id });
            } while (existingUserId);

            const userData = {
                id,
                name: user.name,
                email: user.email,
                image: user.image,
            };
            const newUser = new GoogleUser(userData);
            await newUser.save();
            console.log('New user created:', { message: 'Account created successfully', status: 200 });
            return {
                message: 'Account created successfully',
                status: 200,
            };

        }
    } catch (error) {
        console.log(error);
    }
}

export async function signUpWithCredential({ email, password }: { email: string; password: string }) {
    try {
        await connectdb();
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log({ user: existingUser, message: 'User  already exists' });
            return {
                message: 'User already exists! Try signing up with another email address.',
                status: 401,
            };
        } else {
            let id;
            let existingUserId;
            do {
                id = generateId();
                existingUserId = await User.findOne({ id });
            } while (existingUserId);


            const userData = {
                id,
                name: email.split('@')[0],
                email,
                password: password,
            };

            const newUser = new User(userData);
            await newUser.save();

            const plainUser = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            };

            const token: string = sign_Jwt_Token(plainUser);

            console.log('New user created:', { token, message: 'Account created successfully', status: 200 });

            return {
                token,
                message: 'Account created successfully',
                status: 200,
            };
        }
    } catch (error) {
        console.error("Error in creating data:", error);
        return {
            message: "Error in signing up user. Please check your Internet connection and try again.",
            error: (error as Error).message || error,
            status: 500,
        };
    }
}

export async function signInWithUserCredential({ email, password }: { email: string; password: string }) {
    try {
        await connectdb();
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);

            if (isPasswordValid) {
                const plainUser = {
                    id: existingUser.id,
                    name: existingUser.name,
                    email: existingUser.email,
                };

                const token = sign_Jwt_Token(plainUser);
                console.log({ token, message: 'Welcome Back!' });

                return {
                    token,
                    message: 'Welcome Back!',
                    status: 200,
                };
            } else {
                return {
                    message: 'Invalid username or password',
                    status: 401,
                };
            }
        } else {
            return {
                message: 'Invalid credentials. Try again by creating an account',
                status: 404,
            };
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        return {
            message: "Error in signing in user. Please check your Internet connection and try again.",
            error: (error as Error).message || error,
            status: 500,
        };
    }
}