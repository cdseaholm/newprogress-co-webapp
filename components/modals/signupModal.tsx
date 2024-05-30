'use client'

import { useModalStore } from '@/context/modalStore';
import { useStateStore } from '@/context/stateStore';



export default function ModalSignUp() {

    const urlToUse = useStateStore((state) => state.urlToUse);
    const setSignUpModal = useModalStore((state) => state.setSignUpModal);
    const setAlertMessage = useModalStore((state) => state.setAlertMessage);
    const setShowAlert = useModalStore((state) => state.setShowAlert);
    const setAlertConfirm = useModalStore((state) => state.setAlertConfirm);
    const signUpModal = useModalStore((state) => state.signUpModal);

    const handleWaitlist = async (event: React.FormEvent<HTMLFormElement>) => {
        
        console.log('handleSubmit function called');
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const sub = await fetch(`${urlToUse}/api/waitlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).catch(e => {
            console.error('Fetch error:', e);
        });
        
        console.log('tryLogin', sub);
    
        if (sub.status === 400 || sub.status === 401 || sub.status === 500) {
            setAlertMessage(sub.error);
            setShowAlert(true);
        } else {
            setAlertMessage('You have been added to the waitlist!');
            setShowAlert(true);
            setSignUpModal(false);
        }
    }

    return (
        <>
        <div id="crud-modal" tabIndex={-1} aria-hidden="true" className={`${signUpModal ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className={`md:text-lg font-semibold text-gray-900 dark:text-white`}>
                            Join the Waitlist
                        </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={() => setSignUpModal(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                    </div>
                    <form id="modalWaitlistForm" className="p-4 md:p-5" onSubmit={handleWaitlist}>
                        <div className="grid gap-4 mb-6 grid-cols-2">
                            <label htmlFor="modalWaitEmail" className={`block my-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white`}>Email*</label>
                            <input type="email" name="modalWaitEmail" id="modalWaitEmail" autoComplete='email' className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-xs md:text-sm`} placeholder="Email" required/>

                            <label htmlFor="modalWaitName" className={`block my-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white`}>Name</label>
                            <input type="Name" name="modalWaitName" id="modalWaitName" autoComplete='given-name' className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-xs md:text-sm`} placeholder="Name"/>
                        </div>
                        <button type="submit" className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                            Join
                        </button>
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}
