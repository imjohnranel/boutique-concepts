import type { Metadata } from "next";
import { Libre_Baskerville, Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Boutique Concepts | Elegant Otaku Fashion",
  description: "Sophisticated cosplay and wedding attire rental and retail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} ${poppins.variable} ${ibmPlexMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Header />
        <div className="flex flex-1 container mx-auto px-4 md:px-6">
          <Sidebar className="hidden lg:block py-6" />
          <main className="flex-1 py-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
