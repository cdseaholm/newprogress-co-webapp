'use client'

import { Providers } from "@/app/providers";
import { usePathname } from "next/navigation";
import MotionWrap from "../transitions/motionwrap";
import { useStateStore } from "@/context/stateStore";
import { useRef, useEffect, useState } from "react";
import Header from "../nav/header";
import { WidthContext } from "./widthContext";
import Spinner from "./spinner";


export default function PageWrapper({ children }: Readonly<{ children: React.ReactNode; }>) {

    const pathname = usePathname();
    const targetRef = useRef<HTMLElement>(null);
    const [width, setWidth] = useState<number>(0);
    const setWidthQuery = useStateStore((state) => state.setWidthQuery);
    const setHeightQuery = useStateStore((state) => state.setHeightQuery);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (targetRef.current === null) {
            setLoading(false);
            return;
        } else {
            const newWidth = targetRef.current.offsetWidth;
            const newHeight = targetRef.current.offsetHeight;
            setWidthQuery(newWidth);
            setWidth(newWidth);
            setHeightQuery(newHeight);
        }

        const updateMedia = () => {
            const innerWidth = window.innerWidth;
            const innerHeight = window.innerHeight;
            setWidthQuery(innerWidth);
            setWidth(innerWidth);
            setHeightQuery(innerHeight);
        }

        window.addEventListener('resize', updateMedia);
        setLoading(false);
        return () => window.removeEventListener('resize', updateMedia);
    }, [setWidthQuery, setHeightQuery]);

    return (
        <div className={`${pathname === '/' ? 'bg-themeWhite/50' : 'bg-themeWhite/80'} h-dvh overflow-hidden`}>
            <Providers>
                <MotionWrap motionKey={pathname ?? ""}>
                    <main className='flex flex-col h-dvh' ref={targetRef}>
                        {loading ? (
                            <Spinner />
                        ) : (
                        <WidthContext.Provider value={width}>
                            {pathname !== null && pathname !== '/' &&
                                <Header />
                            }
                            {children}
                            {/**{pathname !== null && !isBreakpoint && pathname !== '/' &&
                                <FooterNavBar />
                            }*/}
                        </WidthContext.Provider>)}
                    </main>
                </MotionWrap>
            </Providers>
        </div>
    )
}