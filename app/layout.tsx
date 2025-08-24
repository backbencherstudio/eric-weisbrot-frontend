
import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import TopBar from "@/components/Shared/layouts/TopBar";
import Navbar from "@/components/Shared/layouts/Navbar";
import Footer from "@/components/Shared/layouts/Footer";
import AccessiBeWidget from "@/components/Widget/accessibe-widget";
import Script from "next/script";
import { Toaster } from "sonner";
import FooterBanner from "@/components/Shared/layouts/FooterBanner";

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
          {/* <AccessiBeWidget licenseKey={process.env.NEXT_PUBLIC_ACCESSIBE_LICENSE_KEY} /> */}
          <FooterBanner/>
        <Footer />
        <Toaster position="top-right" richColors/>
      </body>
    </html>
  );
}
