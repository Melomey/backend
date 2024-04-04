import { requestModel } from "../models/request.js"

export const addRequest = async (req, res) => {
    try{
        const data = req.body
        const addRequest = await requestModel.create(data)
        console.log(data)
        res.send(addRequest)

    } catch (error) {
        console.log(error)
    }
}

export const findRequest = async (req, res) => {
    try{
        const data = req.body
        const findRequest = await studentModel.find(data)
        console.log(data)
        res.send(findRequest)

    } catch (error) {
        console.log(error)
    }
}