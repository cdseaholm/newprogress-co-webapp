import mongoose, { Schema, models } from "mongoose";

const waitlisterSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Waitlister = models.Waitlister || mongoose.model("Waitlister", waitlisterSchema);

export default Waitlister;