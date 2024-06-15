'use client'

import useMediaQuery from "../listeners/WidthSettings";

export default function WebDevCard({title, description, icon}: Readonly<{title: string, description: string, icon: React.ReactNode}>) {
    
    const isBreakpoint = useMediaQuery(768);


    return (
        <div className={`relative flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} border border-neutral-600 p-2 space-y-2`}>
            <div className="flex flex-row">
                {icon}
            </div>
            <div className="flex flex-row justify-start items-start rounded-md w-full h-2/3 font-bold">
                {title}
            </div>
            <div className="flex flex-row">
                {description}
            </div>
        </div>
    )
}