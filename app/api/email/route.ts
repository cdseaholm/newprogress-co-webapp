
import connectDB from '@/lib/mongodb';
import Message from '@/models/messageModel';
import { IMessageType } from '@/models/types/message';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_P,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_NP_EMAIL,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    cc: process.env.NEXT_PUBLIC_NP_EMAIL,
    subject: `New Message Submitted from ${name} via New Progress Website`,
    text: `You have received a new message from the contact form on your website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {

    await connectDB();

    const newMessage = await Message.create({
      name: name,
      email: email,
      message: message,
    }) as IMessageType

    if (!newMessage) {
      return NextResponse.json({ status: 500, message: "Error creating newMessage" });
    }

    await sendMailPromise();

    return NextResponse.json({ message: 'Email sent', status: 200 });

  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}