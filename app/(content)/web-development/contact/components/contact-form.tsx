'use client'

import { TextInput, Textarea } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form";

export default function ContactForm({contactForm, Submit}: {
    contactForm: UseFormReturnType<{
        name: string;
        email: string;
        message: string;
    }, (values: {
        name: string;
        email: string;
        message: string;
    }) => {
        name: string;
        email: string;
        message: string;
    }>,
    Submit: () => Promise<void>
}) {

    return (
        <form onSubmit={contactForm.onSubmit(() => Submit())} className="flex flex-col justify-center items-center space-y-5 w-full h-[90%] bg-white/80 p-4 rounded-md mt-2">
            <p className="text-lg font-semibold underline text-themeStone">
                Submit your Name, Email, and Message below and I will get back to you as soon as possible.
            </p>
            <TextInput
                withAsterisk
                id="name"
                label="Name"
                placeholder="Your Name"
                className="w-full"
                {...contactForm.getInputProps('name')}
                key={contactForm.key('name')}
            />
            <TextInput
                withAsterisk
                id="email"
                label="Email"
                placeholder="Your Email"
                className="w-full"
                {...contactForm.getInputProps('email')}
                key={contactForm.key('email')}
            />
            <Textarea
                withAsterisk
                id="message"
                label="Message"
                placeholder="Your Message"
                autosize={true}
                minRows={6}
                className="w-full"
                {...contactForm.getInputProps('message')}
                key={contactForm.key('message')}
            />
            <div className="flex flex-row w-full justify-center">
                <button type="submit" className={`rounded-md py-1 px-4 text-base font-semibold ${contactForm.isDirty() ? 'bg-blue-400 hover:bg-blue-200 text-white outline-none cursor-pointer' : 'text-white bg-gray-300 outline-none cursor-none'}`} disabled={!contactForm.isDirty()}>
                    Submit
                </button>
            </div>
        </form>
    )
}