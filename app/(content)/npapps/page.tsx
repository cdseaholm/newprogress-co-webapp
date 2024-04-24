'use client'

import { useModalContext } from '@/app/context/modal';
import openInNewTab from '@/components/listeners/OpenInNewTab';
import Link from 'next/link';
import React, { useState } from 'react';

const NPAppsPage = () => {

    const   { setSignUpModal } = useModalContext();
    
    const one = (
        <Link onClick={() => openInNewTab('https://www.carlseaholm.com')} href="" className='text-blue-600 hover:text-slate-500'>
            one
        </Link>

    )

    const npapps = [
        {name: "Financr App", description: "NP Financr is a light-weight intuitive Financial tracking application where the user gets to set up how they want to see their money. There is tons of customizability. Initially written with Flutter/Dart, I am currently rewriting this to use React Native with Expo Go.", link: "https://github.com/cdseaholm/np_financr_dart"},
        {name: "Trackr App", description: "NP Trackr is a task manager for the productive individual. The issue with most Task management applications today is that they are overwhelming and are typically paid for, while not being worth the money. I hope to make it convenient, easy to use, and helpful.", link: "https://github.com/cdseaholm/np_trackr"},
        {name: "Gamr App", description: "NP Gamr is a game application where a user can play many classic games for free. Taking lessons from Chess.com where a user can learn a host of games, track their scores against others and challenge themselves. (Yet to upload to Github as this app is still never early)."},
        {name: "Portfolio"}
    ];
    const [npDropdown, setNpDropdown] = React.useState(new Array(npapps.length).fill(false));

    const toggleApp = (index: number) => {
        setNpDropdown(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }

    return (
        <div className='childFirst min-w-screen min-h-screen my-10 mx-10'>
            <div className='flex justify-evenly flex-col items-start space-y-4'>
                <div className="flex justify-center">
                    <h1 className="text-2xl">New Progress Applications</h1>
                </div>
                <div className="py-10">
                    {npapps.map((app, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            toggleApp(index);
                        }}>
                            <h2 className="text-2xl underline hover:text-slate-300 cursor-pointer">{app.name}</h2>
                        </div>
                        <>
                        {npDropdown[index] && app.name !== 'Portfolio' && 
                        <>
                        <p className="pl-5 pb-10">{app.description}</p>
                        {app.name !== "Gamr App" && app.name !== "Portfolio" &&
                        <div onClick={() => openInNewTab(`${app.link}`)} className="pl-10 pb-10 cursor-pointer hover:text-slate-600/90">Github Link</div>
                        }
                        </>
                        }
                        {npDropdown[index] && app.name === "Portfolio" &&
                            <>
                            <span style={{display: 'inline'}}>Looking to create a Personal and Professional Portfolio similar to this <span style={{display: 'inline'}}>{one}</span>? Join the waitlist here and be contacted when it is ready.</span>
                            <div onClick={() => setSignUpModal(true)} className='cursor-pointer text-blue-600 hover:text-slate-500'>
                                Sign up here
                            </div>
                            </>
                        }
                        </>

                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NPAppsPage;