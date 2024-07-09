'use client'

import { useStateStore } from '@/context/stateStore';
import Image from 'next/image';
import React from 'react';

export const AccordionPage = ({panels, heights, openDefault, panelPoints, titles, parent}: {panels: JSX.Element[], heights: number[], openDefault: boolean, panelPoints: string[][], titles: string[], parent: string}) => {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
    const isLargeBreakpoint = useStateStore((state) => state.widthQuery) <= 1024 ? true : false;

    const defaultPanel = openDefault ? 'panel-1' : '';

    return (
        <Accordion defaultPanel={defaultPanel}>
            <div className={`flex flex-col justify-center items-center w-full space-y-2 mb-10`}>
            {panels.map((panel, index) => {
                const height = index === 0 ? heights[index] : index === 1 ? heights[index] : index === 2 ? heights[index] : index === 3 ? heights[index] : heights[0];
                const id = `panel-${index + 1}`;

                return (
                    <div className={`lg:py-3 md:w-4/5 lg:w-3/4 flex-col flex w-full h-full`} key={index} id={id} style={{maxHeight: '10000px'}}>
                        <AccordionItem toggle={id} id={id} name={id} className={`w-full`} panelPoints={panelPoints[index]} panelPointsIndex={index} parent={parent}>
                            {titles[index]}
                        </AccordionItem>
                        <AccordionPanel id={id} height={height}>
                            {panel}
                        </AccordionPanel>
                    </div>
            )})}
            </div>
        </Accordion>
    );
};

/* Logic */

const Context = React.createContext({selected: '', toggleItem: (id: string) => () => {}});

function Accordion({ children, defaultPanel }: { children: React.ReactNode; defaultPanel?: string }) {
    const [selected, setSelected] = React.useState(defaultPanel || '');
    const setAccordianSignal = useStateStore((state) => state.setAccordianSignal);

    const toggleItem = React.useCallback(
        (id: string) => () => {
        setSelected((prevState) => (prevState !== id ? id : ''));
        setAccordianSignal(id);
        },
        [setAccordianSignal],
    );
    return (
        <Context.Provider value={{ selected, toggleItem }}>
            {children}
        </Context.Provider>
    );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const style = {
    item: `block focus:outline-none`,
    panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600 h-full px-1`,
};

//${selected === toggle ? '' : 'rounded-b-md border-b delay-200'}

function AccordionItem({ toggle, children, className, panelPoints, panelPointsIndex, parent, id, name }: { toggle: string; children: React.ReactNode; className: string, panelPoints?: string[], panelPointsIndex?: number, parent: string, id: string, name: string}) {
    const { selected, toggleItem } = useAccordion();
    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;
    const imSize = isBreakpoint ? 100 : 150;
    const imageToUse = panelPointsIndex === 0 ? '/images/logoBG.png' : panelPointsIndex === 1 ? '/images/carlseaholmprofile.jpg' : '/images/whatcanidoforyou.jpg';
    return (
        panelPoints && panelPoints.length > 1  ?  
            (
                <div
                role="button"
                onClick={toggleItem(toggle)}
                className={`${style.item} ${className} flex flex-col justify-around w-full rounded-md transition-all duration-100 bg-gradient-to-r from-themeAcqua/40 from-1% to-themeWhite/80 to-99% shadow-lg`}
                id={id}
                >
                    <div className={`flex flex-row justify-around items-center w-full rounded-t-md bg-gradient-to-b from-inherit to-inherit/80 rounded-md backdrop-blur-sm`}>
                        <div className={`flex flex-col justify-center items-start w-1/3 text-black font-semibold h-full rounded-tl-md text-start pl-3`}>
                            {children}
                        </div>
                        <div className={`flex flex-col justify-center items-center text-black font-semibold h-full rounded-tr-md ${parent === 'about' ? 'py-2' : ''}`}>
                            {parent === 'services' ? (
                                <div className='flex flex-row justify-center items-center w-full h-full rounded-tr-md'>
                                    <ul className={`list-disc grid grid-cols-1 grid-rows-4 gap-1 lg:gap-2 rounded-tr-md h-full w-full m-4 pt-2`} style={{listStylePosition: 'outside'}}>
                                        {panelPoints?.map((point, index) => (
                                            <li className="text-xs font-normal flex-wrap mx-2 lg:text-sm lg:mx-4" key={index}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div style={{ position: 'relative', width: `${imSize}px`, height: `${imSize}px`}}>
                                    <Image src={imageToUse} alt={'carl seaholm'} layout='fill' objectFit='cover' className='rounded-full' priority sizes='auto' />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-end w-full space-x-2 border-t border-themeStone/20 py-2 px-3 backdrop-blur-sm rounded-b-md'>
                        <p className='text-xs font-normal'>{`More Details`}</p>
                        {selected === toggle ? <AngleUpIcon/> : <AngleDownIcon />}
                    </div>
                </div>
            ) : (
                <div
                    role="button"
                    onClick={toggleItem(toggle)}
                    className={`${style.item} ${className} flex flex-row justify-between items-start bg-themeWater/70 w-full text-black font-semibold p-2 rounded-md border-t border-x border-themeStone transition-all duration-100`} id={id}
                    >
                    {children}
                    <span className="float-right">
                    {selected === toggle ? <AngleUpIcon  /> : <AngleDownIcon  />}
                    </span>
                </div>
        )
    );
}

function AccordionPanel({ children, id, height }: { children: React.ReactNode; id: string, height: number}) {
    const { selected } = useAccordion();
    const ref = React.useRef<HTMLDivElement>(null);

    const inlineStyle =
        selected === id ? { height: height } : { height: 0 };

    return (
        <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
            {children}
        </div>
    );
}

const AngleUpIcon = () => (
  <svg
    fill='black'
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4"
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke="black"
    fill='black'
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4"
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);