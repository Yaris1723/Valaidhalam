import React from 'react';
import ServicesOverview from '@/components/ServicesOverview';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Valaithalam',
    description: 'Discover our comprehensive digital services including full-stack development, web applications, and social media management.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <ServicesOverview />
        </main>
    );
}
