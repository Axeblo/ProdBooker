import mongoose from "mongoose"

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChanned: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

export default mongoose.model("Subscriber", subscriberSchema);