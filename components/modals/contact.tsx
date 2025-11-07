'use client'

import { FC, useState } from "react";
import { useModalStore } from "@/context/modalStore";
import { sendEmail } from "@/utils/send-email";
import { useForm } from "@mantine/form";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { LoadingSpinner } from "../utility/spinner";
import ModalTemplate from "../pagetemplates/modalTemplate";

const Contact: FC = () => {

    const contactForm = useForm({
        mode: 'uncontrolled',
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

    const modalOpen = useModalStore(state => state.modalOpen);
    const setModalOpen = useModalStore(state => state.setModalOpen);
    const [loading, setLoading] = useState<boolean>(false);

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
            setModalOpen('');
        }
    }

    const handleCancel = () => {
        contactForm.setValues({
            name: '',
            email: '',
            message: '',
        })
        contactForm.clearErrors();
        contactForm.resetDirty();
        setModalOpen('');
        setLoading(false);
    }

    return (
        <Modal
            opened={modalOpen === 'contact'}
            onClose={handleCancel}
            title="New cycle"
            size={'xl'}
            centered
            overlayProps={{
                backgroundOpacity: 0.55, blur: 3, className: 'drop-shadow-xl'
            }}
            lockScroll={true}
            styles={{
                body: { height: '70vh', display: 'flex', flexDirection: 'column' },
                content: { height: 'auto' }
            }}
        >
            <ModalTemplate subtitle={null}>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <form onSubmit={contactForm.onSubmit(() => Submit())} className="flex flex-col justify-start items-start space-y-5 w-full">
                        <TextInput
                            id="name"
                            label="Name"
                            placeholder="Your Name"
                            className="w-full"
                            {...contactForm.getInputProps('name')}
                            key={'name'}
                        />
                        <TextInput
                            id="email"
                            label="Email"
                            placeholder="Your Email"
                            className="w-full"
                            {...contactForm.getInputProps('email')}
                            key={'email'}
                        />
                        <Textarea
                            id="message"
                            label="Message"
                            placeholder="Your Message"
                            minRows={6}
                            className="w-full"
                            {...contactForm.getInputProps('message')}
                            key={'message'}
                        />
                        <div className="flex flex-row w-full justify-center">
                            <button type="button" onClick={handleCancel} className='mr-4 hover:shadow-form rounded-md bg-gray-500 py-1 px-4 text-base font-semibold text-white outline-none'>
                                Cancel
                            </button>
                            <button className='hover:shadow-form rounded-md bg-primary-500 py-1 px-4 text-base font-semibold text-white outline-none'>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </ModalTemplate>
        </Modal>
    );
}

export default Contact;
