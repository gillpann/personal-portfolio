import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

import AOSInitializer from "@/components/AOSInitializer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Gilvan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AOSInitializer />
          <Header />
          {children}
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
