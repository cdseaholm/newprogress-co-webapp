'use client'

import SidenavMobile from './Navbar';
import NormalNavBar from './normalNavBar';
import LargeNavBar from './largeNavBar';
import { useContext } from 'react';
import { WidthContext } from '../utility/widthContext';


const Header = () => {
    const isBreakpoint = useContext(WidthContext) <= 768 ? true : false;
    const isLargeBreakpoint = useContext(WidthContext) <= 1024 ? true : false;

    return (
        <header className={`flex flex-row justify-center items-center px-5 overflow-hidden`}>
            {isBreakpoint ? (
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


{/**
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
*/}