'use client'

import { LoadingSpinner } from "@/components/utility/spinner";
import { sendEmail } from "@/utils/send-email";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ContactForm from "./components/contact-form";
import { useStateStore } from "@/context/stateStore";

export default function ContactComponent() {

    const contactForm = useForm({
        mode: 'controlled',
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: {
            name: (value: string) => value.length < 1 ? 'Please enter your name.' : null,
            email: (value: string) => /^\S+@\S+$/.test(value) ? null : 'Please enter a valid email address.',
            message: (value: string) => value.length < 1 ? 'Please enter a message.' : null,
        }
    });

    const [loading, setLoading] = useState<boolean>(false);
    const globalLoading = useStateStore((state) => state.loading);
    const setGlobalLoading = useStateStore((state) => state.setLoading);

    async function Submit() {
        setLoading(true);
        const data = contactForm.values;
        const { errors } = contactForm.validate();
        if (errors.name || errors.email || errors.message) {
            setLoading(false);
            return;
        }
        const result = await sendEmail(data);
        setLoading(false);
        if (result) {
            toast.success('Message sent successfully!');
            contactForm.setValues({
                name: '',
                email: '',
                message: '',
            })
            contactForm.clearErrors();
            contactForm.resetDirty();
        }
    }

    // const handleCancel = () => {
    //     contactForm.setValues({
    //         name: '',
    //         email: '',
    //         message: '',
    //     })
    //     contactForm.clearErrors();
    //     contactForm.resetDirty();
    //     setLoading(false);
    // }

    useEffect(() => {
        if (globalLoading) {
            setGlobalLoading(false);
        }
    }, [globalLoading, setGlobalLoading]);

    return (

        loading ? (
            <LoadingSpinner />
        ) : (
            <ContactForm contactForm={contactForm} Submit={Submit} />
        )
    );
}


// 'use client'

// import SocialButton from "@/components/buttons/socialIconButton";
// import { useModalStore } from "@/context/modalStore";
// import { useStateStore } from "@/context/stateStore";
// import React, { useEffect } from "react";

// export default function ContactComponent() {

//     const setOpenModal = useModalStore((state) => state.setModalOpen);
//     const isLargeBreakpoint = useStateStore((state) => state.widthQuery) > 1024 ? true : false;
//     const globalLoading = useStateStore((state) => state.loading);
//     const setGlobalLoading = useStateStore((state) => state.setLoading);


//

//     return (
//         <div className="flex flex-col justify-start items-center rounded-md text-center scrollbar-thin scrollbar-webkit h-full w-full p-2 space-y-12 md:space-y-16" style={{ overflow: 'auto' }}>
//             <div className="w-full" style={{ minHeight: isLargeBreakpoint ? '8%' : '12%' }} />
//             <div className="flex flex-row items-center justify-center text-sm md:text-base">
//                 <div className="flex flex-col items-center justify-center">
//                     <h2 className="font-bold underline text-xl md:text-2xl">
//                         {`To Contact:`}
//                     </h2>
//                     <p className="text-xs md:text-sm">Serious Inquries Only</p>
//                 </div>
//             </div>
//             <div className="flex flex-row items-center justify-center text-sm md:text-base">
//                 <div className="flex flex-col items-center justify-center">
//                     <h3 className="font-semibold text-base md:text-lg lg:text-xl italic">
//                         {`Email:`}
//                     </h3>
//                     <p className="text-base md:text-lg text-themeWater hover:themeAcqua hover:text-stone">
//                         <a href="mailto:cdseaholm@gmail.com">
//                             {`cdseaholm@gmail.com`}
//                         </a>
//                     </p>
//                 </div>
//             </div>
//             <div className="flex flex-row items-center justify-center text-sm md:text-base">
//                 <div className="flex flex-col items-center justify-center">
//                     <h3 className='text-start font-semibold text-base md:text-lg lg:text-xl italic'>
//                         {`Socials:`}
//                     </h3>
//                     <div className='flex flex-row items-center justify-center space-x-4 text-sm md:text-base'>
//                         <div className='flex flex-row items-center justify-center space-x-2'>
//                             <SocialButton networkName='linkedin' parent={true} />
//                             <div className='md:mx-1 mx-0'>
//                                 |
//                             </div>
//                             <SocialButton networkName="instagram" parent={true} />
//                             <div className='md:mx-1 mx-0'>
//                                 |
//                             </div>
//                             <SocialButton networkName='github' parent={true} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button type='button' onClick={() => setOpenModal('contact')} className="bg-[#8FC1E3] hover:bg-[#31708E] text-base md:text-lg p-2 rounded-md">
//                 Or fill out this form
//             </button>
//         </div>
//     );
// }