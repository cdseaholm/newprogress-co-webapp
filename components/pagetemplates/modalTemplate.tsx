export default function ModalTemplate({ children, subtitle }: { children: React.ReactNode, subtitle: string | null }) {
    return (
        <main style={{ minWidth: '15vh', minHeight: '15vh' }} className="flex flex-col w-full h-full">
            {subtitle && (
                <section className="w-full text-center flex-shrink-0">
                    {subtitle}
                </section>
            )}
            <div className="flex-1 min-h-0 overflow-hidden">
                {children}
            </div>
        </main>
    )
}