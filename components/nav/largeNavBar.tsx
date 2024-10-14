import { useStateStore } from "@/context/stateStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiClipboard, FiDollarSign, FiMail, FiBookOpen, FiMic } from "react-icons/fi";
import Image from "next/image";
import StaticNav from "../pagecomponents/services/pageNav/staticNav";

export default function LargeNavBar() {
    const pathname = usePathname();
  const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

  const setCurrentSelection = useStateStore((state) => state.setDevCurrentSelection);
  const currentSelection = useStateStore((state) => state.devCurrentSelection);

  const tabs = pathname === '/npapps' ? ['Harbor', 'Financr', 'Trackr', 'Gamr'] : ['Services', 'Pricing', 'About', 'Testimonials', 'Contact'];

  const handleClickedTab = (index: number) => {
    setCurrentSelection(index);
  }

  //Taking out for now {/**<FiFile key={'templates'}/>, */}

  const icons = pathname === '/npapps' ? [] : [
    <FiClipboard key={'clipboard'}  />,
    <FiDollarSign key={'pricing'}/>,
    <FiBookOpen key={'about'}/>,
    <FiMic key={'testimonials'}/>,
    <FiMail key={'contact'}/>
  ];

  const imSize = isBreakpoint ? 65 : 100;
  
  return (
    pathname === '/' ?
    (
      null
    ) : (
        <div className={`flex flex-row justify-between items-center w-full h-full px-5 py-3 border-b border-themeStone/20`}>
            <div className={`flex flex-col justify-center items-start w-full px-6`}>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <Link href='/'>
                        <div className='hover:bg-themeAcqua bg-transparent cursor-pointer rounded-full m-1' style={{ width: `${imSize - 20}px`, height: `${imSize - 20}px`, margin: 'auto'}}>
                            <Image src='/images/logoBG.png' alt='New Progress Co Logo' className='rounded-full' priority sizes='auto' width={imSize} height={imSize} />
                        </div>
                    </Link>
                    <div className='mx-2'>|</div>
                        {/**<Link className={` hover:text-themeStone/80 rounded-lg p-1 font-semibold ${pathname === '/npapps' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs hover:md:text-sm'}`} href={`/npapps`}>
                            <p>NP Apps</p>
                        </Link>
                        <div className='mx-2'>|</div>
                        */}
                        <Link className={` hover:text-themeStone/80 rounded-lg p-1 font-semibold ${pathname === '/webdevelopment' ? 'underline font-bold text-themeStone hover:cursor-default hover:text-themeStone/80 md:text-xs' : 'hover:bg-themeAcqua hover:text-black/70 md:text-xs hover:md:text-sm'}`} href={`/webdevelopment`}>
                            <p>Web Development</p>
                        </Link>
                    </div>
                </div>
                <div className={`flex flex-col justify-center items-end w-full px-6`}>
                    <div className='flex flex-row items-center justify-between space-x-2'>
                        {tabs.map((tab, index) => (
                            <div key={index}>
                                <StaticNav tab={tab} index={index} disabled={currentSelection === index ? true : false} handleClickedTab={handleClickedTab} icons={icons} />
                            </div>
                        ))}
                    </div>
            </div>
      </div>
    )
  );
}