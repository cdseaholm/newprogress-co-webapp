'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/legacy/image";
import DropDownNav from '../pagecomponents/services/pageNav/dropDownNav';

const SidenavMobile = ({ isBreakpoint }: { isBreakpoint: boolean }) => {

  const pathname = usePathname();
  //const setDevCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);

  // const handleClickedTab = (tab: string) => {
  //   const tabs = ['services', 'pricing', 'about', 'testimonials', 'contact'] as string[];
  //   let index = tabs.findIndex((t: string) => t === tab);
  //   setDevCurrentSelection(index);
  // }

  //Taking out for now {/**<FiFile key={'templates'}/>, */}

  const imSize = isBreakpoint ? 65 : 100;

  return (
    pathname === '/' ?
      (
        null
      ) : (
        <div className='flex flex-row justify-between items-center w-full px-6 bg-blend-overlay top-2 shadow-xl rounded-lg bg-slate-200 py-1 w-[90%]' style={{ width: '90%', maxHeight: '1000px' }}>
          <div className={`flex flex-col justify-start items-start w-full`}>
            <div className='flex flex-row items-center justify-start w-full'>
              <Link href='/'>
                <div className='hover:bg-themeAcqua bg-transparent rounded-full shadow-xl cursor-pointer' style={{ width: `${imSize - 20}px`, height: `${imSize - 20}px` }}>
                  <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
                </div>
              </Link>
              {/**<Link className={`hover:text-themeStone/80 rounded-lg p-1 ml-1 font-semibold text-xs ${pathname === '/npapps' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/npapps`}>
              <p>NP Apps</p>
            </Link>
            <div className='mx-1'>|</div>
            */}
              <Link className={` hover:text-themeStone/80 rounded-lg p-1 font-semibold text-xs ${pathname === '/web-development' ? 'underline text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/web-development`}>
                <p>Web Development</p>
              </Link>
            </div>
          </div>
          {pathname === '/web-development' && (
            <DropDownNav />
          )}
          {pathname === '/npapps' && (
            <DropDownNav />
          )}
        </div>
      )
  );
};

export default SidenavMobile;