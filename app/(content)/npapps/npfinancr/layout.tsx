import MotionWrap from "@/components/transitions/motionwrap";

export const metadata = {
    title: "NP Apps",
    description: "A One Sheet for NP Apps."
};

export default function NPFinancrLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionWrap key="npfinancr">
            <div className="childFirst min-w-screen min-h-screen my-10 mx-10">
                {children}
            </div>
        </MotionWrap>
    );
}