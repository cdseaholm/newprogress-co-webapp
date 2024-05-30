'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from '../components/nav/Navbar';
import FooterNavBar from "@/components/footer/footerNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { useEffect } from "react";
import { useStateStore } from '@/context/stateStore';
import { usePathname } from "next/navigation";
import MotionWrap from "@/components/transitions/motionwrap";
import HarborNavbar from "@/components/nav/HarborNavBar";
import MainPageBody from "@/components/pagetemplates/mainpagebody";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const urlToUse = useStateStore((state) => state.urlToUse);
  const setLoading = useStateStore((state) => state.setLoading); 
  const pathname = usePathname();
  if (pathname === null || pathname === undefined) {
    return null;
  }
  
  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = 'unset';
      };
  }, []);

  return (
    <html lang="en">
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {pathname.includes('harbor') &&
        <body className={inter.className}>
          <div className="bg-white/50 h-dvh">
            <SpeedInsights/>
            <Providers>
              <MotionWrap motionKey={pathname}>
                <HarborNavbar />
                <main className='flex flex-col px-5 h-dvh justify-between'>
                  <MainPageBody>
                  {children}
                  </MainPageBody>
                </main>
                <FooterNavBar />
              </MotionWrap>
            </Providers>
          </div>
        </body>
      }
      {!pathname.includes('harbor') &&
        <body className={inter.className}>
          <div className="bg-white/50 h-dvh">
            <SpeedInsights/>
            <Providers>
              <MotionWrap motionKey={pathname}>
                <Navbar />
                <main>
                  {children}
                </main>
                <FooterNavBar />
              </MotionWrap>
            </Providers>
          </div>
        </body>
      }
      </AnimatePresence>
    </html>
  );
}