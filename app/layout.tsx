import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import "./globals.css";
import { Livvic } from "next/font/google";
import React from "react";
import PageWrapper from "@/components/wrappers/pageWrapper";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Metadata } from "next";
import { ModalsProvider } from "@mantine/modals";
import AuthWrapper from '@/components/wrappers/authwrapper';
import { Toaster } from "sonner";

const livvic = Livvic({ subsets: ['latin'], weight: '400', style: 'normal' });

export const metadata: Metadata = {
  title: "New Progress Co",
  description: "New Progress Co is an Multi-Purpose Development Company that specializes in Web Development, Mobile Development, and App Development"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={livvic.className}>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <ColorSchemeScript />
      </head>

      <body className="overflow-hidden">
        <AuthWrapper>
          <MantineProvider>
            <ModalsProvider>
              <PageWrapper>
                {children}
              </PageWrapper>
            </ModalsProvider>
          </MantineProvider>
          <Toaster />
        </AuthWrapper>
      </body>
    </html>
  );
}

{/* <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                  <script src="../path/to/flowbite/dist/flowbite.min.js" defer />
                  */}