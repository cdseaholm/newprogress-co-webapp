'use client'

import { useModalStore } from '@/context/modalStore';

export default function InfoModal() {

    const infoModal = useModalStore((state) => state.infoModal);
    const setInfoModal = useModalStore((state) => state.setInfoModal);
    const info = useModalStore((state) => state.info);

    return (
        <>
        <div id="crud-modal" tabIndex={-1} aria-hidden={infoModal ? true : false} className={`${infoModal ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className={`md:text-lg font-semibold text-gray-900 dark:text-white`}>
                            {info.title}
                        </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={() => setInfoModal(false)}>
                                <svg className="w-3 h-3" aria-hidden={infoModal ? true : false} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 md:p-5 space-y-2'>
                        <p className='text-base md:text-large'>{info.price}</p>
                        <p className='text-sm md:text-base'>{info.explanation}</p>
                        <ul className=' list-disc text-xs md:text-sm w-4/5 space-y-2'>
                            {info.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
