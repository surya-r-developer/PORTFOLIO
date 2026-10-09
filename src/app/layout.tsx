import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Surya R | Aspiring Software Developer',
  description:
    'Production portfolio and personal digital identity of Surya R, B.E. Computer Science & Engineering student at Bannari Amman Institute of Technology, Sathyamangalam (Expected 2029). Focused on C, Python, and Web Engineering.',
  keywords: [
    'Surya R',
    'Surya R Portfolio',
    'Bannari Amman Institute of Technology',
    'BIT Sathyamangalam',
    'CSE Student',
    'Aspiring Software Developer',
    'Full Stack Developer',
    'surya-r-developer',
  ],
  authors: [{ name: 'Surya R' }],
  openGraph: {
    title: 'Surya R | Aspiring Software Developer',
    description:
      'Personal developer portfolio of Surya R, Computer Science & Engineering student at BIT Sathyamangalam.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Surya R Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya R | Aspiring Software Developer',
    description: 'Personal developer portfolio of Surya R - B.E. CSE Student.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-400 selection:text-navy-950`}
      >
        {children}
      </body>
    </html>
  );
}
