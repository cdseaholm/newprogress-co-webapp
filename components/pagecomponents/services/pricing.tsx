'use client'

import { Button } from "@nextui-org/react";
import UpFrontPricing from "./pricing/upFrontPricing";
import MonthlyPricing from "./pricing/monthlyPricing";
import { WidthContext } from "@/components/utility/widthContext";
import { useContext } from "react";

export default function PricingComponent({priceUpFront, handleMonthlyClick, handleUpFrontClick}: {priceUpFront: boolean, handleMonthlyClick: () => void, handleUpFrontClick: () => void}) {

    const isBreakpoint = useContext(WidthContext) <= 768 ? true : false;

    return (
        <div className={`flex flex-col items-center justify-center w-full h-full pb-10`}>
                <div className="flex flex-row items-center justify-evenly self-center py-2">
                    <Button variant="flat" type="button" className={`${priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={handleUpFrontClick} disabled={priceUpFront ? true : false}>
                        Up Front Pricing
                    </Button>
                    <Button variant="flat" type="button" className={`${!priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={handleMonthlyClick} disabled={!priceUpFront ? true : false}>
                        Monthly Pricing
                    </Button>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${priceUpFront ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <UpFrontPricing />
                    </div>
                    <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${priceUpFront ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
                        <MonthlyPricing />
                    </div>
                </div>
        </div>
    );
}