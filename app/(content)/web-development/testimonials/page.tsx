'use client'

import openInNewTab from "@/components/listeners/OpenInNewTab";
import ImageFormat from "@/components/utility/imageFormat";
import { useStateStore } from "@/context/stateStore";
import { Tabs } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";

// const Testimonal = ({ imSize, image, title, blurb, url }: { imSize: number, image: string, title: string, blurb: string, url: string }) => {

//     return (
//         <div className="flex flex-col justify-evenly items-center border border-themeStone rounded-md p-2 w-full h-full text-center bg-white/70 shadow-lg">
//             <Link className="hover:underline hover:text-blue-500 flex flex-col justify-evenly items-center pb-10 h-2/3 w-full" href={''} onClick={() => openInNewTab(url)}>
//                 <p className="text-xl md:text-2xl font-bold underline">
//                     {title}
//                 </p>
//                 <ImageFormat image={image} imSize={imSize} index={1} />
//                 <p>
//                     Click the image to see the site!
//                 </p>
//             </Link>
//             <p className="text-sm md:text-base">
//                 {blurb}
//             </p>
//         </div>
//     )
// }

export default function TestimonialComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
    const globalLoading = useStateStore((state) => state.loading);
    const setGlobalLoading = useStateStore((state) => state.setLoading);
    const heightQuery = useStateStore((state) => state.heightQuery);

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
        url: 'https://banksapparel.vercel.app/'
    };

    const tc = {
        imSize: imSize,
        image: '/images/303tcLogo.png',
        title: '303 Training Co',
        blurb: `A site a Denver Brazilian Jiu Jitsu Gym. This site is an example of a site that had already been built and needed updates. I am still currently working with the team there to get their site as top notch as possible. This site was built with Wix.`,
        url: 'https://www.303trainingcenter.com/'
    };

    const plantr = {
        imSize: imSize,
        image: '/images/plantrco.png',
        title: 'Plantr Co',
        blurb: `New Progress' current work in progress, a site for a tracking Gardening and Plant Cycles. This site is an example of a simple, clean, and easy to navigate site. This site was built with Next.js and Tailwind CSS. I did the site, logo, hosting, and domain for this client.`,
        url: 'https://www.plantrco.com/'
    };

    const panels = [mdcpa, tc, banks, plantr];

    useEffect(() => {
        if (globalLoading) {
            setGlobalLoading(false);
        }
    }, [globalLoading, setGlobalLoading]);

    return (
        <Tabs defaultValue="mdcpa" variant='pills' p={'md'}>
            <Tabs.List justify="center" py={8} grow>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="mdcpa">
                        MDCPA
                    </Tabs.Tab>
                </div>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="303tc">
                        303 Training Center
                    </Tabs.Tab>
                </div>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="banks">
                        Banks Apparel
                    </Tabs.Tab>
                </div>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="plantr">
                        Plantr Co
                    </Tabs.Tab>
                </div>
            </Tabs.List>

            {panels.map((panel, index) => (
                <Tabs.Panel value={index === 0 ? "mdcpa" : index === 1 ? "303tc" : index === 2 ? 'banks' : "plantr"} key={index} h={heightQuery * .7}>
                    <div className="flex flex-col justify-evenly items-center border border-themeStone rounded-md p-2 w-full h-full text-center bg-white/70 shadow-lg" key={index}>
                        <Link className="hover:underline hover:text-blue-500 flex flex-col justify-evenly items-center pb-10 h-2/3 w-full" href={''} onClick={() => openInNewTab(panel.url)}>
                            <p className="text-xl md:text-2xl font-bold underline">
                                {panel.title}
                            </p>
                            <ImageFormat image={panel.image} imSize={imSize} index={1} />
                            <p>
                                Click the image to see the site!
                            </p>
                        </Link>
                        <p className="text-sm md:text-base">
                            {panel.blurb}
                        </p>
                    </div>
                </Tabs.Panel>
            ))}

        </Tabs>

    );
}