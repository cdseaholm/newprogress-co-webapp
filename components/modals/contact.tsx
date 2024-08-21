'use client'

import { FC, useState } from "react";
import { useModalStore } from "@/context/modalStore";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const contactFormSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    name: z.string().min(1, {
        message: "Please enter your name.",
    }),
    message: z.string().min(1, {
      message: "Please enter a message.",
    }),
});

const Contact: FC = () => {
    const { register, handleSubmit, formState: {errors} } = 
        useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
    });

    const modalOpen = useModalStore(state => state.modalOpen);
    const setModalOpen = useModalStore(state => state.setModalOpen);
    const [loading, setLoading] = useState<boolean>(false);

    const toContact = "To Contact:";

    async function onSubmit(data: z.infer<typeof contactFormSchema>) {
        setLoading(true);
        const result = await sendEmail(data);
        setLoading(false);
        if (result) {
            setModalOpen('');
        }
    }

    return (
        <div id="crud-modal" tabIndex={-1} aria-hidden={modalOpen === 'contact' ? true : false} className={`${modalOpen === 'contact' ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-full max-h-full backdrop-blur-sm`}>
            <div className={`relative p-4 ${modalOpen === 'calendar' ? '' : 'w-full max-w-md'} max-h-full`} style={{width: `${modalOpen === 'calendar' ? '95%' : ''}`}}>
                <div className={`relative bg-slate-200 rounded-lg shadow`}>
                    <div className={`flex items-center justify-between space-x-4 p-2 border-b rounded-t border-gray-400 w-full`}>
                        <h3 className={`text-lg font-semibold text-black`}>
                            {toContact}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" data-modal-toggle="crud-modal" onClick={() => {setModalOpen('')}}>
                            <svg className="w-3 h-3" aria-hidden={modalOpen === 'contact' ? true : false} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="w-10 h-10 border-2 border-t-primary-500 rounded-full animate-spin"/>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-start items-center space-y-5 p-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start space-y-5 w-full">
                                <div className='mb-5 w-full'>
                                    <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
                                        Full Name
                                    </label>
                                    <input type='text' id="name" placeholder='Full Name' autoComplete='name' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor='email' className='mb-3 block text-base font-medium text-black' >
                                        Email Address
                                    </label>
                                    <input type='email' id="email" autoComplete='email' placeholder='example@domain.com' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                                </div>
                                <div className='mb-5 w-full'>
                                    <label htmlFor='message' className='mb-3 block text-base font-medium text-black' >
                                        Message
                                    </label>
                                    <textarea rows={4} id="message" placeholder='Type your message' className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                        {...register('message', { required: true })}
                                    />
                                    {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
                                </div>
                                <div className="flex flex-row w-full justify-center">
                                    <button className='hover:shadow-form rounded-md bg-primary-500 py-1 px-4 text-base font-semibold text-white outline-none'>
                                    Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
