'use client'

import { usePathname } from 'next/navigation';
import HarborNavbar from './HarborNavBar';
import SidenavMobile from './Navbar';


const Header = () => {
    const pathName = usePathname();

    return (
        <header className={`flex flex-row items-center w-full px-5`} style={{border: 'box-border'}}>
            {pathName?.includes('harbor') ? (
                    <HarborNavbar />
                ) : (
                    <SidenavMobile />
                )
            }
        </header>
    )
}

export default Header;