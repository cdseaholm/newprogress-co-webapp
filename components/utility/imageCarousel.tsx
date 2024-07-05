'use client'

import React, { use, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/legacy/image"
import { Button, Dropdown, DropdownTrigger } from '@nextui-org/react';

export function EmblaCarousel() {

    const images = [
        ["/images/logoLarge.png",
        "/images/logoLarge2.png",
        "/images/logoLarge3.png",
        "/images/logo4.png",
        "/images/logoLarge5.png",
        "/images/logoLarge6.png"],
        ["/images/mdcpaLight.png",
        "/images/mdcpaDark.png",
        ],
        ["/images/banksClassic.png",
        "/images/banksClassic2.png",
        "/images/banksPennyLarge.png",
        ]
    ];

    const titles = [
        ["New Progress Classic Logo",
        "New Progress Classic Logo - Version 2",
        "New Progress Woods Logo",
        "New Progress Inner Window Logo",
        "New Progress Blurred Woods Logo",
        "New Progress Woods Logo - Version 2"],
        ["MD CPA Light Logo",
        "MD CPA Dark Logo"],
        ["Banks Apparel Co Classic Logo",
        "Banks Apparel Co Classic Logo - Version 2",
        "Banks Apparel Co Penny Logo"]
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
        inViewThreshold: 0.7,
    });

    const [selectedIndex, setSelectedIndex] = useState(3);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const imSize = 180;
    
    const groupedImages = selectedIndex === 3 ? [...images[0], ...images[1], ...images[2]] : images[selectedIndex];

    const groupedTitles = selectedIndex === 3 ? [...titles[0], ...titles[1], ...titles[2]] : titles[selectedIndex];

    return (
        <div className="flex flex-col items-center justify-evenly h-full w-full border border-themeStone rounded-md py-2 space-y-2">
            <div className='flex flex-row items-center justify-evenly w-full'>
                <p className='underline font-semibold text-base md:text-2xl'>Logo Creation</p>
                <select className="bg-transparent hover:bg-themeAcqua hover:underline text-xs md:text-sm rounded-md border border-themeStone" defaultValue={'4'} onChange={(e) => {
                    setSelectedIndex(Number((e.target as HTMLSelectElement).value));
                }}>
                    <option value="3">All Logo Examples</option>
                    <option value="0">New Progress</option>
                    <option value="1">MD CPA - Client</option>
                    <option value="2">Banks Apparel Co - Client</option>
                </select>
            </div>
            <div className="flex flex-row items-center justify-center mx-auto w-full">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex flex-row">
                        {groupedImages.map((image, index) => (
                        <div className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10" key={image}>
                            <div className="overflow-hidden cursor-pointer w-full">
                                <div className='flex flex-col items-center justify-center w-full h-full'>
                                    <div style={{ position: 'relative', width: `${imSize}px`, height: `${imSize}px`}} key={index}>
                                        <Image src={image} alt={`Logo Version ${index}`} width={imSize} height={imSize} className='rounded-full' placeholder='blur' blurDataURL={image}/>
                                    </div>
                                    <p className='text-sm md:text-base'>
                                        {groupedTitles[index]}
                                    </p>
                                    <p className='text-xs md:text-sm'>{`${index + 1} of ${groupedImages.length}`}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <Button variant='flat' type='button' className="bg-transparent hover:bg-themeAcqua hover:underline text-sm md:text-base" onClick={scrollPrev}>
                    Prev
                </Button>
                <Button variant='flat' className="bg-transparent hover:bg-themeAcqua hover:underline text-sm md:text-base" onClick={scrollNext}>
                    Next
                </Button>
            </div>
        </div>
    )
}