import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";
import AnimateWrapper from "@/components/utility/animateAndAuthWrapper";
import PageWrapper from "@/components/utility/pageWrapper";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata ={
  title: "New Progress Co",
  description: "New Progress Co is an Multi-Purpose Development Company that specializes in Web Development, Mobile Development, and App Development"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <AnimateWrapper>
        <body className={inter.className}>
          <PageWrapper>
            {children}
          </PageWrapper>
        </body>
      </AnimateWrapper>
    </html>
  );
}