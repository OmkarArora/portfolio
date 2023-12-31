import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omkar Arora",
  description: "Software Engineer | Frontend Developer",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.className} mx-4 mb-40 mt-8 flex min-h-screen max-w-2xl flex-col antialiased lg:mx-auto`,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="flex gap-2 pb-10 pt-6">
            <Link href={"/"}>home</Link>
            <Link href={"/blog"}>blog</Link>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
