'use client'

import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { FiMenu } from "react-icons/fi";
import React from "react";
import SocialButton from "@/components/buttons/socialIconButton";

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
        <div ref={ref}>
            <Dropdown backdrop="blur" isOpen={open}>
                <DropdownTrigger>
                    <Button variant='flat' className={`hover:underline bg-transparent font-medium px-0 min-w-4`} onClick={() => setOpen(!open)}>
                        <FiMenu size={21} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions" className="bg-stone-200 rounded-sm" closeOnSelect={true}>
                    <DropdownSection className="text-black hover:underline px-1 rounded-md flex-wrap rounded-md">
                    {tabs.map((tab, index) => (
                        <DropdownItem key={index} value={tab} onClick={(e) => {
                            e.preventDefault();
                            handleClickedTab(index)
                        }} textValue={tab}>
                            <Button type="button" title={tab} variant='flat' className={`bg-transparent font-semi-bold text-base ${currentSelection === index ? 'underline font-bold text-themeStone hover:cursor-default' : ''}`} onClick={(e) => {
                                e.preventDefault();
                                handleClickedTab(index)
                            }} disabled={currentSelection === index ? true : false}>
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
                    </DropdownSection>
                    <DropdownItem className="text-black hover:underline px-1 rounded-md flex-wrap rounded-md" textValue="contact">
                        <div className="flex flex-row items-center justify-center space-x-2 text-sm md:text-base">
                            <SocialButton networkName='linkedin' parent={true} />
                            <div className='md:mx-1 mx-0'>|</div>
                            <SocialButton networkName='github' parent={true} />
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}