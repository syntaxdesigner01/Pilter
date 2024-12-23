import jwt, { JwtPayload } from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || '';


interface User {
    email: string;
    name: string;
}

export const sign_Jwt_Token = (user: User): string => {
    return jwt.sign({ name:user.name, email: user.email }, JWT_SECRET, { expiresIn: '30d' }); 
};


export const verify_Jwt_Token = (token: string): JwtPayload => {
    try {
        return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (error) {
        console.error("Token verification failed:", error);
        throw new Error("Invalid token");
    }
};

