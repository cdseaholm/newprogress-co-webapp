'use client'

import MainChild from "@/components/pagetemplates/mainchild";
import Link from "next/link";

export default function ServicesPage() {

    const pages = [
        { label: 'Services', link: '/web-development/services' },
        { label: 'Pricing', link: '/web-development/pricing' },
        { label: 'About', link: '/web-development/about' },
        { label: 'Testimonials', link: '/web-development/testimonials' },
        { label: 'Contact', link: '/web-development/contact' }
    ];

    //taking out for now {/** : currentSelection === 4 ? (<Templates />) */}
    // <div className="flex flex-col items-center justify-start w-full h-full overflow-auto scrollbar-thin" style={{maxHeight: 10000}}>
    //             {isBreakpoint || isNormalBreak ? (
    //                 <div className="w-full" style={{ minHeight: '12%' }} />
    //             ) : (
    //                 null
    //             )}
    //             {currentSelection === 0 ? (
    //                 <ServicesComponent handleClickedTab={handleClickedTab} />
    //             ) : currentSelection === 1 ? (
    //                 <PricingComponent priceUpFront={priceUpFront} handleMonthlyClick={handleMonthlyClick} handleUpFrontClick={handleUpFrontClick} />
    //             ) : currentSelection === 2 ? (
    //                 <AboutComponent />
    //             ) : currentSelection === 3 ? (
    //                 <TestimonialComponent />
    //             ) : currentSelection === 4 && (
    //                 <ContactComponent />
    //             )}
    //         </div>

    return (
        <MainChild>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-auto scrollbar-thin">
                {pages.map((page, index) => (
                    <Link key={index} href={page.link} className="flex flex-row items-center justify-center w-full md:w-4/5 h-content overflow-hidden p-2 mb-6 bg-white/70 hover:bg-themeAcqua/30 rounded-md shadow-md hover:shadow-xl transition-all duration-200 ease-in-out text-md md:text-lg font-semibold text-themeStone">
                        {page.label}
                    </Link>
                ))}
            </div>
        </MainChild>
    );
}