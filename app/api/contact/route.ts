import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;
  try {
    const response = await resend.emails.send({
      from: `hello@mail.roots.homes`,
      to: "proweb.master94@gmail.com",
      subject: `New message from ${name}`,
      html: `<p>Hi This is ${name}</p><p>My Email address is ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
};