import mongoose from "mongoose";

const schema = mongoose.Schema

const TokenSchema = new schema({
    accessToken: { type: String, required: true },
})

export const tokenModel = mongoose.model('Token', TokenSchema)