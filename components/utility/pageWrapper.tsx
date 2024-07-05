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
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    useEffect(() => {
        if (targetRef.current === null) {
          return;
        } else {
          const newWidth = targetRef.current.offsetWidth;
          setWidthQuery(newWidth);
        }
      
        const updateMedia = () => {
          const innerWidth = window.innerWidth;
          setWidthQuery(innerWidth);
        }
      
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [setWidthQuery]);

    return (
        <div className={`${pathname === '/' ? 'bg-themeWhite/50' : 'bg-themeWhite/80'} h-dvh ${livvic.className} overflow-hidden`}>
            <Providers>
                <MotionWrap motionKey={pathname ?? ""}>
                    <main className='flex flex-col h-dvh w-full overflow-hidden' ref={targetRef}>
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