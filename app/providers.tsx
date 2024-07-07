// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import ModalSignUp from '@/components/modals/signupModal';
import AlertModal from '@/components/modals/alerts/alertModal';
import Contact from '@/components/modals/contact';
import InfoModal from '@/components/modals/infoModal';

export function Providers({children}: { children: React.ReactNode }) {

  return (
    <>
      <ModalSignUp />
      <AlertModal />
      <Contact />
      <InfoModal />
      <NextUIProvider style={{height: '100%', width: '100%', overflow: 'hidden'}}>
        {children}
      </NextUIProvider>
    </>
  )
}