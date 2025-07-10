import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import TopBar from "@/components/Shared/layouts/TopBar";
import Navbar from "@/components/Shared/layouts/Navbar";
import Footer from "@/components/Shared/layouts/Footer";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="poppins">
        <TopBar/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
