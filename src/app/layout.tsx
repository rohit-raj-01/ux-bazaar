import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Providers from '@/components/Providers';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UX Bazaar",
  description: "Digital Marketplace",
};

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

            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            </Providers>
          </main>
        </ThemeProvider>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
