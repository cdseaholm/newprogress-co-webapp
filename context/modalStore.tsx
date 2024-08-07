import { create } from 'zustand';

type infoType = {
    title: string;
    price: string;
    explanation: string;
    details: string[];
}

interface ModalStore {
    setSignUpModal: (signUpModal: boolean) => void;
    signUpModal: boolean;
    showAlert: boolean;
    setShowAlert: (showAlert: boolean) => void;
    setAlertMessage: (alertMessage: string) => void;
    alertMessage: string;
    alertParent: string;
    setAlertParent: (alertParent: string) => void;
    alertConfirm: boolean;
    setAlertConfirm: (alertConfirm: boolean) => void;
    modalOpen: string;
    setModalOpen: (modalOpen: string) => void;
    setInfoModal: (infoModal: boolean) => void;
    infoModal: boolean;
    info: infoType;
    setInfo: (info: infoType) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    setSignUpModal: (signUpModal) => set({signUpModal}),
    signUpModal: false,
    showAlert: false,
    setShowAlert: (showAlert) => set({showAlert}),
    setAlertMessage: (alertMessage) => set({alertMessage}),
    alertMessage: '',
    alertParent: '',
    setAlertParent: (alertParent) => set({alertParent}),
    alertConfirm: false,
    setAlertConfirm: (alertConfirm) => set({alertConfirm}),
    modalOpen: '',
    setModalOpen: (modalOpen) => set({modalOpen}),
    setInfoModal: (infoModal) => set({infoModal}),
    infoModal: false,
    info: {
        title: '',
        price: '',
        explanation: '',
        details: []
    },
    setInfo: (info) => set({info})
}));