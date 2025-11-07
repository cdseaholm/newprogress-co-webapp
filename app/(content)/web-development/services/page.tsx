'use client'

import { useStateStore } from "@/context/stateStore";
import React, { useEffect } from "react";
import { PanelOne, PanelTwo, PanelThree, PanelFour } from "./components/panels";
import { Accordion } from "@mantine/core";


export default function ServicesComponent() {

    const globalLoading = useStateStore((state) => state.loading);
    const setGlobalLoading = useStateStore((state) => state.setLoading);

    const titles = [
        `Full Website Creation`,
        `Site Maintenance`,
        `Logo Creation`,
        `Site Hosting`
    ];

    const titlePoints = [
        [`Flexible Pricing`, `Customizability`, `Basic site ready to go from Launch`, `Modern Styles and UI`],
        [`Low cost`, `Wide Range of Available Options`, `Good for long term relationships`, `Good for quick one time needs`],
        [`3 logos to begin with`, `Customizability`, `Modern Styles and High Quality`, `Affordable prices`],
        [`Good for Long term relationships`, `No hassle on client end`, `Affordable Prices`, `Strong site upkeep`]
    ];

    const panels = [
        <PanelOne key={0} panelKey={0} />,
        <PanelTwo key={1} panelKey={1} />,
        <PanelThree key={2} panelKey={2} />,
        <PanelFour key={3} panelKey={3} />
    ];

    const items = titles.map((item, index) => (
        <Accordion.Item key={index} value={item} w={"90%"} className="w-full rounded-md">
            <Accordion.Control
                className="w-full rounded-md "
                bg={'white'}
            >
                <div className="flex flex-row justify-between items-center w-full h-full rounded-md p-2">
                    <p className="flex flex-row justify-start items-center w-content h-content pr-12">{item}</p>
                    <ul className="text-sm text-themeStone/70 list-disc pr-4 w-content h-content">
                        {titlePoints[index].map((point, pIndex) => (
                            <li key={pIndex}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </Accordion.Control>
            <Accordion.Panel>{panels[index]}</Accordion.Panel>
        </Accordion.Item>
    ));

    useEffect(() => {
        if (globalLoading) {
            setGlobalLoading(false);
        }
    }, [globalLoading, setGlobalLoading]);

    return (
        <Accordion>
            <div className="w-full h-[86dvh] flex flex-col justify-start items-center space-y-4 my-6 rounded-md overflow-y-auto scrollbar-thin scrollbar-webkit">
                {items}
            </div>
        </Accordion>
    );
}