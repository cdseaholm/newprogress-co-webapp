// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { useState } from 'react';
import { ModalProvider } from '@/app/context/modal';
import ModalSignUp from '@/components/modals/signupModal';
import AlertModal from '@/components/modals/alerts/alertModal';
import { StateProvider } from './context/state';

export function Providers({children}: { children: React.ReactNode }) {

  const [signUpModal, setSignUpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlToUse, setUrlToUse] = useState('');

  //alertStates
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertParent, setAlertParent] = useState('');
  const [alertConfirm, setAlertConfirm] = useState(false);

  return (
    <StateProvider setLoading={setLoading} loading={loading} urlToUse={urlToUse} setUrlToUse={setUrlToUse}>
      <ModalProvider setSignUpModal={setSignUpModal} signUpModal={signUpModal} showAlert={showAlert} setShowAlert={setShowAlert} setAlertMessage={setAlertMessage} alertMessage={alertMessage} alertParent={alertParent} setAlertParent={setAlertParent} alertConfirm={alertConfirm} setAlertConfirm={setAlertConfirm}>
        <ModalSignUp />
        <AlertModal />
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </ModalProvider>
    </StateProvider>
  )
}