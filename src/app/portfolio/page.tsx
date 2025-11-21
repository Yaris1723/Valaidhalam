import React from 'react';
import Portfolio from '@/components/Portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Portfolio | Valaithalam',
    description: 'Explore our successful projects and case studies showcasing our expertise in web development and digital solutions.',
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen">
            <Portfolio />
        </main>
    );
}
