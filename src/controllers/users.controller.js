import { userModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { tokenModel } from "../models/token.js";

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

//update specific user
export const updateUser = async (req, res) => {
    try {
        var query = {'email': req.body.formerEmail};
        console.log('body', req.body.update);

        let updateThisUser = await userModel.findOneAndUpdate(query, req.body.update, {upsert: true});
        console.log(updateThisUser)

        res.status(200).json({ message: "User successfully updated" });
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to update user" });
    }
}

export const loginUser = async (req, res) => {
    try {
        //find user with provided email
        const loginUser = await userModel.findOne({ email: req.body.email });
        //check if user exists 
        if (!loginUser) {
            return res.status(404).json({ message: "User not found" })
        }
        //compare password to hash password
        const correctPassword = await bcrypt.compare(req.body.password, loginUser.password)
        //check if password is correct
        if (!correctPassword) {
            return res.status(401).json({ message: "Invalid password" })
        }
        //generate access token for user
        const token = jwt.sign({
            _id: loginUser._id,
            firstName: loginUser.firstName,
            lastName: loginUser.lastName,
            email: loginUser.email
        }, secretKey, { expiresIn: "7d" })
        // save token in database
        await tokenModel.create({ accessToken: token });
        //return response
        res.json({
            _id: loginUser._id,
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

//work on it
export const logoutUser = async (req, res) => {
    try {
        // wipe/delete token from database
        await tokenModel.deleteMany({ accessToken: req.token })
        //success message indicating the user has been logged out.
        res.status(200).json({ message: "User successfully logged out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to logout" });
    }
}
