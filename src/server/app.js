import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const mongoUri = process.env.MONGO_URI

const app = express()

app.use(express.json())
// use router 

const port = process.env.PORT || 4002;
// const mongoURI = process.env.MONGO_URI



app.listen(port,() => {
    console.log(`Express App is Running on ${port}`);
})