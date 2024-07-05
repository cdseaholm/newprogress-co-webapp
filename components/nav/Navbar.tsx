'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStateStore } from '@/context/stateStore';
import { FiMail } from 'react-icons/fi';
import Image from "next/legacy/image";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import SocialButton from '../buttons/socialIconButton';

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
              <div style={{ width: `${imSize}px`, height: `${imSize}px`}}>
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
              <DropdownItem className="text-black hover:underline px-1 rounded-md flex-wrap rounded-md" textValue="email: newprogresscs@gmail.com">
                <div className="flex flex-col items-center justify-start space-x-2 space-y-3 w-full px-2">
                  <p className='underline text-sm md:text-base font-bold'>{`Contact`}</p>
                  <div className='flex flex-row items-center justify-between w-full text-sm md:text-base'>
                    <p>{`Email:`}</p>
                    <a href='mailto:newprogresscs@gmail.com' className='text-themeWater hover:bg-themeAcqua hover:text-black'>
                      {`newprogresscs@gmail.com`}
                    </a>
                  </div>
                  <div className='flex flex-row items-center justify-center space-x-4 text-sm md:text-base'>
                    <p className='text-start'>{`Socials:`}</p>
                    <div className='flex flex-row items-center justify-center space-x-2'>
                    <SocialButton networkName='linkedin' parent={true} />
                    <div className='md:mx-1 mx-0'>|</div>
                    <SocialButton networkName='github' parent={true} />
                    </div>
                  </div>
                </div>
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