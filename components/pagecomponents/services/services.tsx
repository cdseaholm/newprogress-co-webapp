'use client'

import { EmblaCarousel } from "@/components/utility/imageCarousel";
import { useStateStore } from "@/context/stateStore";
import { FiClipboard } from "react-icons/fi";

export default function ServicesComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className="grid grid-cols-2 grid-rows-2 items-start gap-2 justify-center w-full h-full pt-5 font-bold">
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <p>{`Full Website Creation`}</p>
                <p>{`Beginning with my template, then discussed over styling options and functionality.`}</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <p>{`Website Maintenance/Edits and Bug fixes`}</p>
                <p>{`It could be one bug or it could be multiple. Regardless, I won't stop until the job is cleaned up.`}</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <EmblaCarousel />
            </div>
            <div className="flex flex-col justify-center items-center border border-themeStone rounded-md p-2 w-full h-full">
                <p>{`Site Hosting:`}</p>
                <p>{`Typically done with Vercel, but can be achieved what suites your needs best.`}</p>
            </div>
        </div>
    );
}