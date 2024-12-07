'use client'

import { Button } from "@nextui-org/react";
import UpFrontPricing from "./pricing/upFrontPricing";
import MonthlyPricing, { ProductType } from "./pricing/monthlyPricing";
import { useModalStore } from "@/context/modalStore";

export default function PricingComponent({ priceUpFront, handleMonthlyClick, handleUpFrontClick }: { priceUpFront: boolean, handleMonthlyClick: () => void, handleUpFrontClick: () => void }) {

    const setInfo = useModalStore((state) => state.setInfo);
    const setInfoModal = useModalStore((state) => state.setInfoModal);

    const handleInfo = (prod: ProductType) => {
        if (!prod) {
            return;
        }
        setInfo({
            title: prod.name,
            price: prod.cost,
            explanation: prod.explanation,
            details: prod.details
        });
        setInfoModal(true);
    }
    
    return (
        <div className={`flex flex-col items-center justify-center w-full h-full pb-10`}>
            <div className="flex flex-row items-center justify-evenly self-center py-2">
                <Button variant="flat" type="button" className={`${!priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onPress={handleMonthlyClick} disabled={!priceUpFront ? true : false}>
                    Monthly Pricing
                </Button>
                <Button variant="flat" type="button" className={`${priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onPress={handleUpFrontClick} disabled={priceUpFront ? true : false}>
                    Up Front Pricing
                </Button>
            </div>
            <div className="relative w-full h-full overflow-hidden">
                <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${!priceUpFront ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <MonthlyPricing handleInfo={handleInfo}/>
                </div>
                <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${!priceUpFront ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
                    <UpFrontPricing handleInfo={handleInfo}/>
                </div>
            </div>
        </div>
    );
}