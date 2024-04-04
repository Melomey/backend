import {studentModel} from "../models/students.js";

export const addStudent = async (req, res) => {
    try{
        const data = req.body
        const addStudent = await studentModel.create(data)
        console.log(data)
        res.send(addStudent)

    } catch (error) {
        console.log(error)
    }
}

export const findStudent = async (req, res) => {
    try{
        const data = req.body
        const findStudent = await studentModel.find(data)
        console.log(data)
        res.send(findStudent)

    } catch (error) {
        console.log(error)
    }
}