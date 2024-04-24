import MotionWrap from "@/components/transitions/motionwrap";

export const metadata = {
    title: "NP Portfolio",
    description: "Waitlist sign up for Portfolio."
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionWrap key="nptrackr">
            <div className="childFirst min-w-screen min-h-screen my-10 mx-10">
                {children}
            </div>
        </MotionWrap>
    );
}