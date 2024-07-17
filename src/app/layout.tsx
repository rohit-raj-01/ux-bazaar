import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Providers from '@/components/Providers';
import { Toaster } from "sonner";
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn('relative h-full font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="relative flex flex-col min-h-screen">
            <Providers>
              <NextTopLoader color="#59a2ff" />
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
              <Footer />
            </Providers>
          </main>
        </ThemeProvider>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
