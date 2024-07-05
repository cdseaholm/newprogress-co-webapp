'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useStateStore } from '@/context/stateStore';
import Image from "next/legacy/image";

export default function Home() {
  const [isShowing, setIsShowing] = React.useState(false);
    const router = useRouter();
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

  const navigateToNPApps = () => {
    setIsShowing(true);
    setTimeout(() => {
        router.push('/npapps');
    }, 550);
  };

  const navigateToWebDevelopment = () => {
    setIsShowing(true);
    setTimeout(() => {
        router.push('/webdevelopment');
    }, 550);
  };

  const imSize = isBreakpoint ? 250 : 400;
  

  return (
    <main>
      <div className={`landing-page ${isShowing ? 'slide-up' : ''} flex flex-col justify-start items-center text-center w-full h-full ${isBreakpoint ? 'space-y-10' : 'space-y-8'}`} style={{overflow: 'hidden'}}>
        <div style={{ position: 'relative', width: `${imSize}px`, height: `${imSize}px`}}>
          <Image src='/images/logoplain.png' alt='New Progress Co Logo' layout='fill' objectFit='cover' className='rounded-full' priority sizes='auto' />
        </div>
        <h2 className={`text-xl md:text-2xl font-semibold text-slate-700 pb-2 border-b border-neutral-500 w-4/5`}>
          Empowering Personal and Web Development
        </h2>
        <div className='flex flex-col space-y-2 md:w-4/5 w-full justify-start items-center pt-28'>
          <button className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg w-2/3 justify-center items-center`} onClick={navigateToWebDevelopment}>
            New Progress Web Development
          </button>
          <button className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg w-2/3 justify-center items-center`} onClick={navigateToNPApps}>
            New Progress Applications
          </button>
        </div>
      </div>
    </main>
  );
}