'use client'

import {Button} from "@nextui-org/react";
import React from "react";

export default function StaticNav({tab, index, disabled, handleClickedTab, icons}: {tab: string, index: number, disabled: boolean, handleClickedTab: (index: number) => void, icons: JSX.Element[]}) {
    

    return (
        <div className="tooltip-container" onClick={() => handleClickedTab(index)} key={index} id={`staticIcon${index}`}>
            <Button type='button' variant='flat' className={`min-w-6 px-3 py-1 ${disabled ? 'cursor-default underline bg-themeAcqua/40' : 'hover:bg-themeAcqua bg-transparent'}`} isDisabled={disabled} onClick={() => handleClickedTab(index)}>
                    {icons[index]}
            </Button>
            <span className="tooltip-text text-xs">
                {tab}
            </span>
        </div>
    )
}