'use client'

import { useStateStore } from "@/context/stateStore";

export default function InPageHeaderWrap({children}: {children: React.ReactNode}) {

  const width = useStateStore(state => state.mainChildWidth);
  const height = useStateStore(state => state.mainChildHeight);

  return (
    <div className="flex flex-col justify-start items-center" style={{overflow: 'hidden', width: width, height: height}}>
      {children}
    </div>
  );
};