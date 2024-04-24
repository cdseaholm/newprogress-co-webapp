'use client'

import React, { createContext, useContext } from 'react';

type ContextType = {
    setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
    signUpModal: boolean;
    showAlert: boolean | null;
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
    alertMessage: string | null;
    alertParent: string | null;
    setAlertParent: React.Dispatch<React.SetStateAction<string>>;
    alertConfirm: boolean | null;
    setAlertConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext: ContextType = {
    setSignUpModal: () => {},
    signUpModal: false,
    showAlert: false,
    setShowAlert: () => {},
    setAlertMessage: () => {},
    alertMessage: '',
    alertParent: '',
    setAlertParent: () => {},
    alertConfirm: false,
    setAlertConfirm: () => {},
};

const ModalContext = createContext(initialContext);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children, setSignUpModal, signUpModal, showAlert, setShowAlert, setAlertMessage, alertMessage, alertParent, setAlertParent, alertConfirm, setAlertConfirm, }: React.PropsWithChildren<{ 
    setSignUpModal: React.Dispatch<React.SetStateAction<boolean>>; signUpModal: boolean; showAlert: boolean;
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
    alertMessage: string;
    alertParent: string;
    setAlertParent: React.Dispatch<React.SetStateAction<string>>
    alertConfirm: boolean;
    setAlertConfirm: React.Dispatch<React.SetStateAction<boolean>>; }>) => {

    const value = {
        setSignUpModal,
        signUpModal,
        showAlert,
        setShowAlert,
        setAlertMessage,
        alertMessage,
        alertParent,
        setAlertParent,
        alertConfirm,
        setAlertConfirm,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};