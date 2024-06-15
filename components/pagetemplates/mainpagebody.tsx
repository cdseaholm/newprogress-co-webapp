'use client'

import { usePathname } from "next/navigation";
import Navbar from "../nav/Navbar";
import HarborNavbar from "../nav/HarborNavBar";

const MainPageBody = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();

    return (
      <div className={`childFirst h-full w-full`}>
        {pathname !== null && !pathname.includes('harbor') && 
          <>
            <Navbar />
            {children}
          </>
        }
        {pathname !== null && pathname.includes('harbor') &&
          <>
            <HarborNavbar />
            {children}
          </>
        }
      </div>
    );
  };
  export default MainPageBody;