import { Livvic } from "next/font/google";
import "./globals.css";
import React from "react";
import AnimateWrapper from "@/components/utility/animateAndAuthWrapper";
import PageWrapper from "@/components/utility/pageWrapper";
import { Metadata } from "next";
import Script from 'next/script';

const livvic = Livvic({ subsets: ['latin'], weight: '400', style: 'normal' });

export const metadata: Metadata = {
  title: "New Progress Co",
  description: "New Progress Co is an Multi-Purpose Development Company that specializes in Web Development, Mobile Development, and App Development"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={livvic.className}>
      <AnimateWrapper>
        <body>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-FYZSYN60M3" strategy="afterInteractive" id="googleTag" />
          <Script strategy="afterInteractive" id="googleDataLayer">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FYZSYN60M3');
            `}
          </Script>
          <PageWrapper>
            {children}
          </PageWrapper>
          <script src="../path/to/flowbite/dist/flowbite.min.js" defer />
        </body>
      </AnimateWrapper>
    </html>
  );
}