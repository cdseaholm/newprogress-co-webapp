import Image from "next/image"

export default function Spinner() {
    return (
        <div className="flex flex-col min-h-screen min-w-screen justify-center items-center bg-white/60">
            <div className="flex flex-col bg-transparent rounded-full animate-pulse h-full w-full justify-center items-center">
                <Image src="/images/logoLarge2.png" alt="New Progress Co Logo" width={100} height={100} />
                <div className="w-full flex flex-row justify-center">
                    <p className="font-semibold text-md md:text-lg text-left text-slate-700">
                        {`Loading...`}
                    </p>
                </div>
            </div>
        </div>
    );
}