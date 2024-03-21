import { connect } from "@dbConfig/dbConfig";
import User from "@models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()
export async function POST(request, NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"}, {status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)


        const newUser=  new User({
            username,
            email,
            password:hashedPassword
        })

        const SavedUser = await newUser.save()
        console.log(SavedUser);

        return NextRequest.json({ 
            message: "User Created successfully",
            success: true,
            SavedUser})



    } catch (error) {
        return NextRequest.json({ error: error.message }, {status:500});
    }
}