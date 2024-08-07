const MainChild = ({children}: {children: React.ReactNode}) => {

    return (
      <div className="flex flex-col rounded-md w-full h-full overflow-hidden">
        {children}
      </div>
    );
  };
export default MainChild;