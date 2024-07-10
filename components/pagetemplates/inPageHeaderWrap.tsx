'use client'

export default function InPageHeaderWrap({children}: {children: React.ReactNode}) {

  return (
    <div className="flex flex-col justify-start items-center" style={{overflow: 'hidden', width: '95%', height: '95%'}}>
      {children}
    </div>
  );
};