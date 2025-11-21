import { NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple input sanitization
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return new NextResponse(
        JSON.stringify({ message: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    if (!EMAIL_REGEX.test(email)) {
      return new NextResponse(
        JSON.stringify({ message: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
    };

    // Length validation
    if (sanitizedData.fullName.length < 2 || sanitizedData.fullName.length > 100) {
      return new NextResponse(
        JSON.stringify({ message: 'Name must be between 2 and 100 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 1000) {
      return new NextResponse(
        JSON.stringify({ message: 'Message must be between 10 and 1000 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In a real application, you would send an email here using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer
    // For this demo, we'll just log the data to the console.

    console.log('--- New Contact Form Submission ---');
    console.log('Full Name:', sanitizedData.fullName);
    console.log('Email:', sanitizedData.email);
    console.log('Message:', sanitizedData.message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('-----------------------------------');

    // TODO: Implement rate limiting to prevent spam
    // Consider using a library like 'rate-limiter-flexible' or middleware

    return new NextResponse(
      JSON.stringify({ message: 'Your message has been sent successfully! We\'ll get back to you within one business day.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse(
      JSON.stringify({ message: 'There was an error sending your message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
