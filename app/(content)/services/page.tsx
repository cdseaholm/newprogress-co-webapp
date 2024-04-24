import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ServicesPage() {

    return (
        <div className="childFirst min-w-screen min-h-screen my-10 mx-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl p-5">
                Services
                </h1>
                <div className="flex flex-col space-y-2">
                    <Link href="/services/fullsite">
                        <p>Full Site/Application Creation</p>
                    </Link>
                    <Link href="/services/singlepage">
                        <p>Single Page Applications</p>
                    </Link>
                    <Link href="/services/bugs">
                        <p>New Progress Applications</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}