import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from '../routes/allroutes.js';

dotenv.config()
const PORT = process.env.PORT || 4002;

const mongoUri = process.env.MONGO_URI

const app = express();

app.use(express.json());
// use router 
app.use(router);

// Connecting mongoose
mongoose.connect(mongoUri).then(() => {
    console.log('Database connected!')
}).catch((error) => console.log(error))



app.listen(PORT,() => {
    console.log(`Badak App is Running on ${PORT}`);
})