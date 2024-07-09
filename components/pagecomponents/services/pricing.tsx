'use client'

import { useStateStore } from "@/context/stateStore";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import UpFrontPricing from "./pricing/upFrontPricing";
import MonthlyPricing from "./pricing/monthlyPricing";

export default function PricingComponent({priceUpFront, handleMonthlyClick, handleUpFrontClick}: {priceUpFront: boolean, handleMonthlyClick: () => void, handleUpFrontClick: () => void}) {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`flex flex-col items-center justify-start w-full h-full scrollbar-thin scrollbar-webkit p-2 pb-10 md:border-0 sm:pr-1 sm:ml-1`} style={{overflow: 'auto'}}>
            <div className="w-full" style={{minHeight: '12%'}}/>
            <div className="flex flex-col justify-start h-full w-full items-center">
                <div className="flex flex-row items-center justify-evenly w-4/5 self-center py-2">
                    <Button variant="flat" type="button" className={`${priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={handleUpFrontClick} disabled={priceUpFront ? true : false}>
                        Up Front Pricing
                    </Button>
                    <Button variant="flat" type="button" className={`${!priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={handleMonthlyClick} disabled={!priceUpFront ? true : false}>
                        Monthly Pricing
                    </Button>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${priceUpFront ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <UpFrontPricing />
                    </div>
                    <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${priceUpFront ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
                        <MonthlyPricing />
                    </div>
                </div>
            </div>
        </div>
    );
}