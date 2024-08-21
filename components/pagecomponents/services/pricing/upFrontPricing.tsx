'use client'

import { useModalStore } from "@/context/modalStore";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";


export default function UpFrontPricing() {

    const products = [
        {
            name: 'Full Site Creation',
            cost: `$3,500`,
            explanation: `I don't charge by the hour, it's just a reference point). A 5 page static site can take anyway from 20-40 hours of work depending on what you're looking for. This is a great option for those that are looking for a site that is constantly updated and maintained, and are looking for a developer that is always available. If the site has a lot of customizations and can take longer than one to two months, there may be talks of an additional sum per month. But this rarely happens! And when we talk, I will be easily able to tell up front what length the project will require (pending add ons).`,
            details: [
                `5 pages minimum (I can do more or less, but this has proven to be a good starting point, but this is the minimum)`,
                `Fully responsive design (looks good on all devices)`,
                `SEO optimization (so you can be found on Google)`,
                `Contact form (so your customers can reach out)`,
                `Header`,
                `Footer`,
                `Styling of your choice (if you're able to provide me with colors schemes and/or a site you'd like to emulate, that would help. If not, I can help with that too)`,
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
            cost: '$50/hr',
            explanation: `I charge $50/hr for any edits or bug fixes that you may need. I have a 1 hour minimum, but if it's a quick fix I will be able to tell you how long it will take me to fix the issue. If it's a bug in my code, I will fix it for free. I am a perfectionist though and I don't forsee that being an issue.`,
            details: [
                `*1 hour minimum*`,
                `Includes bug fixes`,
                `Includes updates`,
                `Includes edits (if you need something changed or have a new idea)`
            ]
        },
        {
            name: 'Site Hosting',
            cost: '$30/month',
            explanation: `Site Hosting is a crucial part of getting your site up and running. It's the final step in the process of getting your site live. The $30 is mostly to cover the fees of the hosting provider I use. I can walk you through the process of setting up your own hosting, but I prefer to handle it all. I can also help you find a hosting provider that fits your needs.`,
            details: [
                `Hosting provider of my choice (I can help you find one that fits your needs)`,
                `SSL certificate (so your site is secure)`,
                `24/7 support (for the time you are paying the $30/month)`,
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

    const setInfoModal = useModalStore((state) => state.setInfoModal);
    const setInfo = useModalStore((state) => state.setInfo);
    
    return (
        <div className={`relative overflow-x-hidden w-full h-full`}>
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
                        <tr key={index} className="border-b border-themeStone/20 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                {product.cost}
                            </td>
                            <td className="px-6 py-4 text-right" onClick={() => {
                                setInfo({
                                    title: product.name,
                                    price: product.cost,
                                    explanation: product.explanation,
                                    details: product.details
                                });
                                setInfoModal(true);
                            }}>
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
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