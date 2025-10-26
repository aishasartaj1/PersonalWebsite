import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import '@/styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aisha Sartaj — AI/ML Engineer & Builder',
  description: 'Portfolio of Aisha Sartaj — exploring intelligence, empathy, and creativity through code. AI/ML engineer building human-centered systems.',
  keywords: ['Aisha Sartaj', 'AI Engineer', 'ML Engineer', 'Portfolio', 'Multi-Agent Systems', 'Emotion AI'],
  authors: [{ name: 'Aisha Sartaj' }],
  creator: 'Aisha Sartaj',
  metadataBase: new URL('https://buildwithaisha.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildwithaisha.com',
    title: 'Aisha Sartaj — AI/ML Engineer & Builder',
    description: 'Portfolio of Aisha Sartaj — exploring intelligence, empathy, and creativity through code.',
    siteName: 'Build with Aisha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aisha Sartaj Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aisha Sartaj — AI/ML Engineer & Builder',
    description: 'Portfolio of Aisha Sartaj — exploring intelligence, empathy, and creativity through code.',
    images: ['/og-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>

        <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur-sm shadow-soft">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <a href="#hero" className="flex items-center no-underline">
              <Image 
                src="/img/logo.png" 
                alt="Aisha Sartaj Logo" 
                width={48} 
                height={48}
                className="h-12 w-auto"
                priority
              />
            </a>

            <div className="flex items-center gap-6">
              <ul className="hidden items-center gap-8 md:flex" role="list">
                <li>
                  <a href="#about" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#now" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    Now
                  </a>
                </li>
                <li>
                  <a href="#experience" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navlink text-sm font-medium text-ink-2 no-underline transition-colors hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
              
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="border-t border-border bg-surface px-6 py-10">
          <div className="mx-auto max-w-3xl text-center text-sm text-ink-2">
            <p>&copy; {new Date().getFullYear()} Aisha Sartaj. Built with Next.js, Tailwind, and Framer Motion.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


