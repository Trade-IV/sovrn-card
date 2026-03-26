import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruben Martinez IV — SOVRN",
  description: "Founder & CEO at SOVRN. Building AI-powered solutions for modern agencies.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ruben Martinez IV — SOVRN",
    description: "Founder & CEO at SOVRN. Building AI-powered solutions for modern agencies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="noise min-h-full flex flex-col">{children}</body>
    </html>
  );
}
