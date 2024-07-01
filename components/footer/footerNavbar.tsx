'use client'

import { useStateStore } from '@/context/stateStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterNavBar = () => {
    const pathname = usePathname();
    const breakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <nav className={`flex justify-center flex-wrap ${breakpoint ? 'py-2' : ''} pb-5 space-x-4`}>
            {!breakpoint && pathname !== '/' &&
            [
                ["Contact", "/contact"],
            ].map(([name, route], index) => (
                <div key={index}>
                    <Link href={route} className={`px-10 rounded-lg py-2 font-medium hover:text-slate-700 ${pathname === route ? "underline" : ""}`}>
                            {name}
                    </Link>
                </div>
            ))}
        </nav>
    );
}

export default FooterNavBar;