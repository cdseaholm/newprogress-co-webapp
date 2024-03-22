'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@/components/listeners/WidthSettings';
  

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
    <main>
      <div className={`landing-page ${isShowing ? 'slide-up' : ''}`}>
        <div className={`flex px-5 ${isBreakpoint ? 'py-5' : 'py-8'}`}>
          <div className='min-h-screen min-w-screen my-10 mx-10'>
            <h1 className={`flex flex-start ${isBreakpoint ? 'text-6xl' : 'text-8xl'} mt-2 font-semibold text-slate-600`}>New Progress</h1>
            <h2 className={`flex ${isBreakpoint ? 'text-xl' : 'text-2xl'} font-semibold text-slate-600 pb-20`}>A New Way to Make Progress</h2>
            <div className='flex flex-row items-start space-x-10'>
            <button className={`flex ${isBreakpoint ? 'text-sm p-2' : 'text-md p-3'} bg-slate-500/70 text-white rounded-lg`} onClick={navigateToNPApps}>
              New Progress Applications
            </button>
            <button className={`flex ${isBreakpoint ? 'text-sm p-2' : 'text-md p-3'} bg-slate-500/70 text-white rounded-lg`} onClick={navigateToNPDashboard}>
              New Progress Dashboard
            </button>
            </div>
            <p className='flex flex-row mt-20 justify-center'>~Site in Development~</p>
          </div>
          </div>
        </div>
    </main>
  );
}