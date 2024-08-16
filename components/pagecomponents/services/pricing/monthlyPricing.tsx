'use client'

import { FiMoreHorizontal } from "react-icons/fi";
import React from "react";
import { useModalStore } from "@/context/modalStore";


export default function MonthlyPricing() {

    const setInfo = useModalStore((state) => state.setInfo);
    const setInfoModal = useModalStore((state) => state.setInfoModal);

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
            name: 'Site Maintenance',
            cost: 'Included',
            explanation: `This is for unforeseen issues/maintenance/updates, etc of the site. If the bugs or needed maintenance are due to my own fault, then I will take care of it without questions asked. However, if Maintenance or Add Ons become something that I believe is going out of the scope of the agreed upon project, I will suggest we restructure the contract. I will always be upfront about this. I will also be able to tell you up front how long the project will take (pending add ons).`,
            details: [
                `Included in Monthly Pricing`,
                `Includes bug fixes`,
                `Includes updates`,
                `Includes edits (if you need something changed or have a new idea)`
            ]
        },
        {
            name: 'Site Hosting',
            cost: 'Included',
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
    
    return (
        <div className="relative overflow-x-hidden w-full h-full">
            <table className="w-full h-4/5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md sm:rounded-lg bg-gradient-to-tr from-themeAcqua/50 to-themeWhite/80">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Service
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            More
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b border-themeStone/20 border-themeStone/20 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                {product.cost}
                            </td>
                            <td className="px-6 py-4 text-center" onClick={() => {
                                setInfo({
                                    title: product.name,
                                    price: product.cost,
                                    explanation: product.explanation,
                                    details: product.details
                                });
                                setInfoModal(true);
                            }}>
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline self-center">
                                    <FiMoreHorizontal size={20} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


