import MainPageBody from "@/components/pagetemplates/mainpagebody";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development Services",
    description: "New Progress Co specializes in Web Development along side it's other services. We offer a wide range of services to help you get your website up and running."
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainPageBody>
            {children}
        </MainPageBody>
    );
}