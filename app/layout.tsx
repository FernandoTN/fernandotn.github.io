import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Fernando Torres - AI Engineer & Entrepreneur',
    template: '%s | Fernando Torres',
  },
  description: 'AI Engineer, entrepreneur, and tech innovator. Exploring the frontiers of artificial intelligence and building the future.',
  keywords: ['AI', 'Machine Learning', 'Entrepreneurship', 'Technology', 'Innovation', 'Startups'],
  authors: [{ name: 'Fernando Torres' }],
  creator: 'Fernando Torres',
  publisher: 'Fernando Torres',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fernandotorres.io',
    title: 'Fernando Torres - AI Engineer & Entrepreneur',
    description: 'AI Engineer, entrepreneur, and tech innovator. Exploring the frontiers of artificial intelligence and building the future.',
    siteName: 'Fernando Torres',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fernando Torres - AI Engineer & Entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Torres - AI Engineer & Entrepreneur',
    description: 'AI Engineer, entrepreneur, and tech innovator. Exploring the frontiers of artificial intelligence and building the future.',
    images: ['/og-image.png'],
    creator: '@fernandotorres',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://fernandotorres.io',
    types: {
      'application/rss+xml': [{ url: 'https://fernandotorres.io/rss.xml', title: 'Fernando Torres Blog' }],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}