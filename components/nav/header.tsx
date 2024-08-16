'use client'

import { usePathname } from 'next/navigation';
import HarborNavbar from './HarborNavBar';
import SidenavMobile from './Navbar';
import { useStateStore } from '@/context/stateStore';
import NormalNavBar from './normalNavBar';
import LargeNavBar from './largeNavBar';
import { useContext, useRef } from 'react';
import { WidthContext } from '../utility/widthContext';


const Header = () => {
    const pathName = usePathname();
    const isBreakpoint = useContext(WidthContext) <= 768 ? true : false;
    const isLargeBreakpoint = useContext(WidthContext) <= 1024 ? true : false;

    return (
        <header className={`flex flex-row justify-center items-center px-5 overflow-hidden`}>
            {pathName?.includes('harbor') ? (
                    <HarborNavbar />
                ) : isBreakpoint ? (
                    <SidenavMobile isBreakpoint={isBreakpoint} />
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