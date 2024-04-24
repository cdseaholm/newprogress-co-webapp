'use client'

import React, { createContext, useContext } from 'react';

type ContextType = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    urlToUse: string;
    setUrlToUse: React.Dispatch<React.SetStateAction<string>>;
};

const initialContext: ContextType = {
    setLoading: () => {},
    loading: false,
    urlToUse: '',
    setUrlToUse: () => {},
};

const StateContext = createContext(initialContext);

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children, setLoading, loading, urlToUse, setUrlToUse }: React.PropsWithChildren<{ 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    urlToUse: string;
    setUrlToUse: React.Dispatch<React.SetStateAction<string>>;
}>) => {

    const value = {
        setLoading,
        loading,
        urlToUse,
        setUrlToUse,
    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
}