'use client'

import { useStateStore } from '@/context/stateStore';
import React from 'react';

export const AccordionPage = ({panels, panelTitles, heights}: {panels: JSX.Element[], panelTitles: string[][], heights: number[]}) => {

    const isBreakpoint = useStateStore((state) => state.widthQuery) <= 768 ? true : false;

    const defaultPanel = panelTitles[0].length === 1 ? 'panel-1' : '';

    return (
        <Accordion defaultPanel={defaultPanel}>
            {panels.map((panel, index) => {
                
                const height = index === 0 ? heights[index] : index === 1 ? heights[index] : index === 2 ? heights[index] : index === 3 ? heights[index] : heights[0];

                return (
                <div className='flex-col flex' key={index} id={`panel-${index + 1}`} style={{maxHeight: '10000px', width: isBreakpoint ? '98%' : '90%'}}>
                    <AccordionItem toggle={`panel-${index + 1}`} className={`bg-themeWater/70 rounded-md text-black ${panelTitles[index].length === 1 ? '' : 'flex flex-row justify-between w-full space-x-5'} font-semibold`}>
                        {panelTitles[index].length === 1 ? (
                            `${panelTitles[index][0]}`
                        ) : (
                            <div className='flex flex-row w-full justify-between items-center'>
                                <p>
                                    {panelTitles[index][0]}
                                </p>
                                <p>
                                    {panelTitles[index][1]}
                                </p>
                            </div>
                        )}
                    </AccordionItem>
                    <AccordionPanel id={`panel-${index + 1}`} height={height}>
                        {panel}
                    </AccordionPanel>
                </div>
            )})}
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
    item: `block focus:outline-none border-b my-1 p-3 w-full`,
    panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600 h-full`,
};

function AccordionItem({ toggle, children, className }: { toggle: string; children: React.ReactNode; className: string }) {
    const { selected, toggleItem } = useAccordion();
    return (
        <div
        role="button"
        onClick={toggleItem(toggle)}
        className={`${style.item} ${className}`}
        >
        {children}
        <span className="float-right">
            {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
        </span>
        </div>
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
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);