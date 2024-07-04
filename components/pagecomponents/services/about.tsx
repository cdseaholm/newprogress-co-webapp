'use client'

import { useStateStore } from "@/context/stateStore";
import { FiInfo } from "react-icons/fi";

export default function AboutComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`relative flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} h-full space-y-2`}>
            <div className="flex flex-row justify-start items-start rounded-md w-full h-2/3 font-bold">
                {`I can help you modernize or update a website. Work out some kinks or build you one from scratch. Additionally, I can take care of all the technical work for you after the site is completed. It can be as complex as Just depends on what you need. I love building sites and seeing people pleased with my work. I'd love to help you out!`}
            </div>
            <div className="flex flex-row">
                {``}
            </div>
        </div>
    );
}