'use client'

import AboutComponent from "@/components/pagecomponents/services/about";
import ContactComponent from "@/components/pagecomponents/services/contact";
import DropDownNav from "@/components/pagecomponents/services/pageNav/dropDownNav";
import StaticNav from "@/components/pagecomponents/services/pageNav/staticNav";
import PricingComponent from "@/components/pagecomponents/services/pricing";
import ServicesComponent from "@/components/pagecomponents/services/services";
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

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
    const [open, setOpen] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(0);
    const tabs = ['Services', 'Pricing', 'Contact', 'About', 'Testimonials'];

    const handleClickedTab = (index: number) => {
        setCurrentSelection(index);
    }

    const icons = [
        <FiClipboard key={'clipboard'}  />,
        <FiDollarSign key={'pricing'}/>,
        <FiMail key={'contact'}/>,
        <FiBookOpen key={'about'}/>,
        <FiMic key={'testimonials'}/>
    ];

    const [priceUpFront, setPriceUpFront] = useState(true);

    return (
        <MainChild>
            <InPageHeaderWrap>
                <div className="flex flex-col md:flex-row items-start justify-start w-full h-full overflow-hidden" style={{maxHeight: 10000}}>
                    {isBreakpoint ? (
                        <DropDownNav open={open} setOpen={setOpen} tabs={tabs} parent={"webDevelopment"} handleClickedTab={handleClickedTab} currentSelection={currentSelection} icons={icons} />
                    ) : (  
                        <StaticNav tabs={tabs} parent={"webDevelopment"} handleClickedTab={handleClickedTab} currentSelection={currentSelection} icons={icons}  />
                    )}
                    <div className="flex flex-col space-y-5 w-full items-center h-full p-1 border-l border-themeStone" style={{overflow: 'hidden'}}>
                            {currentSelection === 0 ?       
                                <ServicesComponent handleClickedTab={handleClickedTab} />
                            : currentSelection === 1 ?
                                <PricingComponent priceUpFront={priceUpFront} setPriceUpFront={setPriceUpFront} />
                            : currentSelection === 2 ?
                                <ContactComponent />
                            : currentSelection === 3 ?
                                <AboutComponent />
                            : currentSelection === 4 &&
                                <TestimonialComponent />
                            }
                    </div>
                </div>
            </InPageHeaderWrap>
        </MainChild>
    );
}