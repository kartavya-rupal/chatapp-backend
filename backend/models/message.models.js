import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: "Chat",
            required: true,
        },
        status: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                },
                isDelivered: {
                    type: Boolean,
                    default: false,
                },
                isRead: {
                    type: Boolean,
                    default: false,
                },
                readAt: Date
            }
        ]
    },
    {
        timestamps: true,
    }
);

export const Message = mongoose.model("Message", messageSchema);
