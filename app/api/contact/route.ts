import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Add hCaptcha verification
    // TODO: Add rate limiting (e.g., using Vercel KV or Upstash)
    // TODO: Send email using Resend
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@buildwithaisha.com',
    //   to: 'aisha@buildwithaisha.com',
    //   subject: `New contact from ${body.name}`,
    //   text: body.message,
    //   replyTo: body.email,
    // });

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message.substring(0, 50) + '...',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}



