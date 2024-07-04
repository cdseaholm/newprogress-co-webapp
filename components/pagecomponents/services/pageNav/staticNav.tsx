'use client'

import {Button} from "@nextui-org/react";
import React from "react";
import { IconType } from "react-icons/lib";

export default function StaticNav({tabs, parent, handleClickedTab, currentSelection, icons}: {tabs: string[], parent: string, handleClickedTab: (index: number) => void, currentSelection: number, icons: JSX.Element[]}) {

    return (
        <div className="flex flex-col items-start justify-start my-3">
            {tabs.map((tab, index) => (
                <Button type="button" title={tab} variant='flat' className={`bg-transparent font-semi-bold text-base ${currentSelection === index ? 'underline font-bold text-themeStone hover:cursor-default' : 'hover:bg-themeAcqua'}`} key={index} onClick={() => handleClickedTab(index)} disabled={currentSelection === index ? true : false}>
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <div>{icons[index]}</div>
                        <div>{tab}</div>
                    </div>
                </Button>
            ))}
        </div>
    )
}