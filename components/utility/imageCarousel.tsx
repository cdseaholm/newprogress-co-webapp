'use client'

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button } from '@nextui-org/react';

export function EmblaCarousel() {

    const images = [
        "/images/logo.png",
        "/images/logo2.png",
        "/images/logo3.png",
        "/images/logo4.png",
        "/images/logo5.png",
        "/images/logo6.png",
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        loop: true,
        skipSnaps: false,
        inViewThreshold: 0.7,
    });

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const imSize = 250;

    return (
        <div className="col-start-2 row-start-2 flex flex-col items-center justify-evenly h-full w-full">
            Logo Examples
            <div className="flex flex-row items-center justify-center mx-auto w-full">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex justify-center">
                        {images.map((image, index) => (
                        <div className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10" key={image}>
                            <div className="overflow-hidden cursor-pointer lg:w-1/2">
                                <div className="flex min-w-0 justify-center" style={{ position: 'relative', width: `${imSize}px`, height: `${imSize}px`}} key={index}>
                                    <Image src={image} alt={`Logo Version ${index}`} width={imSize} height={imSize} className='rounded-full' placeholder='blur' blurDataURL={image}/>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Button className="embla__prev" onClick={scrollPrev}>
                            Prev
                        </Button>
                        <Button className="embla__next" onClick={scrollNext}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}