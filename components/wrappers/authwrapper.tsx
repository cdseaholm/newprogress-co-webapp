'use client'

import { SessionProvider } from "next-auth/react"
import { useEffect, useState } from "react";

export default function AuthWrapper({children}: {children: React.ReactNode}) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        loading ? (
            <div className="flex h-screen w-screen items-center justify-center bg-white-200">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-900"></div>
            </div>
        ) : (
            <SessionProvider>
                {children}
            </SessionProvider>
        )
    )
}