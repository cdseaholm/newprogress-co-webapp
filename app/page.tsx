'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@/components/listeners/WidthSettings';
import Link from 'next/link';
  

export default function Home() {
  const [isShowing, setIsShowing] = React.useState(false);
    const router = useRouter();
    const isBreakpoint = useMediaQuery(768);

  const navigateToNPApps = () => {
    setIsShowing(true);
    setTimeout(() => {
        router.push('/npapps');
    }, 500);
  };

  const navigateToNPDashboard = () => {
    setIsShowing(true);
    setTimeout(() => {
        router.push('/npdashboard');
    }, 500);
  };
  

  return (
      <div className={`landing-page ${isShowing ? 'slide-up' : ''}`}>
        <div className={`flex px-5 py-5 md:py-8`}>
          <div className='min-h-screen min-w-screen my-10 mx-10'>
            <h1 className={`flex flex-start text-6xl md:text-8xl mt-2 font-semibold text-slate-700`}>New Progress</h1>
            <h2 className={`flex ${isBreakpoint ? 'text-xl' : 'text-2xl'} font-semibold text-slate-700 pb-20`}>A New Way to Make Progress</h2>
            <div className='flex flex-row items-center space-x-10'>
              <Link className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg `} href={'/npapps'}>
                New Progress Applications
              </Link>
              <Link className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg`} href={'/webdevelopment'}>
                New Progress Web Development
              </Link>
            </div>
          </div>
          </div>
        </div>
  );
}