import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valaithalam | Custom Web Development & Social Media Management",
  description: "Partner with Valaithalam for expert full-stack development, high-performance web applications, and results-driven social media management. Let's build your digital success.",
  openGraph: {
    title: "Valaithalam | Custom Web Development & Social Media Management",
    description: "Partner with Valaithalam for expert full-stack development, high-performance web applications, and results-driven social media management. Let's build your digital success.",
    url: 'https://valaithalam.site', // Placeholder URL
    siteName: 'Valaithalam',
    images: [
      {
        url: 'https://valaithalam.site/og-image.png', // Placeholder image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Valaithalam | Custom Web Development & Social Media Management",
    description: "Partner with Valaithalam for expert full-stack development, high-performance web applications, and results-driven social media management. Let's build your digital success.",
    images: ['https://valaithalam.site/twitter-image.png'], // Placeholder image
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Valaithalam',
  url: 'https://valaithalam.site', // Placeholder URL
  logo: 'https://valaithalam.site/logo.png', // Placeholder URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
