import mongoose, { Model, Schema } from "mongoose";
import { IMessageType } from "./types/message";

export const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Message = (mongoose.models?.Message || mongoose.model<IMessageType>("Message", messageSchema)) as Model<IMessageType>;

export default Message;