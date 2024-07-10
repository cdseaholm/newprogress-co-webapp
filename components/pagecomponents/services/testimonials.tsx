'use client'

import openInNewTab from "@/components/listeners/OpenInNewTab";
import ImageFormat from "@/components/utility/imageFormat";
import { useStateStore } from "@/context/stateStore";
import Link from "next/link";

const Testimonal = ({imSize, image, title, blurb, url}: {imSize: number, image: string, title: string, blurb: string, url: string}) => {

    return (
        <div className="flex flex-col justify-start items-center border border-themeStone rounded-md p-2 w-full h-full text-center">
            <Link className="hover:underline hover:text-blue-500 flex flex-col justify-center items-center pb-10" href={''} onClick={() => openInNewTab(url)}>
                <p className="text-xl md:text-2xl font-bold underline">
                    {title}
                </p>
                <ImageFormat image={image} imSize={imSize} index={1}/>
                <p>
                    Click the image to see the site!
                </p>
                </Link>
            <p className="text-sm md:text-base">
                {blurb}
            </p>
        </div>
    )
}

export default function TestimonialComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    const imSize = isBreakpoint ? 100 : 200;

    const mdcpa = {
        imSize: imSize,
        image: '/images/mdcpaLight.png',
        title: 'MD CPA',
        blurb: `A site for an emerging CPA firm run by Michael Driscoll. This site is an example of simple elegance in starting a business and starting off with a strong, easy to nativgate, and fast site. This site was built with Next.js and Tailwind CSS. I did the site, logo, and hosting for this client.`,
        url: 'https://www.mdcpa-llc.com'
    };

    const banks = {
        imSize: imSize,
        image: '/images/banksClassic.png',
        title: 'Banks Apparel Co',
        blurb: `A site for a small business apparel by Drew Fairbanks. This site is an example of a simple, clean, and easy to navigate site. This site was built with Next.js and Tailwind CSS. It should be understood that this is my current client and the site is currently under construction. I did the site, logo, hosting, and domain for this client.`,
        url: 'https://banksapparelco.vercel.app'
    };

    return (
        <div className="flex flex-col justify-start items-center rounded-md p-2 text-center scrollbar-thin scrollbar-webkit h-full w-full" style={{overflow: 'auto'}}>
            <div className="w-full" style={{minHeight: '12%'}}/>
            <div className="flex flex-col justify-start items-center w-full h-full py-5 mb-10 space-y-5">
                <Testimonal {...mdcpa} />
                <Testimonal {...banks} />
            </div>
        </div>
    );
}