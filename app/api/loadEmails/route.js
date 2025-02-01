// app/api/loadEmails/route.js
import { NextResponse } from "next/server";
const { fetchEmails } = require("./fetchEmails"); // <-- Adjust path as needed

export async function POST(request) {
  try {
    // Parse JSON from the request body
    const { user, password, host, port } = await request.json();
    
    // Call your fetchEmails function
    const emails = await fetchEmails({ user, password, host, port });

    // Return the emails in JSON format
    return NextResponse.json({ emails });
  } catch (error) {
    // If there's an error, return a 500 response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
