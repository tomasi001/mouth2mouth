import { NextResponse } from "next/server";
import { sendMailingListSignupNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Send notification email
    await sendMailingListSignupNotification(email);

    return NextResponse.json({
      success: true,
      message: "Successfully signed up for mailing list",
    });
  } catch (error) {
    console.error("Error in mailing-list route:", error);
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 }
    );
  }
}
