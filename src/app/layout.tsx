import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Surya R | Aspiring Software Developer',
  description:
    'Portfolio of Surya R, B.E. Computer Science & Engineering student at Bannari Amman Institute of Technology, Sathyamangalam (Expected 2029). Focused on C, Python, and Web Engineering.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
