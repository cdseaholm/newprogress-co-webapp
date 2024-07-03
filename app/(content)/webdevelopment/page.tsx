import Contact from "@/app/(reach)/contact/page";
import AboutComponent from "@/components/pagecomponents/services/about";
import ContactComponent from "@/components/pagecomponents/services/contact";
import PricingComponent from "@/components/pagecomponents/services/pricing";
import ServicesComponent from "@/components/pagecomponents/services/services";
import TestimonialComponent from "@/components/pagecomponents/services/testimonials";
import MainChild from "@/components/pagetemplates/mainchild";
import { FiClipboard } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

export default function ServicesPage() {

    const icons = [
        <FiClipboard key={'clipboard'} />,
        <FiDollarSign key={'pricing'}/>,
        <FiMail key={'contact'}/>,
        <FiBookOpen key={'about'}/>
    ]

    return (
        <MainChild>
            <div className="flex flex-col justify-center items-center p-2" style={{overflow: 'hidden'}}>
                <h1 className="text-2xl p-5">
                    Web Development Services
                </h1>
                <div className="flex flex-col space-y-5 w-full items-center h-full" style={{overflow: 'auto'}}>
                    <ServicesComponent />
                    <PricingComponent />
                    <ContactComponent />
                    <AboutComponent />
                    <TestimonialComponent />
                </div>
            </div>
        </MainChild>
    );
}