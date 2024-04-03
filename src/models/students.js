import mongoose from "mongoose";

const schema = mongoose.Schema

const StudentSchema = new schema ({
    firstName : {type: String, required: true},

    lastName : {type: String, required: true},

    email : {type: String, required: true},

    password : {type: String, min: 8, required: true}

})

export const studentModel = mongoose.model('Student', StudentSchema)