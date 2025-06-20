"use client";
import { useState } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import Chatbot from "@/components/Chatbot";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Toaster } from "@/components/ui/toaster";

// theme provider
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LoadingStateProvider } from "@/components/ui/LoadingStateProvider";
import AOSInitializer from "@/components/ui/AOSInitializer";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }) {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ahmad Gilvan | Web Developer Portfolio</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="google-site-verification" content="vU7EaUtw72ofuO2O9loJkXFTPcVOuxKS4BQSxCVUYMw" />
        <meta name="description" content="Halo, saya Gilvan! Ini adalah portofolio saya yang menampilkan proyek-proyek web development dengan sentuhan desain dan fungsionalitas." />
        <meta name="keywords" content="Ahmad Gilvan, Portfolio, Mahasiswa Informatika, Next.js, Tailwind, Web Developer" />
        <meta name="author" content="Ahmad Gilvan" />
        <meta property="og:title" content="Ahmad Gilvan | Portfolio" />
        <meta property="og:description" content="Lihat karya-karya Gilvan dalam bidang web development." />
        <meta property="og:url" content="https://ahmad-gilvan.vercel.app" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Gilvan Portfolio" />
        <meta property="og:image" content="https://ahmad-gilvan.vercel.app/og-image.jpg" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LoadingStateProvider>
            <AOSInitializer />
            {showWelcome ? (
              <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
            ) : (
              <>
                <Header />
                {children}
                <Footer />
                <Chatbot />
                <BackToTopButton />
                <Toaster />
              </>
            )}
          </LoadingStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
