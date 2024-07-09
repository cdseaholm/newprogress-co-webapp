'use client'

import AboutComponent from "@/components/pagecomponents/services/about";
import ContactComponent from "@/components/pagecomponents/services/contact";
import DropDownNav from "@/components/pagecomponents/services/pageNav/dropDownNav";
import StaticNav from "@/components/pagecomponents/services/pageNav/staticNav";
import PricingComponent from "@/components/pagecomponents/services/pricing";
import ServicesComponent from "@/components/pagecomponents/services/services";
import Templates from "@/components/pagecomponents/services/templates";
import TestimonialComponent from "@/components/pagecomponents/services/testimonials";
import InPageHeaderWrap from "@/components/pagetemplates/inPageHeaderWrap";
import MainChild from "@/components/pagetemplates/mainchild";
import { useStateStore } from "@/context/stateStore";
import { useState } from "react";
import { FiClipboard, FiMic } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

export default function ServicesPage() {

    const currentSelection = useStateStore((state) => state.devCurrentSelection);
    const setCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);

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
            <InPageHeaderWrap>
                <div className="flex flex-col items-center justify-start w-full h-full overflow-hidden" style={{maxHeight: 10000}}>
                        {currentSelection === 0 ?       
                            <ServicesComponent handleClickedTab={handleClickedTab} />
                        : currentSelection === 1 ?
                            <PricingComponent priceUpFront={priceUpFront} handleMonthlyClick={handleMonthlyClick} handleUpFrontClick={handleUpFrontClick} />
                        : currentSelection === 5 ?
                            <ContactComponent />
                        : currentSelection === 2 ?
                            <AboutComponent />
                        : currentSelection === 3 ?
                            <TestimonialComponent />
                        : currentSelection === 4 &&
                            <Templates /> 
                        }
                </div>
            </InPageHeaderWrap>
        </MainChild>
    );
}