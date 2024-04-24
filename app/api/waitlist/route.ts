import connectDB from "@/lib/mongodb";
import Waitlister from "@/models/waitlisters";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        await connectDB();

        if (!body.modalWaitEmail) {
            return NextResponse.json({status: 400, message: "Email is required" });
        }
        const alreadyOnWaitlist = await Waitlister.findOne({ email: body.modalWaitEmail });
        if (alreadyOnWaitlist) {
            return NextResponse.json({ status: 400, message: "You are already on the waitlist" });
        }
        const newWaitlister = await Waitlister.create({
            email: body.modalWaitEmail,
            name: body.modalWaitName
        });

        newWaitlister.save();
        if (!newWaitlister) {
            return NextResponse.json({ status: 400, message: "Error adding to waitlist" });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" });
    }
    return NextResponse.json({ status: 200, message: "Added to waitlist" });
}