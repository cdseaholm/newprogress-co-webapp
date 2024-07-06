'use client'

import { useModalStore } from "@/context/modalStore";
import { useStateStore } from "@/context/stateStore";
import { Button } from "@nextui-org/react";

export default function ContactComponent() {

    const setOpenModal = useModalStore((state) => state.setModalOpen);
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className="flex flex-col justify-start items-center border border-themeStone md:border-0 rounded-md p-2 py-10 h-full text-center" style={{width: isBreakpoint ? '98%' : '90%'}}>
            <p className="underline text-lg md:text-2xl font-semibold">{`To Contact:`}</p>
            <p className="text-xs md:text-sm">Serious Inquries Only</p>
            <div className="flex flex-row justify-center items-center space-x-2 py-20">
                <p className="text-sm md:text-base">{`Email:`}</p>
                <p className="text-base md:text-lg text-themeWater hover:themeAcqua hover:text-stone">
                    <a href="mailto:newprogresscs@gmail.com">
                        {`newprogresscs@gmail.com`}
                    </a>
                </p>
            </div>
            <Button type='button' variant='flat' onClick={() => setOpenModal('contact')} className="bg-themeAcqua hover:bg-themeWater hover:themeStone text-base md:text-lg">
                Or fill out this form
            </Button>
        </div>
    );
}