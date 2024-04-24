'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from '../components/nav/Navbar';
import FooterNavBar from "@/components/footer/footerNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { useEffect } from "react";
import { useStateContext } from "./context/state";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const { urlToUse, setUrlToUse, setLoading } = useStateContext();

  useEffect(() => {
    if (urlToUse === '') {
       if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_BASE_URL !== undefined && process.env.NEXT_PUBLIC_BASE_URL !== '' && process.env.NEXT_PUBLIC_BASE_URL !== null) {
        setUrlToUse(process.env.NEXT_PUBLIC_BASE_URL);
        setLoading(false);
       } else if (process.env.NODE_ENV === 'production' && process.env. NEXT_PUBLIC_BASE_LIVEURL !== null && process.env.NEXT_PUBLIC_BASE_LIVEURL !== '' && process.env.NEXT_PUBLIC_BASE_LIVEURL !== undefined) {
        setUrlToUse(process.env.NEXT_PUBLIC_BASE_LIVEURL);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [urlToUse]);  
  
  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = 'unset';
      };
  }, []);

  return (
    <html lang="en">
        <body className={inter.className}>
          <div className="first">
            <div className="h-svh">
            <SpeedInsights/>
              <Providers>
                <Navbar />
                <main>
                  {children}
                </main>
                <FooterNavBar />
              </Providers>
            </div>
          </div>
        </body>
    </html>
  );
}