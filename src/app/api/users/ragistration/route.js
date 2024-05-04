// import { connect } from "@/dbconfig/dbconfig";
// import User from '@/models/userModel';
// import { NextApiRequest, NextApiResponse } from 'next';
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// connect();

// export default async function handler(req) {
//     if (req.method === 'POST') {
//         try {
//             const { username, email, password } = req.body;

//             // Check if user already exists
//             const existingUser = await User.findOne({ email });
//             if (existingUser) {
//                 return res.status(400).json({ error: 'User already exists' });
//             }

//             // Hash password
//             const salt = await bcryptjs.genSalt(10);
//             const hashedPassword = await bcryptjs.hash(password, salt);

//             // Create new user
//             const newUser = new User({
//                 username,
//                 email,
//                 password: hashedPassword,
//             });

//             const savedUser = await newUser.save();

//             // Create JWT token
//             const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
//                 expiresIn: '1d' // Token expires in 1 day
//             });

//             res.status(201).json({
//                 message: 'User registered successfully',
//                 token
//             });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Server error' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }


import { connect } from "@/dbconfig/dbconfig";
import Users from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request) {
    try {
        const reqBody = request.json()
        const { username, email, password } = await reqBody
        console.log(reqBody);
       
        const user = await Users.findOne({email})

        if (user) {
      // return NextRequest.json({ error: 'User already exists' }, { status: 500 })
          return   NextResponse.json({ error: 'User already exists' }, { status: 500 });
        }

        const salt = await bcryptjs.genSalt(10)
        // const hashpassward = await bcryptjs.hashSync(password, salt)
        const hashpassward = await bcryptjs.hash(password, salt)

        const newUser = new Users({
            username,
            email,
            password :hashpassward,
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        await sendEmail({email, emailType:"VERIFY", userID: savedUser._id})

        return NextResponse.json({
            massage : 'User registered successfully in date',
            success : true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 }, )
    }
}