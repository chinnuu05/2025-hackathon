import { NextResponse } from "next/server";
import { sortByDate, sortBySender } from "./sort"; // Adjust path as needed

export async function POST(request) {
  try {
    const { emails, sortBy } = await request.json();

    if (!emails || !Array.isArray(emails)) {
      return NextResponse.json({ error: "Invalid request. Provide an array of emails." }, { status: 400 });
    }

    let sortedEmails;

    switch (sortBy) {
      case "date":
        sortedEmails = sortByDate(emails);
        break;
      case "sender":
        sortedEmails = sortBySender(emails);
        break;
      default:
        return NextResponse.json({ error: "Invalid sortBy value. Use 'date' or 'sender'." }, { status: 400 });
    }

    return NextResponse.json({ sortedEmails });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
