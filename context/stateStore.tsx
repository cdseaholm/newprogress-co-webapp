import { create } from 'zustand';

interface StateStore {
    urlToUse: string;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    widthQuery: number;
    setWidthQuery: (width: number) => void;
    heightQuery: number;
    setHeightQuery: (height: number) => void;
    accordianSignal: string;
    setAccordianSignal: (signal: string) => void;
    panelHeights: number[];
    setPanelHeights: (heights: number[]) => void;
    devCurrentSelection: number;
    setDevCurrentSelection: (index: number) => void;
}

export const useStateStore = create<StateStore>((set) => ({
    urlToUse: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_BASE_URL !== undefined && process.env.NEXT_PUBLIC_BASE_URL !== '' && process.env.NEXT_PUBLIC_BASE_URL !== null ? process.env.NEXT_PUBLIC_BASE_URL
    : 
    process.env.NODE_ENV === 'production' && process.env. NEXT_PUBLIC_BASE_LIVEURL !== null && process.env.NEXT_PUBLIC_BASE_LIVEURL !== '' && process.env.NEXT_PUBLIC_BASE_LIVEURL !== undefined ? process.env.NEXT_PUBLIC_BASE_LIVEURL 
    : '',
    loading: false,
    setLoading: (loading) => set({loading}),
    widthQuery: 0,
    setWidthQuery: (width) => set({ widthQuery: width }),
    heightQuery: 0,
    setHeightQuery: (height) => set({heightQuery: height}),
    accordianSignal: '1',
    setAccordianSignal: (signal) => set({accordianSignal: signal}),
    panelHeights: [],
    setPanelHeights: (heights) => set({panelHeights: heights}),
    devCurrentSelection: 0,
    setDevCurrentSelection: (index) => set({devCurrentSelection: index})
}));