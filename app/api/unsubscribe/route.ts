import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    console.log("Got GET request to /api/unsubscribe");

    const emails = await prisma.email.findMany();

    console.log(emails);


    return NextResponse.json({
        "message": "Unsubscribed succcessfully"
    }); 


}