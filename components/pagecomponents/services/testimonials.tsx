'use client'

import { useStateStore } from "@/context/stateStore";
import { FiBookOpen } from "react-icons/fi";

export default function TestimonialComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`relative flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} border border-neutral-600 p-2 space-y-2`}>
            <div className="flex flex-row">
                <FiBookOpen />
            </div>
            <div className="flex flex-row justify-start items-start rounded-md w-full h-2/3 font-bold">
                {`Testimonials`}
            </div>
            <div className="flex flex-row">
                {`description`}
            </div>
        </div>
    );
}