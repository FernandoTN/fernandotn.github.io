import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fernandotn.github.io'),
  title: {
    default: 'Fernando Torres - ALM Research & Stanford MSx',
    template: '%s | Fernando Torres',
  },
  description:
    'Stanford MSx researcher investigating Autonomous Language Models (ALMs) and healthcare executive turned tech-focused founder.',
  keywords: [
    'Autonomous Language Models',
    'ALM',
    'Stanford MSx',
    'AI Research',
    'Healthcare Technology',
    'Business Development',
  ],
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
    url: 'https://fernandotn.github.io',
    title: 'Fernando Torres - ALM Research & Stanford MSx',
    description:
      'Stanford MSx researcher investigating Autonomous Language Models (ALMs) and healthcare executive turned tech-focused founder.',
    siteName: 'Fernando Torres',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fernando Torres - ALM Research & Stanford MSx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Torres - ALM Research & Stanford MSx',
    description:
      'Stanford MSx researcher investigating Autonomous Language Models (ALMs) and healthcare executive turned tech-focused founder.',
    images: ['/og-image.png'],
    creator: '@FernandoTN',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://fernandotn.github.io',
    types: {
      'application/rss+xml': [
        {
          url: 'https://fernandotn.github.io/rss.xml',
          title: 'Fernando Torres Blog',
        },
      ],
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
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
