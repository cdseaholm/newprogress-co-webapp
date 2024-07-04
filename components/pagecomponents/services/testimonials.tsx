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
        <div className={`relative flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} h-full space-y-2`}>
            <div className="flex flex-row justify-start items-start rounded-md w-full h-full font-bold space-x-5" >
                <p>{`MD CPA`}</p>
                <Link className="hover:underline hover:text-blue-500" href={''} onClick={() => openInNewTab('https://www.mdcpa-llc.com')}>
                    Take a look at the site here!
                </Link>
            </div>
            <div className="flex flex-row">
                {`A site for an emerging CPA firm run by Michael Driscoll. This site is an example of simple elegance in starting a business and starting off with a strong, easy to nativgate, and fast site. This site was built with Next.js and Tailwind CSS. Hosted by Vercel. And maintained by me.`}
            </div>
        </div>
    );
}