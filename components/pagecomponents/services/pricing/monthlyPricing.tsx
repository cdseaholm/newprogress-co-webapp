import { AccordionPage } from "@/components/utility/accordian";
import { useStateStore } from "@/context/stateStore";

import React from "react";

type product = {
    name: string,
    cost: string,
    explanation: string,
    details: string[]
}

const panel = ({product}: {product: product}) => {
    return (
        <div className="flex flex-col justify-start items-center rounded-md w-full space-y-2">
            <p className="text-base md:text-lg underline text-semibold">Details</p>
            <ul className={`list-disc text-sm md:text-base grid grid-cols-1 grid-rows-${product.details.length} items-center gap-1 text-start`} style={{width: '90%'}}>
                {product.details.map((detail, index) => (
                    <li key={index}>
                        {detail}
                    </li>
                ))}
            </ul>
            <p className="text-base md:text-lg underline text-semibold">{`Explanation`}</p>
            <p className="text-sm md:text-base">{product.explanation}</p>
        </div>
    )
}

export default function MonthlyPricing() {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    const products = [
        {
            name: 'Full Site Creation',
            cost: `$250/month`,
            explanation: `The reason that the cost is so low per month here as compared to full price up front divided by 6 months, is because typically my clients that take this rate, are looking for something longer term and are looking for a developer that is always available.`,
            details: [
                `$0 down`,
                `6 month minimum commitment, month to month after that`,
                `24/7 support for the time you are paying the $250/month`,
                `Unlimited edits for the time you are paying the $250/month`,
                `Hosting included for the time you are paying the $250/month`,
            ]
        },
        {
            name: 'Logo Design',
            cost: '$100',
            explanation: `I use a few tools to help me design logos, and I also have a few tricks up my sleeve. The $100 is just to cover the costs of the tools I use. Most designers charge on average $300+ for their designs. Or I can help you find a designer if you're looking for something more complex.`,
            details: [
                `1 main logo`,
                `1 secondary logo`,
                `1 favicon (the little icon that shows up in the tab of your browser)`,
                `For each extra version, it's $30/logo`
            ]
        },
        {
            name: 'Website Maintenance/Edits and Bug fixes',
            cost: 'Included',
            explanation: `This is for unforeseen issues/maintenance/updates, etc of the site. If the bugs or needed maintenance are due to my own fault, then I will take care of it without questions asked. However, if Maintenance or Add Ons become something that I believe is going out of the scope of the agreed upon project, I will suggest we restructure the contract. I will always be upfront about this. I will also be able to tell you up front how long the project will take (pending add ons).`,
            details: [
                `Included in Monthly Pricing`
            ]
        },
        {
            name: 'Site Hosting',
            cost: '$30/month',
            explanation: `Site Hosting is a crucial part of getting your site up and running. It's the final step in the process of getting your site live. I can walk you through the process of setting up your own hosting, but I prefer to handle it all. I can also help you find a hosting provider that fits your needs.`,
            details: [
                `Included in Monthly Pricing`,
                `Hosting provider of my choice (I can help you find one that fits your needs)`,
                `SSL certificate (so your site is secure)`,
                `24/7 support (for the time you are paying the monthly fee)`,
                `99.9% uptime (so your site is always live)`,
                `Security (so your site is safe from hackers)`,
                `Updates (so your site is always up to date)`,
                `Email accounts (so you can have a professional email address)`,
                `Domain name (if you don't already have one)`,
                `Database (if you need it)`,
                `Analytics (so you can track your site's performance)`,
                `SEO optimization (so you can be found on Google)`,
            ]
        }
    ];

    const titles = [
        ['Full Website Creation', '$3,500'],
        ['Logo Creation', '$100'],
        ['Site Maintenance', '$50/hr'],
        ['Site Hosting', '$30/month']
    ];

    const heights = [380, 380, 280, 570];
    
    return (
        <div className="flex flex-col justify-start items-center rounded-md w-full h-full space-y-2">
            <p className="text-sm md:text-base text-start" style={{width: isBreakpoint ? '98%' : '90%'}}>
                {`Monthly Pricing is for those that may be newer to the scene, have a smaller budget, are looking for a long term relationship with their developer, or need long term assistance with hosting, bugs, update, etc. A 5 page static site can take anyway from 20-40 hours of work depending on what you're looking for. Each one of my prices are subject to change and based on the scope of the project. I will be able to tell you up front what length the project will require (pending add ons). This is the best option for those who are looking for a site that is constantly updated and maintained, and are looking for a developer that is always available.`}
            </p>
            <h2 className="font-semibold underline text-base md:text-lg">
                {`What you get and the cost:`}
            </h2>
            <AccordionPage panels={products.map((product: product) => panel({product}))} panelTitles={titles} heights={heights} />
        </div>
    )
}
