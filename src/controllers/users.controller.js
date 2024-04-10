import { userModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const secretKey = "P@$$w0rd"

//add user
export const addUser = async (req, res) => {
    try {
        //check if user already exists
        //hash/encrypt user password
        const hash = await bcrypt.hash(req.body.password, saltRounds)


        const data = req.body
        data.password = hash
        const addUser = await userModel.create(data)
        res.json({
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            email: addUser.email
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to sign in user" });
    }
}


//get all users
export const getAllUsers = async (req, res) => {
    try {
        const data = req.body
        const getAllUsers = await userModel.find({})
        console.log(data)
        res.json(getAllUsers)

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to get all users" });
    }
}


//get specific user
export const getSpecificUser = async (req, res) => {
    try {
        const getSpecificUser = await userModel.findById(req.params.id)
        console.log(getSpecificUser)
        res.json(getSpecificUser)

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to get user" });
    }
}

export const loginUser = async (req, res) => {
    try {
        //find user with provided email
        const loginUser = await userModel.findOne({ email: req.body.email });
        //check if user exists 
        if (!loginUser) {
            return res.status(404).json({ message: "User not found"})
        }
        //compare password to hash password
        const correctPassword = await bcrypt.compare(req.body.password, loginUser.password)
        //check if password is correct
        if (!correctPassword) {
            return res.status(401).json({message: "Invalid password"})
        }
        //generate access token for user
        const token = jwt.sign({
            firstName: loginUser.firstName,
            lastName: loginUser.lastName,
            email: loginUser.email,
            password: loginUser.password
        }, secretKey, {expiresIn:"7d"})
        //return response
        res.json({
            accessToken: token,
            firstName: loginUser.firstName,
            lastName: loginUser.lastName,
            email: loginUser.email
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to login" });
    }
}

export const logoutUser = (req, res) => {
    try {
        //success message indicating the user has been logged out.
        res.status(200).json({ message: "User successfully logged out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to logout" });
    }
}
