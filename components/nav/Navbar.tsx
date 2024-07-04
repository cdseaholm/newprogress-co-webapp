'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';
import openInNewTab from '../listeners/OpenInNewTab';
import { useStateStore } from '@/context/stateStore';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

const SidenavMobile = () => {

  const pathname = usePathname();
  const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

  const imSize = isBreakpoint ? 65 : 100;
  
  return (
    pathname === '/' ?
    (
      null
    ) : (
      <div className={`flex flex-row md:p-1 justify-evenly items-center w-full md:px-2 md:px-20 border-b border-themeStone py-2`}>
          <Link href='/' className='hover:bg-themeAcqua rounded-full' title='home'>
              <div style={{ width: `${imSize}px`, height: `${imSize}px`}} className='flex items-center justify-center'>
                <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
              </div>
          </Link>
          <div className={`md:mx-5 mx-2 my-2`}>
            |
          </div>
          <Link className={`text-xs md:text-base hover:text-themeStone/80 rounded-lg p-1 font-semibold ${pathname === '/npapps' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/npapps`}>
            {'NP Apps'}
          </Link>
          <div className={`md:mx-5 mx-2 my-2`}>
            |
          </div>
          <Link className={`text-xs md:text-base hover:text-themeStone/80 rounded-lg p-1 font-semibold ${pathname === '/webdevelopment' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80' : 'hover:bg-themeAcqua hover:text-black/70'}`} href={`/webdevelopment`}>
            {'Web Development'}
          </Link>
        <div className={`md:mx-5 mx-2 my-2`}>
            |
          </div>
          {isBreakpoint ? (<Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button type='button' variant='flat' className={`hover:bg-themeAcqua bg-transparent min-w-6 px-2`}>
                <FiMail className="text-black" title="Email" size={15}/>
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions" className="bg-stone-200 rounded-sm">
              <DropdownItem className="text-black hover:underline px-1 rounded-md flex-wrap" textValue="email: michael@MDCPA-LLC.com">
                <span>newprogresscs@gmail.com</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          ) : (
            <Button type='button' variant='flat' className={`hover:bg-themeAcqua bg-transparent min-w-10 px-1`}>
              <p className='font-semibold text-lg'>Contact</p>
            </Button>
          )}
        </div>
    )
  );
};

export default SidenavMobile;