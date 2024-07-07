'use client'

import Link from "next/link";

export default function Trackr() {
    return (
        <div className={`flex flex-col items-center justify-start scrollbar-thin scrollbar-webkit w-full h-full p-2 pb-10`} style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '10000px'}}>
            <div className="flex flex-col justify-start items-center w-4/5 my-12 md:my-16 lg:my-0"/>
            <Link href={`https://github.com/cdseaholm/np_trackr`} className="text-2xl md:text-4xl font-bold underline w-4/5 pb-5">Trackr</Link>
            <p className="w-4/5">
                {`NP Trackr is a task manager for the productive individual. The issue with most Task management applications today is that they are overwhelming and are typically paid for, while not being worth the money. I hope to make it convenient, easy to use, and helpful.`}
            </p>
        </div>
    )
}