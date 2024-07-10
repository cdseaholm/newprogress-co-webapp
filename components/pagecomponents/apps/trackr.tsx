'use client'

import { useStateStore } from "@/context/stateStore";
import Link from "next/link";

export default function Trackr() {
    
    const isLargeBreakpoint = useStateStore((state) => state.widthQuery) > 1024 ? true : false;

    return (
        <div className={`flex flex-col items-center justify-start scrollbar-thin scrollbar-webkit w-full h-full p-2 pb-10`} style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '10000px'}}>
            <div className="w-full" style={{minHeight: isLargeBreakpoint ? '8%' : '12%'}}/>
            <Link href={`https://github.com/cdseaholm/np_trackr`} className="text-2xl md:text-4xl font-bold underline w-4/5 pb-5">Trackr</Link>
            <p className="w-4/5">
                {`NP Trackr is a task manager for the productive individual. The issue with most Task management applications today is that they are overwhelming and are typically paid for, while not being worth the money. I hope to make it convenient, easy to use, and helpful.`}
            </p>
        </div>
    )
}