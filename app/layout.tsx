"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import TopBar from "@/components/Shared/layouts/TopBar";
import Navbar from "@/components/Shared/layouts/Navbar";
import Footer from "@/components/Shared/layouts/Footer";
import AccessiBeWidget from "@/components/Widget/accessibe-widget";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: AppConfig().app.name,
//   description: AppConfig().app.slogan,
// };

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
        <div className="border p-10">
          <AccessiBeWidget licenseKey={process.env.NEXT_PUBLIC_ACCESSIBE_LICENSE_KEY} />

        </div>
        <Footer />
          {/* <Script
          strategy="afterInteractive" // Ensures the script is loaded after the page is interactive
          src="https://acsbapp.com/apps/app/dist/js/app.js"
          onLoad={() => {
            if (typeof window !== 'undefined' && window.acsbJS) {
              window.acsbJS.init();
            }
          }}
        /> */}
      </body>
    </html>
  );
}
