'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStateStore } from '@/context/stateStore';
import { FiBookOpen, FiClipboard, FiDollarSign, FiFile, FiMail, FiMic } from 'react-icons/fi';
import Image from "next/legacy/image";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, tabs } from '@nextui-org/react';
import DropDownNav from '../pagecomponents/services/pageNav/dropDownNav';
import StaticNav from '../pagecomponents/services/pageNav/staticNav';
import { set } from 'mongoose';

const SidenavMobile = () => {

  const pathname = usePathname();
  const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
  const [open, setOpen] = useState(false);
  const setDevCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);
  const currentSelection = useStateStore((state) => state.devCurrentSelection);
  const tabs = pathname === '/npapps' ? ['Harbor', 'Financr', 'Trackr', 'Gamr'] : ['Services', 'Pricing', 'About', 'Testimonials', 'Templates', 'Contact'];

  const handleClickedTab = (index: number) => {
    setDevCurrentSelection(index);
  }

  const icons = pathname === '/npapps' ? [] : [
    <FiClipboard key={'clipboard'}  />,
    <FiDollarSign key={'pricing'}/>,
    <FiBookOpen key={'about'}/>,
    <FiMic key={'testimonials'}/>,
    <FiFile key={'templates'}/>,
    <FiMail key={'contact'}/>
  ];

  const imSize = isBreakpoint ? 65 : 100;
  
  return (
    pathname === '/' ?
    (
      null
    ) : (
      <div className={`fixed z-20 bg-blend-overlay top-2 shadow-xl rounded-lg bg-slate-200 py-2`} style={{width: '95%', maxHeight: '1000px'}}>
        <div className={`flex flex-row justify-between items-center w-full px-4`}>
        <div className={`flex flex-col justify-start items-start w-full`}>
          <div className='flex flex-row items-center justify-start w-full'>
            <Link href='/'>
              <div className='hover:bg-themeAcqua bg-transparent rounded-full shadow-xl cursor-pointer' style={{ width: `${imSize - 20}px`, height: `${imSize - 20}px`}}>
                <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
              </div>
            </Link>
            <Link className={`hover:text-themeStone/80 rounded-lg p-1 ml-1 font-semibold text-xs ${pathname === '/npapps' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/npapps`}>
              <p>NP Apps</p>
            </Link>
            <div className='mx-1'>|</div>
            <Link className={` hover:text-themeStone/80 rounded-lg p-1 font-semibold text-xs ${pathname === '/webdevelopment' ? 'underline text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/webdevelopment`}>
              <p>Web Development</p>
            </Link>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <p className='font-semibold text-xs text-themeStone/80'>{tabs[currentSelection]}</p>
            {pathname === '/webdevelopment' && (
              <DropDownNav open={open} setOpen={setOpen} tabs={tabs} parent={"webDevelopment"} handleClickedTab={handleClickedTab} currentSelection={currentSelection} icons={icons} />
            )}
            {pathname === '/npapps' && (
              <DropDownNav open={open} setOpen={setOpen} tabs={tabs} parent={"npApps"} handleClickedTab={handleClickedTab} currentSelection={currentSelection} icons={icons} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SidenavMobile;