import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return new NextResponse(JSON.stringify({ message: 'All fields are required.' }), { status: 400 });
    }

    // In a real application, you would send an email here.
    // For this demo, we'll just log the data to the console.
    console.log('--- New Contact Form Submission ---');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('---------------------------------');

    return new NextResponse(JSON.stringify({ message: 'Your message has been sent successfully!' }), { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse(JSON.stringify({ message: 'There was an error sending your message.' }), { status: 500 });
  }
}
