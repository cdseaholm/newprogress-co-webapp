'use client'

import UpFrontPricing from "../../../../components/pagecomponents/services/pricing/upFrontPricing";
import MonthlyPricing, { ProductType } from "../../../../components/pagecomponents/services/pricing/monthlyPricing";
import { useModalStore } from "@/context/modalStore";
import React, { useEffect } from "react";
import { useStateStore } from "@/context/stateStore";
import { Tabs } from "@mantine/core";

export default function PricingComponent() {

    const globalLoading = useStateStore((state) => state.loading);
    const setGlobalLoading = useStateStore((state) => state.setLoading);

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

    useEffect(() => {
        if (globalLoading) {
            setGlobalLoading(false);
        }
    }, [globalLoading, setGlobalLoading]);

    return (

        <Tabs defaultValue="upfront" variant='pills' p={'md'}>
            <Tabs.List justify="center" py={8}>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="upfront">
                        Up Front
                    </Tabs.Tab>
                </div>
                <div className="flex flex-row items-center justify-center w-content h-content bg-white/60 rounded-md">
                    <Tabs.Tab value="monthly">
                        Monthly
                    </Tabs.Tab>
                </div>
            </Tabs.List>

            <Tabs.Panel value="upfront">
                <UpFrontPricing handleInfo={handleInfo} />
            </Tabs.Panel>

            <Tabs.Panel value="monthly">
                <MonthlyPricing handleInfo={handleInfo} />
            </Tabs.Panel>

        </Tabs>


    );
}

{/* 
    <div className={`flex flex-col items-center justify-center w-full h-full pb-10`}>
    <Switch
                size="xl"
                w={300}
                color="blue"
                onLabel="Up Front"
                offLabel="Monthly"
                checked={priceUpFront}
                thumbIcon={
                    priceUpFront ? (
                        <p className="p-2 w-1/2">Up front</p>
                    ) : (
                        <p className="p-2 w-1/2">Monthly</p>
                    )
                }
                onChange={(event) => setPriceUpFront(event.currentTarget.checked)}
                className="mb-10 w-full flex flex-row items-center justify-center max-w-md"
            />
    <div className="relative w-full h-full overflow-hidden">
                <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${!priceUpFront ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                    <MonthlyPricing handleInfo={handleInfo} />
                </div>
                <div className={`absolute top-5 left-0 w-full h-full transition-transform duration-500 ease-in-out ${!priceUpFront ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
                    <UpFrontPricing handleInfo={handleInfo} />
                </div>
            </div> 
            </div>
            */}