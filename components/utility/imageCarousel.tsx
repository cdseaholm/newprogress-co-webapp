'use client'

import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@nextui-org/react';
import ImageFormat from './imageFormat';

export function EmblaCarousel({accordianSignal}: {accordianSignal: string}) {

    const images = [
        [
        "/images/logoLarge2.png",
        "/images/logoLarge3.png",
        "/images/logo4.png",
        "/images/logoLarge5.png",
        "/images/logoLarge6.png"],
        ["/images/mdcpaLight.png",
        "/images/mdcpaDark.png",
        ],
        ["/images/303tcLogo.png"],
        ["/images/banksClassic.png",
        "/images/banksClassic2.png",
        "/images/banksPennyLarge.png",
        ]
    ] as string[][];

    const titles = [
        [
        "New Progress Classic Logo - Version 2",
        "New Progress Woods Logo",
        "New Progress Inner Window Logo",
        "New Progress Blurred Woods Logo",
        "New Progress Woods Logo - Version 2"],
        ["MD CPA Light Logo",
        "MD CPA Dark Logo"],
        ["303 Training Center Logo"],
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

    const [selectedIndex, setSelectedIndex] = useState(4);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const imSize = 180;
    
    const groupedImages = selectedIndex === 4 ? [...images[0] as string[], ...images[1] as string[], ...images[2] as string[], ...images[3] as string[]] : images[selectedIndex] as string[];

    const groupedTitles = selectedIndex === 4 ? [...titles[0] as string[], ...titles[1] as string[], ...titles[2] as string[], ...titles[3] as string[]] : titles[selectedIndex] as string[];

    return (
        <div className={`flex flex-col items-center justify-evenly h-full w-full ${accordianSignal === '3' ? 'border border-themeStone' : ''} rounded-md py-2 space-y-2`}>
            <div className='flex flex-row items-center justify-end w-full'>
                <select className="bg-transparent hover:bg-themeAcqua hover:underline text-xs md:text-sm rounded-md border border-themeStone" name='logoexampleselect' id='logoexampleselect' defaultValue={'4'} onChange={(e) => {
                    setSelectedIndex(Number((e.target as HTMLSelectElement).value));
                }}>
                    <option value="4" id='logoexample4'>All Logo Examples</option>
                    <option value="0" id='logoexample0'>New Progress</option>
                    <option value="1" id='logoexample1'>MD CPA - Client</option>
                    <option value="2" id='logoexample2'>303 Training Center - Client</option>
                    <option value="3" id='logoexample3'>Banks Apparel Co - Client</option>
                </select>
            </div>
            <div className="flex flex-row items-center justify-center mx-auto w-full">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex flex-row">
                        {groupedImages && groupedImages.map((image, index) => (
                        <div className="relative flex flex-none flex-wrap lg:flex-nowrap w-full" key={image}>
                            <div className="overflow-hidden cursor-pointer w-full">
                                <div className='flex flex-col items-center justify-center w-full h-full'>
                                    <ImageFormat image={image} imSize={imSize} index={index} />
                                    <p className='text-sm md:text-base'>
                                        {groupedTitles[index]}
                                    </p>
                                    <p className='text-xs md:text-sm'>{`${index + 1} of ${groupedImages && groupedImages.length}`}</p>
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