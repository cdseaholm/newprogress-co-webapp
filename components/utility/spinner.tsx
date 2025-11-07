import Image from "next/image"


export function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center h-dvh w-full">
            <Image src="/images/logoLarge2.png" alt="New Progress Co Logo" width={100} height={100} />
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-900"></div>
        </div>
    );
}