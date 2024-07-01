'use client'

import { usePathname } from "next/navigation";
import Navbar from "../nav/Navbar";
import HarborNavbar from "../nav/HarborNavBar";
import FooterNavBar from "../footer/footerNavbar";

const MainPageBody = ({children}: {children: React.ReactNode}) => {

    const pathname = usePathname();

    return (
      <div className={`childFirst h-full w-full`}>
          {children}
      </div>
    );
  };
  export default MainPageBody;