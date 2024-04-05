import { requestModel } from "../models/request.js"


//add requests
export const addRequest = async (req, res) => {
    try{
        const data = req.body
        const addRequest = await requestModel.create(data)
        console.log(data)
        res.json(addRequest)

    } catch (error) {
        console.log(error)
        res.status(404).send({ message: "Failed to sign in student" });
    }
}


//get all requests
export const findRequest = async (req, res) => {
    try{
        const data = req.body
        const findRequest = await requestModel.find(data)
        console.log(data)
        res.json(findRequest)

    } catch (error) {
        console.log(error)
        res.status(404).send({ message: "Failed to sign in student" });
    }
}

//get a specific request
export const getSpecificRequest = async (req, res) => {
    try{
        
        const getSpecificRequest = await requestModel.findById(req.params.id)
        console.log(data)
        res.json(getSpecificRequest)

    } catch (error) {
        console.log(error)
        res.status(404).send({ message: "Failed to sign in student" });
    }
}