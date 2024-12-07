'use client'

import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { FiBookOpen, FiClipboard, FiDollarSign, FiMail, FiMenu, FiMic } from "react-icons/fi";
import React, { useState } from "react";

export const ServicesTab = () => {
    return (
        <FiClipboard />
    )
}

export const PricingTab = () => {
    return (
        <FiDollarSign />
    )
}

export const AboutTab = () => {
    return (
        <FiBookOpen />
    )
}

export const TestimonialsTab = () => {
    return (
        <FiMic />
    )
}

export const ContactTab = () => {
    return (
        <FiMail />
    )
}

export default function DropDownNav({ handleClickedTab }: { handleClickedTab: (tab: string) => void }) {

    {/**['Harbor', 'Financr', 'Trackr', 'Gamr'] */ }

    const [currentTab, setCurrentTab] = useState<string>("Services");

    return (
        <Dropdown backdrop="blur" className="w-full">
            <DropdownTrigger>
                <Button className={`hover:underline bg-transparent font-medium min-w-4 w-full capitalize`}>
                    <div className="flex flex-row justify-end items-center w-full space-x-3">
                        <p>{currentTab}</p>
                        <FiMenu size={21} />
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="faded"
                aria-label="Static Actions"
                className="bg-stone-200 rounded-sm"
                closeOnSelect={true}
                onAction={(key) => {
                    let stringKey = key.toString();
                    let firstChar = stringKey.charAt(0).toUpperCase();
                    let restOfString = stringKey.slice(1);
                    let upperString = firstChar + restOfString;
                    setCurrentTab(upperString);
                    handleClickedTab(stringKey);
                }}
                selectionMode="single"
                selectedKeys={currentTab}
                disallowEmptySelection
            >
                <DropdownSection className="text-black text-md md:text-lg hover:underline px-1 rounded-md flex-wrap rounded-md">
                    <DropdownItem
                        key={'services'}
                        startContent={<ServicesTab />}
                    >
                        Services
                    </DropdownItem>
                    <DropdownItem
                        key={'pricing'}
                        startContent={<PricingTab />}
                    >
                        Pricing
                    </DropdownItem>
                    <DropdownItem
                        key={'about'}
                        startContent={<AboutTab />}
                    >
                        About
                    </DropdownItem>
                    <DropdownItem
                        key={'testimonials'}
                        startContent={<TestimonialsTab />}
                    >
                        Testimonials
                    </DropdownItem>
                    <DropdownItem
                        key={'contact'}
                        startContent={<ContactTab />}
                    >
                        Contact
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}