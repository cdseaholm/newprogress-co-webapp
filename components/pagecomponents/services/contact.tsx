'use client'

import SocialButton from "@/components/buttons/socialIconButton";
import { useModalStore } from "@/context/modalStore";
import { useStateStore } from "@/context/stateStore";
import { Button } from "@nextui-org/react";

export default function ContactComponent() {

    const setOpenModal = useModalStore((state) => state.setModalOpen);
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className="flex flex-col justify-start items-center rounded-md p-2 pb-10 h-full text-center w-full lg:space-y-20 md:space-y-16 space-y-12">
            <div className="flex flex-col justify-start items-center">
                <div className="flex flex-col justify-start items-center w-4/5 my-12 md:my-16 lg:my-0"/>
                <h2 className="font-bold underline text-xl md:text-2xl">
                    {`To Contact:`}
                </h2>
                <p className="text-xs md:text-sm">Serious Inquries Only</p>
            </div>
            <div className="flex flex-col justify-center items-center space-x-2">
                <h3 className="font-semibold text-base md:text-lg lg:text-xl italic">
                    {`Email:`}
                </h3>
                <p className="text-base md:text-lg text-themeWater hover:themeAcqua hover:text-stone">
                    <a href="mailto:newprogresscs@gmail.com">
                        {`newprogresscs@gmail.com`}
                    </a>
                </p>
            </div>
            <div className="flex flex-col justify-center items-center divide-y-1 divide-themeStone/50 w-full">
                <div className="w-3/5 p-2"/>
                <div className="w-3/5 p-2"/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <h3 className='text-start font-semibold text-base md:text-lg lg:text-xl italic'>
                    {`Socials:`}
                </h3>
                <div className='flex flex-row items-center justify-center space-x-4 text-sm md:text-base'>
                    <div className='flex flex-row items-center justify-center space-x-2'>
                        <SocialButton networkName='linkedin' parent={true} />
                        <div className='md:mx-1 mx-0'>
                            |
                        </div>
                        <SocialButton networkName="instagram" parent={true} />
                        <div className='md:mx-1 mx-0'>
                            |
                        </div>
                        <SocialButton networkName='github' parent={true} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center divide-y-1 divide-themeStone/50 w-full">
                <div className="w-3/5 p-2"/>
                <div className="w-3/5 p-2"/>
            </div>
            <Button type='button' variant='flat' onClick={() => setOpenModal('contact')} className="bg-themeAcqua hover:bg-themeWater hover:themeStone text-base md:text-lg">
                Or fill out this form
            </Button>
        </div>
    );
}