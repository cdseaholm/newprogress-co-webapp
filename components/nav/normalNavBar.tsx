'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStateStore } from '@/context/stateStore';
import Image from "next/legacy/image";
import DropDownNav from '../pagecomponents/services/pageNav/dropDownNav';

export default function NormalNavBar() {

  const pathname = usePathname();
  const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
  const setDevCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);
  const currentSelection = useStateStore((state) => state.devCurrentSelection);
  const tabs = pathname === '/npapps' ? ['Harbor', 'Financr', 'Trackr', 'Gamr'] : ['Services', 'Pricing', 'About', 'Testimonials', 'Templates', 'Contact'];

  const handleClickedTab = (tab: string) => {
    const tabs = ['services', 'pricing', 'about', 'testimonials', 'contact'] as string[];
    let index = tabs.findIndex((t: string) => t === tab);
    setDevCurrentSelection(index);
  }

  const imSize = isBreakpoint ? 65 : 100;

  return (
    pathname === '/' ?
      (
        null
      ) : (
        <div className={`fixed z-20 bg-blend-overlay top-2 shadow-xl rounded-lg bg-slate-200 py-1`} style={{ width: '90%', maxHeight: '1000px' }}>
          <div className='flex flex-row justify-between items-center w-full px-6'>
            <div className={`flex flex-col justify-evenly items-start w-full px-6`}>
              <div className='flex flex-row items-center justify-center space-x-2'>
                <Link href='/'>
                  <div className='hover:bg-themeAcqua bg-transparent rounded-full shadow-xl cursor-pointer' style={{ width: `${imSize - 20}px`, height: `${imSize - 20}px` }}>
                    <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
                  </div>
                </Link>
                <div className='mx-2'>|</div>
                {/**<Link className={`rounded-lg p-1 font-semibold ${pathname === '/npapps' ? 'underline font-bold text-themeStone/80 hover:cursor-default hover:text-themeStone/50 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs'}`} href={`/npapps`}>
                  <p>NP Apps</p>
                </Link>
                <div className='mx-2'>|</div>
                */}
                <Link className={`rounded-lg p-1 font-semibold ${pathname === '/webdevelopment' ? 'underline font-bold text-themeStone/80 hover:cursor-default hover:text-themeStone/50 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs hover:md:text-sm'}`} href={`/webdevelopment`}>
                  <p>Web Development</p>
                </Link>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-2'>
              <p className='font-semibold text-sm text-themeStone/80'>{tabs[currentSelection]}</p>
              {pathname === '/webdevelopment' && (
                <DropDownNav handleClickedTab={handleClickedTab} />
              )}
              {pathname === '/npapps' && (
                <DropDownNav handleClickedTab={handleClickedTab} />
              )}
            </div>
          </div>
        </div>
      )
  );
};