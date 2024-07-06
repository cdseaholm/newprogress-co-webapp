'use client'

import { useStateStore } from "@/context/stateStore";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import UpFrontPricing from "./pricing/upFrontPricing";
import MonthlyPricing from "./pricing/monthlyPricing";

export default function PricingComponent({priceUpFront, setPriceUpFront}: {priceUpFront: boolean, setPriceUpFront: (arg: boolean) => void}) {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`flex flex-col rounded-md items-start justify-evenly w-full space-y-2 h-full border scrollbar-thin scrollbar-webkit border border-themeStone p-2 md:border-0`} style={{overflow: 'auto'}}>
            <div className="flex flex-row items-center justify-evenly w-4/5 border-b border-themeStone self-center py-2">
                <Button variant="flat" type="button" className={`${priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={() => setPriceUpFront(true)} disabled={priceUpFront ? true : false}>
                    Up Front Pricing
                </Button>
                <Button variant="flat" type="button" className={`${!priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={() => setPriceUpFront(false)} disabled={!priceUpFront ? true : false}>
                    Monthly Pricing
                </Button>
            </div>
            {priceUpFront ? (
                <UpFrontPricing />
            ) : (
                <MonthlyPricing />
            )}
        </div>
    );
}