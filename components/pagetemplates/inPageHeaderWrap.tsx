'use client'

export default function InPageHeaderWrap({children}: {children: React.ReactNode}) {

  return (
    <div className="flex flex-col justify-start items-center h-full w-full" style={{overflow: 'hidden'}}>
      {children}
    </div>
  );
};