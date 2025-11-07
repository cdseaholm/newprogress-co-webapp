'use client'

import { FiBookOpen, FiClipboard, FiDollarSign, FiMail, FiMenu, FiMic } from "react-icons/fi";
import React from "react";
import { Menu } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useStateStore } from "@/context/stateStore";

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

export default function DropDownNav() {

    //leaving handleClickedTab for future use with NPApps and such because it currently handles it
    {/**['Harbor', 'Financr', 'Trackr', 'Gamr'] */ }
    const router = useRouter();
    const setGlobalLoading = useStateStore((state) => state.setLoading);

    //const [currentTab, setCurrentTab] = useState<string>("Services");

    const clickTab = (tab: string) => {
        setGlobalLoading(true);
        router.push(tab)
    };

    return (
        <Menu shadow="md" width={200} position="bottom-end" offset={3} closeOnItemClick closeOnEscape closeOnClickOutside>
            <Menu.Target>
                <div className="flex flex-row justify-end items-center w-full space-x-3 cursor-pointer">
                    {/**<p>{currentTab}</p> */}
                    <FiMenu size={21} />
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    key={'web-development'}
                    onClick={() => {
                        clickTab('/web-development');
                    }}
                >
                    <p className="cursor-pointer text-md font-semibold">Web Development</p>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    key={'services'}
                    leftSection={<ServicesTab />}
                    onClick={() => clickTab('/web-development/services')}
                >
                    Services
                </Menu.Item>
                <Menu.Item
                    key={'pricing'}
                    leftSection={<PricingTab />}
                    onClick={() => clickTab('/web-development/pricing')}
                >
                    Pricing
                </Menu.Item>
                <Menu.Item
                    key={'about'}
                    leftSection={<AboutTab />}
                    onClick={() => clickTab('/web-development/about')}
                >
                    About
                </Menu.Item>
                <Menu.Item
                    key={'testimonials'}
                    leftSection={<TestimonialsTab />}
                    onClick={() => clickTab('/web-development/testimonials')}
                >
                    Testimonials
                </Menu.Item>
                <Menu.Item
                    key={'contact'}
                    leftSection={<ContactTab />}
                    onClick={() => clickTab('/web-development/contact')}
                >
                    Contact
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>

    )
}