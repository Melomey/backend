import {userModel} from "../models/users.js";


//add user
export const addUser = async (req, res) => {
    try{
        const data = req.body
        const addUser = await userModel.create(data)
        console.log(data)
        res.json(addUser)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Failed to sign in student" });
    }
}


//get all users
export const getAllUser = async (req, res) => {
    try{
        const data = req.body
        const findUser = await userModel.find({})
        console.log(data)
        res.json(findUser)

    } catch (error) {
        console.log(error)
        res.status(404).send({ message: "Failed to sign in student" });
    }
}


//get specific user
export const getSpecificUser = async (req, res) => {
    try{
        const getSpecificUser = await userModel.findById(req.params.id)
        console.log(data)
        res.json(getSpecificUser)

    } catch (error) {
        console.log(error)
        res.status(404).send({ message: "Failed to sign in student" });
    }
}