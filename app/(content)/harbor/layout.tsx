import MainPageBody from "@/components/pagetemplates/mainpagebody";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Harbor Web Application",
    description: "Currently in development, Harbor is meant to bridge all forms of users lives into one platform where they can show their passions, work, and life to collegues, friends, family, and more."
};

export default function HarborLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <MainPageBody>
            {children}
        </MainPageBody>
    )
}