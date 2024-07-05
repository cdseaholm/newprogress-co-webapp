'use client'

import { useStateStore } from "@/context/stateStore";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export default function TestimonialComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className={`flex flex-col rounded-md items-center justify-start ${isBreakpoint ? 'w-full' : 'w-4/5'} h-full space-y-2`}>
            <p className="text-base md:text-lg font-bold">{`MD CPA`}</p>
            <Link className="hover:underline hover:text-blue-500" href={''} onClick={() => openInNewTab('https://www.mdcpa-llc.com')}>
                Take a look at the site here!
            </Link>
            <p className="text-sm md:text-base">
                {`A site for an emerging CPA firm run by Michael Driscoll. This site is an example of simple elegance in starting a business and starting off with a strong, easy to nativgate, and fast site. This site was built with Next.js and Tailwind CSS.`}
            </p>
        </div>
    );
}