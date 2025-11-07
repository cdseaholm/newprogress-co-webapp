'use client'

import { useStateStore } from "@/context/stateStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDownNav from "../pagecomponents/services/pageNav/dropDownNav";
import Image from "next/legacy/image";



const Header = () => {

    //const [tabs, setTabs] = useState(['Services', 'Pricing', 'About', 'Testimonials', 'Contact']);

    // const handleClickedTab = (tab: string) => {
    //     setTabs(['services', 'pricing', 'about', 'testimonials', 'contact']);
    //     let index = tabs.findIndex((t: string) => t === tab);
    //     setDevCurrentSelection(index);
    // }

    const pathname = usePathname();
    const widthQuery = useStateStore((state) => state.widthQuery);
    //const setDevCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);
    //const currentSelection = useStateStore((state) => state.devCurrentSelection);
    

    const imSize = widthQuery <= 765 ? 65 : 90;

    return (
        <header className={`flex flex-row justify-center items-center px-5 overflow-hidden`}>
            {pathname === '/' ?
                (
                    null
                ) : (
                    <div className='flex flex-row justify-between items-center w-full px-6 bg-blend-overlay top-2 shadow-xl rounded-lg bg-slate-200 py-1 w-[90%] h-content'>
                        <div className='flex flex-row items-center justify-start space-x-2 px-3'>
                            <Link href='/'>
                                <div className='hover:bg-themeAcqua bg-transparent rounded-full shadow-xl cursor-pointer' style={{ width: `${imSize - 20}px`, height: `${imSize - 20}px` }}>
                                    <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
                                </div>
                            </Link>
                            {widthQuery > 600 ? (
                                <div className='mx-2'>|</div>
                            ) : null}
                            { /**
                             * <Link className={`rounded-lg p-1 font-semibold ${pathname === '/npapps' ? 'underline font-bold text-themeStone/80 hover:cursor-default hover:text-themeStone/50 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs'}`} href={`/npapps`}>
                                <p>NP Apps</p>
                                </Link>
                            <div className='mx-2'>|</div>
                            */}
                            {widthQuery > 600 ? (
                                <Link className={`rounded-lg p-1 font-semibold ${pathname === '/web-development' ? 'underline font-bold text-themeStone/80 hover:cursor-default hover:text-themeStone/50 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs hover:md:text-sm'}`} href={`/web-development`}>
                                    <p>Web Development</p>
                                </Link>) : null}
                        </div>
                        <div className='flex flex-row items-center justify-center space-x-2'>
                           {/* { <p className='font-semibold text-sm text-themeStone/80'>{tabs[currentSelection]}</p>} */}
                            {pathname.includes('/web-development') && (
                                <DropDownNav />
                            )}
                            {pathname === '/npapps' && (
                                <DropDownNav />
                            )}
                        </div>
                    </div>
                )}
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