'use client'

import { Providers } from "@/app/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";
import MotionWrap from "../transitions/motionwrap";


export default function PageWrapper({children}: Readonly<{children: React.ReactNode;}>) {
    
    const pathname = usePathname();

    return (
        <div className="bg-white/50 h-dvh">
            <SpeedInsights/>
            <Providers>
                <MotionWrap motionKey={pathname ?? ""}>
                    <main className='flex flex-col h-dvh justify-between'>
                        {children}
                    </main>
                </MotionWrap>
            </Providers>
        </div>
    )
}