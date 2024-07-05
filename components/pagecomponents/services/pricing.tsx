'use client'

import { useStateStore } from "@/context/stateStore";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";

export default function PricingComponent({priceUpFront, setPriceUpFront}: {priceUpFront: boolean, setPriceUpFront: (arg: boolean) => void}) {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`flex flex-col rounded-md items-start justify-evenly w-full w-full space-y-2 h-full borderscrollbar-thin scrollbar-webkit border border-themeStone p-2`} style={{overflow: 'auto'}}>
            <div className="flex flex-row items-center justify-evenly w-4/5 border-b border-themeStone self-center">
                <Button variant="flat" type="button" className={`${priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={() => setPriceUpFront(true)} disabled={priceUpFront ? true : false}>
                    Up Front Pricing
                </Button>
                <Button variant="flat" type="button" className={`${!priceUpFront ? 'bg-gray-300 text-themeStone' : 'hover:bg-themeAcqua text-themeWater hover:text-black bg-transparent'} font-semi-bold text-base md:text-lg`} onClick={() => setPriceUpFront(false)} disabled={!priceUpFront ? true : false}>
                    Monthly Pricing
                </Button>
            </div>
            {priceUpFront ? (
                <div className="flex flex-col justify-start items-center rounded-md w-full h-full space-y-2">
                    <p className="text-sm md:text-base text-start w-4/5">
                        {`Up Front Pricing is typically for companies and individuals who are either looking for something quick, know what they want, or have a set budget.`}
                    </p>
                    <h2 className="text-semibold underline text-base md:text-lg">
                        {`What you get and the cost:`}
                    </h2>
                    <div className="flex flex-col justify-start items-start rounded-md w-full h-full space-y-2">
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Full Site Creation: $3.5k for a full site (but I don't charge by the hour, it's just a reference point). If the site has a lot of customizations and can take longer than one to two months, there may be talks of an additional sum per month. But this rarely happens! And when we talk, I will be easily able to tell up front what length the project will require (pending add ons).`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Logo Design: $100 (Mostly to cover work and certain tools)`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Website Maintenance/Edits and Bug fixes: $50/hr with 1 hour minimum`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Site Hosting: $30/month`}
                        </li>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-start items-center rounded-md w-full h-full space-y-2">
                    <p className="text-sm md:text-base text-start w-4/5">
                        {`Monthly Pricing is for those that may be newer to the scene, have a smaller budget, are looking for a long term relationship with their developer, or need long term assistance with hosting, bugs, update, etc. This is the best option for those who are looking for a site that is constantly updated and maintained, and are looking for a developer that is always available.`}
                    </p>
                    <h2 className="text-semibold underline text-base md:text-lg">
                        {`What you get and the cost:`}
                    </h2>
                    <div className="flex flex-col justify-start items-start rounded-md w-full h-full space-y-2">
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Full Site Creation: $0 down and $250 a month and includes hosting, unlimited edits, 24/7 support. Minimum 6 month commitment, month to month after that. The reason that the cost is so low per month here, is because typically my clients that take this rate, are looking for something longer term and are looking for a developer that is always available.`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Logo Design: $100 (Mostly to cover work and certain tools)`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Website Maintenance/Edits and Bug fixes: $50/hr with 1 hour minimum`}
                        </li>
                        <li className="text-sm md:text-base font-normal text-start">
                            {`Site Hosting: $30/month`}
                        </li>
                    </div>
                </div>
            )}
        </div>
    );
}