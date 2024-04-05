import mongoose from "mongoose";

const schema = mongoose.Schema

const RequestSchema = new schema ({
    fullName : {type: String, required: true},

    email : {type: String, required: true},

    certificateType : {type: String, required: true},

    // properties: {
    //     status: {
    //       type: string,
    //       enum: ["verified", "not verified", "denied"],
    //       default: not verified
    //     }
    //   },

    university: {type: String, required: true}

})

export const requestModel = mongoose.model('Request', RequestSchema)