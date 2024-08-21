import { contactFormSchema } from '@/components/modals/contact';
import { z } from 'zod';

export async function sendEmail(data: z.infer<typeof contactFormSchema>) {
    const apiEndpoint = '/api/email';

        return fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(true);
            } else {
                console.error('Error:', response);
                return Promise.resolve(false);
            }
        })
        .catch((err) => {
            console.error(err);
            return Promise.resolve(false);
        });
}