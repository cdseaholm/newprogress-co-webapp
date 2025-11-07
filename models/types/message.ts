import { Document } from "mongoose";

export interface IMessageType extends Document {
    _id: string;
    name: string;
    email: string;
    message: string;
}