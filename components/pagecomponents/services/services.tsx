'use client'

import openInNewTab from "@/components/listeners/OpenInNewTab";
import { EmblaCarousel } from "@/components/utility/imageCarousel";
import { useStateStore } from "@/context/stateStore";
import Link from "next/link";

export default function ServicesComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

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
        <div className={`flex flex-col items-center justify-start gap-2 w-full h-full font-bold scrollbar-thin scrollbar-webkit`} style={{overflow: 'auto'}}>
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full text-center">
                <h2 className="text-semibold underline text-base md:text-lg">{`Full Website Creation`}</h2>
                <p className="text-sm md:text-base font-normal">{`Beginning with my own personal template and consolidated favorite libraries, I can give you a basic site with:`}</p>
                <ul className="list-disc text-sm md:text-base grid grid-cols-2 grid-rows-4 items-center gap-1 text-start">
                    {siteBasicItems.map((item, index) => (
                        <li className="text-sm md:text-base font-normal flex-wrap mx-2 my-1" key={index}>{item}</li>
                    ))}
                </ul>
                <p className="pt-2">
                    {`See some client examples here:`}
                </p>
                <ul className="list-disc text-sm md:text-base grid grid-cols-1 grid-rows-2 items-center gap-1 pt-2 text-center">
                    <Link href={`https://banksapparelco.vercel.app`} className="text-base md:text-lg font-bold flex-wrap mx-2 my-1 text-themeWater hover:bg-themeAcqua hover:text-black bg-transparent px-1 py-1 rounded-md" onClick={(e) => {
                        e.preventDefault();
                        openInNewTab('https://banksapparelco.vercel.app');
                    }}>
                        Banks Apparel Co
                    </Link>
                    <Link href={`https://www.mdcpa-llc.com`} className="text-base md:text-lg font-bold flex-wrap mx-2 my-1 text-themeWater hover:bg-themeAcqua hover:text-black bg-transparent px-1 py-1 rounded-md" onClick={(e) => {
                        e.preventDefault();
                        openInNewTab('https://www.mdcpa-llc.com');
                    }}>
                        MD CPA
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <p>{`Website Maintenance/Edits and Bug fixes`}</p>
                <p>{`It could be one bug or it could be multiple. Regardless, I won't stop until the job is cleaned up.`}</p>
            </div>
            <EmblaCarousel />
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <p>{`Site Hosting:`}</p>
                <p>{`Typically done with Vercel, but can be achieved what suites your needs best.`}</p>
            </div>
        </div>
    );
}