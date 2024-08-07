'use client'

import { Providers } from "@/app/providers";
import { usePathname } from "next/navigation";
import MotionWrap from "../transitions/motionwrap";
import { useStateStore } from "@/context/stateStore";
import { useRef, useEffect } from "react";
import Header from "../nav/header";
import { Livvic } from 'next/font/google';
  
const livvic = Livvic({subsets: ['latin'], weight: '400', style: 'normal'});


export default function PageWrapper({children}: Readonly<{children: React.ReactNode;}>) {
    
    const pathname = usePathname();
    const targetRef = useRef<HTMLElement>(null);
    const setWidthQuery = useStateStore((state) => state.setWidthQuery);
    const setHeightQuery = useStateStore((state) => state.setHeightQuery);

    useEffect(() => {
        if (targetRef.current === null) {
          return;
        } else {
          const newWidth = targetRef.current.offsetWidth;
          const newHeight = targetRef.current.offsetHeight;
          if (newWidth > newHeight) {
            setWidthQuery(newHeight);
            setHeightQuery(newWidth);
          } else {
            setWidthQuery(newWidth);
            setHeightQuery(newHeight);
          }
        }
      
        const updateMedia = () => {
            const innerWidth = window.innerWidth;
            setWidthQuery(innerWidth);
            const innerHeight = window.innerHeight;
            setHeightQuery(innerHeight);
        };
      
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [setWidthQuery, setHeightQuery]);

    return (
        <div className={`${pathname === '/' ? 'bg-themeWhite/50' : 'bg-themeWhite/80'} h-dvh ${livvic.className} overflow-hidden`}>
            <Providers>
                <script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
                    <MotionWrap motionKey={pathname ?? ""}>
                        <main className='h-dvh w-screen overflow-hidden' ref={targetRef}>
                            {pathname !== null &&  pathname !== '/' &&
                                <Header />
                            }
                                {children}
                            {/**{pathname !== null && !isBreakpoint && pathname !== '/' &&
                                <FooterNavBar />
                            }*/}
                        </main>
                    </MotionWrap>
            </Providers>
        </div>
    )
}