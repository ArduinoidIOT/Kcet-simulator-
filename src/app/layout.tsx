import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Zap } from "lucide-react";

import { AuthProvider } from "@/lib/contexts/AuthContext";
import { CollegeProvider } from "@/lib/contexts/CollegeContext";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";


export const metadata: Metadata = {
  title: "KCET Predictor",
  description: "The most accurate and premium college prediction platform for KCET aspirants.",
  verification: {
    google: "googlec241161ab16e5be3",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
        <AuthProvider>
          <CollegeProvider>
            <main>{children}</main>
          </CollegeProvider>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
