
import MotionWrap from "@/components/transitions/motionwrap";

export default function NPAppsLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionWrap key="npapps">
            {children}
        </MotionWrap>
    );
}