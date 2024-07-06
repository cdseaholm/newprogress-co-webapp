'use client'

import React, { useLayoutEffect, useState, useRef } from "react";

export function usePanelHeight(ref: React.RefObject<HTMLDivElement>) {
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, [ref]);

    return height;
}