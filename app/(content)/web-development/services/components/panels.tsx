import openInNewTab from "@/components/listeners/OpenInNewTab";
import { ImageCarousel } from "@/components/utility/imageCarousel";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PanelStyle = ({ children, key }: { children: React.ReactNode, key: number }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full text-center shadow-lg text-black bg-white rounded-md p-2" key={key}>
            {children}
        </div>
    )
};

export const PanelOne = ({ panelKey }: { panelKey: number }) => {

    const siteBasicItems = [
        'Landing Page',
        'Four Pages',
        'Navigation Menu',
        'Header',
        'Footer',
        'Dynamic Screen Size',
        'Styling Options',
        'Functionality'
    ];

    return (
        <PanelStyle key={panelKey}>
            <h3 className="text-sm md:text-base font-semibold">
                {`Beginning with my own personal template and consolidated favorite libraries, I can give you a basic site with:`
                }
            </h3>
            <div className="flex flex-row items-center justify-center w-full h-full">
                <ul className="list-disc text-sm md:text-base grid grid-cols-2 grid-rows-4 items-center gap-1 text-start">
                    {siteBasicItems.map((item, index) => (
                        <li className="text-sm md:text-base font-normal flex-wrap mx-2 my-1" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="pt-2">
                {`See some client examples here:`}
            </p>
            <ul className="list-disc text-sm md:text-base grid grid-cols-1 grid-rows-2 items-center gap-1 pt-2 text-center">
                <Link href={`https://www.mdcpa-llc.com`} className="text-base md:text-lg font-bold flex-wrap mx-2 my-1 text-stone-700 hover:text-black bg-transparent px-1 py-1 rounded-md" onClick={(e) => {
                    e.preventDefault();
                    openInNewTab('https://www.mdcpa-llc.com');
                }}>
                    MD CPA
                </Link>
                <Link href={`https://www.303trainingcenter.com`} className="text-base md:text-lg font-bold flex-wrap mx-2 my-1 text-stone-700 hover:text-black bg-transparent px-1 py-1 rounded-md" onClick={(e) => {
                    e.preventDefault();
                    openInNewTab('https://www.303trainingcenter.com');
                }}>
                    303 Training Center
                </Link>
            </ul>
        </PanelStyle>
    )
};

export const PanelTwo = ({  panelKey }: { panelKey: number }) => {

    const router = useRouter();

    const inlucdedItems = [
        'Site Edits',
        'Bug Fixes',
        'Site Updates',
        'Site Backups',
    ];

    return (

        <PanelStyle key={panelKey}>
            <ul className="list-disc text-sm md:text-base grid grid-cols-2 grid-rows-2 items-center gap-1 text-start">
                {inlucdedItems.map((item, index) => (
                    <li className="text-sm md:text-base font-normal flex-wrap mx-3 my-1" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <p>
                {`Given my pricing structure,`} <a className="text-stone-700 underline hover:text-themeWater cursor-pointer" onClick={() => router.push('/web-development/pricing')}>see here,</a> {`I find that most of my clients are looking for a long term relationship with their developer. So, site maintenance options make the most sense with monthly payment. HOWEVER, this doesn't mean it can't apply to up front contracts. Some companies and people may need something cleaned up quickly, or there is an issue with their hosting or current site. I am more than happy to discuss what a solution looks like if this is the case. In the rare off chance that my`} <span className="font-semibold">original source code</span> {`contains bugs or errors, I will fix this for free. That being a said, I am a perfectionist and I don't forsee that being an issue.`}
            </p>
        </PanelStyle>

    );
}

export const PanelThree = ({ panelKey }: { panelKey: number }) => {

    //const accordianSignal = useStateStore((state) => state.accordianSignal);

    return (
        <PanelStyle key={panelKey}>
            <ImageCarousel />
        </PanelStyle>
    );
}
//<EmblaCarousel accordianSignal={accordianSignal} />

export const PanelFour = ({ panelKey }: { panelKey: number }) => {

    const router = useRouter();

    return (
        <PanelStyle key={panelKey}>
            <p>
                {`Site Hosting is a crucial part of getting your site up and running. It's the final step in the process of getting your site live. If you'd like for me to handle it all, I can do that. If you'd like to handle it yourself, I can walk you through the process. `}
                <a className="text-stone-700 underline hover:text-themeWater cursor-pointer" onClick={() => () => router.push('/web-development/pricing')}>
                    See the monthly fee for hosting in the pricing section, here.
                </a>
            </p>
            <p>
                {`My preferred hosting provider is `}
                <a className="text-stone-700 underline hover:text-themeStone cursor-pointer" onClick={() => openInNewTab('https://www.vercel.com/docs')}>
                    Vercel.
                </a>
            </p>
            <p>
                {` Vercel is an infrastructure provider that allows developers to build what they need quicker. It offers hosting abilities, and a lot more. This doesn't mean I can't work with what you currently have set up, or if you've been looking into alternatives. But Vercel does offer a low cost way of getting your site up an running.`}
            </p>
            <p>
                {`That being said, in order to fully  make this work, if you're a new company or individual, we would need to discuss Domain names (if not already purchased) and how much interactive material you'd like (this brings up questions of security and how much data you're relying to be held online.) If this mostly a static site that doesn't require much interaction aside from a form or two, I think this is a solid option.`}
            </p>
        </PanelStyle>
    );
}