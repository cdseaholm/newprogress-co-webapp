'use client'

import { usePathname } from 'next/navigation';
import HarborNavbar from './HarborNavBar';
import SidenavMobile from './Navbar';
import { useStateStore } from '@/context/stateStore';
import NormalNavBar from './normalNavBar';
import LargeNavBar from './largeNavBar';


const Header = () => {
    const pathName = usePathname();
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
    const isLargeBreakpoint = useStateStore((state) => state.widthQuery) <= 1024 ? true : false;

    return (
        <header className={`flex flex-row justify-center items-center w-full px-5 overflow-hidden`}>
            {pathName?.includes('harbor') ? (
                    <HarborNavbar />
                ) : isBreakpoint ? (
                    <SidenavMobile />
                ) : !isLargeBreakpoint ? (
                    <LargeNavBar />
                ) : (
                    <NormalNavBar />
                ) 
            }
        </header>
    )
}

export default Header;