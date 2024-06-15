import WebDevCard from "@/components/pagetemplates/webdevCard";
import { FiClipboard } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

export default function ServicesPage() {

    const sections = [
        'Services',
        'Pricing',
        'Contact',
        'About'
    ]

    const icons = [
        <FiClipboard key={'clipboard'} />,
        <FiDollarSign key={'pricing'}/>,
        <FiMail key={'contact'}/>,
        <FiBookOpen key={'about'}/>
    ]

    const descriptions = [
        'Services Description',
        'Pricing Description',
        'Contact Description',
        'About Description'
    ]

    return (
        <div className="min-w-screen min-h-screen mx-1 rounded-md my-1 bg-slate-400/50">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl p-5">
                    Web Development Services
                </h1>
                <div className="flex flex-col space-y-5 w-full items-center">
                    {sections.map((section, index) => {
                        return (
                            <WebDevCard key={index} title={section} description={descriptions[index]} icon={icons[index]} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}