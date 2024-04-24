
import MotionWrap from "@/components/transitions/motionwrap";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <MotionWrap key="npapps">
            {children}
        </MotionWrap>
    );
}