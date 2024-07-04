'use client'

import { useStateStore } from "@/context/stateStore";
import { FiMail } from "react-icons/fi";

export default function ContactComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`relative flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} h-full space-y-2`}>
            <div className="flex flex-row justify-start items-start rounded-md w-full h-full font-bold">
                {`Email: cdseaholm@gmailcom or newprogresscs@gmail.com`}
            </div>
            <div className="flex flex-row">
                {``}
            </div>
        </div>
    );
}