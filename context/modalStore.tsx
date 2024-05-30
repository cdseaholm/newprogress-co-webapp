import { create } from 'zustand';

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
}));