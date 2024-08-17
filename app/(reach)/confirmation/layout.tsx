import MainPageBody from "@/components/pagetemplates/mainpagebody";

export const metadata = {
    title: "Confirmation Page",
    description: "A page to confirm a customer has successfully requested contact"
};

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainPageBody>
            {children}
        </MainPageBody>
    );
}