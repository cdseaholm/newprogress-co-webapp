'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useStateStore } from '@/context/stateStore';
  

export default function Home() {
  const [isShowing, setIsShowing] = React.useState(false);
    const router = useRouter();

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
    <div className={`landing-page ${isShowing ? 'slide-up' : ''} flex flex-col justify-center items-center text-center w-full`}>
      <h1 className={`text-6xl md:text-8xl mt-2 font-semibold text-slate-700`}>
        New Progress
      </h1>
      <div className='border-b border-neutral-500 py-2' style={{width: '80%', height: '2px'}}/>
      <h2 className={`text-xl md:text-2xl font-semibold text-slate-700 pb-20`}>
        A New Way to Make Progress
      </h2>
      <Link className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg w-2/3 justify-center items-center mb-5`} href={'/npapps'}>
        New Progress Applications
      </Link>
      <Link className={`flex flex-row text-sm p-2 md:text-md md:p-3 bg-slate-600/70 text-white rounded-lg w-2/3 justify-center items-center`} href={'/webdevelopment'}>
        New Progress Web Development
      </Link>
    </div>
  );
}