'use client'

import { useModalStore } from "@/context/modalStore"

export default function Harbor() {

    const setSignUpModal = useModalStore((state) => state.setSignUpModal);

    return (
        <div className={`flex flex-col items-center justify-start scrollbar-thin scrollbar-webkit w-full h-full p-2 pb-10`} style={{overflowY: 'auto', overflowX: 'hidden', maxHeight: '10000px'}}>
            <div className="flex flex-col justify-start items-center w-4/5 my-12 md:my-16 lg:my-0"/>
            <h1 className="text-2xl md:text-4xl font-bold w-4/5 underline pb-5 pb-5">Harbor</h1>
            <span className="w-4/5 pb-5" style={{display: 'inline'}}>The internet is imense nowdays. It is like a vast ocean, and if you are not careful, you can lose yourself out there. Instead of constantly fighting an unbeatable element, look for a safe Harbor, and take a rest. Harbor is a Personal and Professional Portfolio for any one to use. Have resumes you would like to display? Pull resumes into your Harbor. Love making videos on placing them on YouTube? Connect YouTube to your Harbor to showcase them. Want to make a list of your favorite summer recipes? Add lists to your harbor. Anything that is authentically you, professionally and personally, can be joined into one single stop for any one you would like to show your life to. No matter if your needs are showcasing your abilities, allowing friends to keep tabs on your life, promoting any and all projects/hobbies you have, or even showing a potential employer a much more rounded view of who you are, Harbor can help. No technical expertise needed, just bring yourself! </span> <span> Check out an example or join the waitlist below.</span>
        <div>
            {/**<Link className='cursor-pointer text-blue-800 hover:text-slate-800' href={`/harbor`}>
                Try the Beta here
            </Link>*/}
            </div>
            <div onClick={() => setSignUpModal(true)} className='cursor-pointer text-blue-800 hover:text-slate-800 pb-5'>
                Join the waitlist here
            </div>
        </div>
    )
}