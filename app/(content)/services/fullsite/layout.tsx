import MotionWrap from "@/components/transitions/motionwrap";


export const metadata = {
    title: "Services: Full Site Work",
    description: "A Landing Page for Full Site Work Services."
};

export default function FullSiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionWrap key="fullSiteLayout">
            <div className="childFirst min-w-screen min-h-screen my-10 mx-10">
            {children}
            </div>
        </MotionWrap>
    );
}