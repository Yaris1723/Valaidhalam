import React from 'react';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Valaithalam',
    description: 'Get in touch with our team to discuss your project. We respond within one business day.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactForm />
        </main>
    );
}
