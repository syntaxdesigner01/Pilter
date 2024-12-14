import { NextResponse } from "next/server";
import connectdb from "../../../../lib/db";
import User from "../../../../lib/models/dbSchema";
import generateId from "../../../../lib/generateId";
import bcrypt from 'bcrypt';



export const POST = async (request: Request) => {

    try {
        const [email, password] = await request.json()
        await connectdb();

        const existingUser = User.findOne({ email })

        if (existingUser) {
            console.log({ body: existingUser, message: 'User  already exists' });

            return NextResponse.json(
                { message: 'User  already exists! Try signing in with your email address' },
                { status: 401 }
            );
        }

        else {
            let id;
            let existingUserId;
            do {
                id = generateId();
                existingUserId = await User.findOne({ id: id });
            } while (existingUserId);

            const hashedPassword = await bcrypt.hash(password, 10)

            const userData = {
                id: id,
                name: email.split('@')[0],
                email,
                password: hashedPassword
            }
            
            const newUser = new User(userData)
            await newUser.save()

            console.log('New user created');
            console.log(newUser)
            return { body: newUser, message: 'Account created successfully', status: 200 };
        }


    } catch (error) {

        return NextResponse.json({ message: `An error occurred ${error}` });
    }
}