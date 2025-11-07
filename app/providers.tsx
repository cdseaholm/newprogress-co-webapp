// app/providers.tsx
'use client'

import ModalSignUp from '@/components/modals/signupModal';
import AlertModal from '@/components/modals/alerts/alertModal';
import Contact from '@/components/modals/contact';
import InfoModal from '@/components/modals/infoModal';
//import { Session } from 'next-auth';

//{ session, handleUpdate }: { session: Session | null, handleUpdate: () => Promise<void> }

export default function ModalProvider() {
  
  return (
    <>
      <ModalSignUp />
      <AlertModal />
      <Contact />
      <InfoModal />
    </>
  )
}