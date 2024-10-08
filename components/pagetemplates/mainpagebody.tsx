'use client'

const MainPageBody = ({children}: {children: React.ReactNode}) => {

    return (
      <div className={`overflow-hidden h-full w-full`}>
          {children}
      </div>
    );
  };
  export default MainPageBody;