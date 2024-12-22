import { NextResponse } from "next/server";
import connectdb from "../../../../lib/db";
import User from "../../../../lib/models/dbSchema";
import generateId from "../../../../lib/generateId";
// import bcrypt from 'bcrypt';


export const POST = async (request: Request) => {

    try {
        const { email, password } = await request.json()
        await connectdb();

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            // console.log({ user: existingUser, message: 'User  already exists' });

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


            const userData = {
                id: id,
                name: email.split('@')[0],
                email,
                password
            }

            const newUser = new User(userData)
            await newUser.save()

            console.log('New user created');
            console.log({ user: newUser, message: 'Account created successfully', status: 200 })
            return NextResponse.json({ user: newUser, message: 'Account created successfully', status: 200 });
        }

    } catch (error) {

        console.log("Error in creating data: " + error, { status: 500 });

        return new NextResponse(
            JSON.stringify({
                message:
                    "Error in Signing-up user. Please check your Internet connection and try again.",
                error: error,
            }),
            { status: 500 }
        );
    }
}



// export const GET = async (request: Request) => {

//     try {

//         const { email, password } = await request.json()
//         await connectdb();

//         const existingUser = await User.findOne({ email })

//         if (existingUser.password === bcrypt.compare(password)){

//             return NextResponse.json({user:existingUser, message: 'login successful',status:200 })
//         }else{
//             return NextResponse.json({message:'Invalid  eamil or password',status:501})
//         }
//     } catch (error) {
//         return new NextResponse(
//             JSON.stringify({
//                 message:
//                     "Error in login user in. Please check your Internet connection and try again.",
//                 error: error,
//             }),
//             { status: 500 }
//         );
//     }

// }