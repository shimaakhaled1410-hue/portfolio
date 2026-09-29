import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shimaakhaled.dev"),
  title: "Shimaa Khaled | Software Engineer & Flutter Developer",
  description:
    "Software Engineer and Flutter Developer specializing in Clean Architecture, BLoC/Cubit, Firebase cloud services, and Multimodal Gemini AI integrations. Based in Cairo, Egypt.",
  keywords: [
    "Shimaa Khaled",
    "Flutter Developer",
    "Software Engineer",
    "Mobile App Developer",
    "Clean Architecture",
    "BLoC",
    "Cubit",
    "Dart",
    "Firebase",
    "Gemini AI",
    "Cairo Egypt Developer",
    "Ain Shams University",
  ],
  authors: [{ name: "Shimaa Khaled" }],
  creator: "Shimaa Khaled",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shimaakhaled.dev",
    title: "Shimaa Khaled | Software Engineer & Flutter Developer",
    description:
      "Passionate Flutter Developer building scalable, cross-platform mobile apps with Clean Architecture, BLoC, Firebase, and AI.",
    siteName: "Shimaa Khaled Portfolio",
    images: [
      {
        url: "/assets/CaloGram_Freelancing_Project_Dashboard.png",
        width: 1200,
        height: 630,
        alt: "Shimaa Khaled - Flutter Mobile Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimaa Khaled | Software Engineer & Flutter Developer",
    description:
      "Crafting high-performance cross-platform mobile experiences with Flutter, Clean Architecture, and AI.",
    images: ["/assets/CaloGram_Freelancing_Project_Dashboard.png"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
