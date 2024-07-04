'use client'

import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import React from "react";
import { useModalStore } from "@/context/modalStore";

export default function DropDownNav({ open, setOpen, tabs, handleClickedTab, parent, currentSelection, icons }: { open: boolean, setOpen: (open: boolean) => void, tabs: string[], handleClickedTab: (index: number) => void, parent: string, currentSelection: number, icons: JSX.Element[]}) {

    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleOutsideClick = (event: { target: any }) => {
        if (open && !ref.current?.contains(event.target as HTMLDivElement)) {
          setOpen(false);
        }
      };
      window.addEventListener('click', handleOutsideClick, true);
      return () => window.removeEventListener('click', handleOutsideClick, true);
    }, [ref, setOpen, open]);

    return (
        <div className="flex flex-row justify-between items-center w-full px-10 py-1" ref={ref}>
            <Dropdown backdrop="blur" isOpen={open}>
                <DropdownTrigger>
                    <Button variant='flat' className={`hover:underline bg-transparent font-medium px-0 min-w-4`} onClick={() => setOpen(!open)}>
                        <FiMenu size={20} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions" className="bg-stone-200 rounded-sm" closeOnSelect={true}>
                    {tabs.map((tab, index) => (
                        <DropdownItem key={index} value={tab}>
                            <Button type="button" title={tab} variant='flat' className={`bg-transparent font-semi-bold text-base ${currentSelection === index ? 'underline font-bold text-themeStone hover:cursor-default' : 'hover:bg-themeAcqua'}`} onClick={() => handleClickedTab(index)} disabled={currentSelection === index ? true : false}>
                                <div className="flex flex-row items-center justify-center space-x-2">
                                    <div>
                                        {icons[index]}
                                    </div>
                                    <div>
                                        {tab}
                                    </div>
                                </div>
                            </Button>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <p className="text-gray-900 font-semibold text-lg">
                {tabs[currentSelection]}
            </p>
      </div>
    )
}