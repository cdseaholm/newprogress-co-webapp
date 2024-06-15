import MainPageBody from "@/components/pagetemplates/mainpagebody";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Progress Apps",
    description: "New Progress Apps is a collection of applications that New Progress Co has developed and is currently developing."
};

export default function NPAppsLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainPageBody>
            {children}
        </MainPageBody>
    );
}