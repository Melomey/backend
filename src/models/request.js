import mongoose from "mongoose";

const schema = mongoose.Schema

const RequestSchema = new schema ({
    fullName : {type: String, required: true},

    email : {type: String, required: true},

    certificateType : {type: String, required: true},

    university: {type: String, required: true},

    status: { type: String, enum: ['verified', 'not verified', 'denied'], default: 'not verified' }

})

export const requestModel = mongoose.model('Request', RequestSchema)