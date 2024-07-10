'use client'

import { useStateStore } from "@/context/stateStore";
import Link from "next/link";

export default function Financr() {

    const isLargeBreakpoint = useStateStore((state) => state.widthQuery) > 1024 ? true : false;

    return (
        <div className={`flex flex-col items-center justify-start scrollbar-thin scrollbar-webkit w-full h-full p-2 pb-10`} style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '10000px'}}>
            <div className="w-full" style={{minHeight: isLargeBreakpoint ? '8%' : '12%'}}/>
            <Link href={`https://github.com/cdseaholm/np_financr_dart`} className="text-2xl md:text-4xl font-bold underline w-4/5 pb-5">Financr</Link>
            <p className="w-4/5">
                {`NP Financr is a light-weight intuitive Financial tracking application where the user gets to set up how they want to see their money. There is tons of customizability. Initially written with Flutter/Dart, I am currently rewriting this to use React Native with Expo Go.`}
            </p>
        </div>
    )
}