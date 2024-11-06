import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../../components/EmailTemplate";
import { CONTACT } from "@/app/constants";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.ADMIN_EMAIL;

// Regular expression pattern for email verification
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export async function POST(req) {
  try {
    // Parse the request body
    const { firstName, lastName, email, subject, message } = await req.json();

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        error: "Invalid email format",
        status: 400,
      });
    }

    // Validate other required fields
    if (!firstName || !lastName || !subject || !message) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: CONTACT.user_confirmation_email.subject,
      react: EmailTemplate({ firstName, lastName, subject, message }),
    });

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
