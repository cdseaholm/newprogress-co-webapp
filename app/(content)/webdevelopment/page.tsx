'use client'

import AboutComponent from "@/components/pagecomponents/services/about";
import ContactComponent from "@/components/pagecomponents/services/contact";
import DropDownNav from "@/components/pagecomponents/services/pageNav/dropDownNav";
import StaticNav from "@/components/pagecomponents/services/pageNav/staticNav";
import PricingComponent from "@/components/pagecomponents/services/pricing";
import ServicesComponent from "@/components/pagecomponents/services/services";
import Templates from "@/components/pagecomponents/services/templates";
import TestimonialComponent from "@/components/pagecomponents/services/testimonials";
import MainChild from "@/components/pagetemplates/mainchild";
import { WidthContext } from "@/components/utility/widthContext";
import { useStateStore } from "@/context/stateStore";
import { useContext, useState } from "react";

export default function ServicesPage() {

    const currentSelection = useStateStore((state) => state.devCurrentSelection);
    const setCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);
    const isBreakpoint = useContext(WidthContext) <= 768 ? true : false;
    const isNormalBreak = useContext(WidthContext) <= 1024 ? true : false;

    const handleClickedTab = (index: number) => {
        setCurrentSelection(index);
    }

    const [priceUpFront, setPriceUpFront] = useState(true);

    const handleUpFrontClick = () => {
        setPriceUpFront(true);
    };

    const handleMonthlyClick = () => {
        setPriceUpFront(false);
    };

    return (
        <MainChild>
            <div className="flex flex-col items-center justify-start w-full h-full overflow-auto scrollbar-thin" style={{maxHeight: 10000}}>
                {isBreakpoint || isNormalBreak ? (
                    <div className="w-full" style={{ minHeight: '12%' }} />
                ) : (
                    null
                )}
                {currentSelection === 0 ? (
                    <ServicesComponent handleClickedTab={handleClickedTab} />
                ) : currentSelection === 1 ? (
                    <PricingComponent priceUpFront={priceUpFront} handleMonthlyClick={handleMonthlyClick} handleUpFrontClick={handleUpFrontClick} />
                ) : currentSelection === 2 ? (
                    <AboutComponent />
                ) : currentSelection === 3 ? (
                    <TestimonialComponent />
                ) : currentSelection === 4 ? (
                    <Templates />
                ) : currentSelection === 5 && (
                    <ContactComponent />
                )}
            </div>
        </MainChild>
    );
}