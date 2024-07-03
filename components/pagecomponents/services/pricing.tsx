'use client'

import { useStateStore } from "@/context/stateStore";
import { FiDollarSign } from "react-icons/fi";

export default function PricingComponent() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    return (
        <div className={`flex flex-col rounded-md items-start justify-evenly ${isBreakpoint ? 'w-full' : 'w-4/5'} border border-neutral-600 p-2 space-y-2 h-full`}>
            <div className="flex flex-row">
                <FiDollarSign />
            </div>
            <div className="flex flex-col justify-start items-start rounded-md w-full h-full space-y-2">
                <li className="font-bold">
                    Logo Design: <span className="font-normal">$100 (Mostly to cover work and certain tools)</span>
                </li>
                <li className="font-bold">{"Full Website Design:"}<span className="font-normal"> {"$3.5k for a full site (but I don't charge by the hour, it's just a reference point). If the site has a lot of customizations and can take longer than one to two months, there may be talks of an additional sum per month. But this rarely happens! And when we talk, I will be easily able to tell up front what length the project will require (pending add ons). Or, if you're new your industry, don't have a lot of cash on hand, I do have another option. Which is a Subscription pricing model. $0 down and $250 a month and includes hosting, unlimited edits, 24/7 support. Minimum 6 month commitment, month to month after that. If you think it's a better deal, it's because it is! Having long lasting support at a better price is better for us both in my opinion."}</span></li>
                <li className="font-bold">{"Website Maintenance/Edits and Bug fixes:"} <span className="font-normal">{"$50/hr with 1 hour minimum"}</span></li>
                <li className="font-bold">{"Site Hosting:"} <span className="font-normal">{"$30/month"}</span></li>
            </div>
            <div className="flex flex-row">
                {``}
            </div>
        </div>
    );
}