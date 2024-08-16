const MainChild = ({children}: {children: React.ReactNode}) => {

    return (
      <div className="flex flex-col rounded-md w-full h-full overflow-hidden pl-2 pb-2">
        {children}
      </div>
    );
  };
export default MainChild;