'use client'

import ModalProvider from "@/app/providers";
import { usePathname } from "next/navigation";
import { useStateStore } from "@/context/stateStore";
import { useRef, useEffect, useCallback } from "react";
import Header from "../nav/header";
import { LoadingSpinner } from "../utility/spinner";
import { useSession } from "next-auth/react";
import { Overlay } from "@mantine/core";


export default function PageWrapper({ children }: Readonly<{ children: React.ReactNode; }>) {

    const pathname = usePathname();
    const { data: _session, status } = useSession();
    const globalLoading = useStateStore((state) => state.loading);
    const widthRef = useRef<number>(0);
    const heightRef = useRef<number>(0);
    const setWidthQuery = useStateStore((state) => state.setWidthQuery);
    const setHeightQuery = useStateStore((state) => state.setHeightQuery);
    // const urlToUse = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : '';

    // const handleUpdate = async () => {
    //     await update();
    // };

    const initializeSizes = useCallback(() => {
        setWidthQuery(widthRef.current);
        setHeightQuery(window.innerHeight);
    }, [setWidthQuery, setHeightQuery]);

    const updateMedia = useCallback(() => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        if (newWidth !== widthRef.current) {
            widthRef.current = newWidth;
            setWidthQuery(newWidth);
        }
        if (newHeight !== heightRef.current) {
            heightRef.current = newHeight;
            setHeightQuery(newHeight);
        }
    }, [setWidthQuery, setHeightQuery]);

    useEffect(() => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        if (!newWidth || !newHeight) {
            return;
        }
        widthRef.current = newWidth
        heightRef.current = newHeight;
        initializeSizes();

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [updateMedia, initializeSizes]);

    return (
        <div className={`${pathname === '/' ? 'bg-themeWhite/50' : 'bg-themeWhite/80'} h-dvh overflow-hidden`}>
            {status === 'loading' ? (
                <LoadingSpinner />
            ) : (
                <>

                    <ModalProvider />
                    <main className={`flex-1 min-h-0 h-full w-full bg-slate-200/50 p-2`}>
                        {pathname !== null && pathname !== '/' &&
                            <Header />
                        }
                        {children}
                    </main>

                    {globalLoading && (
                        <Overlay
                            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                            opacity={0.85}
                        >
                            <LoadingSpinner />
                        </Overlay>
                    )}
                </>
            )}
        </div>
    )
}