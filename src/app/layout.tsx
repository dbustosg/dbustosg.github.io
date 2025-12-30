import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import WelcomeNotification from '@/components/WelcomeNotification';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Daniel Bustos - Software Engineer Portfolio',
  description: 'The professional portfolio of Daniel Bustos, a skilled software engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
